import React, { Component } from 'react'
import $ from 'jquery'
import DashNavbar from '../dashboardNavbar'

export default class CompanyProfile extends Component {
  render() {
    return (
      <><>
      {/* header start here */}
      <DashNavbar/>
      {/* header end here */}
      <div className="user_profile_page company_profile top_spacing">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <div className="user_profile">
                <div className="profile_bg">
                  <img
                    src="assets/images/company-bg.png"
                    className="img-fluid cover_img"
                  />
                </div>
                <div className="profile_body position-relative pb-0">
                  <span className="user_image">
                    <img
                      src="assets/images/company-img.png"
                      className="cover_img img-fluid"
                    />
                  </span>
                  <div className="post_option_menu d-flex align-items-center justify-content-center ms-auto dropdown">
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
                          data-bs-toggle="modal"
                          data-bs-target="#postreportModal"
                        >
                          <i className="fi fi-rr-share me-2" />
                          Share Profile
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="javascript:void(0);">
                          <i className="fi fi-rr-trash me-2" /> Remove Connection
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item"
                          href="javascript:void(0);"
                          data-bs-toggle="modal"
                          data-bs-target="#postreportModal"
                        >
                          <i className="fi fi-rs-flag me-2" /> Report
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h1 className="font-24 font-B m-0">Metropolitan Law</h1>
                  <ul className="company_detail_listing position-relative mt-2 mb-0">
                    <li>Internet Publishing</li>
                    <li>Seattle, WA</li>
                    <li>15,367 followers</li>
                  </ul>
                  <div className="mutual_connecton d-flex align-items-center w-100">
                    <div className="mutual_connection_images">
                      <img
                        src="assets/images/mutual-1.png"
                        className="connection_profile_img ms-0"
                      />
                    </div>
                    {/* <div class="mutual_connection_details d-inline-flex align-items-enter">
                                  <span class="connection_count font-16 font-M">1 person from your company works here</span>
                                  <sapn class="connection_pera font-16 font-M text-secondary d-inline-flex align-items-center"><span class="dotted_circle"></span>875 employees</span>
                              </div> */}
                  </div>
                  <div className="following_buttons d-flex align-items-center">
                    <a href="#" className="btn btn-primary rounded-pill me-3">
                      Follow
                    </a>
                    <a
                      href="#"
                      className="btn btn-primary-outline rounded-pill me-3"
                    >
                      Requested
                    </a>
                    <a
                      href="#"
                      className="btn btn-primary-outline rounded-pill me-3"
                    >
                      Following
                    </a>
                    <a
                      href="#"
                      className="btn btn-primary-outline rounded-pill ms-auto"
                    >
                      Visit Website
                    </a>
                  </div>
                  {/* tabs start here */}
                  <ul
                    className="nav nav-tabs profile_comapny_tab common-tab mt-3"
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
                        About
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
                        Posts
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
                        Jobs
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              {/* user post section */}
              {/* company tabs body */}
              <div className="tab-content mt-4 mb-4" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="about_company common_box">
                    <h5 className="font-20 font-SB mb-2">Overview</h5>
                    <p className="font-14 text-secondary font-M">
                      Customer obsession rather than competitor focus, passion for
                      invention, commitment to operational excellence, and long-term
                      thinking. We are driven by the excitement of building
                      technologies, inventing products, and providing services that
                      change lives. We embrace new ways of doing things, make
                      decisions quickly, and are not afraid to fail. We have the
                      scope and capabilities of a large company, and the spirit and
                      heart of a small one.
                    </p>
                    <p className="font-14 text-secondary font-M">
                      Together, Metropolitan Law research and develop new
                      technologies from Metropolitan Law Web Services to Alexa on
                      behalf of our customers: shoppers, sellers, content creators,
                      and developers around the world.
                    </p>
                    <p className="font-14 text-secondary font-M">
                      Our mission is to be Earth's most customer-centric company.
                      Our actions, goals, projects, programs, and inventions begin
                      and end with the customer top of mind.{" "}
                    </p>
                    <p className="font-14 text-secondary font-M">
                      You'll also hear us say that at Metropolitan Law, it's always
                      "Day 1."​ What do we mean? That our approach remains the same
                      as it was on Metropolitan Law very first day - to make smart,
                      fast decisions, stay nimble, invent, and focus on delighting
                      our customers.
                    </p>
                    <div className="company_contact_details mb-4">
                      <h5 className="font-20 font-SB mb-0">Website</h5>
                      <a
                        href="#"
                        className="font-16 font-M text_link"
                        target="_blank"
                      >
                        www.metropolitan law.com
                      </a>
                    </div>
                    <div className="company_contact_details mb-4">
                      <h5 className="font-20 font-SB mb-0">Company size</h5>
                      <p className="font-16 text-secondary font-M mb-0">
                        875+ employees
                      </p>
                      <p className="font-16 text-secondary font-M mb-0">
                        1095 on Graynod
                      </p>
                    </div>
                    <div className="company_contact_details">
                      <h5 className="font-20 font-SB mb-0">Industry</h5>
                      <p className="font-16 text-secondary font-M mb-0">
                        Internet Publishing
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div className="post_section_listing d-inline-block w-100">
                    <div className="user_recent_post mb_20">
                      <div className="user_recent_post_top d-flex align-items-center">
                        {" "}
                        <span className="user_img_post_icon">
                          <img
                            src="assets/images/posted_user.png"
                            className="img-fluid cover_img"
                          />
                        </span>
                        <div className="user_details_post lh-1">
                          {" "}
                          <a
                            href="#"
                            className="post_title font-16 font-B mb-0 d-block"
                          >
                            Herry Welsh
                          </a>
                          <div className="post_timing d-flex align-items-center w-100 text-secondary mt-1">
                            {" "}
                            <span className="font-12 font-M pe-1" id="">
                              Bangalore
                            </span>
                            |{" "}
                            <span className="font-12 font-M ps-1" id="">
                              {" "}
                              1 day ago
                            </span>{" "}
                          </div>
                        </div>
                        <div className="ms-auto d-inline-flex align-items-center">
                          {" "}
                          <span className="post_type font-14 font-M text-secondary me-3 d-inline-flex align-items-center">
                            Public{" "}
                            <img
                              src="assets/images/svg_icon/public_globe.svg"
                              className="img-fluid ms-2"
                            />
                          </span>
                          <div className="post_option_menu d-flex align-items-center justify-content-center ms-auto dropdown">
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
                                  <i className="fi fi-rr-bookmark me-2" /> Save
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="javascript:void(0);"
                                  data-bs-toggle="modal"
                                  data-bs-target="#postreportModal"
                                >
                                  <i className="fi fi-rs-flag me-2" /> Report This
                                  Post
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="user_recent_post_body">
                        <p className="text-dark font-14 mb-0 more">
                          If you want to make a bold{" "}
                          <a href="#" className="hyper_link">
                            #statement
                          </a>{" "}
                          with your design work, look no further. We’ve rounded up a
                          handful of unique typefaces that are bursting with
                          personality!
                        </p>
                        <a href="#" className="post_read_more font-14 font-M mt-2">
                          Read More...
                        </a>
                        <div
                          className="post_content"
                          data-bs-toggle="modal"
                          data-bs-target="#postviewModal"
                        >
                          <img
                            src="assets/images/post-1.png"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                        <div className="emoji_section d-flex">
                          <div className="emojis position-relative likes_emoji">
                            <img
                              src="assets/images/like.png"
                              className="img-fluid emojis_icon"
                              alt=""
                            />
                            <img
                              src="assets/images/love.png"
                              className="img-fluid emojis_icon"
                              alt=""
                            />
                            <span className="total_like font-14 outfit-M likes_number">
                              Jhone, Visten and 57 others
                            </span>
                          </div>
                          <a
                            href="javascript:void(0)"
                            className="total_like count font_14 outfit_M ms-auto"
                            data-bs-toggle="modal"
                            data-bs-target="#commentmodal"
                          >
                            0 Comments
                          </a>
                        </div>
                        <div className="like_share_comment_section">
                          <div className="like_comment_share w-100 d-flex">
                            <a
                              href="javascript:void(0)"
                              className="like common_like_function d-flex align-items-center justify-content-center active"
                            >
                              {/* <img src="assets/images/svg_icon/like_fill.svg" class="img-fluid me-1 like_img" alt=""> 
                                                  <img src="assets/images/svg_icon/svg_icon.svg" class="img-fluid like_hover me-1" alt=""> */}
                              <div
                                dato-descripcion="gusta"
                                id-referencia={1655728097583}
                                className="Selector selectorFace gusta"
                              />
                              <input
                                type="hidden"
                                defaultValue="gusta"
                                className="prueba 1655728097583"
                                style={{ display: "none" }}
                              />
                              <span className="section_text font-14 font-SB">
                                Like
                              </span>
                            </a>
                            <a
                              className="comment d-flex align-items-center justify-content-center"
                              data-bs-toggle="collapse"
                              href="#collapseShare231"
                              role="button"
                              aria-expanded="false"
                              aria-controls="collapseShare"
                            >
                              <img
                                src="assets/images/svg_icon/comment.svg"
                                className="img-fluid like_img me-1"
                                alt=""
                              />
                              <img
                                src="assets/images/svg_icon/comment_active.svg"
                                className="img-fluid like_hover me-1"
                                alt=""
                              />
                              <span className="section_text font-14 font-SB">
                                Comment
                              </span>
                            </a>
                            <div className="share position-relative">
                              <a
                                href="#"
                                className="d-flex align-items-center justify-content-center w-100 userPostShare"
                              >
                                <img
                                  src="assets/images/svg_icon/share.svg"
                                  className="img-fluid me-1 like_img userPostShare"
                                  alt=""
                                />
                                <span className="section_text userPostShare font-14 font-SB">
                                  {" "}
                                  Share{" "}
                                </span>
                              </a>
                              <div className="share_tooltip" id="post_share_231">
                                <ul className="share_icons d-flex align-items-center m-0">
                                  <li className="share_icon_con">
                                    <a href="#" className="share_icon_item">
                                      <i className="fi fi-rr-envelope rounded_icon" />
                                      <p className="icon_text">email</p>
                                    </a>
                                  </li>
                                  <li className="share_icon_con">
                                    <a
                                      href="#"
                                      className="share_icon_item"
                                      target="_blank"
                                    >
                                      <span className="rounded_icon">
                                        <img
                                          src="assets/images/facebook.png"
                                          className="img-fluid "
                                        />
                                      </span>
                                      <p className="icon_text">Facebook</p>
                                    </a>
                                  </li>
                                  <li className="share_icon_con">
                                    <a
                                      href=""
                                      className="share_icon_item"
                                      target="_blank"
                                    >
                                      <span className="rounded_icon">
                                        <img
                                          src="assets/images/twitter.png"
                                          className="img-fluid "
                                        />
                                      </span>
                                      <p className="icon_text">Twitter</p>
                                    </a>
                                  </li>
                                  <li className="share_icon_con">
                                    <a
                                      href="#"
                                      className="share_icon_item"
                                      target="_blank"
                                    >
                                      <span className="rounded_icon whatsapp">
                                        <img
                                          src="assets/images/whatsapp.png"
                                          className="img-fluid "
                                        />
                                      </span>
                                      <p className="icon_text">Whatsapp</p>
                                    </a>
                                  </li>
                                  <li className="share_icon_con">
                                    <a
                                      href="javascript:void(0)"
                                      className="share_icon_item"
                                    >
                                      <span className="rounded_icon embed">
                                        <img
                                          src="assets/images/svg_icon/code_off.svg"
                                          className="img-fluid"
                                        />
                                      </span>
                                      <p className="icon_text">Embed</p>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="collapse" id="collapseShare231">
                            <div className="card card-body share-card">
                              <div className="post_comment d-flex align-items-center">
                                {" "}
                                <span className="user_img_comment">
                                  <img
                                    src="assets/images/avatar_img.png"
                                    className="img-fluid cover_img"
                                    alt=""
                                  />
                                </span>
                                <input
                                  type="text"
                                  name="comment"
                                  post_id={231}
                                  className="form-control comment_input add_comment"
                                  placeholder="Share your comment on this post..."
                                />
                                <button
                                  className="post_comment_btn post-comment"
                                  post_id={231}
                                  name="comment"
                                >
                                  <img
                                    src="assets/images/svg_icon/send-button.svg"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </button>
                              </div>
                              <div className="all_comments_list get_comment_231">
                                <div className="recent_comments">
                                  <div className="user_detail_recent_comment d-flex align-items-center">
                                    {" "}
                                    <span className="user_img_recent_comment">
                                      <img
                                        src="http://jiran360.dollopinfotech.com/uploads/business/5778611128214778b2e912d24dd9d681_2.png"
                                        className="img-fluid img_cover"
                                        alt=""
                                      />
                                    </span>
                                    <div className="user_details_post font-14 font-M position-relative">
                                      <a
                                        href="#"
                                        className="text-dark mb-0 d-block w-100"
                                      >
                                        Business Page
                                      </a>
                                      <span className="font-12 text-secondary">
                                        Talent, leadership, organization, HR | 2 hr
                                        ago
                                      </span>
                                      <div className="post_option_menu d-flex align-items-center justify-content-center ms-auto dropdown">
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
                                              <i className="fi fi-rs-flag me-2" />{" "}
                                              Report This comment
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="user_posted_comment">
                                    <p className="usr_posted_comment">111</p>
                                    <div className="usr_posted_user_action d-flex align-items-center position-relative">
                                      <a
                                        href="javascript:void(0);"
                                        className="d-flex border_right_shre common_like_function"
                                      >
                                        <img
                                          src="assets/images/svg_icon/like_fill.svg"
                                          className="me-1 img-fluid me-1 like_img active"
                                          alt=""
                                        />
                                        <img
                                          src="assets/images/svg_icon/like_fill.svg"
                                          className="me-1 img-fluid like_hover"
                                          alt=""
                                        />{" "}
                                        Like
                                      </a>
                                      <a
                                        href="javascript:void(0)"
                                        className="d-inline-flex align-items-center justify-content-center"
                                      >
                                        <img
                                          src="assets/images/svg_icon/share_arrow.svg"
                                          className="img-fluid me-1 like_img "
                                          alt=""
                                        />
                                        <span className="section_text ">
                                          Reply{" "}
                                        </span>
                                      </a>
                                      <div className="emojis position-relative likes_emoji ms-auto">
                                        <span className="total_like font-12 outfit-SB text-dark likes_number me-3">
                                          16
                                        </span>
                                        <img
                                          src="assets/images/like.png"
                                          className="img-fluid emojis_icon"
                                          alt=""
                                        />
                                        <img
                                          src="assets/images/love.png"
                                          className="img-fluid emojis_icon"
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="recent_comments replay_comment">
                                  <div className="user_detail_recent_comment d-flex align-items-center">
                                    {" "}
                                    <span className="user_img_recent_comment">
                                      <img
                                        src="http://jiran360.dollopinfotech.com/uploads/business/5778611128214778b2e912d24dd9d681_2.png"
                                        className="img-fluid img_cover"
                                        alt=""
                                      />
                                    </span>
                                    <div className="user_details_post font-14 font-M position-relative">
                                      <a
                                        href="#"
                                        className="text-dark mb-0 d-block w-100"
                                      >
                                        Business Page
                                      </a>
                                      <span className="font-12 text-secondary">
                                        Talent, leadership, organization, HR | 2 hr
                                        ago
                                      </span>
                                      <div className="post_option_menu d-flex align-items-center justify-content-center ms-auto dropdown">
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
                                              <i className="fi fi-rs-flag me-2" />{" "}
                                              Report This comment
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="user_posted_comment">
                                    <p className="usr_posted_comment">111</p>
                                    <div className="usr_posted_user_action d-flex align-items-center position-relative">
                                      <a
                                        href="javascript:void(0);"
                                        className="d-flex border_right_shre common_like_function"
                                      >
                                        <img
                                          src="assets/images/svg_icon/like_fill.svg"
                                          className="me-1 img-fluid me-1 like_img active"
                                          alt=""
                                        />
                                        <img
                                          src="assets/images/svg_icon/like_fill.svg"
                                          className="me-1 img-fluid like_hover"
                                          alt=""
                                        />{" "}
                                        Like
                                      </a>
                                      <a
                                        href="javascript:void(0)"
                                        className="d-inline-flex align-items-center justify-content-center"
                                      >
                                        <img
                                          src="assets/images/svg_icon/share_arrow.svg"
                                          className="img-fluid me-1 like_img "
                                          alt=""
                                        />
                                        <span className="section_text ">
                                          Reply{" "}
                                        </span>
                                      </a>
                                      <div className="emojis position-relative likes_emoji ms-auto">
                                        <span className="total_like font-12 outfit-SB text-dark likes_number me-3">
                                          16
                                        </span>
                                        <img
                                          src="assets/images/like.png"
                                          className="img-fluid emojis_icon"
                                          alt=""
                                        />
                                        <img
                                          src="assets/images/love.png"
                                          className="img-fluid emojis_icon"
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="your_comment_box d-flex align-item-center w-100 position-relative">
                                    <span className="your_profile_img">
                                      <img
                                        src="assets/images/avatar_img.png"
                                        className="img-fluid cover_img"
                                      />
                                    </span>
                                    <div className="add_your_comment">
                                      <input
                                        type="text"
                                        className="form-control custome_comment_input"
                                        placeholder="@keithferrazzi"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="view_all_comment"
                                data-bs-toggle="modal"
                                data-bs-target="#commentmodal"
                              >
                                {" "}
                                <a
                                  href="javascript:void(0)"
                                  className="font_14 outfit_M mb-0"
                                >
                                  View All Comments
                                </a>{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="user_recent_post mb_20">
                      <div className="user_recent_post_top d-flex align-items-center">
                        {" "}
                        <span className="user_img_post_icon">
                          <img
                            src="assets/images/company-img.png"
                            className="img-fluid cover_img"
                          />
                        </span>
                        <div className="user_details_post lh-1">
                          {" "}
                          <a
                            href="#"
                            className="post_title font-16 font-B mb-0 d-block"
                          >
                            Metropolitan Law
                          </a>
                          <div className="post_timing d-flex align-items-center w-100 text-secondary mt-1">
                            {" "}
                            <span className="font-12 font-M pe-1" id="">
                              Delhi{" "}
                            </span>
                            |{" "}
                            <span className="font-12 font-M ps-1" id="">
                              {" "}
                              1 day ago
                            </span>{" "}
                          </div>
                        </div>
                        <div className="ms-auto d-inline-flex align-items-center">
                          {" "}
                          <span className="post_type font-14 font-M text-secondary me-3 d-inline-flex align-items-center">
                            Public{" "}
                            <img
                              src="assets/images/svg_icon/public_globe.svg"
                              className="img-fluid ms-2"
                            />
                          </span>
                          <div className="post_option_menu d-flex align-items-center justify-content-center ms-auto dropdown">
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
                                  <i className="fi fi-rr-bookmark me-2" /> Save
                                </a>
                              </li>
                              <li>
                                <a
                                  className="dropdown-item"
                                  href="javascript:void(0);"
                                >
                                  <i className="fi fi-rs-flag me-2" /> Report This
                                  Post
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="user_recent_post_body">
                        <p className="text-dark font-14 mb-0 more">
                          Employee empowerment is a hot topic in workplace culture.
                          This rewards go-getter with the chance to take greater
                          initiative and helps the organization in identifying the
                          high-potential, future leaders!
                        </p>
                        <a href="#" className="post_read_more font-14 font-M mt-2">
                          Read More...
                        </a>
                        <div className="post_content">
                          <img
                            src="assets/images/post-2.png"
                            className="img-fluid"
                            alt=""
                          />
                        </div>
                        <div className="emoji_section d-flex">
                          <div className="emojis position-relative likes_emoji">
                            <img
                              src="assets/images/like.png"
                              className="img-fluid emojis_icon"
                              alt=""
                            />
                            <img
                              src="assets/images/love.png"
                              className="img-fluid emojis_icon"
                              alt=""
                            />
                            <span className="total_like font-14 outfit-M likes_number">
                              Jhone, Visten and 57 others
                            </span>
                          </div>
                          <a
                            href="javascript:void(0)"
                            className="total_like count font_14 outfit_M ms-auto"
                          >
                            0 Comments
                          </a>
                        </div>
                        <div className="like_share_comment_section">
                          <div className="like_comment_share w-100 d-flex">
                            <a
                              href="javascript:void(0)"
                              className="like common_like_function d-flex align-items-center justify-content-center active"
                            >
                              <img
                                src="assets/images/svg_icon/like_fill.svg"
                                className="img-fluid me-1 like_img"
                                alt=""
                              />
                              <img
                                src="assets/images/svg_icon/svg_icon.svg"
                                className="img-fluid like_hover me-1"
                                alt=""
                              />
                              <span className="section_text font-14 font-SB">
                                Like
                              </span>
                            </a>
                            <a
                              className="comment d-flex align-items-center justify-content-center"
                              data-bs-toggle="collapse"
                              href="#collapseShare231"
                              role="button"
                              aria-expanded="false"
                              aria-controls="collapseShare"
                            >
                              <img
                                src="assets/images/svg_icon/comment.svg"
                                className="img-fluid like_img me-1"
                                alt=""
                              />
                              <img
                                src="assets/images/svg_icon/comment_active.svg"
                                className="img-fluid like_hover me-1"
                                alt=""
                              />
                              <span className="section_text font-14 font-SB">
                                Comment
                              </span>
                            </a>
                            <div className="share position-relative">
                              <a
                                href="#"
                                className="d-flex align-items-center justify-content-center w-100 userPostShare"
                              >
                                <img
                                  src="assets/images/svg_icon/share.svg"
                                  className="img-fluid me-1 like_img userPostShare"
                                  alt=""
                                />
                                <span className="section_text userPostShare font-14 font-SB">
                                  {" "}
                                  Share{" "}
                                </span>
                              </a>
                              <div className="share_tooltip" id="post_share_231">
                                <ul className="share_icons d-flex align-items-center m-0">
                                  <li className="share_icon_con">
                                    <a href="#" className="share_icon_item">
                                      <i className="fi fi-rr-envelope rounded_icon" />
                                      <p className="icon_text">email</p>
                                    </a>
                                  </li>
                                  <li className="share_icon_con">
                                    <a
                                      href="#"
                                      className="share_icon_item"
                                      target="_blank"
                                    >
                                      <span className="rounded_icon">
                                        <img
                                          src="assets/images/facebook.png"
                                          className="img-fluid "
                                        />
                                      </span>
                                      <p className="icon_text">Facebook</p>
                                    </a>
                                  </li>
                                  <li className="share_icon_con">
                                    <a
                                      href=""
                                      className="share_icon_item"
                                      target="_blank"
                                    >
                                      <span className="rounded_icon">
                                        <img
                                          src="assets/images/twitter.png"
                                          className="img-fluid "
                                        />
                                      </span>
                                      <p className="icon_text">Twitter</p>
                                    </a>
                                  </li>
                                  <li className="share_icon_con">
                                    <a
                                      href="#"
                                      className="share_icon_item"
                                      target="_blank"
                                    >
                                      <span className="rounded_icon whatsapp">
                                        <img
                                          src="assets/images/whatsapp.png"
                                          className="img-fluid "
                                        />
                                      </span>
                                      <p className="icon_text">Whatsapp</p>
                                    </a>
                                  </li>
                                  <li className="share_icon_con">
                                    <a
                                      href="javascript:void(0)"
                                      className="share_icon_item"
                                    >
                                      <span className="rounded_icon embed">
                                        <img
                                          src="assets/images/svg_icon/code_off.svg"
                                          className="img-fluid"
                                        />
                                      </span>
                                      <p className="icon_text">Embed</p>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="collapse" id="collapseShare231">
                            <div className="card card-body share-card">
                              <div className="post_comment d-flex align-items-center">
                                {" "}
                                <span className="user_img_comment">
                                  <img
                                    src="assets/images/avatar_img.png"
                                    className="img-fluid cover_img"
                                    alt=""
                                  />
                                </span>
                                <input
                                  type="text"
                                  name="comment"
                                  post_id={231}
                                  className="form-control comment_input add_comment"
                                  placeholder="Share your comment on this post..."
                                />
                                <button
                                  className="post_comment_btn post-comment"
                                  post_id={231}
                                  name="comment"
                                >
                                  <img
                                    src="assets/images/svg_icon/send-button.svg"
                                    className="img-fluid"
                                    alt=""
                                  />
                                </button>
                              </div>
                              <div className="all_comments_list get_comment_231">
                                <div className="recent_comments">
                                  <div className="user_detail_recent_comment d-flex align-items-center">
                                    {" "}
                                    <span className="user_img_recent_comment">
                                      <img
                                        src="http://jiran360.dollopinfotech.com/uploads/business/5778611128214778b2e912d24dd9d681_2.png"
                                        className="img-fluid img_cover"
                                        alt=""
                                      />
                                    </span>
                                    <div className="user_details_post font-14 font-M position-relative">
                                      <a
                                        href="#"
                                        className="text-dark mb-0 d-block w-100"
                                      >
                                        Business Page
                                      </a>
                                      <span className="font-12 text-secondary">
                                        Talent, leadership, organization, HR | 2 hr
                                        ago
                                      </span>
                                      <div className="post_option_menu d-flex align-items-center justify-content-center ms-auto dropdown">
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
                                              <i className="fi fi-rs-flag me-2" />{" "}
                                              Report This comment
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="user_posted_comment">
                                    <p className="usr_posted_comment">111</p>
                                    <div className="usr_posted_user_action d-flex align-items-center position-relative">
                                      <a
                                        href="javascript:void(0);"
                                        className="d-flex border_right_shre common_like_function"
                                      >
                                        <img
                                          src="assets/images/svg_icon/like_fill.svg"
                                          className="me-1 img-fluid me-1 like_img active"
                                          alt=""
                                        />
                                        <img
                                          src="assets/images/svg_icon/like_fill.svg"
                                          className="me-1 img-fluid like_hover"
                                          alt=""
                                        />{" "}
                                        Like
                                      </a>
                                      <a
                                        href="javascript:void(0)"
                                        className="d-inline-flex align-items-center justify-content-center"
                                      >
                                        <img
                                          src="assets/images/svg_icon/share_arrow.svg"
                                          className="img-fluid me-1 like_img "
                                          alt=""
                                        />
                                        <span className="section_text ">
                                          Reply{" "}
                                        </span>
                                      </a>
                                      <div className="emojis position-relative likes_emoji ms-auto">
                                        <span className="total_like font-12 outfit-SB text-dark likes_number me-3">
                                          16
                                        </span>
                                        <img
                                          src="assets/images/like.png"
                                          className="img-fluid emojis_icon"
                                          alt=""
                                        />
                                        <img
                                          src="assets/images/love.png"
                                          className="img-fluid emojis_icon"
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="recent_comments replay_comment">
                                  <div className="user_detail_recent_comment d-flex align-items-center">
                                    {" "}
                                    <span className="user_img_recent_comment">
                                      <img
                                        src="http://jiran360.dollopinfotech.com/uploads/business/5778611128214778b2e912d24dd9d681_2.png"
                                        className="img-fluid img_cover"
                                        alt=""
                                      />
                                    </span>
                                    <div className="user_details_post font-14 font-M position-relative">
                                      <a
                                        href="#"
                                        className="text-dark mb-0 d-block w-100"
                                      >
                                        Business Page
                                      </a>
                                      <span className="font-12 text-secondary">
                                        Talent, leadership, organization, HR | 2 hr
                                        ago
                                      </span>
                                      <div className="post_option_menu d-flex align-items-center justify-content-center ms-auto dropdown">
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
                                              <i className="fi fi-rs-flag me-2" />{" "}
                                              Report This comment
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="user_posted_comment">
                                    <p className="usr_posted_comment">111</p>
                                    <div className="usr_posted_user_action d-flex align-items-center position-relative">
                                      <a
                                        href="javascript:void(0);"
                                        className="d-flex border_right_shre common_like_function"
                                      >
                                        <img
                                          src="assets/images/svg_icon/like_fill.svg"
                                          className="me-1 img-fluid me-1 like_img active"
                                          alt=""
                                        />
                                        <img
                                          src="assets/images/svg_icon/like_fill.svg"
                                          className="me-1 img-fluid like_hover"
                                          alt=""
                                        />{" "}
                                        Like
                                      </a>
                                      <a
                                        href="javascript:void(0)"
                                        className="d-inline-flex align-items-center justify-content-center"
                                      >
                                        <img
                                          src="assets/images/svg_icon/share_arrow.svg"
                                          className="img-fluid me-1 like_img "
                                          alt=""
                                        />
                                        <span className="section_text ">
                                          Reply{" "}
                                        </span>
                                      </a>
                                      <div className="emojis position-relative likes_emoji ms-auto">
                                        <span className="total_like font-12 outfit-SB text-dark likes_number me-3">
                                          16
                                        </span>
                                        <img
                                          src="assets/images/like.png"
                                          className="img-fluid emojis_icon"
                                          alt=""
                                        />
                                        <img
                                          src="assets/images/love.png"
                                          className="img-fluid emojis_icon"
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="your_comment_box d-flex align-item-center w-100 position-relative">
                                    <span className="your_profile_img">
                                      <img
                                        src="assets/images/avatar_img.png"
                                        className="img-fluid cover_img"
                                      />
                                    </span>
                                    <div className="add_your_comment">
                                      <input
                                        type="text"
                                        className="form-control custome_comment_input"
                                        placeholder="@keithferrazzi"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="view_all_comment"
                                data-bs-toggle="modal"
                                data-bs-target="#commentmodal"
                              >
                                {" "}
                                <a
                                  href="javascript:void(0)"
                                  className="font_14 outfit_M mb-0"
                                >
                                  View All Comments
                                </a>{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="contact"
                  role="tabpanel"
                  aria-labelledby="contact-tab"
                >
                  <div className="company_job_search common_box text-center">
                    <div className="row">
                      <div className="col-md-10 mx-auto">
                        <h4 className="font-18 font-SB">
                          Metropolitan Law has 1,500 job openings - find the one for
                          you.
                        </h4>
                        <div className="top_section_search d-flex align-items-center position-relative">
                          <span className="seach_icon d-flex align-items-center justify-content-center">
                            <i className="fi fi-rr-search text-secondary lh-0" />
                          </span>
                          <input
                            type="text"
                            className="form-control section-search w-100"
                            placeholder="Serach jobs..."
                          />
                          <button className="btn btn-search">Find Jobs</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="jobs_cards position-relative mt-4">
                    <div className="row job_items_cards">
                      <div className="col-md-6">
                        <div className="people_card_item job_card d-flex w-100 flex-wrap">
                          <div className="people_card_head d-inline-flex w-100">
                            <div className="people_img">
                              <img
                                src="assets/images/company-logo.png"
                                className="img-fluid cover_img"
                              />
                            </div>
                            <div className="people_detail position-relative">
                              <h2 className="job_title_item job_title_item nowrap_text font-16 font- mb-1 d-inline-flex align-items-center font-B">
                                UI/UX designer for responsive desig....
                              </h2>
                              <p className="jod_designation font-14 mb-2 text-secondary">
                                Looking for a UI/UX designer to develop...
                              </p>
                              <p className="job_company_name font-14 mb-0 text-secondary">
                                Capco Industries Pvt Ltd
                              </p>
                              <div className="job_bookmark">
                                <input
                                  id="bookmark"
                                  type="checkbox"
                                  className="d-none bookmark_input"
                                />
                                <label
                                  htmlFor="bookmark"
                                  className="bookmark_icon d-inline-flex align-items-center justify-content-center"
                                >
                                  <i className="fi fi-rr-bookmark" />
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="people_contact_detail position-relative d-flex align-items-center w-100 flex-wrap">
                            <p className="location font-12 d-inline-flex w-100 align-items-center mb-3">
                              <i className="fi fi-rr-marker me-2" />
                              Indore,Madhya Pradesh,India
                            </p>
                            <p className="job_type font-12 mb-0 font-M d-inline-flex align-items-center">
                              {" "}
                              Full-time, Regular / Permanent
                            </p>
                            <span className="jop_post_date font-12 font-M text-secondary">
                              2 days ago
                            </span>
                          </div>
                        </div>
                        <div className="people_card_item job_card d-flex w-100 flex-wrap">
                          <div className="people_card_head d-inline-flex w-100">
                            <div className="people_img">
                              <img
                                src="assets/images/company-logo.png"
                                className="img-fluid cover_img"
                              />
                            </div>
                            <div className="people_detail position-relative">
                              <h2 className="job_title_item nowrap_text font-16 font- mb-1 d-inline-flex align-items-center font-B">
                                UI/UX designer for responsive desig....
                              </h2>
                              <p className="jod_designation font-14 mb-2 text-secondary">
                                Looking for a UI/UX designer to develop...
                              </p>
                              <p className="job_company_name font-14 mb-0 text-secondary">
                                Capco Industries Pvt Ltd
                              </p>
                              <div className="job_bookmark">
                                <input
                                  id="bookmark"
                                  type="checkbox"
                                  className="d-none bookmark_input"
                                />
                                <label
                                  htmlFor="bookmark"
                                  className="bookmark_icon d-inline-flex align-items-center justify-content-center"
                                >
                                  <i className="fi fi-rr-bookmark" />
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="people_contact_detail position-relative d-flex align-items-center w-100 flex-wrap">
                            <p className="location font-12 d-inline-flex w-100 align-items-center mb-3">
                              <i className="fi fi-rr-marker me-2" />
                              Indore,Madhya Pradesh,India
                            </p>
                            <p className="job_type font-12 mb-0 font-M d-inline-flex align-items-center">
                              {" "}
                              Full-time, Regular / Permanent
                            </p>
                            <span className="jop_post_date font-12 font-M text-secondary">
                              2 days ago
                            </span>
                          </div>
                        </div>
                        <div className="people_card_item job_card d-flex w-100 flex-wrap">
                          <div className="people_card_head d-inline-flex w-100">
                            <div className="people_img">
                              <img
                                src="assets/images/company-logo.png"
                                className="img-fluid cover_img"
                              />
                            </div>
                            <div className="people_detail position-relative">
                              <h2 className="job_title_item nowrap_text font-16 font- mb-1 d-inline-flex align-items-center font-B">
                                UI/UX designer for responsive desig....
                              </h2>
                              <p className="jod_designation font-14 mb-2 text-secondary">
                                Looking for a UI/UX designer to develop...
                              </p>
                              <p className="job_company_name font-14 mb-0 text-secondary">
                                Capco Industries Pvt Ltd
                              </p>
                              <div className="job_bookmark">
                                <input
                                  id="bookmark"
                                  type="checkbox"
                                  className="d-none bookmark_input"
                                />
                                <label
                                  htmlFor="bookmark"
                                  className="bookmark_icon d-inline-flex align-items-center justify-content-center"
                                >
                                  <i className="fi fi-rr-bookmark" />
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="people_contact_detail position-relative d-flex align-items-center w-100 flex-wrap">
                            <p className="location font-12 d-inline-flex w-100 align-items-center mb-3">
                              <i className="fi fi-rr-marker me-2" />
                              Indore,Madhya Pradesh,India
                            </p>
                            <p className="job_type font-12 mb-0 font-M d-inline-flex align-items-center">
                              {" "}
                              Full-time, Regular / Permanent
                            </p>
                            <span className="jop_post_date font-12 font-M text-secondary">
                              2 days ago
                            </span>
                          </div>
                        </div>
                        <div className="people_card_item job_card d-flex w-100 flex-wrap">
                          <div className="people_card_head d-inline-flex w-100">
                            <div className="people_img">
                              <img
                                src="assets/images/company-logo.png"
                                className="img-fluid cover_img"
                              />
                            </div>
                            <div className="people_detail position-relative">
                              <h2 className="job_title_item nowrap_text font-16 font- mb-1 d-inline-flex align-items-center font-B">
                                UI/UX designer for responsive desig....
                              </h2>
                              <p className="jod_designation font-14 mb-2 text-secondary">
                                Looking for a UI/UX designer to develop...
                              </p>
                              <p className="job_company_name font-14 mb-0 text-secondary">
                                Capco Industries Pvt Ltd
                              </p>
                              <div className="job_bookmark">
                                <input
                                  id="bookmark"
                                  type="checkbox"
                                  className="d-none bookmark_input"
                                />
                                <label
                                  htmlFor="bookmark"
                                  className="bookmark_icon d-inline-flex align-items-center justify-content-center"
                                >
                                  <i className="fi fi-rr-bookmark" />
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="people_contact_detail position-relative d-flex align-items-center w-100 flex-wrap">
                            <p className="location font-12 d-inline-flex w-100 align-items-center mb-3">
                              <i className="fi fi-rr-marker me-2" />
                              Indore,Madhya Pradesh,India
                            </p>
                            <p className="job_type font-12 mb-0 font-M d-inline-flex align-items-center">
                              {" "}
                              Full-time, Regular / Permanent
                            </p>
                            <span className="jop_post_date font-12 font-M text-secondary">
                              2 days ago
                            </span>
                          </div>
                        </div>
                        <div className="people_card_item job_card d-flex w-100 flex-wrap">
                          <div className="people_card_head d-inline-flex w-100">
                            <div className="people_img">
                              <img
                                src="assets/images/company-logo.png"
                                className="img-fluid cover_img"
                              />
                            </div>
                            <div className="people_detail position-relative">
                              <h2 className="job_title_item nowrap_text font-16 font- mb-1 d-inline-flex align-items-center font-B">
                                UI/UX designer for responsive desig....
                              </h2>
                              <p className="jod_designation font-14 mb-2 text-secondary">
                                Looking for a UI/UX designer to develop...
                              </p>
                              <p className="job_company_name font-14 mb-0 text-secondary">
                                Capco Industries Pvt Ltd
                              </p>
                              <div className="job_bookmark">
                                <input
                                  id="bookmark"
                                  type="checkbox"
                                  className="d-none bookmark_input"
                                />
                                <label
                                  htmlFor="bookmark"
                                  className="bookmark_icon d-inline-flex align-items-center justify-content-center"
                                >
                                  <i className="fi fi-rr-bookmark" />
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="people_contact_detail position-relative d-flex align-items-center w-100 flex-wrap">
                            <p className="location font-12 d-inline-flex w-100 align-items-center mb-3">
                              <i className="fi fi-rr-marker me-2" />
                              Indore,Madhya Pradesh,India
                            </p>
                            <p className="job_type font-12 mb-0 font-M d-inline-flex align-items-center">
                              {" "}
                              Full-time, Regular / Permanent
                            </p>
                            <span className="jop_post_date font-12 font-M text-secondary">
                              2 days ago
                            </span>
                          </div>
                        </div>
                        <div className="people_card_item job_card d-flex w-100 flex-wrap">
                          <div className="people_card_head d-inline-flex w-100">
                            <div className="people_img">
                              <img
                                src="assets/images/company-logo.png"
                                className="img-fluid cover_img"
                              />
                            </div>
                            <div className="people_detail position-relative">
                              <h2 className="job_title_item nowrap_text font-16 font- mb-1 d-inline-flex align-items-center font-B">
                                UI/UX designer for responsive desig....
                              </h2>
                              <p className="jod_designation font-14 mb-2 text-secondary">
                                Looking for a UI/UX designer to develop...
                              </p>
                              <p className="job_company_name font-14 mb-0 text-secondary">
                                Capco Industries Pvt Ltd
                              </p>
                              <div className="job_bookmark">
                                <input
                                  id="bookmark"
                                  type="checkbox"
                                  className="d-none bookmark_input"
                                />
                                <label
                                  htmlFor="bookmark"
                                  className="bookmark_icon d-inline-flex align-items-center justify-content-center"
                                >
                                  <i className="fi fi-rr-bookmark" />
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="people_contact_detail position-relative d-flex align-items-center w-100 flex-wrap">
                            <p className="location font-12 d-inline-flex w-100 align-items-center mb-3">
                              <i className="fi fi-rr-marker me-2" />
                              Indore,Madhya Pradesh,India
                            </p>
                            <p className="job_type font-12 mb-0 font-M d-inline-flex align-items-center">
                              {" "}
                              Full-time, Regular / Permanent
                            </p>
                            <span className="jop_post_date font-12 font-M text-secondary">
                              2 days ago
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="people_card_item job_card d-flex w-100 flex-wrap">
                          <div className="people_card_head d-inline-flex w-100">
                            <div className="people_img">
                              <img
                                src="assets/images/company-logo.png"
                                className="img-fluid cover_img"
                              />
                            </div>
                            <div className="people_detail position-relative">
                              <h2 className="job_title_item nowrap_text font-16 font- mb-1 d-inline-flex align-items-center font-B">
                                UI/UX designer for responsive desig....
                              </h2>
                              <p className="jod_designation font-14 mb-2 text-secondary">
                                Looking for a UI/UX designer to develop...
                              </p>
                              <p className="job_company_name font-14 mb-0 text-secondary">
                                Capco Industries Pvt Ltd
                              </p>
                              <div className="job_bookmark">
                                <input
                                  id="bookmark"
                                  type="checkbox"
                                  className="d-none bookmark_input"
                                />
                                <label
                                  htmlFor="bookmark"
                                  className="bookmark_icon d-inline-flex align-items-center justify-content-center"
                                >
                                  <i className="fi fi-rr-bookmark" />
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="people_contact_detail position-relative d-flex align-items-center w-100 flex-wrap">
                            <p className="location font-12 d-inline-flex w-100 align-items-center mb-3">
                              <i className="fi fi-rr-marker me-2" />
                              Indore,Madhya Pradesh,India
                            </p>
                            <p className="job_type font-12 mb-0 font-M d-inline-flex align-items-center">
                              {" "}
                              Full-time, Regular / Permanent
                            </p>
                            <span className="jop_post_date font-12 font-M text-secondary">
                              2 days ago
                            </span>
                          </div>
                        </div>
                        <div className="people_card_item job_card d-flex w-100 flex-wrap">
                          <div className="people_card_head d-inline-flex w-100">
                            <div className="people_img">
                              <img
                                src="assets/images/company-logo.png"
                                className="img-fluid cover_img"
                              />
                            </div>
                            <div className="people_detail position-relative">
                              <h2 className="job_title_item nowrap_text font-16 font- mb-1 d-inline-flex align-items-center font-B">
                                UI/UX designer for responsive desig....
                              </h2>
                              <p className="jod_designation font-14 mb-2 text-secondary">
                                Looking for a UI/UX designer to develop...
                              </p>
                              <p className="job_company_name font-14 mb-0 text-secondary">
                                Capco Industries Pvt Ltd
                              </p>
                              <div className="job_bookmark">
                                <input
                                  id="bookmark"
                                  type="checkbox"
                                  className="d-none bookmark_input"
                                />
                                <label
                                  htmlFor="bookmark"
                                  className="bookmark_icon d-inline-flex align-items-center justify-content-center"
                                >
                                  <i className="fi fi-rr-bookmark" />
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="people_contact_detail position-relative d-flex align-items-center w-100 flex-wrap">
                            <p className="location font-12 d-inline-flex w-100 align-items-center mb-3">
                              <i className="fi fi-rr-marker me-2" />
                              Indore,Madhya Pradesh,India
                            </p>
                            <p className="job_type font-12 mb-0 font-M d-inline-flex align-items-center">
                              {" "}
                              Full-time, Regular / Permanent
                            </p>
                            <span className="jop_post_date font-12 font-M text-secondary">
                              2 days ago
                            </span>
                          </div>
                        </div>
                        <div className="people_card_item job_card d-flex w-100 flex-wrap">
                          <div className="people_card_head d-inline-flex w-100">
                            <div className="people_img">
                              <img
                                src="assets/images/company-logo.png"
                                className="img-fluid cover_img"
                              />
                            </div>
                            <div className="people_detail position-relative">
                              <h2 className="job_title_item nowrap_text font-16 font- mb-1 d-inline-flex align-items-center font-B">
                                UI/UX designer for responsive desig....
                              </h2>
                              <p className="jod_designation font-14 mb-2 text-secondary">
                                Looking for a UI/UX designer to develop...
                              </p>
                              <p className="job_company_name font-14 mb-0 text-secondary">
                                Capco Industries Pvt Ltd
                              </p>
                              <div className="job_bookmark">
                                <input
                                  id="bookmark"
                                  type="checkbox"
                                  className="d-none bookmark_input"
                                />
                                <label
                                  htmlFor="bookmark"
                                  className="bookmark_icon d-inline-flex align-items-center justify-content-center"
                                >
                                  <i className="fi fi-rr-bookmark" />
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="people_contact_detail position-relative d-flex align-items-center w-100 flex-wrap">
                            <p className="location font-12 d-inline-flex w-100 align-items-center mb-3">
                              <i className="fi fi-rr-marker me-2" />
                              Indore,Madhya Pradesh,India
                            </p>
                            <p className="job_type font-12 mb-0 font-M d-inline-flex align-items-center">
                              {" "}
                              Full-time, Regular / Permanent
                            </p>
                            <span className="jop_post_date font-12 font-M text-secondary">
                              2 days ago
                            </span>
                          </div>
                        </div>
                        <div className="people_card_item job_card d-flex w-100 flex-wrap">
                          <div className="people_card_head d-inline-flex w-100">
                            <div className="people_img">
                              <img
                                src="assets/images/company-logo.png"
                                className="img-fluid cover_img"
                              />
                            </div>
                            <div className="people_detail position-relative">
                              <h2 className="job_title_item nowrap_text font-16 font- mb-1 d-inline-flex align-items-center font-B">
                                UI/UX designer for responsive desig....
                              </h2>
                              <p className="jod_designation font-14 mb-2 text-secondary">
                                Looking for a UI/UX designer to develop...
                              </p>
                              <p className="job_company_name font-14 mb-0 text-secondary">
                                Capco Industries Pvt Ltd
                              </p>
                              <div className="job_bookmark">
                                <input
                                  id="bookmark"
                                  type="checkbox"
                                  className="d-none bookmark_input"
                                />
                                <label
                                  htmlFor="bookmark"
                                  className="bookmark_icon d-inline-flex align-items-center justify-content-center"
                                >
                                  <i className="fi fi-rr-bookmark" />
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="people_contact_detail position-relative d-flex align-items-center w-100 flex-wrap">
                            <p className="location font-12 d-inline-flex w-100 align-items-center mb-3">
                              <i className="fi fi-rr-marker me-2" />
                              Indore,Madhya Pradesh,India
                            </p>
                            <p className="job_type font-12 mb-0 font-M d-inline-flex align-items-center">
                              {" "}
                              Full-time, Regular / Permanent
                            </p>
                            <span className="jop_post_date font-12 font-M text-secondary">
                              2 days ago
                            </span>
                          </div>
                        </div>
                        <div className="people_card_item job_card d-flex w-100 flex-wrap">
                          <div className="people_card_head d-inline-flex w-100">
                            <div className="people_img">
                              <img
                                src="assets/images/company-logo.png"
                                className="img-fluid cover_img"
                              />
                            </div>
                            <div className="people_detail position-relative">
                              <h2 className="job_title_item nowrap_text font-16 font- mb-1 d-inline-flex align-items-center font-B">
                                UI/UX designer for responsive desig....
                              </h2>
                              <p className="jod_designation font-14 mb-2 text-secondary">
                                Looking for a UI/UX designer to develop...
                              </p>
                              <p className="job_company_name font-14 mb-0 text-secondary">
                                Capco Industries Pvt Ltd
                              </p>
                              <div className="job_bookmark">
                                <input
                                  id="bookmark"
                                  type="checkbox"
                                  className="d-none bookmark_input"
                                />
                                <label
                                  htmlFor="bookmark"
                                  className="bookmark_icon d-inline-flex align-items-center justify-content-center"
                                >
                                  <i className="fi fi-rr-bookmark" />
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="people_contact_detail position-relative d-flex align-items-center w-100 flex-wrap">
                            <p className="location font-12 d-inline-flex w-100 align-items-center mb-3">
                              <i className="fi fi-rr-marker me-2" />
                              Indore,Madhya Pradesh,India
                            </p>
                            <p className="job_type font-12 mb-0 font-M d-inline-flex align-items-center">
                              {" "}
                              Full-time, Regular / Permanent
                            </p>
                            <span className="jop_post_date font-12 font-M text-secondary">
                              2 days ago
                            </span>
                          </div>
                        </div>
                        <div className="people_card_item job_card d-flex w-100 flex-wrap">
                          <div className="people_card_head d-inline-flex w-100">
                            <div className="people_img">
                              <img
                                src="assets/images/company-logo.png"
                                className="img-fluid cover_img"
                              />
                            </div>
                            <div className="people_detail position-relative">
                              <h2 className="job_title_item nowrap_text font-16 font- mb-1 d-inline-flex align-items-center font-B">
                                UI/UX designer for responsive desig....
                              </h2>
                              <p className="jod_designation font-14 mb-2 text-secondary">
                                Looking for a UI/UX designer to develop...
                              </p>
                              <p className="job_company_name font-14 mb-0 text-secondary">
                                Capco Industries Pvt Ltd
                              </p>
                              <div className="job_bookmark">
                                <input
                                  id="bookmark"
                                  type="checkbox"
                                  className="d-none bookmark_input"
                                />
                                <label
                                  htmlFor="bookmark"
                                  className="bookmark_icon d-inline-flex align-items-center justify-content-center"
                                >
                                  <i className="fi fi-rr-bookmark" />
                                </label>
                              </div>
                            </div>
                          </div>
                          <div className="people_contact_detail position-relative d-flex align-items-center w-100 flex-wrap">
                            <p className="location font-12 d-inline-flex w-100 align-items-center mb-3">
                              <i className="fi fi-rr-marker me-2" />
                              Indore,Madhya Pradesh,India
                            </p>
                            <p className="job_type font-12 mb-0 font-M d-inline-flex align-items-center">
                              {" "}
                              Full-time, Regular / Permanent
                            </p>
                            <span className="jop_post_date font-12 font-M text-secondary">
                              2 days ago
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 bg-white right_side_job_details">
                        <div className="job_card_detil d-flex w-100 flex-wrap">
                          <div className="job_card_head d-inline-flex w-100">
                            <div className="company_logo d-block">
                              <img
                                src="assets/images/company-logo.png"
                                className="img-fluid cover_img"
                              />
                            </div>
                            <div className="job_title position-relative d-flex align-items-center">
                              <h2 className="job_detail_title font-18 font- mb-1 d-inline-flex font-SB">
                                UI/UX designer for responsive designing for vactors
                                &amp; real stick theme with potential long term
                                position
                              </h2>
                              <a href="#" className="job_detail_close ms-auto">
                                <i className="fi fi-rr-cross" />
                              </a>
                            </div>
                          </div>
                          <ul className="job_location_details d-flex align-items-center p-0">
                            <li>
                              <i className="fi fi-rr-marker me-2" /> Indore, Madhya
                              Pradesh, India
                            </li>
                            |<li>2 days ago</li>
                          </ul>
                          <div className="job_apply_btn d-inline-block w-100 d-none">
                            <a href="#" className="btn btn-primary">
                              Apply Now
                            </a>
                            <a href="#" className="btn btn-primary-outline">
                              Save
                            </a>
                          </div>
                          <div className="job_description">
                            <h4 className="font-16 font-M">
                              About Capco Industries Pvt Ltd{" "}
                            </h4>
                            <p className="job_desc_pera text-secondary font-14 font-M mb-3">
                              Not that long ago, we were on whatsapp with a handful
                              of customers, many of whom were friends and family.
                              Today, we're an app covering Bangalore, Chennai,
                              Jaipur, Mumbai, Hyderabad, Delhi, Noida, Pune and
                              Gurgaon. Dunzo is a technology company that makes
                              local deliveries fast and easy. Time is the most
                              valuable commodity in today's time. Our aim is to give
                              it back to you. We take care of your daily chores,
                              from groceries, food, laundry to even organising party
                              supplies - all at the tap of a button.
                            </p>
                            <a
                              href="#"
                              className="read-more font-14 font-SB text-primary"
                            >
                              Read More
                            </a>
                          </div>
                          <div className="job_type_details d-flex w-100 flex-wrap">
                            <div className="job_type_item">
                              <p className="job_type_title font-12 font-M text-secondary mb-0">
                                Seniority level
                              </p>
                              <p className="font-12 font-M mb-0">
                                Mid-Senior level
                              </p>
                            </div>
                            <div className="job_type_item">
                              <p className="job_type_title font-12 font-M text-secondary mb-0">
                                Seniority level
                              </p>
                              <p className="font-12 font-M mb-0">
                                Mid-Senior level
                              </p>
                            </div>
                            <br className="d-none d-md-block" />
                            <div className="job_type_item">
                              <p className="job_type_title font-12 font-M text-secondary mb-0">
                                Job function
                              </p>
                              <p className="font-12 font-M mb-0">
                                Design, Art/Creative, and Information Technology
                              </p>
                            </div>
                            <div className="job_type_item">
                              <p className="job_type_title font-12 font-M text-secondary mb-0">
                                Industries
                              </p>
                              <p className="font-12 font-M mb-0">
                                IT Services and IT Consulting
                              </p>
                            </div>
                          </div>
                          <div className="job_views_list d-flex w-100">
                            <div className="job_view_img position-relative d-flex pe-3">
                              <span className="circile_img">
                                {" "}
                                <img
                                  src="assets/images/job_u1.png"
                                  className="img-cover"
                                />
                              </span>
                              <span className="circile_img">
                                {" "}
                                <img
                                  src="assets/images/job_2.png"
                                  className="img-cover"
                                />
                              </span>
                              <span className="circile_img">
                                {" "}
                                <img
                                  src="assets/images/job_u3.png"
                                  className="img-cover"
                                />
                              </span>
                              <span className="circile_img">
                                {" "}
                                <img
                                  src="assets/images/job_u4.png"
                                  className="img-cover"
                                />
                              </span>
                            </div>
                            <p className="font-12 font-M mb-0">
                              Referrals increase your chances of interviewing at
                              Capco Industries Weblinks Inc by 2x
                            </p>
                          </div>
                          <div className="job_bottom_button d-inline-flex align-items-center w-100">
                            <a href="#" className="btn btn-primary-outline">
                              See who you know
                            </a>
                            <a href="#" className="ms-auto btn btn-report font-SB">
                              Report a job
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* company tabs body end */}
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
      <script>
        $(document).ready(function (){"{"}
        $('.job_title_item').click(function (){"{"}
        $('.job_items_cards').addClass('flex-column');
        $('.jobs_cards').addClass('show_job_detail');
        {"}"}); $('.job_detail_close').click(function (){"{"}
        $('.job_items_cards').removeClass('flex-column');
        $('.jobs_cards').removeClass('show_job_detail');
        {"}"});
        {"}"});
      </script>
    </>
    </>
    )
  }
}
