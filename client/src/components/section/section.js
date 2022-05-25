import Card from "../card/card";
import next from "./next.svg";
import "./section.css";
function Section(props) {
  const content = props.props;
  return (
    <div>
      <div className="header flex">
        <h1 className="section-title">{props.title}</h1>
        <a href={"/" + props.title} className="more">
          View all
          <img src={next} alt="" className="next_logo" />
        </a>
      </div>
      <div className="section_container flex">
        {content.slice(0, 10).map((x) => (
          <Card content={x} />
        ))}
      </div>
    </div>
  );
}
export default Section;
