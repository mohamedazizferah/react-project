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
  let { genre } = useParams();
  let { query } = useParams();
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const pages = Math.ceil(content.length / 20);
  const pathname = window.location.pathname;
  const a = pathname.includes("Genre");
  const b = pathname.includes("Search");
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
  console.log("ahawa", genre);
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
