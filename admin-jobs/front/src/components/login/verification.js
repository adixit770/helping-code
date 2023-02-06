import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { postRequest } from "../apiHandler";

const schema = yup.object().shape({
  email: yup.string().required("please enter your email"),
});
export default function Verification() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const [message, setMessage] = useState();
  const [status, setStatus] = useState();

  const onSubmit = async (value) => {
    console.log(value);
    const res = await postRequest("/verification", value);
    console.log("login==>", res);
    setMessage(res.message);
    setStatus(res.status);
  };
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
        {/* <div className="box-heading">
          <div className="box-title">
            <h3 className="mb-35">Forgot Password</h3>
          </div> */}
        {/* </div> */}
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
                                  <p role="alert">{errors.email.message}</p>
                                ) : (
                                  ""
                                )}
                              </div>
                              <h1
                                style={{
                                  fontSize: "12px",
                                  color: status == 200 ? "green" : "red",
                                }}
                              >
                                {message}
                              </h1>
                              <div className="form-group">
                                <button
                                  className="btn btn-brand-1 hover-up w-100"
                                  type="submit"
                                  name="login"
                                >
                                  Send Email
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
        <div className="mt-10">
          <div className="section-box">
            <div className="container">
              <div className="panel-white pt-30 pb-30 pl-15 pr-15">
                <div className="box-swiper">
                  <div className="swiper-container swiper-group-10">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        {" "}
                        <img
                          src="assets/imgs/page/dashboard/microsoft.svg"
                          alt="jobBox"
                        />
                      </div>
                      <div className="swiper-slide">
                        {" "}
                        <img
                          src="assets/imgs/page/dashboard/sony.svg"
                          alt="jobBox"
                        />
                      </div>
                      <div className="swiper-slide">
                        {" "}
                        <img
                          src="assets/imgs/page/dashboard/acer.svg"
                          alt="jobBox"
                        />
                      </div>
                      <div className="swiper-slide">
                        {" "}
                        <img
                          src="assets/imgs/page/dashboard/nokia.svg"
                          alt="jobBox"
                        />
                      </div>
                      <div className="swiper-slide">
                        {" "}
                        <img
                          src="assets/imgs/page/dashboard/asus.svg"
                          alt="jobBox"
                        />
                      </div>
                      <div className="swiper-slide">
                        {" "}
                        <img
                          src="assets/imgs/page/dashboard/casio.svg"
                          alt="jobBox"
                        />
                      </div>
                      <div className="swiper-slide">
                        {" "}
                        <img
                          src="assets/imgs/page/dashboard/dell.svg"
                          alt="jobBox"
                        />
                      </div>
                      <div className="swiper-slide">
                        {" "}
                        <img
                          src="assets/imgs/page/dashboard/panasonic.svg"
                          alt="jobBox"
                        />
                      </div>
                      <div className="swiper-slide">
                        {" "}
                        <img
                          src="assets/imgs/page/dashboard/vaio.svg"
                          alt="jobBox"
                        />
                      </div>
                      <div className="swiper-slide">
                        {" "}
                        <img
                          src="assets/imgs/page/dashboard/sony.svg"
                          alt="jobBox"
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
    </>
  );
}
