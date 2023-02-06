import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { postRequest } from "../apiHandler";
import swal from "sweetalert";
const schema = yup.object().shape({
  password: yup
    .string()
    .required("Please Enter your password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
  confirmPassword: yup.string(),
});
export default function Reset() {
  const [message, setMessage] = useState();
  const [status, setStatus] = useState();
  const history = useNavigate();
  const { id, token } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  console.log("errors============>", errors);
  const onSubmit = async (value) => {
    console.log(value);
    console.log(id, token);

    const res = await postRequest(`/resetPassword/${id}/${token}`, value);
    console.log("login==>", res);
    setMessage(res.message);
    setStatus(res.status);

    if (res.status == 200) {
      swal("Password", "Update successfully", "success");
      history("/");
    }
  };
  return (
    <>
      <header className="header sticky-bar">
        <div className="container">
          <div className="main-header">
            <div className="header-left">
              <div className="header-logo">
                <Link className="d-flex" to="/">
                  <img
                    alt="jobBox"
                    src="/assets/imgs/page/dashboard/logo.svg"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div>
        {/* <div className="box-heading">
          <div className="box-title">
            <h3 className="mb-35">Forgot Password</h3>
          </div>
        </div> */}
        <div className="row">
          <div className="col-lg-12">
            <div className="section-box">
              <div className="container">
                <div className="panel-white mb-30">
                  <div className="box-padding">
                    <div className="login-register">
                      <div className="row login-register-cover pb-250">
                        <div className="col-lg-4 col-md-6 col-sm-12 mx-auto">
                          <div className="form-login-cover">
                            <form
                              className="login-register text-start mt-20"
                              onSubmit={handleSubmit(onSubmit)}
                            >
                              <div className="form-group">
                                <label className="form-label" htmlFor="input-1">
                                  Password
                                  <span className="star">*</span>
                                </label>
                                <input
                                  className="form-control"
                                  id="input-1"
                                  type="password"
                                  name="Password"
                                  placeholder="Enter password"
                                  {...register("password")}
                                />
                                {errors.password ? (
                                  <p className="error" role="alert">
                                    {errors.password.message}
                                  </p>
                                ) : (
                                  ""
                                )}
                              </div>
                              <div className="form-group">
                                <label className="form-label" htmlFor="input-4">
                                  Confirm Password
                                  <span className="star">*</span>
                                </label>
                                <input
                                  className="form-control"
                                  id="input-4"
                                  type="password"
                                  name="password"
                                  placeholder="Confirm password"
                                  {...register("confirmPassword")}
                                />
                              </div>
                              <h6
                                style={{
                                  color: status == 200 ? "green" : "red",
                                }}
                              >
                                {message}
                              </h6>
                              <div className="form-group">
                                <button
                                  className="btn btn-brand-1 hover-up w-100"
                                  type="submit"
                                  name="reset"
                                >
                                  Reset
                                </button>
                              </div>
                              {/* <div className="text-muted text-center">Don't have an Account? <Link to="/">Sign up</Link></div> */}
                            </form>
                          </div>
                          <div className="img-2">
                            <img
                              src="/assets/imgs/page/login-register/img-3.svg"
                              alt="JobBox"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
