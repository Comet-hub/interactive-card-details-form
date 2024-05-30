import "./Display.css";
import PropTypes from "prop-types";
import Card from "./Card";

const Display = ({ holder, number, expDate, cvc }) => {
  return (
    <aside className="info-display">
      <Card holder={holder} number={number} expDate={expDate} cvc={cvc} />
    </aside>
  );
};

Display.propTypes = {
  holder: PropTypes.string,
  number: PropTypes.string,
  expDate: PropTypes.string,
  cvc: PropTypes.string,
};

export default Display;
