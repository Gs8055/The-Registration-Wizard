import { useState } from "react";

const Step2 = ({ register, errors }) => {
  const [showPassword, setShowPassword] =
    useState(false);

  return (
    <>
      <h2 className="form-title">
        Account Details
      </h2>

      <p className="form-subtitle">
        Create your login credentials
      </p>


      <div className="form-group">
        <label className="form-label">Email: </label>

        <input
          type="email"
          placeholder="Enter your email"
          className={`form-input ${errors.email ? "input-error" : ""
            }`}
          {...register("email")}
        />

        <p className="error-text">
          {errors.email?.message}
        </p>
      </div>

      <div className="form-group">
        <label className="form-label">
          Password: </label>

        <input
          type={
            showPassword
              ? "text"
              : "password"
          }
          placeholder="Enter password"
          className={`form-input ${errors.password
              ? "input-error"
              : ""
            }`}
          {...register("password")}
        />



        <p className="error-text">
          {errors.password?.message}
        </p>
      </div>

      <div className="form-group">
        <label className="form-label">Confirm Password: </label>

        <input
          type={
            showPassword
              ? "text"
              : "password"
          }
          placeholder="Confirm password"
          className={`form-input ${errors.confirmPassword
            ? "input-error"
            : ""
            }`}
          {...register("confirmPassword")}
        />

        <p className="error-text">
          {
            errors.confirmPassword
              ?.message
          }
        </p>
      </div>
    </>
  );
};

export default Step2;