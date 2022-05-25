import { Link } from "react-router-dom";
import Card from "../../../components/card/card";
import "./rec.css";
function Recommended(reqs) {
  const content = reqs.reqs;
  return (
    <div className="rec">
      <div className="flex">
        <h1 className="title">Recommended</h1>
        <div className="rec_buttons flex">
          <Link to="/Movies">
            <button>movies</button>
          </Link>
          <Link to="/Tv-Shows">
            <button>TV-Shows</button>
          </Link>
        </div>
      </div>
      <div className="Card_container">
        {content.slice(0, 10).map((x) => (
          <>
            <Card content={x} />
          </>
        ))}
      </div>
    </div>
  );
}
export default Recommended;
