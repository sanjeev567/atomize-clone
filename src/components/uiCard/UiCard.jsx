import "./uiCard.scss";

const uiCard = ({ img, title, desc }) => {
  return (
    <div className="uiCard">
      <img src={img} alt="imgErr" />
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default uiCard;
