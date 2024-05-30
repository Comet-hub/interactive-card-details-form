import "./Success.css";
import PropTypes from "prop-types";
import iconComplete from "/icon-complete.svg";
import Button from "./Button";

const Success = ({ reset }) => {
  return (
    <>
      <div className="success__content">
        <img className="success__icon" src={iconComplete} alt="Complete" />
        <h2 className="success__h">THANK YOU!</h2>
        <p className="success__p">{`We've added your card details`}</p>
      </div>
      <Button onClick={() => reset()}>Continue</Button>
    </>
  );
};

Success.propTypes = {
  reset: PropTypes.func,
};

export default Success;
