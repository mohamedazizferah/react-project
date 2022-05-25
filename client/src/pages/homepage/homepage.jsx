import Slider from "./slider/slider";
import "./homePage.css";
import Recommended from "./recommended/rec";
import Section from "../../components/section/section";
function HomePage(content) {
  const reqs = content.reqs;
  const movies = content.movies;
  const shows = content.shows;
  return (
    <div>
      <Slider />
      <Recommended reqs={reqs} />
      <Section title="Movies" props={movies} />
      <Section title="TV-Shows" props={shows} />
    </div>
  );
}
export default HomePage;
