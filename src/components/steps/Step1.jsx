const Step1 = ({ register, errors }) => {
  return (
    <>
      <h2>Personal Info</h2>

      <div className="input-group">
        <label>First Name: </label>

        <input
          type="text"
          className={errors.firstName ? "input-error" : ""}
          {...register("firstName")}
        />

        <p className="error">
          {errors.firstName?.message}
        </p>
      </div>

      <div className="input-group">
        <label>Last Name: </label>

        <input
          type="text"
          className={errors.lastName ? "input-error" : ""}
          {...register("lastName")}
        />

        <p className="error">
          {errors.lastName?.message}
        </p>
      </div>

      <div className="input-group">
        <label>DOB: </label>

        <input
          type="date"
          className={errors.dob ? "input-error" : ""}
          {...register("dob")}
        />

        <p className="error">
          {errors.dob?.message}
        </p>
      </div>


    </>
  );
};

export default Step1;