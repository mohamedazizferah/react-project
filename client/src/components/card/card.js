import { useState, useEffect } from "react";
import axios from "axios";
import "./card.css";

function Card(props) {
  var [user, setUser] = useState({});
  const fav = user?.favorites;
  const [users, setusers] = useState([]);
  const [error, setError] = useState(false);

  const getdata = () => {
    axios
      .get(`http://localhost:8000/user`)
      .then((result) => {
        setusers(result.data);
        setError(false);
      })
      .catch((error) => {
        setError(true);
      });
  };
  useEffect(() => {
    getdata();
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);
  const handleEditTask = (e) => {
    const movid = e.target.getAttribute("MovieID");
    var found = fav.includes(movid);
    var favo = [];
    if (found === true) {
      alert("removed");
      favo = fav.filter((x) => x != movid);
    } else {
      alert("added");
      favo = fav;
      favo.push(movid);
    }
    const edituser = { favorites: favo };
    axios.patch(`http://localhost:8000/user/${user?._id}`, edituser);

    setusers((users) =>
      users.map((element) => {
        if (element._id === user?._id) return { ...element, favorites: favo };
        return element;
      })
    );
    const newUser = users.find((x) => x._id === user?._id);
    localStorage.removeItem("user");
    localStorage.setItem("user", JSON.stringify(newUser));
  };

  useEffect(() => {
    getdata();
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  // useEffect(() => {
  //   setUser(JSON.parse(localStorage.getItem("user")));
  //   window.location.reload();
  // }, [users]);

  return (
    <div className="card">
      {/* <img src="https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?auto=format&amp;fit=crop&amp;w=311&amp;q=80&amp;ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" /> */}
      <img src={props.content?.poster} alt="" />
      <div className="info">
        <p className="card_title">{props.content?.title}</p>
        <div className="card_infos flex">
          <div className="rating flex">
            <button className="starIcon" />
            <button className="rating_numm">{props.content?.rating}</button>
          </div>
          <button className="year">{props.content?.year}</button>
          <button className="length">{props.content?.duration}</button>
          <button className="quality">{props.content?.quality}</button>
        </div>
        <p className="Movie_description">{props.content?.description}</p>
        <div className="types flex">
          <p>Type :</p>
          <button className="type">{props.content?.type}</button>
        </div>
        {props.content?.type === "TV-Show" ? (
          <div className="types flex">
            <p>Seasons :</p>
            <button className="type">{props.content?.seasons}</button>
            <p> episodes :</p>
            <button className="type">{props.content?.episodes}</button>
          </div>
        ) : (
          <></>
        )}

        <div className="card_genres flex">
          <p>Genres :</p>
          {props.content?.genre.map((e) => (
            <button className="card_genre">{e}</button>
          ))}
        </div>
        <div className="card_Buttons flex">
          <button className="watch_now">Watch now</button>

          <button
            className="fav"
            MovieID={props.content?._id}
            onClick={handleEditTask}
          />
        </div>
      </div>
    </div>
  );
}
export default Card;
