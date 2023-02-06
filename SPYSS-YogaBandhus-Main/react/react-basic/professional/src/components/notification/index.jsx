import React, { Component } from 'react'
import DashNavbar from '../dashboardNavbar'

export default class Notification extends Component {
  render() {
    return (
      <>
  {/* header start here */}
  <DashNavbar/>
  {/* header end here */}
  {/* notification page start here */}
  <div className="notification_page top_spacing d-inline-block w-100">
    <div className="container">
      <div className="row">
        <div className="col-md-9">
          <div className="notification_listing_box">
            <h1 className="page_title font-16 font-M mb-3">
              <a
                href="#"
                className="btn btn_back d-inline-flex align-items-center justify-content-center"
              >
                <img src="assets/images/svg_icon/back_arrow.svg" />
              </a>
              Notifications
            </h1>
            <div className="notification_item_listing common_box">
              <div className="notification_item d-inline-flex align-items-center position-relative">
                <div className="noti_profile_img">
                  <span className="noti_dotte" />
                  <span className="medium_circle_img d-block">
                    <img
                      src="assets/images/mutual-2.png"
                      className="img-fluid cover_img"
                    />
                  </span>
                </div>
                <div className="noti_text_box w-100 position-relative">
                  <a
                    href="postdetails"
                    className="font-16 mb-0 nowrap_text text-dark"
                  >
                    <span className="font-M">Keith Ferrazzi </span> and 3 others
                    likes your post
                  </a>
                  <p className="font-12 mb-0 text-secondary">2 hours ago</p>
                  <div className="post_option_menu d-flex align-items-center justify-content-center ms-auto dropdown">
                    <a
                      href="#"
                      className="dropdown_icon d-inline-flex align-items-center"
                      type="button"
                      id="dropdownMenuButton2"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {" "}
                      <i className="fi fi-rr-menu-dots-vertical lh-0" />
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton2"
                    >
                      <li>
                        <a className="dropdown-item" href="javascript:void(0);">
                          <i className="fi fi-rs-trash me-2" />
                          Remove
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="notification_item active d-inline-flex align-items-center position-relative">
                <div className="noti_profile_img">
                  <span className="noti_dotte" />
                  <span className="medium_circle_img d-block">
                    <img
                      src="assets/images/mutual-2.png"
                      className="img-fluid cover_img"
                    />
                  </span>
                  <span className="small_notifiaction_img">
                    <img
                      src="assets/images/posted_user.png"
                      className="cover_img img-fluid"
                    />
                  </span>
                </div>
                <div className="noti_text_box w-100 position-relative">
                  <h2 className="font-16 mb-0 nowrap_text">
                    <span className="font-M">Keith Ferrazzi </span> and 3 others
                    likes your post
                  </h2>
                  <p className="font-12 mb-0 text-secondary">2 hours ago</p>
                  <div className="post_option_menu d-flex align-items-center justify-content-center ms-auto dropdown">
                    <a
                      href="#"
                      className="dropdown_icon d-inline-flex align-items-center"
                      type="button"
                      id="dropdownMenuButton2"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {" "}
                      <i className="fi fi-rr-menu-dots-vertical lh-0" />
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton2"
                    >
                      <li>
                        <a className="dropdown-item" href="javascript:void(0);">
                          <i className="fi fi-rs-trash me-2" />
                          Remove
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="notification_item d-inline-flex align-items-center position-relative">
                <div className="noti_profile_img">
                  <span className="noti_dotte" />
                  <span className="medium_circle_img d-block">
                    <img
                      src="assets/images/mutual-2.png"
                      className="img-fluid cover_img"
                    />
                  </span>
                </div>
                <div className="noti_text_box w-100 position-relative">
                  <h2 className="font-16 mb-0 nowrap_text">
                    <span className="font-M">Keith Ferrazzi </span> and 3 others
                    likes your post
                  </h2>
                  <p className="font-12 mb-0 text-secondary">2 hours ago</p>
                  <div className="post_option_menu d-flex align-items-center justify-content-center ms-auto dropdown">
                    <a
                      href="#"
                      className="dropdown_icon d-inline-flex align-items-center"
                      type="button"
                      id="dropdownMenuButton2"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {" "}
                      <i className="fi fi-rr-menu-dots-vertical lh-0" />
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton2"
                    >
                      <li>
                        <a className="dropdown-item" href="javascript:void(0);">
                          <i className="fi fi-rs-trash me-2" />
                          Remove
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="notification_item active d-inline-flex align-items-center position-relative">
                <div className="noti_profile_img">
                  <span className="noti_dotte" />
                  <span className="medium_circle_img d-block">
                    <img
                      src="assets/images/mutual-2.png"
                      className="img-fluid cover_img"
                    />
                  </span>
                  <span className="small_notifiaction_img">
                    <img
                      src="assets/images/posted_user.png"
                      className="cover_img img-fluid"
                    />
                  </span>
                </div>
                <div className="noti_text_box w-100 position-relative">
                  <h2 className="font-16 mb-0 nowrap_text">
                    <span className="font-M">Keith Ferrazzi </span> and 3 others
                    likes your post
                  </h2>
                  <p className="font-12 mb-0 text-secondary">2 hours ago</p>
                  <div className="post_option_menu d-flex align-items-center justify-content-center ms-auto dropdown">
                    <a
                      href="#"
                      className="dropdown_icon d-inline-flex align-items-center"
                      type="button"
                      id="dropdownMenuButton2"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {" "}
                      <i className="fi fi-rr-menu-dots-vertical lh-0" />
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton2"
                    >
                      <li>
                        <a className="dropdown-item" href="javascript:void(0);">
                          <i className="fi fi-rs-trash me-2" />
                          Remove
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="notification_item d-inline-flex align-items-center position-relative">
                <div className="noti_profile_img">
                  <span className="noti_dotte" />
                  <span className="medium_circle_img d-block">
                    <img
                      src="assets/images/mutual-2.png"
                      className="img-fluid cover_img"
                    />
                  </span>
                </div>
                <div className="noti_text_box w-100 position-relative">
                  <h2 className="font-16 mb-0 nowrap_text">
                    <span className="font-M">Keith Ferrazzi </span> and 3 others
                    likes your post
                  </h2>
                  <p className="font-12 mb-0 text-secondary">2 hours ago</p>
                  <div className="post_option_menu d-flex align-items-center justify-content-center ms-auto dropdown">
                    <a
                      href="#"
                      className="dropdown_icon d-inline-flex align-items-center"
                      type="button"
                      id="dropdownMenuButton2"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {" "}
                      <i className="fi fi-rr-menu-dots-vertical lh-0" />
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton2"
                    >
                      <li>
                        <a className="dropdown-item" href="javascript:void(0);">
                          <i className="fi fi-rs-trash me-2" />
                          Remove
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="notification_item d-inline-flex align-items-center position-relative">
                <div className="noti_profile_img">
                  <span className="noti_dotte" />
                  <span className="medium_circle_img d-block">
                    <img
                      src="assets/images/mutual-2.png"
                      className="img-fluid cover_img"
                    />
                  </span>
                  <span className="small_notifiaction_img">
                    <img
                      src="assets/images/posted_user.png"
                      className="cover_img img-fluid"
                    />
                  </span>
                </div>
                <div className="noti_text_box w-100 position-relative">
                  <h2 className="font-16 mb-0 nowrap_text">
                    <span className="font-M">Keith Ferrazzi </span> and 3 others
                    likes your post
                  </h2>
                  <p className="font-12 mb-0 text-secondary">2 hours ago</p>
                  <div className="post_option_menu d-flex align-items-center justify-content-center ms-auto dropdown">
                    <a
                      href="#"
                      className="dropdown_icon d-inline-flex align-items-center"
                      type="button"
                      id="dropdownMenuButton2"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {" "}
                      <i className="fi fi-rr-menu-dots-vertical lh-0" />
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton2"
                    >
                      <li>
                        <a className="dropdown-item" href="javascript:void(0);">
                          <i className="fi fi-rs-trash me-2" />
                          Remove
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="notification_item d-inline-flex align-items-center position-relative">
                <div className="noti_profile_img">
                  <span className="noti_dotte" />
                  <span className="medium_circle_img d-block">
                    <img
                      src="assets/images/mutual-2.png"
                      className="img-fluid cover_img"
                    />
                  </span>
                </div>
                <div className="noti_text_box w-100 position-relative">
                  <h2 className="font-16 mb-0 nowrap_text">
                    <span className="font-M">Keith Ferrazzi </span> and 3 others
                    likes your post
                  </h2>
                  <p className="font-12 mb-0 text-secondary">2 hours ago</p>
                  <div className="post_option_menu d-flex align-items-center justify-content-center ms-auto dropdown">
                    <a
                      href="#"
                      className="dropdown_icon d-inline-flex align-items-center"
                      type="button"
                      id="dropdownMenuButton2"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {" "}
                      <i className="fi fi-rr-menu-dots-vertical lh-0" />
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton2"
                    >
                      <li>
                        <a className="dropdown-item" href="javascript:void(0);">
                          <i className="fi fi-rs-trash me-2" />
                          Remove
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="notification_item d-inline-flex align-items-center position-relative">
                <div className="noti_profile_img">
                  <span className="noti_dotte" />
                  <span className="medium_circle_img d-block">
                    <img
                      src="assets/images/mutual-2.png"
                      className="img-fluid cover_img"
                    />
                  </span>
                  <span className="small_notifiaction_img">
                    <img
                      src="assets/images/posted_user.png"
                      className="cover_img img-fluid"
                    />
                  </span>
                </div>
                <div className="noti_text_box w-100 position-relative">
                  <h2 className="font-16 mb-0 nowrap_text">
                    <span className="font-M">Keith Ferrazzi </span> and 3 others
                    likes your post
                  </h2>
                  <p className="font-12 mb-0 text-secondary">2 hours ago</p>
                  <div className="post_option_menu d-flex align-items-center justify-content-center ms-auto dropdown">
                    <a
                      href="#"
                      className="dropdown_icon d-inline-flex align-items-center"
                      type="button"
                      id="dropdownMenuButton2"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {" "}
                      <i className="fi fi-rr-menu-dots-vertical lh-0" />
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton2"
                    >
                      <li>
                        <a className="dropdown-item" href="javascript:void(0);">
                          <i className="fi fi-rs-trash me-2" />
                          Remove
                        </a>
                      </li>
                    </ul>
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
  {/* notification page end here */}
</>

    )
  }
}
