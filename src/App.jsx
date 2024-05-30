import "./App.css";
import { useForm } from "react-hook-form";
import Form from "./components/form/Form";
import Display from "./components/display/Display";
import Attribution from "./components/attribution/Attribution";

function App() {
  const defaultValues = {
    cardHolder: "Jane Appleseed",
    cardNumber: "0000 0000 0000 0000",
    expDate: {
      month: "00",
      year: "00",
    },
    cvc: "000",
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
    watch,
  } = useForm();

  const cardHolder = watch("cardHolder") || defaultValues.cardHolder;
  const cardNumber = watch("cardNumber") || defaultValues.cardNumber;
  const expMonth = watch("expDate.month") || defaultValues.expDate.month;
  const expYear = watch("expDate.year") || defaultValues.expDate.year;
  const expDate = `${expMonth}/${expYear}`;
  const cvc = watch("cvc") || defaultValues.cvc;

  const onSubmit = (data, event) => {
    console.log(data, event);
  };
  const onError = (errors, event) => {
    console.log(errors, event);
  };

  return (
    <div className="container">
      <Display
        holder={cardHolder}
        number={cardNumber}
        expDate={expDate}
        cvc={cvc}
      />
      <main className="main">
        <Form
          onSubmit={handleSubmit(onSubmit, onError)}
          register={register}
          errors={errors}
          defaultValues={defaultValues}
          isSubmitSuccessful={isSubmitSuccessful}
          reset={reset}
        />
        <Attribution />
      </main>
    </div>
  );
}

export default App;
