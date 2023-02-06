import React, { Component } from 'react'
import DashNavbar from '../dashboardNavbar'

export default class ManageSettings extends Component {
  render() {
    return (
        <>
        {/* header start here */}
        <DashNavbar/>
        {/* header end here */}
        {/* manage setting page start here */}
        <div className="manage_setting_page top_spacing">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="right_side_tabs common_box p-0">
                  <ul
                    className="nav nav-tabs flex-column column_tabs"
                    id="myTab"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="home-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#home"
                        type="button"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                      >
                        <i className="fi fi-rr-settings tab_icon" /> Manage Setting{" "}
                        <i className="fi fi-rs-angle-right ms-auto" />
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link border-0"
                        id="profile-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#profile"
                        type="button"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                      >
                        <i className="fi fi-rr-bell tab_icon" /> Notification{" "}
                        <i className="fi fi-rs-angle-right ms-auto" />
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link border-0"
                        id="privacy-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#privacy"
                        type="button"
                        role="tab"
                        aria-controls="privacy"
                        aria-selected="false"
                      >
                        <i className="fi fi-rr-shield-exclamation tab_icon lh-0" />{" "}
                        Privacy <i className="fi fi-rs-angle-right ms-auto" />
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div className="manage_setting_list tab-content " id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <h2 className="page_title font-16 font-M mb-3">Manage Setting</h2>
                    {/* accordion start here */}
                    <div
                      className="accordion setting_acordion"
                      id="accordionExample10"
                    >
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                          <button
                            className="accordion-button flex-wrap manage_setting_icon"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            <span className="accordion_icon d-flex align-items-center justify-content-center">
                              <img src="assets/images/svg_icon/phone.svg" />
                            </span>
                            <h3 className="font-14 font-M mb-1 w-100">
                              Phone Number
                            </h3>
                            <p className="font-12 mb-0">
                              Edit and save to update your new phone number
                            </p>
                          </button>
                        </h2>
                        <div
                          id="collapseOne"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample1"
                        >
                          <div className="accordion-body">
                            <div className="row">
                              <div className="col-md-6 mb-3 input_group">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder={+91}
                                  defaultValue="+91 85421 56441"
                                />
                                <label className="input_title">Phone Number</label>
                              </div>
                            </div>
                            <div className="modal_post_btn">
                              <button
                                type="button"
                                className="btn btn-primary rounded-pill"
                              >
                                Save
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                          <button
                            className="accordion-button flex-wrap manage_setting_icon"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="true"
                            aria-controls="collapseTwo"
                          >
                            <span className="accordion_icon d-flex align-items-center justify-content-center">
                              <img src="assets/images/svg_icon/email.svg" />
                            </span>
                            <h3 className="font-14 font-M mb-1 w-100">
                              Email Address
                            </h3>
                            <p className="font-12 mb-0">
                              Edit and save to update your new email id
                            </p>
                          </button>
                        </h2>
                        <div
                          id="collapseTwo"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#accordionExample1"
                        >
                          <div className="accordion-body">
                            <div className="row">
                              <div className="col-md-6 mb-3 input_group">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="user@gmail.com "
                                  defaultValue="davidsmith452@gmail.com"
                                />
                                <label className="input_title">Email Id</label>
                              </div>
                            </div>
                            <div className="modal_post_btn">
                              <button
                                type="button"
                                className="btn btn-primary rounded-pill"
                              >
                                Save
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                          <button
                            className="accordion-button flex-wrap manage_setting_icon"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="true"
                            aria-controls="collapseThree"
                          >
                            <span className="accordion_icon d-flex align-items-center justify-content-center">
                              <img src="assets/images/svg_icon/lock.svg" />
                            </span>
                            <h3 className="font-14 font-M mb-1 w-100">
                              Change Password
                            </h3>
                            <p className="font-12 mb-0">
                              Change your password to update
                            </p>
                          </button>
                        </h2>
                        <div
                          id="collapseThree"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingThree"
                          data-bs-parent="#accordionExample1"
                        >
                          <div className="accordion-body password_change">
                            <div className="row">
                              <div className="col-md-6">
                                <div className="mb-3 input_group">
                                  <input
                                    type="password"
                                    className="form-control"
                                    placeholder="******"
                                    defaultValue=""
                                  />
                                  <label className="input_title">
                                    Current Password
                                  </label>
                                </div>
                                <div className="mb-3 input_group">
                                  <input
                                    type="password"
                                    className="form-control"
                                    placeholder="******"
                                    defaultValue=""
                                  />
                                  <label className="input_title">New Password</label>
                                </div>
                                <div className="mb-3 input_group">
                                  <input
                                    type="password"
                                    className="form-control"
                                    placeholder="******"
                                    defaultValue=""
                                  />
                                  <label className="input_title">
                                    Confirm New Password
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="modal_post_btn">
                              <button
                                type="button"
                                className="btn btn-primary rounded-pill"
                              >
                                Save
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* accordion end here */}
                  </div>
                  <div
                    className="tab-pane fade"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <h2 className="page_title font-16 font-M mb-3">
                      Manage Notification
                    </h2>
                    {/* accordion start here */}
                    <div
                      className="accordion setting_acordion"
                      id="accordionExample12"
                    >
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFour">
                          <button
                            className="accordion-button flex-wrap"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFour"
                            aria-expanded="true"
                            aria-controls="collapseFour"
                          >
                            <h3 className="font-14 font-M mb-1 w-100">
                              General Posts
                            </h3>
                            <p className="font-12 mb-0">
                              Manage general posts notifications by toggle
                            </p>
                          </button>
                        </h2>
                        <div
                          id="collapseFour"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingFour"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body notification_switch">
                            <div className="row custom_gap">
                              <div className="col-md-4">
                                <span className="notification_box d-inline-flex align-items-center">
                                  <h6 className="box_title_main font-12 font-M dark_text_color mb-0">
                                    Allow notifications
                                  </h6>
                                  <label className="switch ms-auto ">
                                    <input type="checkbox" />
                                    <span className="slider round d-flex align-items-center" />
                                  </label>
                                </span>
                              </div>
                              <div className="col-md-4">
                                <span className="notification_box d-inline-flex align-items-center">
                                  <h6 className="box_title_main font-12 font-M dark_text_color mb-0">
                                    Email
                                  </h6>
                                  <label className="switch ms-auto ">
                                    <input type="checkbox" />
                                    <span className="slider round d-flex align-items-center" />
                                  </label>
                                </span>
                              </div>
                              <div className="col-md-4">
                                <span className="notification_box d-inline-flex align-items-center">
                                  <h6 className="box_title_main font-12 font-M dark-text mb-0">
                                    Push
                                  </h6>
                                  <label className="switch ms-auto ">
                                    <input type="checkbox" />
                                    <span className="slider round d-flex align-items-center" />
                                  </label>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFive">
                          <button
                            className="accordion-button flex-wrap"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFive"
                            aria-expanded="true"
                            aria-controls="collapseFive"
                          >
                            <h3 className="font-14 font-M mb-1 w-100">
                              Post from graynod
                            </h3>
                            <p className="font-12 mb-0">
                              Manage post from graynod notifications by toggle
                            </p>
                          </button>
                        </h2>
                        <div
                          id="collapseFive"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingFive"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body notification_switch">
                            <div className="row custom_gap">
                              <div className="col-md-4">
                                <span className="notification_box d-inline-flex align-items-center">
                                  <h6 className="box_title_main font-12 font-M dark_text_color mb-0">
                                    Allow notifications
                                  </h6>
                                  <label className="switch ms-auto ">
                                    <input type="checkbox" />
                                    <span className="slider round d-flex align-items-center" />
                                  </label>
                                </span>
                              </div>
                              <div className="col-md-4">
                                <span className="notification_box d-inline-flex align-items-center">
                                  <h6 className="box_title_main font-12 font-M dark_text_color mb-0">
                                    Email
                                  </h6>
                                  <label className="switch ms-auto ">
                                    <input type="checkbox" />
                                    <span className="slider round d-flex align-items-center" />
                                  </label>
                                </span>
                              </div>
                              <div className="col-md-4">
                                <span className="notification_box d-inline-flex align-items-center">
                                  <h6 className="box_title_main font-12 font-M dark-text mb-0">
                                    Push
                                  </h6>
                                  <label className="switch ms-auto ">
                                    <input type="checkbox" />
                                    <span className="slider round d-flex align-items-center" />
                                  </label>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingSix">
                          <button
                            className="accordion-button flex-wrap"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseSix"
                            aria-expanded="true"
                            aria-controls="collapseSix"
                          >
                            <h3 className="font-14 font-M mb-1 w-100">
                              Business Hub
                            </h3>
                            <p className="font-12 mb-0">
                              Manage Marketplace notifications by toggle
                            </p>
                          </button>
                        </h2>
                        <div
                          id="collapseSix"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingSix"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body notification_switch">
                            <div className="row custom_gap">
                              <div className="col-md-4">
                                <span className="notification_box d-inline-flex align-items-center">
                                  <h6 className="box_title_main font-12 font-M dark_text_color mb-0">
                                    Allow notifications
                                  </h6>
                                  <label className="switch ms-auto ">
                                    <input type="checkbox" />
                                    <span className="slider round d-flex align-items-center" />
                                  </label>
                                </span>
                              </div>
                              <div className="col-md-4">
                                <span className="notification_box d-inline-flex align-items-center">
                                  <h6 className="box_title_main font-12 font-M dark_text_color mb-0">
                                    Email
                                  </h6>
                                  <label className="switch ms-auto ">
                                    <input type="checkbox" />
                                    <span className="slider round d-flex align-items-center" />
                                  </label>
                                </span>
                              </div>
                              <div className="col-md-4">
                                <span className="notification_box d-inline-flex align-items-center">
                                  <h6 className="box_title_main font-12 font-M dark-text mb-0">
                                    Push
                                  </h6>
                                  <label className="switch ms-auto ">
                                    <input type="checkbox" />
                                    <span className="slider round d-flex align-items-center" />
                                  </label>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingSeven">
                          <button
                            className="accordion-button flex-wrap"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseSeven"
                            aria-expanded="true"
                            aria-controls="collapseSeven"
                          >
                            <h3 className="font-14 font-M mb-1 w-100">Jobs</h3>
                            <p className="font-12 mb-0">
                              Manage Jobs notifications by toggle
                            </p>
                          </button>
                        </h2>
                        <div
                          id="collapseSeven"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingSeven"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body notification_switch">
                            <div className="row custom_gap">
                              <div className="col-md-4">
                                <span className="notification_box d-inline-flex align-items-center">
                                  <h6 className="box_title_main font-12 font-M dark_text_color mb-0">
                                    Allow notifications
                                  </h6>
                                  <label className="switch ms-auto ">
                                    <input type="checkbox" />
                                    <span className="slider round d-flex align-items-center" />
                                  </label>
                                </span>
                              </div>
                              <div className="col-md-4">
                                <span className="notification_box d-inline-flex align-items-center">
                                  <h6 className="box_title_main font-12 font-M dark_text_color mb-0">
                                    Email
                                  </h6>
                                  <label className="switch ms-auto ">
                                    <input type="checkbox" />
                                    <span className="slider round d-flex align-items-center" />
                                  </label>
                                </span>
                              </div>
                              <div className="col-md-4">
                                <span className="notification_box d-inline-flex align-items-center">
                                  <h6 className="box_title_main font-12 font-M dark-text mb-0">
                                    Push
                                  </h6>
                                  <label className="switch ms-auto ">
                                    <input type="checkbox" />
                                    <span className="slider round d-flex align-items-center" />
                                  </label>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingEight">
                          <button
                            className="accordion-button flex-wrap"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseEight"
                            aria-expanded="true"
                            aria-controls="collapseEight"
                          >
                            <h3 className="font-14 font-M mb-1 w-100">News</h3>
                            <p className="font-12 mb-0">
                              Manage News notifications by toggle
                            </p>
                          </button>
                        </h2>
                        <div
                          id="collapseEight"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingEight"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body notification_switch">
                            <div className="row custom_gap">
                              <div className="col-md-4">
                                <span className="notification_box d-inline-flex align-items-center">
                                  <h6 className="box_title_main font-12 font-M dark_text_color mb-0">
                                    Allow notifications
                                  </h6>
                                  <label className="switch ms-auto ">
                                    <input type="checkbox" />
                                    <span className="slider round d-flex align-items-center" />
                                  </label>
                                </span>
                              </div>
                              <div className="col-md-4">
                                <span className="notification_box d-inline-flex align-items-center">
                                  <h6 className="box_title_main font-12 font-M dark_text_color mb-0">
                                    Email
                                  </h6>
                                  <label className="switch ms-auto ">
                                    <input type="checkbox" />
                                    <span className="slider round d-flex align-items-center" />
                                  </label>
                                </span>
                              </div>
                              <div className="col-md-4">
                                <span className="notification_box d-inline-flex align-items-center">
                                  <h6 className="box_title_main font-12 font-M dark-text mb-0">
                                    Push
                                  </h6>
                                  <label className="switch ms-auto ">
                                    <input type="checkbox" />
                                    <span className="slider round d-flex align-items-center" />
                                  </label>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingNine">
                          <button
                            className="accordion-button flex-wrap"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseNine"
                            aria-expanded="true"
                            aria-controls="collapseNine"
                          >
                            <h3 className="font-14 font-M mb-1 w-100">Group</h3>
                            <p className="font-12 mb-0">
                              Manage Group notifications by toggle
                            </p>
                          </button>
                        </h2>
                        <div
                          id="collapseNine"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingNine"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body notification_switch">
                            <div className="row custom_gap">
                              <div className="col-md-4">
                                <span className="notification_box d-inline-flex align-items-center">
                                  <h6 className="box_title_main font-12 font-M dark_text_color mb-0">
                                    Allow notifications
                                  </h6>
                                  <label className="switch ms-auto ">
                                    <input type="checkbox" />
                                    <span className="slider round d-flex align-items-center" />
                                  </label>
                                </span>
                              </div>
                              <div className="col-md-4">
                                <span className="notification_box d-inline-flex align-items-center">
                                  <h6 className="box_title_main font-12 font-M dark_text_color mb-0">
                                    Email
                                  </h6>
                                  <label className="switch ms-auto ">
                                    <input type="checkbox" />
                                    <span className="slider round d-flex align-items-center" />
                                  </label>
                                </span>
                              </div>
                              <div className="col-md-4">
                                <span className="notification_box d-inline-flex align-items-center">
                                  <h6 className="box_title_main font-12 font-M dark-text mb-0">
                                    Push
                                  </h6>
                                  <label className="switch ms-auto ">
                                    <input type="checkbox" />
                                    <span className="slider round d-flex align-items-center" />
                                  </label>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* accordion end here */}
                  </div>
                  <div
                    className="tab-pane fade"
                    id="privacy"
                    role="tabpanel"
                    aria-labelledby="privacy-tab"
                  >
                    <h2 className="page_title font-16 font-M mb-3">
                      Manage Your Privacy
                    </h2>
                    {/* accordion start here */}
                    <div
                      className="accordion setting_acordion"
                      id="accordionExample12"
                    >
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFour">
                          <button
                            className="accordion-button flex-wrap"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFour"
                            aria-expanded="true"
                            aria-controls="collapseFour"
                          >
                            <h3 className="font-14 font-M mb-1 w-100">Full Name</h3>
                            <p className="font-12 mb-0">
                              Control who sees your full name (All others will view
                              your name as David Smith.)
                            </p>
                          </button>
                        </h2>
                        <div
                          id="collapseFour"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingFour"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body privacy_switch">
                            <div className="row custom_gap">
                              <div className="col-md-4">
                                <div className="form-check custom_radio ps-0">
                                  <input
                                    className="form-check-input d-none"
                                    type="radio"
                                    name="exampleRadios"
                                    id="exampleRadios1"
                                    defaultValue="option1"
                                    defaultChecked=""
                                  />
                                  <label
                                    className="form-check-label font-12 font-M"
                                    htmlFor="exampleRadios1"
                                  >
                                    Graynod Connection
                                  </label>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="form-check custom_radio ps-0">
                                  <input
                                    className="form-check-input d-none"
                                    type="radio"
                                    name="exampleRadios"
                                    id="exampleRadios2"
                                    defaultValue="option2"
                                  />
                                  <label
                                    className="form-check-label font-12 font-M"
                                    htmlFor="exampleRadios2"
                                  >
                                    Anyone on Graynode
                                  </label>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="form-check custom_radio ps-0">
                                  <input
                                    className="form-check-input d-none"
                                    type="radio"
                                    name="exampleRadios"
                                    id="exampleRadios3"
                                    defaultValue="option3"
                                  />
                                  <label
                                    className="form-check-label font-12 font-M"
                                    htmlFor="exampleRadios3"
                                  >
                                    Only Me
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFive">
                          <button
                            className="accordion-button flex-wrap"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseFive"
                            aria-expanded="true"
                            aria-controls="collapseFive"
                          >
                            <h3 className="font-14 font-M mb-1 w-100">
                              Profile Photo
                            </h3>
                            <p className="font-12 mb-0">
                              Control who can see your profile photo
                            </p>
                          </button>
                        </h2>
                        <div
                          id="collapseFive"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingFive"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body privacy_switch">
                            <div className="row custom_gap">
                              <div className="col-md-4">
                                <div className="form-check custom_radio ps-0">
                                  <input
                                    className="form-check-input d-none"
                                    type="radio"
                                    name="exampleRadios1"
                                    id="exampleRadios4"
                                    defaultValue="option1"
                                    defaultChecked=""
                                  />
                                  <label
                                    className="form-check-label font-12 font-M"
                                    htmlFor="exampleRadios4"
                                  >
                                    Graynod Connection
                                  </label>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="form-check custom_radio ps-0">
                                  <input
                                    className="form-check-input d-none"
                                    type="radio"
                                    name="exampleRadios1"
                                    id="exampleRadios5"
                                    defaultValue="option2"
                                  />
                                  <label
                                    className="form-check-label font-12 font-M"
                                    htmlFor="exampleRadios5"
                                  >
                                    Anyone on Graynode
                                  </label>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="form-check custom_radio ps-0">
                                  <input
                                    className="form-check-input d-none"
                                    type="radio"
                                    name="exampleRadios1"
                                    id="exampleRadios6"
                                    defaultValue="option3"
                                  />
                                  <label
                                    className="form-check-label font-12 font-M"
                                    htmlFor="exampleRadios6"
                                  >
                                    Only Me
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingSix">
                          <button
                            className="accordion-button flex-wrap"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseSix"
                            aria-expanded="true"
                            aria-controls="collapseSix"
                          >
                            <h3 className="font-14 font-M mb-1 w-100">Profile</h3>
                            <p className="font-12 mb-0">
                              Control who can see your bio. No one will see your
                              address.
                            </p>
                          </button>
                        </h2>
                        <div
                          id="collapseSix"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingSix"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body privacy_switch">
                            <div className="row custom_gap">
                              <div className="col-md-4">
                                <div className="form-check custom_radio ps-0">
                                  <input
                                    className="form-check-input d-none"
                                    type="radio"
                                    name="exampleRadios2"
                                    id="exampleRadios7"
                                    defaultValue="option1"
                                    defaultChecked=""
                                  />
                                  <label
                                    className="form-check-label font-12 font-M"
                                    htmlFor="exampleRadios7"
                                  >
                                    Graynod Connection
                                  </label>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="form-check custom_radio ps-0">
                                  <input
                                    className="form-check-input d-none"
                                    type="radio"
                                    name="exampleRadios2"
                                    id="exampleRadios8"
                                    defaultValue="option2"
                                  />
                                  <label
                                    className="form-check-label font-12 font-M"
                                    htmlFor="exampleRadios8"
                                  >
                                    Anyone on Graynode
                                  </label>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="form-check custom_radio ps-0">
                                  <input
                                    className="form-check-input d-none"
                                    type="radio"
                                    name="exampleRadios2"
                                    id="exampleRadios9"
                                    defaultValue="option3"
                                  />
                                  <label
                                    className="form-check-label font-12 font-M"
                                    htmlFor="exampleRadios9"
                                  >
                                    Only Me
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingSeven">
                          <button
                            className="accordion-button flex-wrap"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseSeven"
                            aria-expanded="true"
                            aria-controls="collapseSeven"
                          >
                            <h3 className="font-14 font-M mb-1 w-100">
                              Discoverability
                            </h3>
                            <p className="font-12 mb-0">
                              Control who can search for you
                            </p>
                          </button>
                        </h2>
                        <div
                          id="collapseSeven"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingSeven"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body privacy_switch">
                            <div className="row custom_gap">
                              <div className="col-md-4">
                                <div className="form-check custom_radio ps-0">
                                  <input
                                    className="form-check-input d-none"
                                    type="radio"
                                    name="exampleRadios3"
                                    id="exampleRadios10"
                                    defaultValue="option1"
                                    defaultChecked=""
                                  />
                                  <label
                                    className="form-check-label font-12 font-M"
                                    htmlFor="exampleRadios10"
                                  >
                                    Graynod Connection
                                  </label>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="form-check custom_radio ps-0">
                                  <input
                                    className="form-check-input d-none"
                                    type="radio"
                                    name="exampleRadios3"
                                    id="exampleRadios11"
                                    defaultValue="option2"
                                  />
                                  <label
                                    className="form-check-label font-12 font-M"
                                    htmlFor="exampleRadios11"
                                  >
                                    Anyone on Graynode
                                  </label>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="form-check custom_radio ps-0">
                                  <input
                                    className="form-check-input d-none"
                                    type="radio"
                                    name="exampleRadios3"
                                    id="exampleRadios12"
                                    defaultValue="option3"
                                  />
                                  <label
                                    className="form-check-label font-12 font-M"
                                    htmlFor="exampleRadios12"
                                  >
                                    Only Me
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingEight">
                          <button
                            className="accordion-button flex-wrap"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseEight"
                            aria-expanded="true"
                            aria-controls="collapseEight"
                          >
                            <h3 className="font-14 font-M mb-1 w-100">
                              Private message
                            </h3>
                            <p className="font-12 mb-0">
                              Control who can message you directly. You may still
                              receive messages through For Sale &amp; Free or the Help
                              Map.
                            </p>
                          </button>
                        </h2>
                        <div
                          id="collapseEight"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingEight"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body privacy_switch">
                            <div className="row custom_gap">
                              <div className="col-md-4">
                                <div className="form-check custom_radio ps-0">
                                  <input
                                    className="form-check-input d-none"
                                    type="radio"
                                    name="exampleRadios4"
                                    id="exampleRadios13"
                                    defaultValue="option1"
                                    defaultChecked=""
                                  />
                                  <label
                                    className="form-check-label font-12 font-M"
                                    htmlFor="exampleRadios13"
                                  >
                                    Graynod Connection
                                  </label>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="form-check custom_radio ps-0">
                                  <input
                                    className="form-check-input d-none"
                                    type="radio"
                                    name="exampleRadios4"
                                    id="exampleRadios14"
                                    defaultValue="option2"
                                  />
                                  <label
                                    className="form-check-label font-12 font-M"
                                    htmlFor="exampleRadios14"
                                  >
                                    Anyone on Graynode
                                  </label>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="form-check custom_radio ps-0">
                                  <input
                                    className="form-check-input d-none"
                                    type="radio"
                                    name="exampleRadios4"
                                    id="exampleRadios15"
                                    defaultValue="option3"
                                  />
                                  <label
                                    className="form-check-label font-12 font-M"
                                    htmlFor="exampleRadios15"
                                  >
                                    Only Me
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingNine">
                          <button
                            className="accordion-button flex-wrap"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseNine"
                            aria-expanded="true"
                            aria-controls="collapseNine"
                          >
                            <h3 className="font-14 font-M mb-1 w-100">Location</h3>
                            <p className="font-12 mb-0">
                              Control who can see your Location
                            </p>
                          </button>
                        </h2>
                        <div
                          id="collapseNine"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingNine"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body privacy_switch">
                            <div className="row custom_gap">
                              <div className="col-md-4">
                                <div className="form-check custom_radio ps-0">
                                  <input
                                    className="form-check-input d-none"
                                    type="radio"
                                    name="exampleRadios5"
                                    id="exampleRadios16"
                                    defaultValue="option1"
                                    defaultChecked=""
                                  />
                                  <label
                                    className="form-check-label font-12 font-M"
                                    htmlFor="exampleRadios16"
                                  >
                                    Graynod Connection
                                  </label>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="form-check custom_radio ps-0">
                                  <input
                                    className="form-check-input d-none"
                                    type="radio"
                                    name="exampleRadios5"
                                    id="exampleRadios17"
                                    defaultValue="option2"
                                  />
                                  <label
                                    className="form-check-label font-12 font-M"
                                    htmlFor="exampleRadios17"
                                  >
                                    Anyone on Graynode
                                  </label>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="form-check custom_radio ps-0">
                                  <input
                                    className="form-check-input d-none"
                                    type="radio"
                                    name="exampleRadios5"
                                    id="exampleRadios18"
                                    defaultValue="option3"
                                  />
                                  <label
                                    className="form-check-label font-12 font-M"
                                    htmlFor="exampleRadios18"
                                  >
                                    Only Me
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* accordion end here */}
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="advertisment_cards mb_20 ">
                  <img
                    src="assets/images/ads-1.png"
                    className="img-fluid cover_img"
                  />
                </div>
                <div className="advertisment_cards mb_20"> </div>
                <div className="advertisment_cards mb_20 ">
                  <img
                    src="assets/images/ads-2.png"
                    className="img-fluid cover_img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* manage setting page Ends here */}
      </>
      
    )
  }
}
