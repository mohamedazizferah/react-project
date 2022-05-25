import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import play from "./play.svg";
import heart from "./heart.svg";
import "./slider.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

function Slider() {
  return (
    <AutoplaySlider
      play={true}
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={6000}
      bullets={false}
      className="Slider"
    >
      <div
        className="contenaire"
        style={{
          backgroundImage: `url(${img1})`,
          backgroundSize: "cover",
        }}
      >
        <div>
          <h1 className="movie_title">The batman</h1>
          <div className="gap flex">
            <button className="quality">CAM</button>
            <div className="rating flex">
              <button className="star_icon" />
              <button className="rating_num">8.5</button>
            </div>
            <button className="length">194 min</button>
            <div className="genres flex">
              <button className="genre">Adventure</button>
              <button className="genre">action</button>
            </div>
          </div>
          <p className="desc">
            With his identity compromised, right after the spectacular
            confrontation with super-hero charlatan Mysterio in Spider-Man: Far
            from Home (2019), Peter Parker is now with his back to the wall. On
            the run and having no one to turn to for advice, desperate Peter
            seeks a radical and equally dangerous solution to right a wrong,
            utterly unaware of the grave consequences of his ill-advised
            decision. And, as the unfathomable Multiverse expands with a
            vengeance, formidable adversaries from a not-so-distant past, too,
            seek closure, demanding the Spider's head on a platter. But when
            there's no way home and nowhere to hide, whom can Parker trust?
          </p>
          <div className="buttons flex">
            <button className="play_btn flex">
              <img src={play} className="play_icon" /> <p>Watch now</p>
            </button>
            <button className="heart_btn flex">
              <img src={heart} className="heart_icon" /> <p>Add to list</p>
            </button>
          </div>
        </div>
      </div>

      <div
        className="contenaire"
        style={{
          backgroundImage: `url(${img2})`,
          backgroundSize: "cover",
        }}
      >
        <div>
          <h1 className="movie_title">The batman</h1>
          <div className="gap flex">
            <button className="quality">CAM</button>
            <div className="rating flex">
              <button className="star_icon" />
              <button className="rating_num">8.5</button>
            </div>
            <button className="length">194 min</button>
            <div className="genres flex">
              <button className="genre">Adventure</button>
              <button className="genre">action</button>
            </div>
          </div>
          <p className="desc">
            With his identity compromised, right after the spectacular
            confrontation with super-hero charlatan Mysterio in Spider-Man: Far
            from Home (2019), Peter Parker is now with his back to the wall. On
            the run and having no one to turn to for advice, desperate Peter
            seeks a radical and equally dangerous solution to right a wrong,
            utterly unaware of the grave consequences of his ill-advised
            decision. And, as the unfathomable Multiverse expands with a
            vengeance, formidable adversaries from a not-so-distant past, too,
            seek closure, demanding the Spider's head on a platter. But when
            there's no way home and nowhere to hide, whom can Parker trust?
          </p>
          <div className="buttons flex">
            <button className="play_btn flex">
              <img src={play} className="play_icon" /> <p>Watch now</p>
            </button>
            <button className="heart_btn flex">
              <img src={heart} className="heart_icon" /> <p>Add to list</p>
            </button>
          </div>
        </div>
      </div>

      <div
        className="contenaire"
        style={{
          backgroundImage: `url(${img3})`,
          backgroundSize: "cover",
        }}
      >
        <div>
          <h1 className="movie_title">The batman</h1>
          <div className="gap flex">
            <button className="quality">CAM</button>
            <div className="rating flex">
              <button className="star_icon" />
              <button className="rating_num">8.5</button>
            </div>
            <button className="length">194 min</button>
            <div className="genres flex">
              <button className="genre">Adventure</button>
              <button className="genre">action</button>
            </div>
          </div>
          <p className="desc">
            With his identity compromised, right after the spectacular
            confrontation with super-hero charlatan Mysterio in Spider-Man: Far
            from Home (2019), Peter Parker is now with his back to the wall. On
            the run and having no one to turn to for advice, desperate Peter
            seeks a radical and equally dangerous solution to right a wrong,
            utterly unaware of the grave consequences of his ill-advised
            decision. And, as the unfathomable Multiverse expands with a
            vengeance, formidable adversaries from a not-so-distant past, too,
            seek closure, demanding the Spider's head on a platter. But when
            there's no way home and nowhere to hide, whom can Parker trust?
          </p>
          <div className="buttons flex">
            <button className="play_btn flex">
              <img src={play} className="play_icon" /> <p>Watch now</p>
            </button>
            <button className="heart_btn flex">
              <img src={heart} className="heart_icon" /> <p>Add to list</p>
            </button>
          </div>
        </div>
      </div>
    </AutoplaySlider>
  );
}
export default Slider;
