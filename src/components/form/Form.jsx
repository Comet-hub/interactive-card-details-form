import Success from "./Success";
import PropTypes from "prop-types";
import Fields from "./Fields";

const Form = ({
  onSubmit,
  register,
  errors,
  defaultValues,
  isSubmitSuccessful,
  reset,
}) => {
  return (
    <form onSubmit={onSubmit}>
      {isSubmitSuccessful ? (
        <Success reset={reset} />
      ) : (
        <Fields
          register={register}
          errors={errors}
          defaultValues={defaultValues}
        />
      )}
    </form>
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func,
  register: PropTypes.func,
  errors: PropTypes.object,
  defaultValues: PropTypes.object,
  isSubmitSuccessful: PropTypes.bool,
  reset: PropTypes.func,
};

export default Form;
