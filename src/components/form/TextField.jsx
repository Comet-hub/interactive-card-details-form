import "./Fields.css";
import PropTypes from "prop-types";

const Input = ({
  label,
  name,
  placeholder,
  maxLength,
  register,
  errors,
  options,
}) => {
  return (
    <div className="field">
      <label className="label" htmlFor={name}>
        {label}
      </label>
      <input
        className={`input ${errors[name] ? "invalid" : ""}`}
        id={name}
        {...register(name, options)}
        placeholder={placeholder}
        maxLength={maxLength}
        aria-invalid={errors[name] ? "true" : "false"}
      />
      {errors[name] && <span className="error">{errors[name].message}</span>}
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  maxLength: PropTypes.number,
  register: PropTypes.func,
  errors: PropTypes.object,
  options: PropTypes.object,
};

export default Input;
