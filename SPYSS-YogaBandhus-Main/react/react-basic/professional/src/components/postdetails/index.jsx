import React, { Component } from 'react'
import DashNavbar from '../dashboardNavbar'

export default class PostDetails extends Component {
  render() {
    return (
        <>
        {/* header start here */}
        <DashNavbar/>
        {/* header end here */}
        {/* post detail page start here  */}
        <div className="post_detail top_spacing post_view_modal d-flex ">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h3 className="page_title font-18 font-M mb-3 d-flex align-items-center">
                  <a
                    href="dashboard.html"
                    className="btn btn_back d-inline-flex align-items-center justify-content-center"
                  >
                    <img src="assets/images/svg_icon/back_arrow.svg" />
                  </a>
                  Post Detial
                </h3>
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
                            <div
                              dato-descripcion="divierte"
                              id-referencia={1657173240085}
                              className="Selector selectorFace divierte"
                            />
                            <input
                              type="hidden"
                              defaultValue="divierte"
                              className="prueba 1657173240084 1657173240085"
                              style={{ display: "none" }}
                            />
                            <span className="section_text font-14 font-SB">Like</span>
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
        {/* post detail page end here */}
      </>
      
    )
  }
}
