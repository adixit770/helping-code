import React, { Component } from 'react'
import DashNavbar from '../dashboardNavbar'

export default class Profile extends Component {
  render() {
    return (
      <>
  {/* header start here */}
  <DashNavbar/>
  {/* header end here */}
  <div className="user_profile_page top_spacing">
    <div className="container">
      <div className="row">
        <div className="col-md-9">
          <div className="user_profile">
            <div className="profile_bg">
              <img
                src="assets/images/profile_bg.png"
                className="img-fluid cover_img"
              />
            </div>
            <div className="profile_body position-relative">
              <span className="user_image">
                <img
                  src="assets/images/avatar_img.png"
                  className="cover_img img-fluid"
                />
              </span>
              <a
                href="#"
                className="btn btn-primary-outline rounded-pill edit_profile_btn d-inline-flex align-items-center"
                data-bs-toggle="modal"
                data-bs-target="#profileupdateModal"
              >
                <i className="fi fi-rr-edit me-1 lh-0" />
                Edit Profile
              </a>
              <h1 className="font-24 font-B m-0">
                David Smith{" "}
                <img src="assets/images/svg_icon/user-verified.svg" />
              </h1>
              <div className="user_location font-16 font-M text-secondary d-flex align-items-center">
                <i className="fi fi-sr-marker me-1 lh-0" />
                Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore
              </div>
              <div className="profile_about">
                <h3 className="about_title font-16 font-SB text-secondary mb-0">
                  About Me
                </h3>
                <p className="mb-0">
                  The designer used a grid layout in the layout of his About
                  page. Contemporary colors inform you of the designer’s style,
                  while a status message of his availability to take on new
                  projects makes it clear to prospective clients whether he’s
                  available or not...
                </p>
              </div>
              <div className="mutual_connecton d-flex align-items-center w-100">
                <div className="mutual_connection_images">
                  <img
                    src="assets/images/mutual-1.png"
                    className="connection_profile_img ms-0"
                  />
                  <img
                    src="assets/images/mutual-2.png"
                    className="connection_profile_img"
                  />
                  <img
                    src="assets/images/user-img.png"
                    className="connection_profile_img"
                  />
                </div>
              </div>
              <div className="following_buttons d-flex align-items-center">
                <a
                  href="javascript:void(0)"
                  className="btn btn-primary rounded-pill me-3"
                  data-bs-toggle="modal"
                  data-bs-target="#profileconnectionModal"
                >
                  <span className="font-500">105</span> Connections
                </a>
                <a
                  href="javascript:void(0)"
                  className="btn btn-primary-outline rounded-pill"
                  data-bs-toggle="modal"
                  data-bs-target="#profileconnectionModal"
                >
                  <span className="font-500">56</span> Requests
                </a>
                <a
                  href="javascript:void(0)"
                  className="btn btn-default rounded-pill ms-auto share_icon"
                >
                  <img
                    src="assets/images/svg_icon/share_arrow.svg"
                    className=""
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
          {/* user post section */}
          <div className="post_section_listing d-inline-block w-100 mt-4">
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
                        <a className="dropdown-item" href="javascript:void(0);">
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
                          <i className="fi fi-rs-flag me-2" /> Report This Post
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
                      <span className="section_text font-14 font-SB">Like</span>
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
                              <a
                                href="#"
                                className="text-dark mb-0 d-block w-100"
                              >
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
                        <a className="dropdown-item" href="javascript:void(0);">
                          <i className="fi fi-rr-bookmark me-2" /> Save
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="javascript:void(0);">
                          <i className="fi fi-rs-flag me-2" /> Report This Post
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="user_recent_post_body">
                <p className="text-dark font-14 mb-0 more">
                  Employee empowerment is a hot topic in workplace culture. This
                  rewards go-getter with the chance to take greater initiative
                  and helps the organization in identifying the high-potential,
                  future leaders!
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
                      <span className="section_text font-14 font-SB">Like</span>
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
                              <a
                                href="#"
                                className="text-dark mb-0 d-block w-100"
                              >
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
  {/* profile modal start here */}
  <div
    className="modal fade common_modal update_profiel_modal"
    id="profileupdateModal"
    tabIndex={-1}
    aria-labelledby="profileupdateModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header border-0">
          <h5 className="modal-title w-100" id="exampleModalLabel">
            Edit Profile
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
        <div className="modal-body profile_body">
          <div className="update_pro_bd position-relative">
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
              className="add_cover_btn font-14 font-SB"
            >
              <i className="fi fi-sr-camera me-1" /> Add Cover Photo
            </label>
          </div>
          <div className="profile_update_form position-relative">
            <div className="profile_avatar_img">
              <span className="img_rounded_circle ">
                <img src="assets/images/user-img.png" className="cover_img" />
              </span>
              <input type="file" className="d-none" id="avatar_upload" />
              <label
                className="avatar_img_upload d-flex align-items-center justify-content-center"
                htmlFor="avatar_upload"
              >
                <i className="fi fi-sr-camera lh-0" />
              </label>
            </div>
            <div className="row">
              <div className="col-md-6 mb-3 input_group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your first name"
                  defaultValue="David"
                />
                <label className="input_title">First Name</label>
              </div>
              <div className="col-md-6 mb-3 input_group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your last name"
                  defaultValue="Smith"
                />
                <label className="input_title">Last Name</label>
              </div>
              <div className="col-md-12 mb-3 input_group">
                <input
                  type="text"
                  className="form-control bg-light"
                  placeholder=""
                  disabled=""
                  defaultValue="Smith@gmail.com"
                />
                <label className="input_title">Email</label>
              </div>
              <div className="col-md-12 mb-3 input_group">
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Enter your Bio"
                  value="The designer used a grid layout in the layout of his About page"
                  defaultValue={""}
                />
                <label className="input_title">About</label>
              </div>
              <div className="col-md-12 mb-3 input_group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your loaction"
                  defaultValue="Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016"
                />
                <label className="input_title">Your Location</label>
              </div>
            </div>
          </div>
        </div>
        <div className="modal-footer justify-content-center border-0">
          <div className="modal_post_btn">
            <button type="button" className="btn btn-primary rounded-pill">
              Save Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* profile modal end here */}
  {/* profile connection modal start here */}
  <div
    className="modal fade common_modal profile_connection_modal"
    id="profileconnectionModal"
    tabIndex={-1}
    aria-labelledby="profileupdateModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header border-0 p-0">
          {/* <h5 class="modal-title w-100" id="exampleModalLabel">Edit Profile</h5> */}
          <button
            type="button"
            className="btn-close lh-0"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="fi fi-br-cross lh-0" />
          </button>
        </div>
        <div className="modal-body connection_body">
          <ul
            className="nav nav-tabs modal_tabs border-0"
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
                <span className="font-500">105</span> Connections
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
                <span className="font-500">56</span> Requests
              </button>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <div className="modal_search position-relative">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search for people..."
                />
                <i className="fi fi-rr-search search_icon" />
              </div>
              <div className="listing_box connection_listing d-inline-block w-100">
                <div className="connection_item d-inline-flex align-items-center w-100">
                  <span className="medium_circle_img d-flex">
                    <img
                      src="assets/images/mutual-2.png"
                      className="cover_img"
                    />
                  </span>
                  <div className="ci_details d-inline-block">
                    <h3 className="font-16 font-M mb-1 text_nowrap">
                      Patrick Koller
                    </h3>
                    <p className="ci_location font-14 mb-0 d-flex align-items-center line_clamp_2">
                      <i className="fi fi-sr-marker me-1 lh-0" />
                      Rammurthy nagar, Bangalore
                    </p>
                  </div>
                  <div className="ms-auto d-inline-flex align-items-center">
                    <a href="#" className="btn btn-primary rounded-pill">
                      Message
                    </a>
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
                            <i className="fi fi-rr-cross-circle me-2" /> Remove
                            Connection
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#postreportModal"
                          >
                            <i className="fi fi-rr-ban me-2" />
                            Block
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="connection_item d-inline-flex align-items-center w-100">
                  <span className="medium_circle_img d-flex">
                    <img
                      src="assets/images/posted_user.png"
                      className="cover_img"
                    />
                  </span>
                  <div className="ci_details d-inline-block">
                    <h3 className="font-16 font-M mb-1 text_nowrap">
                      Keith Ferrazzi
                    </h3>
                    <p className="ci_location font-14 mb-0 d-flex align-items-center line_clamp_2">
                      <i className="fi fi-sr-marker me-1 lh-0" />
                      Rammurthy nagar, Bangalore
                    </p>
                  </div>
                  <div className="ms-auto d-inline-flex align-items-center">
                    <a href="#" className="btn btn-primary rounded-pill">
                      Message
                    </a>
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
                            <i className="fi fi-rr-cross-circle me-2" /> Remove
                            Connection
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#postreportModal"
                          >
                            <i className="fi fi-rr-ban me-2" />
                            Block
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="connection_item d-inline-flex align-items-center w-100">
                  <span className="medium_circle_img d-flex">
                    <img
                      src="assets/images/mutual-2.png"
                      className="cover_img"
                    />
                  </span>
                  <div className="ci_details d-inline-block">
                    <h3 className="font-16 font-M mb-1 text_nowrap">
                      Patrick Koller
                    </h3>
                    <p className="ci_location font-14 mb-0 d-flex align-items-center line_clamp_2">
                      <i className="fi fi-sr-marker me-1 lh-0" />
                      Rammurthy nagar, Bangalore
                    </p>
                  </div>
                  <div className="ms-auto d-inline-flex align-items-center">
                    <a href="#" className="btn btn-primary rounded-pill">
                      Message
                    </a>
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
                            <i className="fi fi-rr-cross-circle me-2" /> Remove
                            Connection
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#postreportModal"
                          >
                            <i className="fi fi-rr-ban me-2" />
                            Block
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="connection_item d-inline-flex align-items-center w-100">
                  <span className="medium_circle_img d-flex">
                    <img
                      src="assets/images/posted_user.png"
                      className="cover_img"
                    />
                  </span>
                  <div className="ci_details d-inline-block">
                    <h3 className="font-16 font-M mb-1 text_nowrap">
                      Keith Ferrazzi
                    </h3>
                    <p className="ci_location font-14 mb-0 d-flex align-items-center line_clamp_2">
                      <i className="fi fi-sr-marker me-1 lh-0" />
                      Rammurthy nagar, Bangalore
                    </p>
                  </div>
                  <div className="ms-auto d-inline-flex align-items-center">
                    <a href="#" className="btn btn-primary rounded-pill">
                      Message
                    </a>
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
                            <i className="fi fi-rr-cross-circle me-2" /> Remove
                            Connection
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#postreportModal"
                          >
                            <i className="fi fi-rr-ban me-2" />
                            Block
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="connection_item d-inline-flex align-items-center w-100">
                  <span className="medium_circle_img d-flex">
                    <img
                      src="assets/images/mutual-2.png"
                      className="cover_img"
                    />
                  </span>
                  <div className="ci_details d-inline-block">
                    <h3 className="font-16 font-M mb-1 text_nowrap">
                      Patrick Koller
                    </h3>
                    <p className="ci_location font-14 mb-0 d-flex align-items-center line_clamp_2">
                      <i className="fi fi-sr-marker me-1 lh-0" />
                      Rammurthy nagar, Bangalore
                    </p>
                  </div>
                  <div className="ms-auto d-inline-flex align-items-center">
                    <a href="#" className="btn btn-primary rounded-pill">
                      Message
                    </a>
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
                            <i className="fi fi-rr-cross-circle me-2" /> Remove
                            Connection
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#postreportModal"
                          >
                            <i className="fi fi-rr-ban me-2" />
                            Block
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="connection_item d-inline-flex align-items-center w-100">
                  <span className="medium_circle_img d-flex">
                    <img
                      src="assets/images/posted_user.png"
                      className="cover_img"
                    />
                  </span>
                  <div className="ci_details d-inline-block">
                    <h3 className="font-16 font-M mb-1 text_nowrap">
                      Keith Ferrazzi
                    </h3>
                    <p className="ci_location font-14 mb-0 d-flex align-items-center line_clamp_2">
                      <i className="fi fi-sr-marker me-1 lh-0" />
                      Rammurthy nagar, Bangalore
                    </p>
                  </div>
                  <div className="ms-auto d-inline-flex align-items-center">
                    <a href="#" className="btn btn-primary rounded-pill">
                      Message
                    </a>
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
                            <i className="fi fi-rr-cross-circle me-2" /> Remove
                            Connection
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#postreportModal"
                          >
                            <i className="fi fi-rr-ban me-2" />
                            Block
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="connection_item d-inline-flex align-items-center w-100">
                  <span className="medium_circle_img d-flex">
                    <img
                      src="assets/images/mutual-2.png"
                      className="cover_img"
                    />
                  </span>
                  <div className="ci_details d-inline-block">
                    <h3 className="font-16 font-M mb-1 text_nowrap">
                      Patrick Koller
                    </h3>
                    <p className="ci_location font-14 mb-0 d-flex align-items-center line_clamp_2">
                      <i className="fi fi-sr-marker me-1 lh-0" />
                      Rammurthy nagar, Bangalore
                    </p>
                  </div>
                  <div className="ms-auto d-inline-flex align-items-center">
                    <a href="#" className="btn btn-primary rounded-pill">
                      Message
                    </a>
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
                            <i className="fi fi-rr-cross-circle me-2" /> Remove
                            Connection
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#postreportModal"
                          >
                            <i className="fi fi-rr-ban me-2" />
                            Block
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="connection_item d-inline-flex align-items-center w-100">
                  <span className="medium_circle_img d-flex">
                    <img
                      src="assets/images/posted_user.png"
                      className="cover_img"
                    />
                  </span>
                  <div className="ci_details d-inline-block">
                    <h3 className="font-16 font-M mb-1 text_nowrap">
                      Keith Ferrazzi
                    </h3>
                    <p className="ci_location font-14 mb-0 d-flex align-items-center line_clamp_2">
                      <i className="fi fi-sr-marker me-1 lh-0" />
                      Rammurthy nagar, Bangalore
                    </p>
                  </div>
                  <div className="ms-auto d-inline-flex align-items-center">
                    <a href="#" className="btn btn-primary rounded-pill">
                      Message
                    </a>
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
                            <i className="fi fi-rr-cross-circle me-2" /> Remove
                            Connection
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                            data-bs-toggle="modal"
                            data-bs-target="#postreportModal"
                          >
                            <i className="fi fi-rr-ban me-2" />
                            Block
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <div className="modal_search position-relative">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search for people..."
                />
                <i className="fi fi-rr-search search_icon" />
              </div>
              <div className="listing_box rquest_listing d-inline-block w-100">
                <div className="connection_item d-inline-flex align-items-center w-100">
                  <span className="medium_circle_img d-flex">
                    <img
                      src="assets/images/mutual-2.png"
                      className="cover_img"
                    />
                  </span>
                  <div className="ci_details d-inline-block">
                    <h3 className="font-16 font-M mb-1 text_nowrap">
                      Patrick Koller
                    </h3>
                    <p className="ci_location font-14 mb-0 d-flex align-items-center line_clamp_2">
                      <i className="fi fi-sr-marker me-1 lh-0" />
                      Rammurthy nagar, Bangalore
                    </p>
                  </div>
                  <div className="ms-auto d-inline-flex align-items-center">
                    <a
                      href="javascript:void(0)"
                      className="btn btn-default rounded-pill "
                    >
                      Ignore
                    </a>
                    <a
                      href="javascript:void(0)"
                      className="btn btn-primary rounded-pill"
                    >
                      Accept
                    </a>
                  </div>
                </div>
                <div className="connection_item d-inline-flex align-items-center w-100">
                  <span className="medium_circle_img d-flex">
                    <img
                      src="assets/images/posted_user.png"
                      className="cover_img"
                    />
                  </span>
                  <div className="ci_details d-inline-block">
                    <h3 className="font-16 font-M mb-1 text_nowrap">
                      Keith Ferrazzi
                    </h3>
                    <p className="ci_location font-14 mb-0 d-flex align-items-center line_clamp_2">
                      <i className="fi fi-sr-marker me-1 lh-0" />
                      Rammurthy nagar, Bangalore
                    </p>
                  </div>
                  <div className="ms-auto d-inline-flex align-items-center">
                    <a
                      href="javascript:void(0)"
                      className="btn btn-primary-border rounded-pill"
                    >
                      Message
                    </a>
                  </div>
                </div>
                <div className="connection_item d-inline-flex align-items-center w-100">
                  <span className="medium_circle_img d-flex">
                    <img
                      src="assets/images/posted_user.png"
                      className="cover_img"
                    />
                  </span>
                  <div className="ci_details d-inline-block">
                    <h3 className="font-16 font-M mb-1 text_nowrap">
                      Keith Ferrazzi
                    </h3>
                    <p className="ci_location font-14 mb-0 d-flex align-items-center line_clamp_2">
                      <i className="fi fi-sr-marker me-1 lh-0" />
                      Rammurthy nagar, Bangalore
                    </p>
                  </div>
                  <div className="ms-auto d-inline-flex align-items-center">
                    <a
                      href="javascript:void(0)"
                      className="btn btn-primary-border rounded-pill"
                    >
                      Message
                    </a>
                  </div>
                </div>
                <div className="connection_item d-inline-flex align-items-center w-100">
                  <span className="medium_circle_img d-flex">
                    <img
                      src="assets/images/mutual-2.png"
                      className="cover_img"
                    />
                  </span>
                  <div className="ci_details d-inline-block">
                    <h3 className="font-16 font-M mb-1 text_nowrap">
                      Patrick Koller
                    </h3>
                    <p className="ci_location font-14 mb-0 d-flex align-items-center line_clamp_2">
                      <i className="fi fi-sr-marker me-1 lh-0" />
                      Rammurthy nagar, Bangalore
                    </p>
                  </div>
                  <div className="ms-auto d-inline-flex align-items-center">
                    <a
                      href="javascript:void(0)"
                      className="btn btn-default rounded-pill "
                    >
                      Ignore
                    </a>
                    <a
                      href="javascript:void(0)"
                      className="btn btn-primary rounded-pill"
                    >
                      Accept
                    </a>
                  </div>
                </div>
                <div className="connection_item d-inline-flex align-items-center w-100">
                  <span className="medium_circle_img d-flex">
                    <img
                      src="assets/images/mutual-2.png"
                      className="cover_img"
                    />
                  </span>
                  <div className="ci_details d-inline-block">
                    <h3 className="font-16 font-M mb-1 text_nowrap">
                      Patrick Koller
                    </h3>
                    <p className="ci_location font-14 mb-0 d-flex align-items-center line_clamp_2">
                      <i className="fi fi-sr-marker me-1 lh-0" />
                      Rammurthy nagar, Bangalore
                    </p>
                  </div>
                  <div className="ms-auto d-inline-flex align-items-center">
                    <a
                      href="javascript:void(0)"
                      className="btn btn-default rounded-pill "
                    >
                      Ignore
                    </a>
                    <a
                      href="javascript:void(0)"
                      className="btn btn-primary rounded-pill"
                    >
                      Accept
                    </a>
                  </div>
                </div>
                <div className="connection_item d-inline-flex align-items-center w-100">
                  <span className="medium_circle_img d-flex">
                    <img
                      src="assets/images/mutual-2.png"
                      className="cover_img"
                    />
                  </span>
                  <div className="ci_details d-inline-block">
                    <h3 className="font-16 font-M mb-1 text_nowrap">
                      Patrick Koller
                    </h3>
                    <p className="ci_location font-14 mb-0 d-flex align-items-center line_clamp_2">
                      <i className="fi fi-sr-marker me-1 lh-0" />
                      Rammurthy nagar, Bangalore
                    </p>
                  </div>
                  <div className="ms-auto d-inline-flex align-items-center">
                    <a
                      href="javascript:void(0)"
                      className="btn btn-default rounded-pill "
                    >
                      Ignore
                    </a>
                    <a
                      href="javascript:void(0)"
                      className="btn btn-primary rounded-pill"
                    >
                      Accept
                    </a>
                  </div>
                </div>
                <div className="connection_item d-inline-flex align-items-center w-100">
                  <span className="medium_circle_img d-flex">
                    <img
                      src="assets/images/mutual-2.png"
                      className="cover_img"
                    />
                  </span>
                  <div className="ci_details d-inline-block">
                    <h3 className="font-16 font-M mb-1 text_nowrap">
                      Patrick Koller
                    </h3>
                    <p className="ci_location font-14 mb-0 d-flex align-items-center line_clamp_2">
                      <i className="fi fi-sr-marker me-1 lh-0" />
                      Rammurthy nagar, Bangalore
                    </p>
                  </div>
                  <div className="ms-auto d-inline-flex align-items-center">
                    <a
                      href="javascript:void(0)"
                      className="btn btn-default rounded-pill "
                    >
                      Ignore
                    </a>
                    <a
                      href="javascript:void(0)"
                      className="btn btn-primary rounded-pill"
                    >
                      Accept
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* profile connection modal end here */}
</>
    )
  }
}
