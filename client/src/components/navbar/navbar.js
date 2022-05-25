import React, { useState } from "react";
import { useNavigate, Outlet, Navigate } from "react-router-dom";
import "./nav.css";
import logo from "./logo2.png";
import BasicModal from "../modal/modal";

function Navbar() {
  const [genres, setGrenres] = useState([
    "Action",
    "Adventure",
    "Animation",
    "Biography",
    "custom",
    "comedy",
    "crime",
    "Documentary",
    "Drama",
    "Family",
    "Fantasy",
    "Game-Show",
    "History",
    "Horror",
    "kong-fu",
    "Music",
    "Mystery",
    "Reality-TV",
    "Romance",
    "Sci-Fi",
    "Sport",
    "Thriller",
    "TV Show",
    "War",
    "Western",
  ]);
  const navigate = useNavigate();
  const [hovering, setHovering] = useState("false");
  const [query, setQuery] = useState("");
  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  const onKeyPress = (e) => {
    e.which === 13 ? handleSearch() : <></>;
  };
  const handleSearch = () => {
    navigate("/Search=" + query);
  };
  return (
    <nav className="flex nav">
      <a href="/">
        <img src={logo} className="logo" />
      </a>
      <ul className="navigation flex">
        <li>
          <a href="/">Favorite</a>
        </li>
        <li>
          <div className="dropdown">
            <button className="genre_button">Genre</button>
            <div className="dropdown-content">
              <div className="genre_grid">
                {genres.map((x) => (
                  <a href={"/Genre/" + x}>{x}</a>
                ))}
              </div>
            </div>
          </div>
        </li>
        <li>
          <a href="/Movies">Movies</a>
        </li>
        <li>
          <a href="/Tv-Shows">TV-Series</a>
        </li>
      </ul>
      <div
        className="searchinput flex"
        hover={hovering}
        onMouseEnter={() => setHovering("true")}
        onMouseLeave={() => setHovering("false")}
      >
        <button hoverbtn={hovering} className="icon" onClick={handleSearch} />
        <input
          type="text"
          className="input"
          placeholder="Search..."
          value={query}
          onChange={handleChange}
          onKeyPress={onKeyPress}
        />
      </div>
      <Outlet />
      <BasicModal />
    </nav>
  );
}
export default Navbar;
