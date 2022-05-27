import { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import axios from "axios";
import Background from "./components/backgroud/background";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";
import HomePage from "./pages/homepage/homepage";
import Movies from "./pages/movies/movies";

function App() {
  const [content, getcontent] = useState([]);
  const [error, setError] = useState(false);
  const getdata = () => {
    axios
      .get(`http://localhost:8000/movie`)
      .then((result) => {
        getcontent(result.data);
        setError(false);
      })
      .catch((error) => {
        setError(true);
      });
  };

  useEffect(() => {
    getdata();
  }, []);

  const movies = content.filter((x) => x?.type === "Movie");
  const shows = content.filter((x) => x?.type === "TV-Show");
  return (
    <div className="App">
      {error ? <></> : <></>}
      <Background />

      <BrowserRouter>
        <div>
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <HomePage reqs={content} movies={movies} shows={shows} />
              }
            ></Route>
            <Route
              exact
              path="/Movies"
              element={<Movies props={movies} />}
            ></Route>
            <Route
              exact
              path="/favorites"
              element={<Movies props={content} />}
            ></Route>
            <Route
              exact
              path="/TV-Shows"
              element={<Movies props={shows} />}
            ></Route>
            <Route
              path="/Genre/:genre"
              element={<Movies props={content} />}
            ></Route>
            <Route
              path="/Search=:query"
              element={<Movies props={content} />}
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
