import "./keyFeatureCard.scss";
import { Link } from "react-router-dom";
const KeyFeatureCard = ({ img, title, desc, linkText, link }) => {
  return (
    <div className="KeyFeatureCard">
      <img src={img} alt="Imgerr" />
      <h3>{title}</h3>
      <p>{desc}</p>
      <Link to={link} style={{ textDecoration: "none" }}>
        <span>{linkText}</span>
      </Link>
    </div>
  );
};

export default KeyFeatureCard;
