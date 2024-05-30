import "./CardBack.css";
import PropTypes from "prop-types";

const CardBack = ({ cvc }) => {
  return (
    <div className="card__back">
      <p className="card__cvc">{cvc}</p>
    </div>
  );
};

CardBack.propTypes = {
  cvc: PropTypes.string,
};

export default CardBack;
