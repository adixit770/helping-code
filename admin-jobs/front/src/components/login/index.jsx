import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { postRequest } from "../apiHandler";
import { useState } from "react";

const schema = yup.object().shape({
  email: yup.string().required("enter a valid email"),
  password: yup.string().required("enter a valid password"),
});
export default function Login() {
  const [message, setMessage] = useState();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const history = useNavigate();
  console.log(errors);

  useEffect(() => {
    localStorage.removeItem("token");

    if (localStorage.getItem("check")) {
      setValue("email", localStorage.getItem("email"));
      setValue("password", localStorage.getItem("password"));
      setValue("check", localStorage.getItem("check"));
    } else {
      setValue("email", "");
      setValue("password", "");
      setValue("check", "");
    }
  }, [localStorage.getItem("check")]);

  const onSubmit = async (value) => {
    console.log("Value=>", value);
    const res = await postRequest("/login", value);
    console.log("login==>", res);
    setMessage(res.massage);
    if (res.status === 200) {
      if (value.check) {
        localStorage.setItem("email", value.email);
        localStorage.setItem("password", value.password);
        localStorage.setItem("check", value.check);
      } else {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        localStorage.removeItem("check");
      }
      localStorage.setItem("token", res.data.token);
      history("/dashboard");
    }
  };
  console.log("message====>", message);
  return (
    <>
      <header className="header sticky-bar">
        <div className="container">
          <div className="main-header">
            <div className="header-left">
              <div className="header-logo">
                <Link className="d-flex" to="/">
                  <img alt="jobBox" src="assets/imgs/page/dashboard/logo.svg" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div>
        <div className="box-heading">
          <div className="box-title">
            <h3 className="mb-35">Login</h3>
          </div>
        </div>
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
                            <div className="text-center">
                              <p className="font-sm text-brand-2">
                                Welcome back!{" "}
                              </p>
                              <h2 className="mt-10 mb-5 text-brand-1">
                                Member Login
                              </h2>
                              <h6
                                className="mt-10 mb-5 text-brand-1"
                                style={{ color: "red" }}
                              >
                                {message}
                              </h6>
                            </div>
                            <form
                              className="login-register text-start mt-20"
                              onSubmit={handleSubmit(onSubmit)}
                            >
                              <div className="form-group">
                                <label className="form-label" htmlFor="input-1">
                                  Email address
                                  <span className="star">*</span>
                                </label>
                                <input
                                  className="form-control"
                                  id="input-1"
                                  type="text"
                                  name="email"
                                  placeholder="Email"
                                  {...register("email")}
                                />
                                {errors.email ? (
                                  <p className="error" role="alert">
                                    {errors.email.message}
                                  </p>
                                ) : (
                                  ""
                                )}
                              </div>
                              <div className="form-group">
                                <label className="form-label" htmlFor="input-4">
                                  Password
                                  <span className="star">*</span>
                                </label>
                                <input
                                  className="form-control"
                                  id="input-4"
                                  type="password"
                                  name="password"
                                  placeholder="password"
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
                              <div className="login_footer form-group d-flex justify-content-between">
                                <div
                                  class="form-check"
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  <input
                                    {...register("check")}
                                    type="checkbox"
                                    class="form-check-input"
                                    id="exampleCheck1"
                                  />
                                  <label
                                    style={{
                                      marginLeft: "4px",
                                      fontSize: "16px",
                                    }}
                                    class="text-muted"
                                  >
                                    Remember me
                                  </label>
                                </div>
                                <Link className="text-muted" to="/verification">
                                  <label
                                    style={{
                                      marginLeft: "4px",
                                      fontSize: "16px",
                                    }}
                                    class="text-muted"
                                  >
                                    Forget password
                                  </label>
                                </Link>
                              </div>
                              {/*  */}

                              {/*  */}
                              <div className="form-group">
                                <button
                                  className="btn btn-brand-1 hover-up w-100 text-light"
                                  type="submit"
                                  name="login"
                                >
                                  Login
                                </button>
                              </div>
                              {/* <div className="text-muted text-center">Don't have an Account? <Link to="/">Sign up</Link></div> */}
                            </form>
                          </div>
                          <div className="img-2">
                            <img
                              src="assets/imgs/page/login-register/img-3.svg"
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
