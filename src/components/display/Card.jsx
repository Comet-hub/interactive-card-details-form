import "./Card.css";
import PropTypes from "prop-types";
import CardFront from "./CardFront";
import CardBack from "./CardBack";

const Card = ({ holder, number, expDate, cvc }) => {
  return (
    <div className="card">
      <CardBack cvc={cvc} />
      <CardFront holder={holder} number={number} expDate={expDate} />
    </div>
  );
};

Card.propTypes = {
  holder: PropTypes.string,
  number: PropTypes.string,
  expDate: PropTypes.string,
  cvc: PropTypes.string,
};

export default Card;
