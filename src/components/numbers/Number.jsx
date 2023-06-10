import "./number.scss";
import NumberCard from "../numberCard/NumberCard";

const Number = () => {
  return (
    <>
      <div className="numbers">
        <NumberCard number="15+" quote="Ready to use React Components" />
        <NumberCard number="60+" quote="Predefined colors for theme setup" />
        <NumberCard
          number="</>"
          quote="Detailed documentation for each component"
        />
        <NumberCard number="FREE" quote="Open source with regular updates" />
      </div>
    </>
  );
};

export default Number;
