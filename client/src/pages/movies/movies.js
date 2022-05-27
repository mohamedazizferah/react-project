import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Pagination } from "@mui/material";
import React from "react";
import "./movies.css";
import Card from "../../components/card/card";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
function Movies(props) {
  var content = props.props;
  const user = JSON.parse(localStorage.getItem("user"));

  let { genre } = useParams();
  let { query } = useParams();
  const favorites = user?.favorites;
  console.log("user", favorites);
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const pages = Math.ceil(content.length / 20);
  const pathname = window.location.pathname;
  const a = pathname.includes("Genre");
  const b = pathname.includes("Search");
  const c = pathname.includes("favorites");
  let arr = [];
  a === true ? (
    (content = content.filter((x) => x?.genre.find((i) => i === genre)))
  ) : (
    <></>
  );
  b === true ? (
    (content = content.filter((x) => x.title.toLowerCase().includes(query)))
  ) : (
    <></>
  );
  c === true ? (
    (content = content.filter(({ _id }) => favorites.includes(_id)))
  ) : (
    <></>
  );

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="movies">
        <div className="movies_list">
          {content.slice((page - 1) * 20, page * 20).map((x) => (
            <Card content={x} />
          ))}
        </div>
        <div className="pagination">
          <Pagination
            count={pages}
            page={page}
            onChange={handleChange}
            color="error"
            size="large"
            showFirstButton
            showLastButton
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
export default Movies;
