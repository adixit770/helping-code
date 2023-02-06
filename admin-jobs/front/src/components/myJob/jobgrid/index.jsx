import { Button } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { deleteRequest, getRequest } from "../../apiHandler";
import MainLayout from "../../mainLayout";
import PostJobs from "../../Post_Job";

export default function JobGrid() {
  const [data, setData] = useState([]);
  const [postData, setPostData] = useState([]);
  const [id, setId] = useState();

  const token = localStorage.getItem("token");

  const getdata = async () => {
    const res = await getRequest(`/getjob/${token}`);
    // console.log("res====>", res);
    if (res.status == 200) {
      setData(res.add);
    }
  };

  ///////////////delete api/////////////
  const deleteCard = async (id) => {
    const res = await deleteRequest(`/deletejob/${id}/${token}`);
    // console.log(res);
    res.status == 200
      ? swal("DATA!", "Deleted successfully!", "success")
      : swal("Opps!", "Something went wrong!", "error");
    setPostData(res);
  };

  useEffect(() => {
    getdata();
  }, [postData]);

  // console.log("data====>", data);
  return id ? (
    <PostJobs id={id} />
  ) : (
    <MainLayout>
      <div>
        <div className="box-heading">
          <div className="box-title">
            <h3 className="mb-35">My Jobs</h3>
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
                  <span>My Jobs</span>
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
                    <div className="box-filters-job">
                      <div className="row">
                        <div className="col-xl-6 col-lg-5">
                          <span className="font-sm text-showing color-text-paragraph">
                            Showing 41-60 of 944 jobs
                          </span>
                        </div>
                        <div className="col-xl-6 col-lg-7 text-lg-end mt-sm-15">
                          <div className="display-flex2">
                            <div className="box-border mr-10">
                              <span className="text-sortby">Show:</span>
                              <div className="dropdown dropdown-sort">
                                <button
                                  className="btn dropdown-toggle"
                                  id="dropdownSort"
                                  type="button"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                  data-bs-display="static"
                                >
                                  <span>12</span>
                                  <i className="fi-rr-angle-small-down" />
                                </button>
                                <ul
                                  className="dropdown-menu dropdown-menu-light"
                                  aria-labelledby="dropdownSort"
                                >
                                  <li>
                                    <Link
                                      className="dropdown-item active"
                                      to="#"
                                    >
                                      10
                                    </Link>
                                  </li>
                                  <li>
                                    <Link className="dropdown-item" to="#">
                                      12
                                    </Link>
                                  </li>
                                  <li>
                                    <Link className="dropdown-item" to="#">
                                      20
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="box-border">
                              <span className="text-sortby">Sort by:</span>
                              <div className="dropdown dropdown-sort">
                                <button
                                  className="btn dropdown-toggle"
                                  id="dropdownSort2"
                                  type="button"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                  data-bs-display="static"
                                >
                                  <span>Newest Post</span>
                                  <i className="fi-rr-angle-small-down" />
                                </button>
                                <ul
                                  className="dropdown-menu dropdown-menu-light"
                                  aria-labelledby="dropdownSort2"
                                >
                                  <li>
                                    <Link
                                      className="dropdown-item active"
                                      to="#"
                                    >
                                      Newest Post
                                    </Link>
                                  </li>
                                  <li>
                                    <Link className="dropdown-item" to="#">
                                      Oldest Post
                                    </Link>
                                  </li>
                                  <li>
                                    <Link className="dropdown-item" to="#">
                                      Rating Post
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="box-view-type">
                              <Link className="view-type" to="/joblist">
                                <img
                                  src="assets/imgs/template/icons/icon-list.svg"
                                  alt="jobBox"
                                />
                              </Link>
                              <Link className="view-type" to="/jobgrid">
                                <img
                                  src="assets/imgs/template/icons/icon-grid-hover.svg"
                                  alt="jobBox"
                                />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      {data.map((list, index) => {
                        return (
                          // console.log("list==>", list),
                          <div
                            className="col-xl-3 col-lg-4 col-md-6 col-sm-12 col-12"
                            key={index}
                          >
                            <div className="card-grid-2 hover-up">
                              <div className="card-grid-2-image-left">
                                <span className="flash" />
                                <Link
                                  className="menudrop"
                                  id="dropdownMenu4"
                                  type="button"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
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
                                  <li>
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
                                      // onClick={() => {
                                      //   status(list.status, list._id);
                                      // }}
                                    >
                                      {list.status ? "Block" : "UnBlock"}
                                    </Button>
                                  </li>
                                </ul>
                                <div className="image-box">
                                  <img
                                    src={`http://localhost:8000/api/jobs/${list.companyLogo}`}
                                    alt="No image found"
                                  />
                                </div>
                                <div className="right-info">
                                  <Link
                                    className="name-job"
                                    to="company-details.html"
                                  >
                                    {list.companyName}
                                  </Link>
                                  <span className="location-small">
                                    {list.Jobtitle}
                                  </span>
                                </div>
                              </div>
                              <div className="card-block-info">
                                <h6>
                                  <Link to="job-details.html">
                                    {list.Jobtitle}
                                  </Link>
                                </h6>
                                <div className="mt-5">
                                  <span className="card-briefcase">
                                    {list.Workplacetype}
                                  </span>
                                  {/* <span className="card-time">
                                      4<span> minutes ago</span>
                                    </span> */}
                                </div>
                                <p className="font-sm color-text-paragraph mt-15">
                                  {list.jobdescription}
                                </p>
                                <div className="mt-30">
                                  <Link
                                    className="btn btn-grey-small mr-5"
                                    to="/jobgrid"
                                  >
                                    {list.Tags}
                                  </Link>

                                  <div className="card-2-bottom mt-30">
                                    <div className="row">
                                      <div className="col-lg-7 col-7">
                                        <span className="card-text-price">
                                          ${list.Salary}
                                        </span>
                                        <span className="text-muted">
                                          /Hour
                                        </span>
                                      </div>
                                      <div className="col-lg-5 col-5 text-end">
                                        <div
                                          className="btn btn-apply-now"
                                          data-bs-toggle="modal"
                                          data-bs-target="#ModalApplyJobForm"
                                        >
                                          Apply now
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="paginations">
                      <ul className="pager">
                        <li>
                          <Link className="pager-prev" to="#" />
                        </li>
                        <li>
                          <Link className="pager-number" to="#">
                            1
                          </Link>
                        </li>
                        <li>
                          <Link className="pager-number" to="#">
                            2
                          </Link>
                        </li>
                        <li>
                          <Link className="pager-number" to="#">
                            3
                          </Link>
                        </li>
                        <li>
                          <Link className="pager-number" to="#">
                            4
                          </Link>
                        </li>
                        <li>
                          <Link className="pager-number" to="#">
                            5
                          </Link>
                        </li>
                        <li>
                          <Link className="pager-number active" to="#">
                            6
                          </Link>
                        </li>
                        <li>
                          <Link className="pager-number" to="#">
                            7
                          </Link>
                        </li>
                        <li>
                          <Link className="pager-next" to="#" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="modal fade"
          id="ModalApplyJobForm"
          tabIndex={-1}
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content apply-job-form">
              <button
                className="btn-close"
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
              <div className="modal-body pl-30 pr-30 pt-50">
                <div className="text-center">
                  <p className="font-sm text-brand-2">Job Application </p>
                  <h2 className="mt-10 mb-5 text-brand-1 text-capitalize">
                    Start your career today
                  </h2>
                  <p className="font-sm text-muted mb-30">
                    Please fill in your information and send it to the employer.{" "}
                  </p>
                </div>
                <form
                  className="login-register text-start mt-20 pb-30"
                  action="#"
                >
                  <div className="form-group">
                    <label className="form-label" htmlFor="input-1">
                      Full Name *
                    </label>
                    <input
                      className="form-control"
                      id="input-1"
                      type="text"
                      required
                      name="fullname"
                      placeholder="Steven Job"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="input-2">
                      Email *
                    </label>
                    <input
                      className="form-control"
                      id="input-2"
                      type="email"
                      required
                      name="emailaddress"
                      placeholder="stevenjob@gmail.com"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="number">
                      Contact Number *
                    </label>
                    <input
                      className="form-control"
                      id="number"
                      type="text"
                      required
                      name="phone"
                      placeholder="(+01) 234 567 89"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="des">
                      Description
                    </label>
                    <input
                      className="form-control"
                      id="des"
                      type="text"
                      required
                      name="Description"
                      placeholder="Your description..."
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="file">
                      Upload Resume
                    </label>
                    <input
                      className="form-control"
                      id="file"
                      name="resume"
                      type="file"
                    />
                  </div>
                  <div className="login_footer form-group d-flex justify-content-between">
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
                  <div className="form-group">
                    <button
                      className="btn btn-default hover-up w-100"
                      type="submit"
                      name="login"
                    >
                      Apply Job
                    </button>
                  </div>
                  <div className="text-muted text-center">
                    Do you need support?{" "}
                    <Link to="page-contact.html">Contact Us</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
