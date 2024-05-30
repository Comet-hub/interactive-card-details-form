import PropTypes from "prop-types";
import "./Fields.css";

const Date = ({ label, name, register, errors, options }) => {
  const dateError = errors[name]?.month?.message ?? errors[name]?.year?.message;

  return (
    <div className="field">
      <label className="label" htmlFor="">
        {label}
      </label>
      <div className="input-layout">
        <input
          className={`input input--small ${
            errors[name]?.month ? "invalid" : ""
          }`}
          placeholder="MM"
          maxLength={2}
          {...register(`${name}.month`, options)}
        />
        <input
          className={`input input--small ${
            errors[name]?.year ? "invalid" : ""
          }`}
          placeholder="YY"
          maxLength={2}
          {...register(`${name}.year`, options)}
        />
      </div>
      {dateError && <span className="error">{dateError}</span>}
    </div>
  );
};

Date.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  register: PropTypes.func,
  errors: PropTypes.object,
  options: PropTypes.object,
};

export default Date;
