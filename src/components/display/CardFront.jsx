import "./CardFront.css";
import PropTypes from "prop-types";
import cardLogo from "/card-logo.svg";

const CardFront = ({ holder, number, expDate }) => {
  return (
    <div className="card__front">
      <div className="card__frontContent">
        <img className="card__logo" src={cardLogo} alt="Card Logo" />
        <p className="card__num">{number}</p>
        <div className="card__details">
          <p>{holder.toUpperCase()}</p>
          <div className="card__exp">
            <p>{expDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

CardFront.propTypes = {
  holder: PropTypes.string,
  number: PropTypes.string,
  expDate: PropTypes.string,
};

export default CardFront;
