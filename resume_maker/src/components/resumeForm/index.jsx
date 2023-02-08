import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Resume from "../dataInserter";

const ResumeForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState();

  const onSubmit = data => {
    console.log(data);
    setData(data);
    setSubmitted(true);
  };

  return (
    <div>
      {submitted ? (
        // <h2>Thank you for submitting your resume!</h2>,
        <Resume data={data}/>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}
        >
          <label>
            Name:
            <input
              type="text"
              name="name"
             {...register("name")}
            />
            {/* {errors.name && <p>This field is required</p>} */}
          </label>

          <label>
            Email:
            <input
              type="email"
              name="email"
              {...register("email")}
            />
            {/* {errors.email && <p>This field is required</p>} */}
          </label>

          <label>
            Phone:
            <input
              type="tel"
              name="phone"
            {...register("phone")}
            />
            {/* {errors.phone && <p>This field is required</p>} */}
          </label>

          <input type="submit" />
        </form>
      )}
    </div>
  );
};

export default ResumeForm;
