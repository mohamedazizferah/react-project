import React, { useState, useEffect } from "react";
import { useNavigate, Outlet, Navigate } from "react-router-dom";
import "./nav.css";
import logo from "./logo2.png";
import BasicModal from "../modal/modal";
import { Avatar, Button } from "@mui/material";

function Navbar() {
  const [user, setUser] = useState({});

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
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser({});
  };
  useEffect(() => {
    setUser(localStorage.getItem("user"));
  }, [user]);
  return (
    <nav className="nav flex">
      <a href="/">
        <img src={logo} className="logo" />
      </a>
      <ul className="navigation flex">
        <li>
          {!user ? <a href="/">Favorite</a> : <a href="/favorites">Favorite</a>}
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
      {!user ? (
        <BasicModal />
      ) : (
        <div className="dropdownn">
          <Avatar alt="Remy Sharp" className="chtar" src="" />
          <div className="logout">
            <div className="logoutButton flex">
              <Button variant="outlined" color="error" onClick={handleLogout}>
                Log Out
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
export default Navbar;
