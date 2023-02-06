import React from "react";
import { NavLink } from "react-router-dom";
export default function Navbar() {
    return (
      <>
 
              
        {/* <!-- Navbar Starts Here--> */}
        <header>
          <nav className="navbar navbar-expand-lg navbar-light main_nav-bar ">
            <div className="container">
              <a className="navbar-brand" href="#">
                <img src="assets/images/graynod_logo.svg" alt="" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                  <NavLink
                  to={"/"}
                  style={({ isActive }) =>
                    isActive
                      ? {
                          color: "red",
                          background: "bule",
                        }
                      : { color: "white", background: "black" }
                  }
                >
                
                      Home
                      </NavLink>
                  </li>
                  <li className="nav-item">
                  <NavLink
                  to={"/todo"}
                  style={({ isActive }) =>
                    isActive
                      ? {
                          color: "red",
                          background: "bule",
                        }
                      : { color: "white", background: "black" }
                  }
                >
                      Business
                      </NavLink>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="card">
                      People
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="news">
                      News
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="jobs">
                      Jobs
                    </a>
                  </li>
                </ul>
                <div className="other_links ms-auto">
                  <a href="createOption" className="join text-white">
                    Join Now
                  </a>
                  <a href="login" className="btn register">
                    <i
                      className="fi fi-rr-user input_user text-white me-1 lh-0"
                    ></i>
                    Sign In
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </>
    );
 
    }
