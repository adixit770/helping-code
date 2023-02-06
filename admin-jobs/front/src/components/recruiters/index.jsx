import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MainLayout from "../mainLayout";
import { Button } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  deleteRequest,
  getRequest,
  postRequest,
  putRequest,
} from "../apiHandler";
import swal from "sweetalert";

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required(),
  password: yup.string().required(),
  confirmPassword: yup.string().required(),
  mobile: yup.string().required(),
  organization: yup.string().required(),
  sector: yup.string().required(),
  location: yup.string().required(),
});
export default function Recruiters() {
  const [data, setData] = useState([]);
  const [id, setId] = useState();
  const [dropdownMenu, setDropdownMenu] = useState(false);
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
  } = useForm({ resolver: yupResolver(schema) });

  const logo = watch("logo");

  const getDataById = async () => {
    const getEmployee = await getRequest(`/getemployeeById/${id}/${token}`);
    if (id) {
      if (getEmployee.status == 200) {
        const {
          username,
          email,
          mobile,
          organization,
          sector,
          location,
        } = getEmployee.add;
        setValue("name", username);
        setValue("sector", sector);
        setValue("organization", organization);
        setValue("email", email);
        setValue("mobile", mobile);
        setValue("location", location);
      } else {
        localStorage.removeItem("token");
      }
    } else {
      setValue("name", "");
      setValue("sector", "");
      setValue("organization", "");
      setValue("email", "");
      setValue("mobile", "");
      setValue("location", "");
    }
  };

  // ///////////////get api//////////

  const getdata = async () => {
    const res = await getRequest(`/getemployee/${token}`);
    console.log("res====>", res);
    if (res.status == 200) {
      setData(res.add);
    }
  };

  const onSubmit = async (value) => {
    console.log("value", value, id);
    const {
      name,
      email,
      password,
      confirmPassword,
      mobile,
      organization,
      sector,
      location,
    } = value;
    console.log(value);
    const formData = new FormData();
    formData.append("logo", logo[0]);
    formData.append("name", name);
    formData.append("organization", organization);
    formData.append("sector", sector);
    formData.append("email", email);
    formData.append("mobile", mobile);
    formData.append("password", password);
    formData.append("confirmPassword", confirmPassword);
    formData.append("location", location);
    // console.log("formData==>", formData.get("name"));

    const res = id
      ? await putRequest(`/updateEmployee/${id}/${token}`, formData)
      : await postRequest(`/addemployee/${token}`, formData);
    res.status == 200
      ? swal("DATA!", "Added successfully!", "success")
      : swal("Opps!", "Something went wrong!", "error");
    console.log("rers===>", res);
    setPostData(res);
    if (!res.auth) {
      localStorage.removeItem("token");
      history("/");
    }
    reset();
    setId();
    setDropdownMenu(true);
  };

  // ///////////////delete api/////////////
  const deleteCard = async (id) => {
    const res = await deleteRequest(`/deleteEmployee/${id}/${token}`);
    console.log(res);
    res.status == 200
      ? swal("DATA!", "Deleted successfully!", "success")
      : swal("Opps!", "Something went wrong!", "error");
    setPostData(res);
  };
  // ///////////////////ststus check/////////////
  const status = async (statusActive, statusId) => {
    const temp = { status: !statusActive };
    const res = await putRequest(`/updateemployee/${statusId}/${token}`, temp);
    console.log(res);

    setPostData(res.add);
    setDropdownMenu(true);
  };
  // // console.log("==========>>>>>>", data);
  useEffect(() => {
    if (id) {
      getDataById();
    } else {
      getdata();
      reset();
    }
    setDropdownMenu(true);
  }, [postData, id]);

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
                    Company Logo
                  </label>
                  <input
                    className="form-control"
                    id="file"
                    name="logo"
                    type="file"
                    {...register("logo")}
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
                    name="name"
                    placeholder="Full Name"
                    {...register("name")}
                  />
                  {errors.name ? (
                    <p className="error" role="alert">
                      {errors.name.message}
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
                    Organization Name
                  </label>
                  <input
                    className="form-control"
                    id="des"
                    type="text"
                    name="organization"
                    placeholder="organization Name"
                    {...register("organization")}
                  />
                  {errors.organization ? (
                    <p className="error" role="alert">
                      {errors.organization.message}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="form-group1">
                  <label className="form-label" htmlFor="des">
                    Sector
                  </label>
                  <input
                    className="form-control"
                    id="input-1"
                    type="text"
                    name="Sector"
                    placeholder="Sector"
                    {...register("sector")}
                  />
                  {errors.sector ? (
                    <p className="error" role="alert">
                      {errors.sector.message}
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
                    placeholder="Location"
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
                <div
                  className="login_footer  d-flex justify-content-between"
                  style={{ position: "relative", top: "6rem", left: "-22rem" }}
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
                    left: "24rem",
                    width: "22rem",
                    top: "-3rem",
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
                  style={{ position: "relative", top: "42px", right: "20rem" }}
                >
                  Do you need support?{" "}
                  <Link to="page-contact.html">Contact Us</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="box-heading">
          <div className="box-title">
            <h3 className="mb-35">Recruiters</h3>
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
                  <span>Recruiters</span>
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
                          Add Recruiters
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      {data.map((list, index) => {
                        console.log("===>", list);
                        return (
                          <div className="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-12">
                            <div className="card-grid-1 hover-up wow animate__animated animate__fadeIn">
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
                              <div className="image-box">
                                <Link to="company-details.html">
                                  <img
                                    style={{
                                      height: "9rem",
                                      width: "10rem",
                                      borderRadius: "23px",
                                    }}
                                    src={`http://localhost:8000/api/employee/${list.companyLogo}`}
                                    alt="No image found"
                                  />
                                </Link>
                              </div>
                              <div className="info-text mt-10">
                                <h4 className="font-bold">
                                  <Link to="company-details.html">
                                    {list.organization}
                                  </Link>
                                </h4>
                                <h6 className="font-bold">
                                  <Link to="company-details.html">
                                    {list.username}
                                  </Link>
                                </h6>
                                <span className="card-location">
                                  {list.location}
                                </span>
                                <div className="mt-30">
                                  <Link
                                    className="btn btn-grey-big"
                                    to="/jobgrid"
                                  >
                                    <span>12</span>
                                    <br />
                                    <span>
                                      {list.status
                                        ? "Jobs Closed"
                                        : "Jobs Open"}
                                    </span>
                                  </Link>
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
