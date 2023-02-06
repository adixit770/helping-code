import React, { useEffect } from "react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { getRequest } from "../apiHandler";

export default function SideNav({ children }) {
  const [data, setData] = useState();
  const [show, setShow] = useState(true);
  const history = useNavigate();

  const [profile, setProfile] = useState();
  const token = localStorage.getItem("token");
  const getProfile = async () => {
    if (!!token) {
      const getProfileRes = await getRequest(`/getProfile/${token}`);
      console.log("getProfileRes===>", getProfileRes.status);
      if (getProfileRes.status !== 200) {
        history("/");
      } else {
        setData(getProfileRes.add[0].fullName);
        setProfile(getProfileRes.add[0].profilePhoto);
        // console.log("fullName=====>", getProfileRes.add[0]);
      }
    } else {
      history("/");
    }
  };
  useEffect(() => {
    getProfile();
    if (!localStorage.getItem("token")) {
      localStorage.removeItem("token");
    }
  }, [localStorage.getItem("token"), data,profile]);

  return (
    <div>
      <header className="header sticky-bar">
        <div className="container">
          <div className="main-header">
            <div className="header-left">
              <div className="header-logo">
                <NavLink className="d-flex" to="/Dashboard">
                  <img alt="jobBox" src="assets/imgs/page/dashboard/logo.svg" />
                </NavLink>
              </div>
              <span className="btn btn-grey-small ml-10">Admin area</span>
            </div>
            <div className="header-search">
              <div className="box-search">
                <form action>
                  <input
                    className="form-control input-search"
                    type="text"
                    name="keyword"
                    placeholder="Search"
                  />
                </form>
              </div>
            </div>
            <div className="header-menu d-none d-md-block">
              <ul>
                <li>
                  {" "}
                  <a href="http://wp.alithemes.com/html/jobbox/demos/index.html">
                    Home{" "}
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="http://wp.alithemes.com/html/jobbox/demos/page-about.html">
                    About us{" "}
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="http://wp.alithemes.com/html/jobbox/demos/page-contact.html">
                    Contact
                  </a>{" "}
                </li>
              </ul>
            </div>
            <div className="header-right">
              <div className="block-signin">
                <NavLink
                  className="btn btn-default icon-edit hover-up"
                  to="/postJobs"
                >
                  Post Job
                </NavLink>
                <div className="dropdown d-inline-block">
                  <NavLink
                    className="btn btn-notify"
                    id="dropdownNotify"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    data-bs-display="static"
                  />
                  <ul
                    style={{ position: "absolute", left: "-3rem" }}
                    className="dropdown-menu dropdown-menu-light dropdown-menu-end"
                    aria-labelledby="dropdownNotify"
                  >
                    <li>
                      <NavLink className="dropdown-item active" to="#">
                        10 notifications
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="#">
                        12 messages
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="dropdown-item" to="#">
                        20 replies
                      </NavLink>
                    </li>
                  </ul>
                </div>
                <div className="member-login">
                  <img
                    alt=""
                    src={`http://localhost:8000/api/image/${profile}`}
                  />

                  <div className="info-member">
                    {" "}
                    <strong className="color-brand-1">{data}</strong>
                    <div className="dropdown">
                      <NavLink
                        className="font-xs color-text-paragraph-2 icon-down"
                        id="dropdownProfile"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        data-bs-display="static"
                      >
                        Super Admin
                      </NavLink>
                      <ul
                        style={{ position: "absolute", left: "-4rem" }}
                        className="dropdown-menu dropdown-menu-light dropdown-menu-end"
                        aria-labelledby="dropdownProfile"
                      >
                        <li>
                          <NavLink className="dropdown-item" to="/profile">
                            Profiles
                          </NavLink>
                        </li>

                        <li>
                          <NavLink className="dropdown-item" to="/">
                            <div
                              onClick={() => {
                                localStorage.removeItem("token");
                              }}
                            >
                              Logout
                            </div>
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div
        className="burger-icon burger-icon-white"
        onClick={() => {
          show ? setShow(false) : setShow(true);
        }}
      >
        <span className="burger-icon-top" />
        <span className="burger-icon-mid" />
        <span className="burger-icon-bottom" />
      </div>

      <div
        className={
          show
            ? "mobile-header-active mobile-header-wrapper-style"
            : "mobile-header-active mobile-header-wrapper-style.sidebar-visible"
        }
      >
        <div className="mobile-header-wrapper-inner">
          <div className="mobile-header-content-area">
            <div className="perfect-scroll">
              <div className="mobile-search mobile-header-border mb-30">
                <form action="#">
                  <input type="text" placeholder="Search…" />
                  <i className="fi-rr-search" />
                </form>
              </div>
              <div className="mobile-menu-wrap mobile-header-border">
                <nav>
                  <ul className="main-menu">
                    <li>
                      {" "}
                      <NavLink className="dashboard2 active" to="/Dashboard">
                        <img
                          src="assets/imgs/page/dashboard/dashboard.svg"
                          alt="jobBox"
                        />
                        <span className="name">Dashboard</span>
                      </NavLink>
                    </li>
                    <li>
                      {" "}
                      <NavLink className="dashboard2" to="/candidates">
                        <img
                          src="assets/imgs/page/dashboard/candidates.svg"
                          alt="jobBox"
                        />
                        <span className="name">Candidates</span>
                      </NavLink>
                    </li>
                    <li>
                      {" "}
                      <NavLink className="dashboard2" to="/recruiters">
                        <img
                          src="assets/imgs/page/dashboard/recruiters.svg"
                          alt="jobBox"
                        />
                        <span className="name">Recruiters</span>
                      </NavLink>
                    </li>
                    <li>
                      {" "}
                      <NavLink className="dashboard2" to="/jobgrid">
                        <img
                          src="assets/imgs/page/dashboard/jobs.svg"
                          alt="jobBox"
                        />
                        <span className="name">My Jobs</span>
                      </NavLink>
                    </li>

                    <li>
                      {" "}
                      <NavLink className="dashboard2" to="/profile">
                        <img
                          src="assets/imgs/page/dashboard/profiles.svg"
                          alt="jobBox"
                        />
                        <span className="name">My Profiles</span>
                      </NavLink>
                    </li>
                    <li>
                      {" "}
                      <NavLink className="dashboard2" to="/">
                        <img
                          src="assets/imgs/page/dashboard/logout.svg"
                          alt="jobBox"
                        />
                        <span
                          className="name"
                          onClick={() => {
                            localStorage.removeItem("token");
                          }}
                        >
                          Logout
                        </span>
                      </NavLink>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="mobile-account">
                <h6 className="mb-10">Your Account</h6>
                <ul className="mobile-menu font-heading">
                  <li>
                    <NavLink to="/profile">Profile</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">Work Preferences</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">Account Settings</NavLink>
                  </li>
                  <li>
                    <NavLink to="#">Go Pro</NavLink>
                  </li>
                  <li>
                    <NavLink to="/Login">Sign Out</NavLink>
                  </li>
                </ul>
                <div className="mb-15 mt-15">
                  {" "}
                  <NavLink
                    className="btn btn-default icon-edit hover-up"
                    to="/postJob"
                  >
                    Post Job
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="main">
        <div className="nav">
          <NavLink className="btn btn-expanded " />
          <nav className="nav-main-menu">
            <ul className="main-menu">
              <li>
                {" "}
                <NavLink className="dashboard2 " to="/Dashboard">
                  <img
                    src="assets/imgs/page/dashboard/dashboard.svg"
                    alt="jobBox"
                  />
                  <span className="name">Dashboard</span>
                </NavLink>
              </li>
              <li>
                {" "}
                <NavLink className="dashboard2 " to="/candidates">
                  <img
                    src="assets/imgs/page/dashboard/candidates.svg"
                    alt="jobBox"
                  />
                  <span className="name">Candidates</span>
                </NavLink>
              </li>
              <li>
                {" "}
                <NavLink className="dashboard2" to="/recruiters">
                  <img
                    src="assets/imgs/page/dashboard/recruiters.svg"
                    alt="jobBox"
                  />
                  <span className="name">Recruiters</span>
                </NavLink>
              </li>
              <li>
                {" "}
                <NavLink className="dashboard2" to="/jobgrid">
                  <img src="assets/imgs/page/dashboard/jobs.svg" alt="jobBox" />
                  <span className="name">My Jobs</span>
                </NavLink>
              </li>

              <li>
                {" "}
                <NavLink className="dashboard2" to="/profile">
                  <img
                    src="assets/imgs/page/dashboard/profiles.svg"
                    alt="jobBox"
                  />
                  <span className="name">My Profiles</span>
                </NavLink>
              </li>
              {/* <li>
                {" "}
                <NavLink className="dashboard2 " to="/myResume">
                  <img
                    src="assets/imgs/page/dashboard/cv-manage.svg"
                    alt="jobBox"
                  />
                  <span className="name">CV Manage</span>
                </NavLink>
              </li> */}

              <li>
                {" "}
                <NavLink className="dashboard2" to="/">
                  <img
                    src="assets/imgs/page/dashboard/logout.svg"
                    alt="jobBox"
                  />
                  <span
                    className="name"
                    onClick={() => {
                      localStorage.removeItem("token");
                    }}
                  >
                    Logout
                  </span>
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="border-bottom mb-20 mt-20" />
          <div className="box-profile-completed text-center mb-30">
            <div id="circle-staticstic-demo" />
            <h6 className="mb-10">Profile Completed</h6>
            <p className="font-xs color-text-mutted">
              Please add detailed information to your profile. This will help
              you develop your career more quickly.
            </p>
          </div>
          <div className="sidebar-border-bg mt-50">
            <span className="text-grey">WE ARE</span>
            <span className="text-hiring">HIRING</span>
            <p className="font-xxs color-text-paragraph mt-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae architecto
            </p>
            <div className="mt-15">
              <NavLink className="btn btn-paragraph-2" to="#">
                Know More
              </NavLink>
            </div>
          </div>
        </div>
        <div className="box-content">
          {children}
          <footer className="footer mt-20">
            <div className="container">
              <div className="box-footer">
                <div className="row">
                  <div className="col-md-6 col-sm-12 text-center text-md-end mb-25">
                    <ul className="menu-footer">
                      <li>
                        <NavLink to="#">About</NavLink>
                      </li>
                      <li>
                        <NavLink to="#">Careers</NavLink>
                      </li>
                      <li>
                        <NavLink to="#">Policy</NavLink>
                      </li>
                      <li>
                        <NavLink to="#">Contact</NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
