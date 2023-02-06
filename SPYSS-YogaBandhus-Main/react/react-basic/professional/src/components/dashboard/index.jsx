import React, { Component } from "react";
import DashNavbar from "../dashboardNavbar";

// import $ from 'jquery'

export default class Dashboard extends Component {
  render() {
    return (
      <>
        {/* header start here */}
        <DashNavbar/>
        {/* header end here */}
        <div className="main_dashboard top_spacing">
          <div className="container">
            <div className="row">
              {/* user profile details start here */}
              <div className="col-md-3">
                <div className="user_profile_card position-relative mb_20">
                  <div className="pro_bg">
                    {" "}
                    <img
                      src="assets/images/profile_bg.png"
                      className="img-fluid img-cover"
                    />{" "}
                  </div>
                  <div className="dashboard_body_profile text-center bg-white position-relative">
                    {" "}
                    <span className="dash_user_img rounded-circle d-flex mx-auto">
                      <img
                        src="assets/images/avatar_img.png"
                        className="img-fluid cover_img"
                      />
                    </span>
                    <h4 className="font-14 font-M mb-2">
                      David Smith{" "}
                      <img
                        src="assets/images/svg_icon/user-verified.svg"
                        className="user-verified ms-1"
                      />
                    </h4>
                    <p className="font-12 text-secondary line-limit_3 font-M mb-0">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum is simply dummy text of
                      the....
                    </p>
                    <div className="view_more_details">
                      {" "}
                      <a
                        href="profile"
                        className="view-text-btn font-14 font-SB text-primary"
                      >
                        View Profile <i className="fi fi-ss-arrow-right ms-1" />
                      </a>{" "}
                    </div>
                  </div>
                </div>
                <div className="user_connection_listing bg-white mb_20">
                  <div className="user_connection_group d-flex align-items-center w-100">
                    {" "}
                    <span className="connection_count font-14 font-B lh-0 d-flex align-items-center justify-content-center">
                      4
                    </span>
                    <div className="connection_details position-relative d-flex flex-wrap align-items-center">
                      <p className="font-14 mb-0 w-100">Connection</p>
                      <a
                        href="connection"
                        className="font-14 font-M mb-0 text-dark"
                      >
                        Grow your network
                      </a>{" "}
                      <i className="fi fi-ss-angle-right right_arrow" />
                    </div>
                  </div>
                  <div className="user_connection_group d-flex align-items-center w-100 border-0">
                    {" "}
                    <span className="connection_count font-14 font-B lh-0 d-flex align-items-center justify-content-center">
                      2
                    </span>
                    <div className="connection_details position-relative d-flex flex-wrap align-items-center">
                      <a
                        href="connection"
                        className="font-14 mb-0 w-100 text-dark"
                      >
                        View Requests
                      </a>{" "}
                      <i className="fi fi-ss-angle-right right_arrow" />
                    </div>
                  </div>
                </div>
                <div className="user_connection_listing bg-white mb_20">
                  <div className="user_connection_group d-flex align-items-center w-100 border-0">
                    {" "}
                    <span className="connection_count font-14 font-B lh-0 d-flex align-items-center justify-content-center">
                      6
                    </span>
                    <div className="connection_details position-relative d-flex flex-wrap align-items-center">
                      <p className="font-14 mb-0 w-100">Groups</p>
                      <a href="#" className="font-14 font-M mb-0 text-dark">
                        Manage or Create groups
                      </a>
                      <i className="fi fi-ss-angle-right right_arrow" />
                    </div>
                  </div>
                </div>
              </div>
              {/* user profile details start end */}
              {/* post section start here */}
              <div className="col-md-6">
                <div className="browse_post rounded_5 p-3 d-flex align-items-center w-100 mb_20">
                  {" "}
                  <span className="my_user_img rounded-circle">
                    <img
                      src="assets/images/avatar_img.png"
                      className="img-fluid cover_img"
                    />
                  </span>
                  <div
                    className="browse_input font-14 d-inline-flex align-items-center"
                    data-bs-toggle="modal"
                    data-bs-target="#postModal"
                  >
                    {" "}
                    Share your thoughts{" "}
                  </div>
                </div>
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
                          href="userprofile"
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
                          <img
                            src="assets/images/svg_icon/connections.svg"
                            className="img-fluid me-2"
                          />{" "}
                          Connection{" "}
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
                                data-bs-target="#postModal"
                              >
                                <i className="fi fi-rr-edit me-2" /> Edit
                              </a>
                            </li>
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
                            <li>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                                data-bs-toggle="modal"
                                data-bs-target="#postreportModal"
                              >
                                <i className="fi fi-rr-trash me-2" /> Delete
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
                        with your design work, look no further. We’ve rounded up
                        a handful of unique typefaces that are bursting with
                        personality!
                      </p>
                      <a
                        href="#"
                        className="post_read_more font-14 font-M mt-2"
                      >
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
                            <img
                              src="assets/images/svg_icon/like_fill.svg"
                              class="img-fluid me-1 like_img"
                              alt=""
                            />
                            <img
                              src="assets/images/svg_icon/svg_icon.svg"
                              class="img-fluid like_hover me-1"
                              alt=""
                            />
                            <input
                              type="hidden"
                              defaultValue="gusta"
                              className="prueba"
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
                              <div className="input_with_emoji position-relative">
                                <a href="#" className="comment_emoji">
                                  <i className="fi fi-rr-smile" />
                                </a>
                                <input
                                  type="text"
                                  name="comment"
                                  post_id={231}
                                  className="form-control comment_input add_comment"
                                  placeholder="Share your comment on this post..."
                                />
                              </div>
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
                                      Talent, leadership, organization, HR | 2
                                      hr ago
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
                                      Talent, leadership, organization, HR | 2
                                      hr ago
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
                                    <div className="input_with_emoji position-relative">
                                      <a href="#" className="comment_emoji">
                                        <i className="fi fi-rr-smile" />
                                      </a>
                                      <input
                                        type="text"
                                        name="comment"
                                        post_id={231}
                                        className="form-control comment_input add_comment"
                                        placeholder="Share your comment on this post..."
                                      />
                                    </div>
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
                          href="companyprofile"
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
                          <img
                            src="assets/images/svg_icon/public_globe.svg"
                            className="img-fluid me-2"
                          />
                          Public{" "}
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
                        Employee empowerment is a hot topic in workplace
                        culture. This rewards go-getter with the chance to take
                        greater initiative and helps the organization in
                        identifying the high-potential, future leaders!
                      </p>
                      <a
                        href="#"
                        className="post_read_more font-14 font-M mt-2"
                      >
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
                              <div className="input_with_emoji position-relative">
                                <a href="#" className="comment_emoji">
                                  <i className="fi fi-rr-smile" />
                                </a>
                                <input
                                  type="text"
                                  name="comment"
                                  post_id={231}
                                  className="form-control comment_input add_comment"
                                  placeholder="Share your comment on this post..."
                                />
                              </div>
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
                                      Talent, leadership, organization, HR | 2
                                      hr ago
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
                                      Talent, leadership, organization, HR | 2
                                      hr ago
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
                                    <div className="input_with_emoji position-relative">
                                      <a href="#" className="comment_emoji">
                                        <i className="fi fi-rr-smile" />
                                      </a>
                                      <input
                                        type="text"
                                        name="comment"
                                        post_id={231}
                                        className="form-control comment_input add_comment"
                                        placeholder="Share your comment on this post..."
                                      />
                                    </div>
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
                          src="assets/images/posted_user.png"
                          className="img-fluid cover_img"
                        />
                      </span>
                      <div className="user_details_post lh-1">
                        {" "}
                        <a
                          href="userprofile"
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
                          <img
                            src="assets/images/svg_icon/public_globe.svg"
                            className="img-fluid me-2"
                          />
                          Public{" "}
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
                                <i className="fi fi-rr-edit me-2" /> Edit
                              </a>
                            </li>
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
                            <li>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                                data-bs-toggle="modal"
                                data-bs-target="#postreportModal"
                              >
                                <i className="fi fi-rr-trash me-2" /> Delete
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
                        with your design work, look no further. We’ve rounded up
                        a handful of unique typefaces that are bursting with
                        personality!
                      </p>
                      <a
                        href="#"
                        className="post_read_more font-14 font-M mt-2"
                      >
                        Read More...
                      </a>
                      <div
                        className="post_content posted_video"
                        data-bs-toggle="modal"
                        data-bs-target="#postviewModal"
                      >
                        <video
                          autoPlay="true"
                          className="cover_img"
                          controls
                        >
                          <source
                            src="assets/images/demo-video.mp4"
                            type="video/mp4"
                          />
                          <source
                            src="assets/images/demo-video.mp4"
                            type="video/ogg"
                          />
                        </video>
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
                            <input
                              type="hidden"
                              defaultValue="gusta"
                              className="prueba"
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
                              <div className="input_with_emoji position-relative">
                                <a href="#" className="comment_emoji">
                                  <i className="fi fi-rr-smile" />
                                </a>
                                <input
                                  type="text"
                                  name="comment"
                                  post_id={231}
                                  className="form-control comment_input add_comment"
                                  placeholder="Share your comment on this post..."
                                />
                              </div>
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
                                      Talent, leadership, organization, HR | 2
                                      hr ago
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
                                      Talent, leadership, organization, HR | 2
                                      hr ago
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
                                    <div className="input_with_emoji position-relative">
                                      <a href="#" className="comment_emoji">
                                        <i className="fi fi-rr-smile" />
                                      </a>
                                      <input
                                        type="text"
                                        name="comment"
                                        post_id={231}
                                        className="form-control comment_input add_comment"
                                        placeholder="Share your comment on this post..."
                                      />
                                    </div>
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
                          src="assets/images/posted_user.png"
                          className="img-fluid cover_img"
                        />
                      </span>
                      <div className="user_details_post lh-1">
                        {" "}
                        <a
                          href="userprofile"
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
                          <img
                            src="assets/images/svg_icon/public_globe.svg"
                            className="img-fluid me-2"
                          />{" "}
                          Public{" "}
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
                                <i className="fi fi-rr-edit me-2" /> Edit
                              </a>
                            </li>
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
                            <li>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0);"
                                data-bs-toggle="modal"
                                data-bs-target="#postreportModal"
                              >
                                <i className="fi fi-rr-trash me-2" /> Delete
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
                        with your design work, look no further. We’ve rounded up
                        a handful of unique typefaces that are bursting with
                        personality!
                      </p>
                      <a
                        href="#"
                        className="post_read_more font-14 font-M mt-2"
                      >
                        Read More...
                      </a>
                      <div
                        className="post_content posted_audio"
                        data-bs-toggle="modal"
                        data-bs-target="#postviewModal"
                      >
                        <audio controls className="w-100">
                          <source
                            src="assets/images/demo-audio.mp3"
                            type="audio/ogg"
                          />
                          <source
                            src="assets/images/demo-audio.mp3"
                            type="audio/mpeg"
                          />
                        </audio>
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
                              id-referencia={1655888248011}
                              className="Selector selectorFace gusta"
                            />
                            <input
                              type="hidden"
                              defaultValue="gusta"
                              className="prueba 1655888248009 1655888248011"
                              style={{ display: "none" }}
                            />
                            <span className="section_text font-14 font-SB">
                              Like
                            </span>
                          </a>
                          <a
                            className="comment d-flex align-items-center justify-content-center collapsed"
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
                        <div
                          className="collapse show"
                          id="collapseShare231"
                          style={{}}
                        >
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
                              <div className="input_with_emoji position-relative">
                                <a href="#" className="comment_emoji">
                                  <i className="fi fi-rr-smile" />
                                </a>
                                <input
                                  type="text"
                                  name="comment"
                                  post_id={231}
                                  className="form-control comment_input add_comment"
                                  placeholder="Share your comment on this post..."
                                />
                              </div>
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
                                      Talent, leadership, organization, HR | 2
                                      hr ago
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
                                      Talent, leadership, organization, HR | 2
                                      hr ago
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
                                    <div className="input_with_emoji position-relative">
                                      <a href="#" className="comment_emoji">
                                        <i className="fi fi-rr-smile" />
                                      </a>
                                      <input
                                        type="text"
                                        name="comment"
                                        post_id={231}
                                        className="form-control comment_input add_comment"
                                        placeholder="Share your comment on this post..."
                                      />
                                    </div>
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
              {/* post section start here */}
              {/* advertisement start here */}
              <div className="col-md-3 position_sticky h-100">
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
              {/* advertisement start here */}
            </div>
          </div>
        </div>
        {/* post modal start */}
        <div
          className="modal fade common_modal"
          id="postModal"
          tabIndex={-1}
          aria-labelledby="postModal"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header border-0">
                <h5
                  className="modal-title font-20 font-SB w-100"
                  id="exampleModalLabel"
                >
                  Create / Edit a Post
                </h5>
                <button
                  type="button"
                  className="btn-close d-flex align-items-center justify-content-center"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="fi fi-br-cross lh-0" />
                </button>
              </div>
              <div className="modal-body">
                <div className="user_recent_post_top d-flex align-items-center flex-wrap">
                  <span className="user_img_post_icon">
                    <img
                      src="assets/images/posted_user.png"
                      className="img-fluid cover_img"
                    />
                  </span>
                  <div className="user_details_post lh-1">
                    {" "}
                    <a
                      href="userprofile"
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
                  <div className="ms-auto d-inline-flex align-items-center flex-column align-items-end">
                    <a
                      className="add_location d-inline-flex align-items-center justify-content-center font-SB"
                      data-bs-toggle="collapse"
                      href="#collapseExample"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      <i className="fi fi-sr-marker me-1 lh-0" />
                      <span className="nowrap_text">Add Location</span>
                    </a>
                    <label className="badge bg-warning my-2"> conditonal</label>
                    <a
                      className="add_location align-items-center justify-content-center font-SB selected "
                      data-bs-toggle="collapse"
                      href="#collapseExample"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      <i className="fi fi-sr-marker me-1 lh-0" />
                      <span className="nowrap_text">Indore Madhya Pardesh</span>
                    </a>
                  </div>
                  <div className="collapse mt-3 w-100" id="collapseExample">
                    <div className="card card-body modal_location_box border-0 px-0 py-3 rounded-0">
                      <h4 className="font-16 font-M mb-2">Add Location</h4>
                      <div className="search_location_input position-relative">
                        <input
                          type="text"
                          className="from-control"
                          placeholder="Where are you?"
                        />
                        <i className="fi fi-sr-marker me-1 lh-0" />
                      </div>
                    </div>
                    <div className="search_suggestion">
                      <h6 className="font-12 mb-2">suggestion</h6>
                      <div className="suggestion_item d-flex align-items-center position-relative flex-wrap">
                        <span className="suggestion_icon d-flex align-items-center justify-content-center me-2">
                          <i className="fi fi-sr-marker lh-0" />
                        </span>
                        <h6 className="font-14 font-M mb-0 w-100">Indore</h6>
                        <p className="font-12 text-secondary mb-0">
                          Indore Madhya Pardesh
                        </p>
                      </div>
                      <div className="suggestion_item d-flex align-items-center position-relative flex-wrap">
                        <span className="suggestion_icon d-flex align-items-center justify-content-center me-2">
                          <i className="fi fi-sr-marker lh-0" />
                        </span>
                        <h6 className="font-14 font-M mb-0 w-100">Indore</h6>
                        <p className="font-12 text-secondary mb-0">
                          Indore Madhya Pardesh
                        </p>
                      </div>
                      <div className="suggestion_item d-flex align-items-center position-relative flex-wrap">
                        <span className="suggestion_icon d-flex align-items-center justify-content-center me-2">
                          <i className="fi fi-sr-marker lh-0" />
                        </span>
                        <h6 className="font-14 font-M mb-0 w-100">Indore</h6>
                        <p className="font-12 text-secondary mb-0">
                          Indore Madhya Pardesh
                        </p>
                      </div>
                      <div className="suggestion_item d-flex align-items-center position-relative flex-wrap">
                        <span className="suggestion_icon d-flex align-items-center justify-content-center me-2">
                          <i className="fi fi-sr-marker lh-0" />
                        </span>
                        <h6 className="font-14 font-M mb-0 w-100">Indore</h6>
                        <p className="font-12 text-secondary mb-0">
                          Indore Madhya Pardesh
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="post_form pt-3 d-inline-block w-100">
                  <div className="mb-3">
                    <textarea
                      type="text"
                      className="form-control textarea_field"
                      row={5}
                      col={30}
                      placeholder="Share your thoughts"
                      defaultValue={""}
                    />
                  </div>
                  <div className="img_uploader position-relative mb-3">
                    <input type="file" className="" id="upload" />
                    <lable
                      htmlFor="upload"
                      className="img_upload_box d-flex align-content-center justify-content-center flex-wrap"
                    >
                      <span className="uploader_icon d-flex align-items-center justify-content-center mb-2">
                        <i className="fi fi-rr-upload lh-0" />
                      </span>
                      <p className="font-14 font-M text-secondary mt-2 mb-0 w-100 text-center">
                        Upload Photo or Video
                      </p>
                    </lable>
                  </div>
                  <div className="post_views_option">
                    <h3 className="font-16 font-M mb-0">
                      Who can see your post?
                    </h3>
                    <p className="font-12 font-M text-secondary">
                      Your post will be visible on feed, on your profile and in
                      search results
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
                            <span className="text ms-2 font-M">
                              Public on Graynod
                            </span>
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
                          <label
                            className="form-check-label"
                            htmlFor="connections"
                          >
                            <img
                              src="assets/images/svg_icon/connections.svg"
                              className="default"
                            />
                            <img
                              src="assets/images/svg_icon/connections-active.svg"
                              className="active"
                            />
                            <span className="text ms-2 font-M">
                              Connections on Graynod
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer justify-content-center border-0">
                <div className="modal_post_btn">
                  <button
                    type="button"
                    className="btn btn-primary rounded-pill"
                  >
                    Post
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* post modal end */}
        {/*  comment Modal */}
        <div
          className="modal fade common_modal comment_modal"
          id="commentmodal"
          tabIndex={-1}
          aria-labelledby="commentmodal"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header border-0">
                <h5 className="modal-title w-100" id="exampleModalLabel">
                  Comments
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="fi fi-br-cross lh-0" />
                </button>
              </div>
              <div className="modal-body">
                <div className="all_comments_list p-0">
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
                        <a href="#" className="text-dark mb-0 d-block w-100">
                          Business Page
                        </a>
                        <span className="font-12 text-secondary">
                          Talent, leadership, organization, HR | 2 hr ago
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
                                <i className="fi fi-rs-flag me-2" /> Report This
                                comment
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
                          <span className="section_text ">Reply </span>
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
                        <a href="#" className="text-dark mb-0 d-block w-100">
                          Business Page
                        </a>
                        <span className="font-12 text-secondary">
                          Talent, leadership, organization, HR | 2 hr ago
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
                                <i className="fi fi-rs-flag me-2" /> Report This
                                comment
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
                          <span className="section_text ">Reply </span>
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
                        <a href="#" className="text-dark mb-0 d-block w-100">
                          Business Page
                        </a>
                        <span className="font-12 text-secondary">
                          Talent, leadership, organization, HR | 2 hr ago
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
                                <i className="fi fi-rs-flag me-2" /> Report This
                                comment
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
                          <span className="section_text ">Reply </span>
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
                        <a href="#" className="text-dark mb-0 d-block w-100">
                          Business Page
                        </a>
                        <span className="font-12 text-secondary">
                          Talent, leadership, organization, HR | 2 hr ago
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
                                <i className="fi fi-rs-flag me-2" /> Report This
                                comment
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
                          <span className="section_text ">Reply </span>
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
                        <a href="#" className="text-dark mb-0 d-block w-100">
                          Business Page
                        </a>
                        <span className="font-12 text-secondary">
                          Talent, leadership, organization, HR | 2 hr ago
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
                                <i className="fi fi-rs-flag me-2" /> Report This
                                comment
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
                          <span className="section_text ">Reply </span>
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
                        <a href="#" className="text-dark mb-0 d-block w-100">
                          Business Page
                        </a>
                        <span className="font-12 text-secondary">
                          Talent, leadership, organization, HR | 2 hr ago
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
                                <i className="fi fi-rs-flag me-2" /> Report This
                                comment
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
                          <span className="section_text ">Reply </span>
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
                        <a href="#" className="text-dark mb-0 d-block w-100">
                          Business Page
                        </a>
                        <span className="font-12 text-secondary">
                          Talent, leadership, organization, HR | 2 hr ago
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
                                <i className="fi fi-rs-flag me-2" /> Report This
                                comment
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
                          <span className="section_text ">Reply </span>
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
                        <a href="#" className="text-dark mb-0 d-block w-100">
                          Business Page
                        </a>
                        <span className="font-12 text-secondary">
                          Talent, leadership, organization, HR | 2 hr ago
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
                                <i className="fi fi-rs-flag me-2" /> Report This
                                comment
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
                          <span className="section_text ">Reply </span>
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
                </div>
                <div className="post_comment d-flex align-items-center pt-3 border-bottom-0 pb-0">
                  {" "}
                  <span className="user_img_comment">
                    <img
                      src="assets/images/avatar_img.png"
                      className="img-fluid cover_img"
                      alt=""
                    />
                  </span>
                  <div className="input_with_emoji position-relative">
                    <a href="#" className="comment_emoji">
                      <i className="fi fi-rr-smile" />
                    </a>
                    <input
                      type="text"
                      name="comment"
                      post_id={231}
                      className="form-control comment_input add_comment"
                      placeholder="Share your comment on this post..."
                    />
                  </div>
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
              </div>
            </div>
          </div>
        </div>
        {/*  comment Modal */}
        {/* post report modal */}
        <div
          className="modal fade common_modal psot_report"
          id="postreportModal"
          tabIndex={-1}
          aria-labelledby="postreportModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header border-0">
                <h5 className="modal-title w-100" id="exampleModalLabel">
                  Report this post
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="fi fi-br-cross lh-0" />
                </button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <select className="form-select">
                    <option value="">Select your Reason</option>
                    <option value="Spam/False Information">
                      Spam/False Information
                    </option>
                    <option value="Violence">Violence</option>
                    <option value="Hatred">Hatred</option>
                    <option value="Bullying">Bullying</option>
                    <option value="Harassments">Harassments</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
                <div className="d-inline-block w-100">
                  <textarea
                    type="text"
                    className="form-control textarea_field"
                    row={5}
                    col={30}
                    placeholder="Share your thoughts"
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className="modal-footer border-0 justify-content-center">
                <div className="modal_post_btn text-center">
                  <button
                    type="button"
                    className="btn btn-primary rounded-pill"
                    data-bs-dismiss="modal"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* post report modal */}
        {/* post view modal */}
        <div
          className="modal fade common_modal post_view_modal"
          id="postviewModal"
          tabIndex={-1}
          aria-labelledby="postviewModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header border-0 p-0">
                {/* <h5 class="modal-title w-100" id="exampleModalLabel">Report this post</h5> */}
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="fi fi-br-cross lh-0" />
                </button>
              </div>
              <div className="modal-body p-0">
                <div className="user_recent_post  d-flex alin-items-center p-0 border-0">
                  <div className="post_content ">
                    <img
                      src="assets/images/post-1.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="right_side_content">
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
                          href="userprofile"
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
                          <img
                            src="assets/images/svg_icon/public_globe.svg"
                            className="img-fluid me-2"
                          />{" "}
                          Public
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
                        with your design work, look no further. We’ve rounded up
                        a handful of unique typefaces that are bursting with
                        personality!
                      </p>
                      <a
                        href="#"
                        className="post_read_more font-14 font-M mt-2"
                      >
                        Read More...
                      </a>
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
                          2 Comments
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
                              id-referencia={1655715484774}
                              className="Selector selectorFace  divierte"
                            />
                            <input
                              type="hidden"
                              defaultValue="divierte"
                              className="prueba 1655715484774"
                              style={{ display: "none" }}
                            />
                            <span className="section_text font-14 font-SB">
                              Like
                            </span>
                          </a>
                          <a
                            className="comment d-flex align-items-center justify-content-center"
                            data-bs-toggle=""
                            href="javascript:void(0)"
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
                            <div className="share_tooltip " id="post_share_231">
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
                        <div className="collapse show" id="collapseShare231">
                          <div className="card card-body share-card">
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
                                      Talent, leadership, organization, HR | 2
                                      hr ago
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
                                      Talent, leadership, organization, HR | 2
                                      hr ago
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
                            <div className="post_comment d-flex align-items-center">
                              {" "}
                              <span className="user_img_comment">
                                <img
                                  src="assets/images/avatar_img.png"
                                  className="img-fluid cover_img"
                                  alt=""
                                />
                              </span>
                              <div className="input_with_emoji position-relative">
                                <a href="#" className="comment_emoji">
                                  <i className="fi fi-rr-smile" />
                                </a>
                                <input
                                  type="text"
                                  name="comment"
                                  post_id={231}
                                  className="form-control comment_input add_comment"
                                  placeholder="Share your comment on this post..."
                                />
                              </div>
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

        {/* <!-- post report modal --> */}

        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
        {/* <!-- emoji tooltip script --> */}
        <script src="assets/js/faceMocion.js"></script>
      </>
    );
  }
}
