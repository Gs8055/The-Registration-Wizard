import { useState } from "react";
import "./App.css";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { formSchema } from "./schema/formSchema";

import Step1 from "./components/steps/Step1";
import Step2 from "./components/steps/Step2";
import Step3 from "./components/steps/Step3";
import ProgressBar from "./components/ProgressBar";
import Success from "./components/Success";

function App() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    trigger,
    watch,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(formSchema),
    mode: "onBlur"
  });

  const formData = watch();

  const nextStep = async () => {
    let fields = [];

    if (step === 1) {
      fields = ["firstName", "lastName", "dob"];
    }

    // STEP 2 VALIDATION
    if (step === 2) {
      fields = ["email", "password", "confirmPassword"];
    }


    const isValid = await trigger(fields);


    if (isValid) {
      console.log("MOVING TO NEXT STEP...");
      setStep((prev) => prev + 1);
    } else {
      console.log("VALIDATION FAILED");
    }
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  const onSubmit = (data) => {
    setSubmitted(true);
  };

  if (submitted) {
    return <Success />;
  }

  return (
    <div className="form-container">
      <ProgressBar step={step} />

      <form onSubmit={handleSubmit(onSubmit)}>
        {step === 1 && (
          <Step1 register={register} errors={errors} />
        )}

        {step === 2 && (
          <Step2 register={register} errors={errors} />
        )}

        {step === 3 && (
          <Step3 data={formData} />
        )}

        <div className="button-group">
          {step > 1 && (
            <button
              type="button"
              className="back-btn"
              onClick={prevStep}
            >
              Back
            </button>
          )}

          {step < 3 && (
            <button
              type="button"
              className="next-btn"
              onClick={nextStep}
            >
              Next
            </button>
          )}

          {step === 3 && (
            <button
              type="submit"
              className="submit-btn"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default App;