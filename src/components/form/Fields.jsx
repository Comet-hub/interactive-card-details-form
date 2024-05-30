import "./Fields.css";
import PropTypes from "prop-types";
import TextField from "./TextField";
import Date from "./DateField";
import Button from "./Button";
import { formatCardNum, formatDateNum } from "../../utils/formatters";

const Fields = ({ register, errors, defaultValues }) => {
  const handleChange = (event) => {
    const cardNumFormatted = formatCardNum(event.target.value);
    event.target.value = cardNumFormatted;
  };

  const handleDateChange = (event) => {
    const dateNumFormatted = formatDateNum(event.target.value);
    event.target.value = dateNumFormatted;
  };

  const handleValidation = (value) => {
    const v = value.replaceAll(" ", "");
    if (Number(v) === 0) return "Enter a valid number";
  };

  return (
    <>
      <TextField
        label="CARDHOLDER NAME"
        name="cardHolder"
        placeholder={`e.g. ${defaultValues.cardHolder}`}
        register={register}
        errors={errors}
        options={{
          required: "Can't  be blank",
        }}
      />
      <TextField
        label="CARD NUMBER"
        name="cardNumber"
        placeholder="e.g. 1234 5678 9123 0000"
        maxLength={19}
        register={register}
        errors={errors}
        options={{
          required: "Can't  be blank",
          setValueAs: (v) => formatCardNum(v),
          validate: (v) => handleValidation(v),
          onChange: handleChange,
          minLength: { value: 13, message: "Enter a valid card number" },
          pattern: {
            value: /^[0-9\s]+$/,
            message: "Wrong format, numbers only",
          },
        }}
      />
      <div className="field__group field__group--columns-2">
        <Date
          label={"EXP. DATE (MM/YY)"}
          name={"expDate"}
          register={register}
          errors={errors}
          options={{
            required: "Can't  be blank",
            setValueAs: (v) => formatDateNum(v),
            validate: (v) => handleValidation(v),
            onBlur: handleDateChange,
            pattern: {
              value: /^[0-9\s]+$/,
              message: "Wrong format, numbers only",
            },
          }}
        />
        <TextField
          label="CVC"
          name="cvc"
          placeholder="e.g. 123"
          maxLength={3}
          register={register}
          errors={errors}
          options={{
            required: "Can't  be blank",
            minLength: { value: 3, message: "Enter a valid cvc" },
            validate: (v) => handleValidation(v),
            pattern: {
              value: /^[0-9\s]+$/,
              message: "Wrong format, numbers only",
            },
          }}
        />
      </div>
      <Button>Confirm</Button>
    </>
  );
};

Fields.propTypes = {
  register: PropTypes.func,
  errors: PropTypes.object,
  defaultValues: PropTypes.object,
};

export default Fields;
