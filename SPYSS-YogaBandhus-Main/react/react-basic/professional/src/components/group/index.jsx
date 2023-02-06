import React, { Component } from 'react'
import DashNavbar from '../dashboardNavbar'

export default class Group extends Component {
  render() {
    return (
      <>
      <>
  {/* header start here */}
  <DashNavbar/>
  {/* header end here */}
  {/* group page start here */}
  <div className="group_page top_spacing">
    <div className="container">
      <div className="row">
        <div className="col-md-9">
          <div className="group_listing">
            <div className="top_common_title d-flex align-items-center w-100">
              <h3 className="font-18 font-500 text-dark">Groups</h3>
              <a
                href="#"
                className="btn btn-post ms-auto rounded-pill d-inline-flec align-items-center justify-content-center"
                data-bs-toggle="modal"
                data-bs-target="#creategroupModal"
              >
                <img
                  src="assets/images/svg_icon/edit.svg"
                  className="img-fluid me-1"
                />
                Create Group
              </a>
            </div>
            <div className="group_listing_tabs common_box pb-0 mt-3">
              <ul
                className="nav nav-tabs profile_comapny_tab common-tab border-top-0 pt-0 mt-0"
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
                    Yours Groups
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#profile"
                    type="button"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    Requested
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="contact-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#contact"
                    type="button"
                    role="tab"
                    aria-controls="contact"
                    aria-selected="false"
                  >
                    Requested By Group
                  </button>
                </li>
              </ul>
            </div>
            <div className="group_tab_body tab-content mt-4" id="myTabContent">
              <div
                className="tab-pane fade show active p-0 common_box"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div className="connection_main_item">
                  <div className="connection_item group_listing_item d-inline-flex align-items-center w-100">
                    <span className="medium_circle_img d-flex">
                      <img
                        src="assets/images/group_1.png"
                        className="cover_img"
                      />
                    </span>
                    <div className="ci_details d-inline-block">
                      <a
                        href="#"
                        className="font-18 font-SB text-dark text_nowrap mb-1 d-flex align-items-center"
                      >
                        Business Career
                        <span className="badge font-12 ms-2 bg-primary text-white border-0">
                          Owner
                        </span>
                      </a>
                      <p className="ci_location font-14 mb-0 d-flex align-items-center line_clamp_2">
                        <img
                          src="assets/images/svg_icon/1group.svg"
                          className="me-1"
                        />
                        2k Members
                      </p>
                    </div>
                    <div className="ms-auto d-inline-flex align-items-center">
                      <div className="post_option_menu d-flex align-items-center justify-content-center ms-2 dropdown">
                        <a
                          href="#"
                          className="dropdown_icon d-inline-flex align-items-center"
                          type="button"
                          id="dropdownMenuButton1"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          {" "}
                          <i className="fi fi-rr-menu-dots-vertical lh-0" />
                        </a>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuButton1"
                        >
                          <li>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0);"
                            >
                              <span className="material-icon me-2">
                                <img
                                  src="assets/images/svg_icon/remove_circle.svg"
                                  className="me-2"
                                />
                                Remove this group
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0);"
                              data-bs-toggle="modal"
                              data-bs-target="#postreportModal"
                            >
                              <img
                                src="assets/images/svg_icon/copy.svg"
                                className="me-2"
                              />
                              Copy This Group
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0);"
                              data-bs-toggle="modal"
                              data-bs-target="#postreportModal"
                            >
                              <img
                                src="assets/images/svg_icon/01setting.svg"
                                className="me-2"
                              />
                              Update Your Settings
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="connection_main_item">
                  <div className="connection_item group_listing_item d-inline-flex align-items-center w-100">
                    <span className="medium_circle_img d-flex">
                      <img
                        src="assets/images/group_2.png"
                        className="cover_img"
                      />
                    </span>
                    <div className="ci_details d-inline-block">
                      <a
                        href="#"
                        className="font-18 font-SB text-dark text_nowrap mb-1 d-flex align-items-center"
                      >
                        Let’s talk about Denver
                        <span className="badge font-12 ms-2 bg-primary text-white border-0">
                          Owner
                        </span>
                      </a>
                      <p className="ci_location font-14 mb-0 d-flex align-items-center line_clamp_2">
                        <img
                          src="assets/images/svg_icon/1group.svg"
                          className="me-1"
                        />
                        21k Members
                      </p>
                    </div>
                    <div className="ms-auto d-inline-flex align-items-center">
                      <div className="post_option_menu d-flex align-items-center justify-content-center ms-2 dropdown">
                        <a
                          href="#"
                          className="dropdown_icon d-inline-flex align-items-center"
                          type="button"
                          id="dropdownMenuButton1"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          {" "}
                          <i className="fi fi-rr-menu-dots-vertical lh-0" />
                        </a>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuButton1"
                        >
                          <li>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0);"
                            >
                              <span className="material-icon me-2">
                                <img
                                  src="assets/images/svg_icon/remove_circle.svg"
                                  className="me-2"
                                />
                                Remove this group
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0);"
                              data-bs-toggle="modal"
                              data-bs-target="#postreportModal"
                            >
                              <img
                                src="assets/images/svg_icon/copy.svg"
                                className="me-2"
                              />
                              Copy This Group
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0);"
                              data-bs-toggle="modal"
                              data-bs-target="#postreportModal"
                            >
                              <img
                                src="assets/images/svg_icon/01setting.svg"
                                className="me-2"
                              />
                              Update Your Settings
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="connection_main_item">
                  <div className="connection_item group_listing_item d-inline-flex align-items-center w-100">
                    <span className="medium_circle_img d-flex">
                      <img
                        src="assets/images/group_3.png"
                        className="cover_img"
                      />
                    </span>
                    <div className="ci_details d-inline-block">
                      <a
                        href="#"
                        className="font-18 font-SB text-dark text_nowrap mb-1 d-flex align-items-center"
                      >
                        Neighbor Network
                        <span className="badge font-12 ms-2 border-0">
                          Member
                        </span>
                      </a>
                      <p className="ci_location font-14 mb-0 d-flex align-items-center line_clamp_2">
                        <img
                          src="assets/images/svg_icon/1group.svg"
                          className="me-1"
                        />
                        1.6k Members
                      </p>
                    </div>
                    <div className="ms-auto d-inline-flex align-items-center">
                      <div className="post_option_menu d-flex align-items-center justify-content-center ms-2 dropdown">
                        <a
                          href="#"
                          className="dropdown_icon d-inline-flex align-items-center"
                          type="button"
                          id="dropdownMenuButton1"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          {" "}
                          <i className="fi fi-rr-menu-dots-vertical lh-0" />
                        </a>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuButton1"
                        >
                          <li>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0);"
                            >
                              <span className="material-icon me-2">
                                <img
                                  src="assets/images/svg_icon/remove_circle.svg"
                                  className="me-2"
                                />
                                Remove this group
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0);"
                              data-bs-toggle="modal"
                              data-bs-target="#postreportModal"
                            >
                              <img
                                src="assets/images/svg_icon/copy.svg"
                                className="me-2"
                              />
                              Copy This Group
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0);"
                              data-bs-toggle="modal"
                              data-bs-target="#postreportModal"
                            >
                              <img
                                src="assets/images/svg_icon/01setting.svg"
                                className="me-2"
                              />
                              Update Your Settings
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="connection_main_item">
                  <div className="connection_item group_listing_item d-inline-flex align-items-center w-100">
                    <span className="medium_circle_img d-flex">
                      <img
                        src="assets/images/group_4.png"
                        className="cover_img"
                      />
                    </span>
                    <div className="ci_details d-inline-block">
                      <a
                        href="#"
                        className="font-18 font-SB text-dark text_nowrap mb-1 d-flex align-items-center"
                      >
                        Community Cares
                        <span className="badge font-12 ms-2 border-0">
                          Member
                        </span>
                      </a>
                      <p className="ci_location font-14 mb-0 d-flex align-items-center line_clamp_2">
                        <img
                          src="assets/images/svg_icon/1group.svg"
                          className="me-1"
                        />
                        500 Members
                      </p>
                    </div>
                    <div className="ms-auto d-inline-flex align-items-center">
                      <div className="post_option_menu d-flex align-items-center justify-content-center ms-2 dropdown">
                        <a
                          href="#"
                          className="dropdown_icon d-inline-flex align-items-center"
                          type="button"
                          id="dropdownMenuButton1"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          {" "}
                          <i className="fi fi-rr-menu-dots-vertical lh-0" />
                        </a>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuButton1"
                        >
                          <li>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0);"
                            >
                              <span className="material-icon me-2">
                                <img
                                  src="assets/images/svg_icon/remove_circle.svg"
                                  className="me-2"
                                />
                                Remove this group
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0);"
                              data-bs-toggle="modal"
                              data-bs-target="#postreportModal"
                            >
                              <img
                                src="assets/images/svg_icon/copy.svg"
                                className="me-2"
                              />
                              Copy This Group
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0);"
                              data-bs-toggle="modal"
                              data-bs-target="#postreportModal"
                            >
                              <img
                                src="assets/images/svg_icon/01setting.svg"
                                className="me-2"
                              />
                              Update Your Settings
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="connection_main_item">
                  <div className="connection_item group_listing_item d-inline-flex align-items-center w-100">
                    <span className="medium_circle_img d-flex">
                      <img
                        src="assets/images/group_1.png"
                        className="cover_img"
                      />
                    </span>
                    <div className="ci_details d-inline-block">
                      <a
                        href="#"
                        className="font-18 font-SB text-dark text_nowrap mb-1 d-flex align-items-center"
                      >
                        Health Hub
                        <span className="badge font-12 ms-2 border-0">
                          Member
                        </span>
                      </a>
                      <p className="ci_location font-14 mb-0 d-flex align-items-center line_clamp_2">
                        <img
                          src="assets/images/svg_icon/1group.svg"
                          className="me-1"
                        />
                        500 Members
                      </p>
                    </div>
                    <div className="ms-auto d-inline-flex align-items-center">
                      <div className="post_option_menu d-flex align-items-center justify-content-center ms-2 dropdown">
                        <a
                          href="#"
                          className="dropdown_icon d-inline-flex align-items-center"
                          type="button"
                          id="dropdownMenuButton1"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          {" "}
                          <i className="fi fi-rr-menu-dots-vertical lh-0" />
                        </a>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuButton1"
                        >
                          <li>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0);"
                            >
                              <span className="material-icon me-2">
                                <img
                                  src="assets/images/svg_icon/remove_circle.svg"
                                  className="me-2"
                                />
                                Remove this group
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0);"
                              data-bs-toggle="modal"
                              data-bs-target="#postreportModal"
                            >
                              <img
                                src="assets/images/svg_icon/copy.svg"
                                className="me-2"
                              />
                              Copy This Group
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0);"
                              data-bs-toggle="modal"
                              data-bs-target="#postreportModal"
                            >
                              <img
                                src="assets/images/svg_icon/01setting.svg"
                                className="me-2"
                              />
                              Update Your Settings
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="connection_main_item">
                  <div className="connection_item group_listing_item d-inline-flex align-items-center w-100">
                    <span className="medium_circle_img d-flex">
                      <img
                        src="assets/images/group_2.png"
                        className="cover_img"
                      />
                    </span>
                    <div className="ci_details d-inline-block">
                      <a
                        href="#"
                        className="font-18 font-SB text-dark text_nowrap mb-1 d-flex align-items-center"
                      >
                        Health Hub
                        <span className="badge font-12 ms-2 border-0">
                          Member
                        </span>
                      </a>
                      <p className="ci_location font-14 mb-0 d-flex align-items-center line_clamp_2">
                        <img
                          src="assets/images/svg_icon/1group.svg"
                          className="me-1"
                        />
                        500 Members
                      </p>
                    </div>
                    <div className="ms-auto d-inline-flex align-items-center">
                      <div className="post_option_menu d-flex align-items-center justify-content-center ms-2 dropdown">
                        <a
                          href="#"
                          className="dropdown_icon d-inline-flex align-items-center"
                          type="button"
                          id="dropdownMenuButton1"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          {" "}
                          <i className="fi fi-rr-menu-dots-vertical lh-0" />
                        </a>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuButton1"
                        >
                          <li>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0);"
                            >
                              <span className="material-icon me-2">
                                <img
                                  src="assets/images/svg_icon/remove_circle.svg"
                                  className="me-2"
                                />
                                Remove this group
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0);"
                              data-bs-toggle="modal"
                              data-bs-target="#postreportModal"
                            >
                              <img
                                src="assets/images/svg_icon/copy.svg"
                                className="me-2"
                              />
                              Copy This Group
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item"
                              href="javascript:void(0);"
                              data-bs-toggle="modal"
                              data-bs-target="#postreportModal"
                            >
                              <img
                                src="assets/images/svg_icon/01setting.svg"
                                className="me-2"
                              />
                              Update Your Settings
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade  p-0 common_box requested"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <div className="connection_main_item">
                  <div className="connection_item group_listing_item d-inline-flex align-items-center w-100">
                    <span className="medium_circle_img d-flex">
                      <img
                        src="assets/images/group_1.png"
                        className="cover_img"
                      />
                    </span>
                    <div className="ci_details d-inline-block">
                      <a
                        href="#"
                        className="font-18 font-SB text-dark text_nowrap mb-1 d-flex align-items-center"
                      >
                        Business Career
                      </a>
                      <p className="ci_location font-14 mb-0 d-flex align-items-center line_clamp_2">
                        <img
                          src="assets/images/svg_icon/1group.svg"
                          className="me-1"
                        />
                        2k Members
                      </p>
                    </div>
                    <div className="ms-auto d-inline-flex align-items-center">
                      <a
                        href="javascript:void(0)"
                        className="btn btn-default rounded-pill "
                      >
                        Withdraw Request
                      </a>
                    </div>
                  </div>
                </div>
                <div className="connection_main_item">
                  <div className="connection_item group_listing_item d-inline-flex align-items-center w-100">
                    <span className="medium_circle_img d-flex">
                      <img
                        src="assets/images/group_2.png"
                        className="cover_img"
                      />
                    </span>
                    <div className="ci_details d-inline-block">
                      <a
                        href="#"
                        className="font-18 font-SB text-dark text_nowrap mb-1 d-flex align-items-center"
                      >
                        Let’s talk about Denver
                      </a>
                      <p className="ci_location font-14 mb-0 d-flex align-items-center line_clamp_2">
                        <img
                          src="assets/images/svg_icon/1group.svg"
                          className="me-1"
                        />
                        21k Members
                      </p>
                    </div>
                    <div className="ms-auto d-inline-flex align-items-center">
                      <a
                        href="javascript:void(0)"
                        className="btn btn-default rounded-pill "
                      >
                        Withdraw Request
                      </a>
                    </div>
                  </div>
                </div>
                <div className="connection_main_item">
                  <div className="connection_item group_listing_item d-inline-flex align-items-center w-100">
                    <span className="medium_circle_img d-flex">
                      <img
                        src="assets/images/group_3.png"
                        className="cover_img"
                      />
                    </span>
                    <div className="ci_details d-inline-block">
                      <a
                        href="#"
                        className="font-18 font-SB text-dark text_nowrap mb-1 d-flex align-items-center"
                      >
                        Neighbor Network
                      </a>
                      <p className="ci_location font-14 mb-0 d-flex align-items-center line_clamp_2">
                        <img
                          src="assets/images/svg_icon/1group.svg"
                          className="me-1"
                        />
                        1.6k Members
                      </p>
                    </div>
                    <div className="ms-auto d-inline-flex align-items-center">
                      <a
                        href="javascript:void(0)"
                        className="btn btn-default rounded-pill "
                      >
                        Withdraw Request
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade p-0 common_box requested_by"
                id="contact"
                role="tabpanel"
                aria-labelledby="contact-tab"
              >
                <div className="connection_main_item">
                  <div className="connection_item group_listing_item d-inline-flex align-items-center w-100">
                    <span className="medium_circle_img d-flex">
                      <img
                        src="assets/images/group_1.png"
                        className="cover_img"
                      />
                    </span>
                    <div className="ci_details d-inline-block">
                      <a
                        href="#"
                        className="font-18 font-SB text-dark text_nowrap mb-1 d-flex align-items-center"
                      >
                        Business Career
                      </a>
                      <p className="ci_location font-14 mb-0 d-flex align-items-center line_clamp_2">
                        <img
                          src="assets/images/svg_icon/1group.svg"
                          className="me-1"
                        />
                        2k Members
                      </p>
                    </div>
                    <div className="ms-auto d-inline-flex align-items-center">
                      <a
                        href="javascript:void(0)"
                        className="btn btn-primary-outline rounded-pill me-3"
                      >
                        Accept
                      </a>
                      <a
                        href="javascript:void(0)"
                        className="btn btn-default rounded-pill "
                      >
                        Ignore
                      </a>
                    </div>
                  </div>
                </div>
                <div className="connection_main_item">
                  <div className="connection_item group_listing_item d-inline-flex align-items-center w-100">
                    <span className="medium_circle_img d-flex">
                      <img
                        src="assets/images/group_2.png"
                        className="cover_img"
                      />
                    </span>
                    <div className="ci_details d-inline-block">
                      <a
                        href="#"
                        className="font-18 font-SB text-dark text_nowrap mb-1 d-flex align-items-center"
                      >
                        Let’s talk about Denver
                      </a>
                      <p className="ci_location font-14 mb-0 d-flex align-items-center line_clamp_2">
                        <img
                          src="assets/images/svg_icon/1group.svg"
                          className="me-1"
                        />
                        21k Members
                      </p>
                    </div>
                    <div className="ms-auto d-inline-flex align-items-center">
                      <a
                        href="javascript:void(0)"
                        className="btn btn-primary-outline rounded-pill me-3"
                      >
                        Accept
                      </a>
                      <a
                        href="javascript:void(0)"
                        className="btn btn-default rounded-pill "
                      >
                        Ignore
                      </a>
                    </div>
                  </div>
                </div>
                <div className="connection_main_item">
                  <div className="connection_item group_listing_item d-inline-flex align-items-center w-100">
                    <span className="medium_circle_img d-flex">
                      <img
                        src="assets/images/group_3.png"
                        className="cover_img"
                      />
                    </span>
                    <div className="ci_details d-inline-block">
                      <a
                        href="#"
                        className="font-18 font-SB text-dark text_nowrap mb-1 d-flex align-items-center"
                      >
                        Neighbor Network
                      </a>
                      <p className="ci_location font-14 mb-0 d-flex align-items-center line_clamp_2">
                        <img
                          src="assets/images/svg_icon/1group.svg"
                          className="me-1"
                        />
                        1.6k Members
                      </p>
                    </div>
                    <div className="ms-auto d-inline-flex align-items-center">
                      <a
                        href="javascript:void(0)"
                        className="btn btn-primary-outline rounded-pill me-3"
                      >
                        Accept
                      </a>
                      <a
                        href="javascript:void(0)"
                        className="btn btn-default rounded-pill "
                      >
                        Ignore
                      </a>
                    </div>
                  </div>
                </div>
              </div>
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
  {/* group page end here */}
  {/* create greoup modal start here */}
  <div
    className="modal fade common_modal create_group"
    id="creategroupModal"
    tabIndex={-1}
    aria-labelledby="creategroupLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header border-0">
          <h5 className="modal-title w-100" id="exampleModalLabel">
            Create Group
          </h5>
          <button
            type="button"
            className="btn-close lh-0"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="fi fi-br-cross lh-0" />
          </button>
        </div>
        <div className="modal-body cg_body">
          <div className="update_pro_bd position-relative mb-3">
            <img
              src="assets/images/profile_bg.png"
              className="update_cover_img cover_img"
            />
            <input
              type="file"
              id="upload_bg_image"
              className="form-control d-none"
            />
            <label
              htmlFor="upload_bg_image"
              className="add_cover_btn font-12 font-SB"
            >
              <i className="fi fi-sr-camera me-1" /> Add Cover Photo
            </label>
          </div>
          <div className="mb-3 input_group">
            <input
              type="text"
              className="form-control"
              placeholder=""
              defaultValue="Let’s talk about Denver"
            />
            <label className="input_title">Group Name</label>
          </div>
          <div className="mb-3 input_group">
            <textarea
              type="text"
              className="form-control"
              placeholder="Enter your Bio"
              value="The designer used a grid layout in the layout of his About page.
          Contemporary colors inform you of the designer’s style, while a status
          message of his availability...."
              defaultValue={""}
            />
            <label className="input_title">Description</label>
          </div>
          <div className="post_views_option">
            <h3 className="font-16 font-M mb-0">Who can see your post?</h3>
            <p className="font-12 font-M text-secondary">
              Your post will be visible on feed, on your profile and in search
              results
            </p>
            <div className="row mx_10">
              <div className="col-md-6 px_10">
                <div className="form-check select_type">
                  <input
                    className="form-check-input d-none"
                    type="radio"
                    name="flexRadioDefault"
                    id="public"
                  />
                  <label className="form-check-label" htmlFor="public">
                    <img
                      src="assets/images/svg_icon/public.svg"
                      className="default"
                    />
                    <img
                      src="assets/images/svg_icon/public-active.svg"
                      className="active"
                    />
                    <span className="text ms-2 font-M">Public</span>
                  </label>
                </div>
              </div>
              <div className="col-md-6 px_10">
                <div className="form-check select_type">
                  <input
                    className="form-check-input d-none"
                    type="radio"
                    name="flexRadioDefault"
                    id="connections"
                  />
                  <label className="form-check-label" htmlFor="connections">
                    <img
                      src="assets/images/svg_icon/connections.svg"
                      className="default"
                    />
                    <img
                      src="assets/images/svg_icon/connections-active.svg"
                      className="active"
                    />
                    <span className="text ms-2 font-M">Private</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal-footer justify-content-center border-0">
          <div className="modal_post_btn">
            <button type="button" className="btn btn-primary rounded-pill">
              Next
            </button>
          </div>
        </div>
      </div>
      <div className="modal-content modal_invite_members mt-0">
        <div className="modal-header border-0">
          <h5 className="modal-title w-100" id="exampleModalLabel">
            <a
              href="#"
              className="btn btn_back d-inline-flex align-items-center justify-content-center"
            >
              <img src="assets/images/svg_icon/back_arrow.svg" />
            </a>
            Invite Member
          </h5>
        </div>
        <div className="modal-body cg_body">
          <h4 className="font-16 font-SB text-dark mb-1">Invite Member</h4>
          <p className="font-14 text-secondary mb-0">
            Bring the neighbor together by inviting connections to your group.
          </p>
          <div className="modal_search position-relative mt-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search for people..."
            />
            <i className="fi fi-rr-search search_icon" />
          </div>
        </div>
        <div className="modal-footer justify-content-center border-0">
          <div className="modal_post_btn">
            <button type="button" className="btn btn-primary rounded-pill">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* create greoup modal end here */}
</>

      </>
    )
  }
}
