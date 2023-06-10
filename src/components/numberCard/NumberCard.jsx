import "./numberCard.scss";

const NumberCard = ({ number, quote }) => {
  return (
    <div className="numberCard">
      <h1>{number}</h1>
      <p>{quote}</p>
    </div>
  );
};

export default NumberCard;
