import React, { useEffect, useRef } from "react";
import { Button } from "@nextui-org/react";
import io from "socket.io-client";
import openSocket from "socket.io-client";
import { Link, useNavigate } from "react-router-dom";
import MainLayout from "../mainLayout";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import swal from "sweetalert";

import {
  deleteRequest,
  getRequest,
  postRequest,
  putRequest,
} from "../apiHandler";
import { useState } from "react";

const schema = yup.object().shape({
  fullName: yup.string().required("enter your fullName"),
  email: yup.string().required("enter your email"),
  password: yup.string().required("enter your password"),
  confirmPassword: yup.string().required("enter your confirmPassword"),
  mobile: yup.string().required("enter your mobile"),
  post: yup.string().required("enter your post"),
  bio: yup.string().required("enter your bio"),
  location: yup.string().required("enter your location"),
  skills: yup.string().required("enter your skills"),
  salary: yup.string().required("enter your salary"),
});
export default function Candidates() {
  const socket = io.connect('http://localhost:8000',{  
    cors: {
        origin: "http://localhost:3000",
        credentials: true
    },transports : ['websocket'] 
})
  const [data, setData] = useState([]);
  const [dropdownMenu, setDropdownMenu] = useState(false);
  const [id, setId] = useState();
  const [postData, setPostData] = useState([]);
  const token = localStorage.getItem("token");
  const history = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const resume = watch("resume");
  const profilePhoto = watch("profilePhoto");

  ////////////////get data by id api///////////

  const getDataById = async () => {
    const getCandidate = await getRequest(`/getCandidateById/${id}/${token}`);
    // console.log("getCandidate==>", getCandidate);
    if (id) {
      if (getCandidate.status == 200) {
        const {
          fullName,
          email,
          mobile,
          post,
          bio,
          location,
          skills,
          salary,
        } = getCandidate.add;
        setValue("location", location);
        setValue("bio", bio);
        setValue("skills", skills);
        setValue("post", post);
        setValue("email", email);
        setValue("fullName", fullName);
        setValue("mobile", mobile);
        setValue("salary", salary);
      } else {
        localStorage.removeItem("token");
      }
    } else {
      setValue("location", "");
      setValue("bio", "");
      setValue("skills", "");
      setValue("post", "");
      setValue("email", "");
      setValue("fullName", "");
      setValue("mobile", "");
      setValue("salary", "");
    }
  };

  ///////////////get api//////////

  const getdata = async () => {
    const res = await getRequest(`/getCandidate/${token}`);
    // console.log("res====>", res);
    if (res.status == 200) {
      setData(res.add);
    }
  };

  ///////////////insert/update api/////////

  const onSubmit = async (value) => {
    console.log("id", id);
    const {
      fullName,
      email,
      password,
      salary,
      confirmPassword,
      mobile,
      post,
      bio,
      location,
      skills,
    } = value;
    const formData = new FormData();
    formData.append("image", profilePhoto[0]);
    formData.append("resume", resume[0]);
    formData.append("location", location);
    formData.append("bio", bio);
    formData.append("skills", skills);
    formData.append("post", post);
    formData.append("email", email);
    formData.append("fullName", fullName);
    formData.append("mobile", mobile);
    formData.append("salary", salary);
    formData.append("password", password);
    formData.append("confirmPassword", confirmPassword);
    formData.append("profilePhoto", profilePhoto);
    // console.log("formData==>", formData.get(image));

    const res = id
      ? await putRequest(`/updateCandidate/${id}/${token}`, formData)
      : await postRequest(`/addCandidate/${token}`, formData);
    console.log("rers===>", res);
    res.status == 200
      ? swal("DATA!", "Added successfully!", "success")
      : swal("Opps!", "Something went wrong!", "error");

    setPostData(res);

    if (!res.auth) {
      localStorage.removeItem("token");
      history("/");
    }
    reset();
    setId();
    setDropdownMenu(true);
  };

  ///////////////delete api/////////////

  const deleteCard = async (id) => {
    const res = await deleteRequest(`/deleteCandidate/${id}/${token}`);
    console.log(res);
    res.status == 200
      ? swal("DATA!", "Deleted successfully!", "success")
      : swal("Opps!", "Something went wrong!", "error");
    setPostData(res);
  };

  ///////////////////ststus check/////////////

  const status = async (statusActive, statusId) => {
    const temp = { status: !statusActive };
    const res = await putRequest(`/updateCandidate/${statusId}/${token}`, temp);
    console.log(res);

    setPostData(res.add);
    setDropdownMenu(true);
  };

  // console.log("==========>>>>>>", data);
  
  useEffect(() => {
    console.log("ID==>", id);
    if (id) {
      getDataById();
    } else {
      getdata();
      reset();
    }
    
   const abc= openSocket("http://localhost:8000/api");

   console.log("socket===>",abc);
   abc.on('posts',data=>{
    console.log("action==>", data);
    if(data.action==="create"){
console.log("io data=======>",data.post);
    }
   })
    setDropdownMenu(true);
  }, [id, postData]);

  return (
    <MainLayout>
      <div
        className="modal fade"
        id="ModalApplyJobForm"
        tabIndex={-1}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div
            className="modal-content apply-job-form"
            style={{ width: "50rem" }}
          >
            <button
              className="btn-close"
              type="button"
              aria-label="Close"
              data-bs-dismiss="modal"
            />
            <div className="modal-body pl-30 pr-30 pt-50">
              <div className="text-center">
                <p className="font-sm text-brand-2">Job Application </p>
                <h2 className="mt-10 mb-5 text-brand-1 text-capitalize">
                  Start your career today
                </h2>
                <p className="font-sm text-muted mb-30">
                  Please fill in your information and send it to the employer.
                </p>
              </div>
              <form
                style={{ display: "flex", flexWrap: "wrap" }}
                className="login-register text-start mt-20 pb-30"
              >
                <div className="form-group1">
                  <label className="form-label" htmlFor="file">
                    Upload Profile
                  </label>
                  <input
                    className="form-control"
                    id="file"
                    name="profilePhoto"
                    type="file"
                    {...register("profilePhoto")}
                  />
                </div>
                <div className="form-group1">
                  <label className="form-label" htmlFor="input-1">
                    Full Name *
                  </label>
                  <input
                    className="form-control"
                    id="input-1"
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    {...register("fullName")}
                  />
                  {errors.fullName ? (
                    <p className="error" role="alert">
                      {errors.fullName.message}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="form-group1">
                  <label className="form-label" htmlFor="input-2">
                    Email *
                  </label>
                  <input
                    className="form-control"
                    id="input-2"
                    type="email"
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
                <div className="form-group1">
                  <label className="form-label" htmlFor="number">
                    Contact Number *
                  </label>
                  <input
                    className="form-control"
                    id="number"
                    type="text"
                    name="mobile"
                    placeholder="(+01) 234 567 89"
                    {...register("mobile")}
                  />
                  {errors.mobile ? (
                    <p className="error" role="alert">
                      {errors.mobile.message}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="form-group1">
                  <label className="form-label" htmlFor="des">
                    Bio
                  </label>
                  <input
                    className="form-control"
                    id="des"
                    type="text"
                    name="bio"
                    placeholder="Your bio..."
                    {...register("bio")}
                  />
                  {errors.bio ? (
                    <p className="error" role="alert">
                      {errors.bio.message}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="form-group1">
                  <label className="form-label" htmlFor="des">
                    Location
                  </label>
                  <input
                    className="form-control"
                    id="input-1"
                    type="text"
                    name="location"
                    placeholder="location"
                    {...register("location")}
                  />
                  {errors.location ? (
                    <p className="error" role="alert">
                      {errors.location.message}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="form-group1">
                  <label className="form-label" htmlFor="des">
                    Post
                  </label>
                  <input
                    className="form-control"
                    id="input-1"
                    type="text"
                    name="post"
                    placeholder="post"
                    {...register("post")}
                  />
                  {errors.post ? (
                    <p className="error" role="alert">
                      {errors.post.message}
                    </p>
                  ) : (
                    ""
                  )}
                </div>

                <div className="form-group1">
                  <label className="form-label" htmlFor="des">
                    Skills
                  </label>
                  <input
                    className="form-control"
                    id="input-1"
                    type="text"
                    name="skills"
                    placeholder="skills"
                    {...register("skills")}
                  />
                  {errors.skills ? (
                    <p className="error" role="alert">
                      {errors.skills.message}
                    </p>
                  ) : (
                    ""
                  )}
                </div>

                <div className="form-group1">
                  <label className="form-label" htmlFor="des">
                    Password
                  </label>
                  <input
                    className="form-control"
                    id="input-1"
                    type="text"
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

                <div className="form-group1">
                  <label className="form-label" htmlFor="des">
                    Confirm Password
                  </label>
                  <input
                    className="form-control"
                    id="input-1"
                    type="text"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    {...register("confirmPassword")}
                  />
                  {errors.confirmPassword ? (
                    <p className="error" role="alert">
                      {errors.confirmPassword.message}
                    </p>
                  ) : (
                    ""
                  )}
                </div>

                <div className="form-group1">
                  <label className="form-label" htmlFor="des">
                    Salary
                  </label>
                  <input
                    className="form-control"
                    id="input-1"
                    type="text"
                    name="salary"
                    placeholder="Salary"
                    {...register("salary")}
                  />
                  {errors.salary ? (
                    <p className="error" role="alert">
                      {errors.salary.message}
                    </p>
                  ) : (
                    ""
                  )}
                </div>

                <div className="form-group1">
                  <label className="form-label" htmlFor="file">
                    Upload Resume
                  </label>
                  <input
                    className="form-control"
                    id="file"
                    name="resume"
                    type="file"
                    {...register("resume")}
                  />
                </div>

                <div
                  className="login_footer  d-flex justify-content-between"
                  style={{ marginTop: "1rem" }}
                >
                  <label className="cb-container">
                    <input type="checkbox" />
                    <span className="text-small">
                      Agree our terms and policy
                    </span>
                    <span className="checkmark" />
                  </label>
                  <Link className="text-muted" to="page-contact.html">
                    Lean more
                  </Link>
                </div>
                <div
                  className="form-group1"
                  style={{
                    position: "relative",
                    left: "6rem",
                    width: "22rem",
                  }}
                >
                  <button
                    className="btn btn-default hover-up w-100"
                    type="button"
                    name="login"
                    data-bs-dismiss="modal"
                    onClick={handleSubmit(onSubmit)}
                  >
                    save
                  </button>
                </div>
                <div
                  className="text-muted text-center"
                  style={{ position: "relative", top: "1rem", left: "2rem" }}
                >
                  Do you need support?{" "}
                  <Link to="page-contact.html">Contact Us</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="box-content">
        <div className="box-heading">
          <div className="box-title">
            <h3 className="mb-35">Candidates</h3>
          </div>
          <div className="box-breadcrumb">
            <div className="breadcrumbs">
              <ul>
                <li>
                  {" "}
                  <Link className="icon-home" to="/">
                    Admin
                  </Link>
                </li>
                <li>
                  <span>Candidates</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="section-box">
              <div className="container">
                <div className="panel-white mb-30">
                  <div className="box-padding">
                    <div className="row mb-30">
                      <div className="col-12">
                        <div
                          className="btn btn-apply-now"
                          data-bs-toggle="modal"
                          onClick={() => setId()}
                          data-bs-target="#ModalApplyJobForm"
                        >
                          Add Candidates
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      {data.map((list, index) => {
                        // console.log(list);
                        return (
                          <div
                            className="col-xl-3 col-lg-4 col-md-6"
                            key={index}
                          >
                            <div className="card-grid-2 hover-up">
                              <div className="card-grid-2-image-left">
                                <Link
                                  className="menudrop"
                                  id="dropdownMenu4"
                                  type="button"
                                  data-bs-toggle="dropdown"
                                  aria-expanded={dropdownMenu}
                                  data-bs-display="static"
                                />
                                <ul
                                  className="dropdown-menu dropdown-menu-light dropdown-menu-end"
                                  aria-labelledby="dropdownMenu4"
                                >
                                  <li>
                                    <Button
                                      className="dropdown-item"
                                      style={{
                                        background: "white",
                                        color: "black",
                                      }}
                                      onClick={() => {
                                        deleteCard(list._id);
                                      }}
                                    >
                                      Delete
                                    </Button>
                                  </li>
                                  <li
                                    data-bs-toggle="modal"
                                    data-bs-target="#ModalApplyJobForm"
                                  >
                                    <Button
                                      className="dropdown-item"
                                      style={{
                                        background: "white",
                                        color: "black",
                                      }}
                                      onClick={() => {
                                        setId(list._id);
                                      }}
                                    >
                                      Edit
                                    </Button>
                                  </li>
                                  <li>
                                    <Button
                                      className="dropdown-item"
                                      style={{
                                        background: "white",
                                        color: "black",
                                      }}
                                      onClick={() => {
                                        status(list.status, list._id);
                                      }}
                                    >
                                      {list.status ? "Block" : "UnBlock"}
                                    </Button>
                                  </li>
                                </ul>
                                <div
                                  className={`card-grid-2-image-rd ${
                                    list.status ? "online" : ""
                                  }`}
                                >
                                  <Link to="/candidates">
                                    <figure>
                                      <img
                                        src={`http://localhost:8000/api/image/${list.profilePhoto}`}
                                        alt="No image found"
                                      />
                                    </figure>
                                  </Link>
                                </div>
                                <div className="card-profile pt-10">
                                  <Link to="/candidates">
                                    <h5>{list.fullName}</h5>
                                  </Link>
                                  <span className="font-xs color-text-mutted">
                                    {list.post}
                                  </span>
                                  <div className="rate-reviews-small pt-5">
                                    <span>
                                      <img
                                        src="assets/imgs/template/icons/star.svg"
                                        alt="jobBox"
                                      />
                                    </span>
                                    <span>
                                      <img
                                        src="assets/imgs/template/icons/star.svg"
                                        alt="jobBox"
                                      />
                                    </span>
                                    <span>
                                      <img
                                        src="assets/imgs/template/icons/star.svg"
                                        alt="jobBox"
                                      />
                                    </span>
                                    <span>
                                      <img
                                        src="assets/imgs/template/icons/star.svg"
                                        alt="jobBox"
                                      />
                                    </span>
                                    <span>
                                      <img
                                        src="assets/imgs/template/icons/star.svg"
                                        alt="jobBox"
                                      />
                                    </span>
                                    <span className="ml-10 color-text-mutted font-xs">
                                      (65)
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="card-block-info">
                                <p className="font-xs color-text-paragraph-2">
                                  {list.bio}
                                </p>
                                <div className="card-2-bottom card-2-bottom-candidate mt-30">
                                  <div className="text-start">
                                    <Link
                                      className="btn btn-tags-sm  mr-5"
                                      to="/jobgrid"
                                    >
                                      {list.skills}
                                    </Link>
                                  </div>
                                </div>
                                <div className="employers-info align-items-center justify-content-center mt-15">
                                  <div className="row">
                                    <div className="col-6">
                                      <span className="d-flex align-items-center">
                                        <i className="fi-rr-marker mr-5 ml-0" />
                                        <span className="font-sm color-text-mutted">
                                          {list.location}
                                        </span>
                                      </span>
                                    </div>
                                    <div className="col-6">
                                      <span className="d-flex justify-content-end align-items-center">
                                        <i className="fi-rr-clock mr-5" />
                                        <span className="font-sm color-brand-1">
                                          ${list.salary} / hour
                                        </span>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
