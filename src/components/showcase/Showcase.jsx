import "./showcase.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
const Showcase = () => {
  return (
    <div className="showcase">
      <h1>Design System for React JS</h1>
      <p>
        Atomize React is a UI framework that helps developers collaborate with
        designers and build consistent user interfaces effortlessly.
      </p>
      <div className="showcase-btn">
        <span className="get-started">Get Started Now</span>
        <span>
          <PlayArrowIcon className="showcase-icon" /> Watch Video
        </span>
      </div>
    </div>
  );
};

export default Showcase;
