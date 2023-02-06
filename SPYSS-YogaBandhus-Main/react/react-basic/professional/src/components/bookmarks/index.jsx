import React, { Component } from 'react'
import DashNavbar from '../dashboardNavbar'

export default class Bookmarks extends Component {
  render() {
    return (
      <>
      <div>
        {/* header start here */}
        <DashNavbar/>
        {/* header end here */}
        {/* notification page start here */}
        <div className="notification_page top_spacing d-inline-block w-100">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <h3 className="page_title font-16 font-M mb-3">
                  <a href="#" className="btn btn_back d-inline-flex align-items-center justify-content-center"><img src="assets/images/svg_icon/back_arrow.svg" /></a>   
                  Bookmark
                </h3>
                <div className="right_side_tabs common_box p-0">
                  <ul className="nav nav-tabs flex-column column_tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Saved Posts <span className="count_badge ms-auto d-inline-flex align-items-center justify-content-center">2</span></button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button className="nav-link border-0" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Saved Jobs <span className="count_badge ms-auto d-inline-flex align-items-center justify-content-center">4</span></button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div className="bookmark_listing_box">
                  <div className="post_bookmark_listing tab-content" id="myTabContent">    
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                      <h2 className="page_title font-16 font-M mb-3">
                        Your Saved Posts
                      </h2>
                      <div className="post_bookmark_item common_box p-3">
                        <div className="user_recent_post_top d-flex align-items-center"> 
                          <span className="user_img_post_icon">
                            <img src="assets/images/mutual-2.png" className="img-fluid cover_img" />
                          </span>
                          <div className="user_details_post lh-1"> <a href="user_profile.html" className="post_title font-16 font-B mb-0 d-block">Keith Ferrazzi</a>
                            <div className="post_timing d-flex align-items-center w-100 text-secondary mt-1"> <span className="font-12 font-M pe-1" id>Bangalore</span>| <span className="font-12 font-M ps-1" id> 1 day ago</span> </div>
                          </div>
                          <a href="#" className="btn btn-default rounded-pill ms-auto">Remove</a>
                        </div>
                        <div className="post_bookmark_body d-flex w-100">
                          <span className="bookmark_img">
                            <img src="assets/images/post-2.png" className="img-fluid cover_img" />
                          </span>
                          <div className="bookmark_details font-14">
                            Employee empowerment is a hot topic in workplace culture. This
                            rewards go-getter with the chance to take greater initiative and
                            helps the organization in identifying the high- potential, future
                            leaders!
                          </div>
                        </div>
                        <div className="bookmark_footer d-flex w-100 align-items-center">
                          <span className="badge like_badge rounded-pill">
                            <img src="assets/images/like.png" className="img-fluid emojis_icon" alt="" /> 
                            <img src="assets/images/love.png" className="img-fluid emojis_icon" alt="" /> 
                            <span className="ms-1">56</span>
                          </span>
                          <a href="#" className="badge rounded-pill align-items-center" data-bs-toggle="modal" data-bs-target="#commentmodal">
                            <i className="fi fi-rr-comment-alt lh-0" />
                            <span className="ms-1">14 Comments</span>
                          </a>
                          <a href="#" className="btn btn-primary-outline ms-auto rounded-pill">View Post</a>
                        </div>
                      </div>
                      <div className="post_bookmark_item common_box p-3">
                        <div className="user_recent_post_top d-flex align-items-center"> 
                          <span className="user_img_post_icon ">
                            <img src="assets/images/Dave.png" className="img-fluid cover_img" />
                          </span>
                          <div className="user_details_post lh-1"> <a href="user_profile.html" className="post_title font-16 font-B mb-0 d-block">Dave Ulrich</a>
                            <div className="post_timing d-flex align-items-center w-100 text-secondary mt-1"> <span className="font-12 font-M pe-1" id>Bangalore</span>| <span className="font-12 font-M ps-1" id> 1 day ago</span> </div>
                          </div>
                          <a href="#" className="btn btn-default rounded-pill ms-auto">Remove</a>
                        </div>
                        <div className="post_bookmark_body d-flex w-100">
                          <span className="bookmark_img video position-relative">
                            <span className="video_overlay d-flex align-items-center justify-content-center">
                              <img src="assets/images/play-button.png" className="img-fluid" />
                            </span>
                            <img src="assets/images/post-2.png" className="img-fluid cover_img" />
                          </span>
                          <div className="bookmark_details font-14">
                            Employee empowerment is a hot topic in workplace culture. This
                            rewards go-getter with the chance to take greater initiative and
                            helps the organization in identifying the high- potential, future
                            leaders!
                          </div>
                        </div>
                        <div className="bookmark_footer d-flex w-100 align-items-center">
                          <span className="badge like_badge rounded-pill">
                            <img src="assets/images/like.png" className="img-fluid emojis_icon" alt="" /> 
                            <img src="assets/images/love.png" className="img-fluid emojis_icon" alt="" /> 
                            <span className="ms-1">56</span>
                          </span>
                          <a href="#" className="badge rounded-pill align-items-center">
                            <i className="fi fi-rr-comment-alt lh-0" />
                            <span className="ms-1">14 Comments</span>
                          </a>
                          <a href="#" className="btn btn-primary-outline ms-auto rounded-pill">View Post</a>
                        </div>
                      </div>
                      <div className="post_bookmark_item common_box p-3">
                        <div className="user_recent_post_top d-flex align-items-center"> 
                          <span className="user_img_post_icon">
                            <img src="assets/images/posted_user.png" className="img-fluid cover_img" />
                          </span>
                          <div className="user_details_post lh-1"> <a href="user_profile.html" className="post_title font-16 font-B mb-0 d-block">Keith Ferrazzi</a>
                            <div className="post_timing d-flex align-items-center w-100 text-secondary mt-1"> <span className="font-12 font-M pe-1" id>Bangalore</span>| <span className="font-12 font-M ps-1" id> 1 day ago</span> </div>
                          </div>
                          <a href="#" className="btn btn-default rounded-pill ms-auto">Remove</a>
                        </div>
                        <div className="post_bookmark_body d-flex w-100">
                          <span className="bookmark_img audio">
                            <img src="assets/images/audio.png" className="img-fluid cover_img" />
                          </span>
                          <div className="bookmark_details font-14">
                            Employee empowerment is a hot topic in workplace culture. This
                            rewards go-getter with the chance to take greater initiative and
                            helps the organization in identifying the high- potential, future
                            leaders!
                          </div>
                        </div>
                        <div className="bookmark_footer d-flex w-100 align-items-center">
                          <span className="badge like_badge rounded-pill">
                            <img src="assets/images/like.png" className="img-fluid emojis_icon" alt="" /> 
                            <img src="assets/images/love.png" className="img-fluid emojis_icon" alt="" /> 
                            <span className="ms-1">56</span>
                          </span>
                          <a href="#" className="badge rounded-pill align-items-center">
                            <i className="fi fi-rr-comment-alt lh-0" />
                            <span className="ms-1">14 Comments</span>
                          </a>
                          <a href="#" className="btn btn-primary-outline ms-auto rounded-pill">View Post</a>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                      <h2 className="page_title font-16 font-M mb-3">
                        Your Saved Jobs
                      </h2>
                      <div className="post_bookmark_item job_bookmark common_box p-3">
                        <div className="people_card_head d-inline-flex w-100 align-items-start">
                          <div className="people_img">
                            <img src="assets/images/company-logo.png" className="img-fluid cover_img" />
                          </div>
                          <div className="people_detail position-relative">
                            <h2 className="job_title_item job_title_item nowrap_text font-16 font- mb-1 d-inline-flex align-items-center font-B">UI/UX designer for responsive desig....</h2>
                            <p className="jod_designation font-14 mb-2 text-secondary">Looking for a UI/UX designer to develop...</p>
                            <p className="job_company_name font-14 mb-0 text-secondary">Capco Industries Pvt Ltd</p>
                          </div>
                          <a href="#" className="btn btn-default rounded-pill ms-auto">Remove</a>
                        </div>
                        <div className="bookmark_footer d-flex w-100 align-items-center">
                          <p className="location font-14 d-inline-flex w-100 align-items-center mb-3"><i className="fi fi-rr-marker me-2" />Indore,Madhya Pradesh,India</p>
                          <a href="#" className="btn btn-primary-outline ms-auto rounded-pill">View Post</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="advertisment_cards mb_20 "> 
                  <img src="assets/images/ads-1.png" className="img-fluid cover_img" />
                </div>
                <div className="advertisment_cards mb_20"> </div>
                <div className="advertisment_cards mb_20 "> 
                  <img src="assets/images/ads-2.png" className="img-fluid cover_img" />
                </div>
              </div>
            </div>  
          </div>
        </div>
        {/* notification page end here */}
        {/* emoji tooltip script */}
        {/* comment modal  */}
        <div className="modal fade common_modal comment_modal" id="commentmodal" tabIndex={-1} aria-labelledby="commentmodal" aria-modal="true" role="dialog">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header border-0">
                <h5 className="modal-title w-100" id="exampleModalLabel">Comments</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
                  <i className="fi fi-br-cross lh-0" />
                </button>
              </div>
              <div className="modal-body">
                <div className="all_comments_list p-0">
                  <div className="recent_comments">
                    <div className="user_detail_recent_comment d-flex align-items-center"> <span className="user_img_recent_comment">
                        <img src="http://jiran360.dollopinfotech.com/uploads/business/5778611128214778b2e912d24dd9d681_2.png" className="img-fluid img_cover" alt="" />
                      </span>
                      <div className="user_details_post font-14 font-M position-relative">
                        <a href="#" className="text-dark mb-0 d-block w-100">Business  Page</a> 
                        <span className="font-12 text-secondary">Talent, leadership, organization, HR |  2 hr ago</span> 
                        <div className="post_option_menu d-flex align-items-center justify-content-center ms-auto dropdown">
                          <a href="#" className="dropdown_icon d-inline-flex align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"> <i className="fi fi-rr-menu-dots-vertical lh-0" /></a>
                          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="javascript:void(0);"><i className="fi fi-rs-flag me-2" /> Report This comment</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="user_posted_comment">
                      <p className="usr_posted_comment">111</p>
                      <div className="usr_posted_user_action d-flex align-items-center position-relative">
                        <a href="javascript:void(0);" className="d-flex border_right_shre common_like_function">
                          <img src="assets/images/svg_icon/like_fill.svg" className="me-1 img-fluid me-1 like_img active" alt="" /> 
                          <img src="assets/images/svg_icon/like_fill.svg" className="me-1 img-fluid like_hover" alt="" /> Like</a>
                        <a href="javascript:void(0)" className="d-inline-flex align-items-center justify-content-center"> 
                          <img src="assets/images/svg_icon/share_arrow.svg" className="img-fluid me-1 like_img " alt="" />
                          <span className="section_text ">Reply </span>
                        </a>
                        <div className="emojis position-relative likes_emoji ms-auto"> 
                          <span className="total_like font-12 outfit-SB text-dark likes_number me-3">16</span> 
                          <img src="assets/images/like.png" className="img-fluid emojis_icon" alt="" /> 
                          <img src="assets/images/love.png" className="img-fluid emojis_icon" alt="" /> 
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="recent_comments replay_comment">
                    <div className="user_detail_recent_comment d-flex align-items-center"> <span className="user_img_recent_comment">
                        <img src="http://jiran360.dollopinfotech.com/uploads/business/5778611128214778b2e912d24dd9d681_2.png" className="img-fluid img_cover" alt="" />
                      </span>
                      <div className="user_details_post font-14 font-M position-relative">
                        <a href="#" className="text-dark mb-0 d-block w-100">Business  Page</a> 
                        <span className="font-12 text-secondary">Talent, leadership, organization, HR |  2 hr ago</span> 
                        <div className="post_option_menu d-flex align-items-center justify-content-center ms-auto dropdown">
                          <a href="#" className="dropdown_icon d-inline-flex align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"> <i className="fi fi-rr-menu-dots-vertical lh-0" /></a>
                          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="javascript:void(0);"><i className="fi fi-rs-flag me-2" /> Report This comment</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="user_posted_comment">
                      <p className="usr_posted_comment">111</p>
                      <div className="usr_posted_user_action d-flex align-items-center position-relative">
                        <a href="javascript:void(0);" className="d-flex border_right_shre common_like_function">
                          <img src="assets/images/svg_icon/like_fill.svg" className="me-1 img-fluid me-1 like_img active" alt="" /> 
                          <img src="assets/images/svg_icon/like_fill.svg" className="me-1 img-fluid like_hover" alt="" /> Like</a>
                        <a href="javascript:void(0)" className="d-inline-flex align-items-center justify-content-center"> 
                          <img src="assets/images/svg_icon/share_arrow.svg" className="img-fluid me-1 like_img " alt="" />
                          <span className="section_text ">Reply </span>
                        </a>
                        <div className="emojis position-relative likes_emoji ms-auto"> 
                          <span className="total_like font-12 outfit-SB text-dark likes_number me-3">16</span> 
                          <img src="assets/images/like.png" className="img-fluid emojis_icon" alt="" /> 
                          <img src="assets/images/love.png" className="img-fluid emojis_icon" alt="" /> 
                        </div>
                      </div>
                    </div>
                    <div className="your_comment_box d-flex align-item-center w-100 position-relative">
                      <span className="your_profile_img">
                        <img src="assets/images/avatar_img.png" className="img-fluid cover_img" />
                      </span>
                      <div className="add_your_comment">
                        <input type="text" className="form-control custome_comment_input" placeholder="@keithferrazzi" />
                      </div>
                    </div>
                  </div>
                  <div className="recent_comments">
                    <div className="user_detail_recent_comment d-flex align-items-center"> <span className="user_img_recent_comment">
                        <img src="http://jiran360.dollopinfotech.com/uploads/business/5778611128214778b2e912d24dd9d681_2.png" className="img-fluid img_cover" alt="" />
                      </span>
                      <div className="user_details_post font-14 font-M position-relative">
                        <a href="#" className="text-dark mb-0 d-block w-100">Business  Page</a> 
                        <span className="font-12 text-secondary">Talent, leadership, organization, HR |  2 hr ago</span> 
                        <div className="post_option_menu d-flex align-items-center justify-content-center ms-auto dropdown">
                          <a href="#" className="dropdown_icon d-inline-flex align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"> <i className="fi fi-rr-menu-dots-vertical lh-0" /></a>
                          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="javascript:void(0);"><i className="fi fi-rs-flag me-2" /> Report This comment</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="user_posted_comment">
                      <p className="usr_posted_comment">111</p>
                      <div className="usr_posted_user_action d-flex align-items-center position-relative">
                        <a href="javascript:void(0);" className="d-flex border_right_shre common_like_function">
                          <img src="assets/images/svg_icon/like_fill.svg" className="me-1 img-fluid me-1 like_img active" alt="" /> 
                          <img src="assets/images/svg_icon/like_fill.svg" className="me-1 img-fluid like_hover" alt="" /> Like</a>
                        <a href="javascript:void(0)" className="d-inline-flex align-items-center justify-content-center"> 
                          <img src="assets/images/svg_icon/share_arrow.svg" className="img-fluid me-1 like_img " alt="" />
                          <span className="section_text ">Reply </span>
                        </a>
                        <div className="emojis position-relative likes_emoji ms-auto"> 
                          <span className="total_like font-12 outfit-SB text-dark likes_number me-3">16</span> 
                          <img src="assets/images/like.png" className="img-fluid emojis_icon" alt="" /> 
                          <img src="assets/images/love.png" className="img-fluid emojis_icon" alt="" /> 
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="recent_comments">
                    <div className="user_detail_recent_comment d-flex align-items-center"> <span className="user_img_recent_comment">
                        <img src="http://jiran360.dollopinfotech.com/uploads/business/5778611128214778b2e912d24dd9d681_2.png" className="img-fluid img_cover" alt="" />
                      </span>
                      <div className="user_details_post font-14 font-M position-relative">
                        <a href="#" className="text-dark mb-0 d-block w-100">Business  Page</a> 
                        <span className="font-12 text-secondary">Talent, leadership, organization, HR |  2 hr ago</span> 
                        <div className="post_option_menu d-flex align-items-center justify-content-center ms-auto dropdown">
                          <a href="#" className="dropdown_icon d-inline-flex align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"> <i className="fi fi-rr-menu-dots-vertical lh-0" /></a>
                          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="javascript:void(0);"><i className="fi fi-rs-flag me-2" /> Report This comment</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="user_posted_comment">
                      <p className="usr_posted_comment">111</p>
                      <div className="usr_posted_user_action d-flex align-items-center position-relative">
                        <a href="javascript:void(0);" className="d-flex border_right_shre common_like_function">
                          <img src="assets/images/svg_icon/like_fill.svg" className="me-1 img-fluid me-1 like_img active" alt="" /> 
                          <img src="assets/images/svg_icon/like_fill.svg" className="me-1 img-fluid like_hover" alt="" /> Like</a>
                        <a href="javascript:void(0)" className="d-inline-flex align-items-center justify-content-center"> 
                          <img src="assets/images/svg_icon/share_arrow.svg" className="img-fluid me-1 like_img " alt="" />
                          <span className="section_text ">Reply </span>
                        </a>
                        <div className="emojis position-relative likes_emoji ms-auto"> 
                          <span className="total_like font-12 outfit-SB text-dark likes_number me-3">16</span> 
                          <img src="assets/images/like.png" className="img-fluid emojis_icon" alt="" /> 
                          <img src="assets/images/love.png" className="img-fluid emojis_icon" alt="" /> 
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="recent_comments">
                    <div className="user_detail_recent_comment d-flex align-items-center"> <span className="user_img_recent_comment">
                        <img src="http://jiran360.dollopinfotech.com/uploads/business/5778611128214778b2e912d24dd9d681_2.png" className="img-fluid img_cover" alt="" />
                      </span>
                      <div className="user_details_post font-14 font-M position-relative">
                        <a href="#" className="text-dark mb-0 d-block w-100">Business  Page</a> 
                        <span className="font-12 text-secondary">Talent, leadership, organization, HR |  2 hr ago</span> 
                        <div className="post_option_menu d-flex align-items-center justify-content-center ms-auto dropdown">
                          <a href="#" className="dropdown_icon d-inline-flex align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"> <i className="fi fi-rr-menu-dots-vertical lh-0" /></a>
                          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="javascript:void(0);"><i className="fi fi-rs-flag me-2" /> Report This comment</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="user_posted_comment">
                      <p className="usr_posted_comment">111</p>
                      <div className="usr_posted_user_action d-flex align-items-center position-relative">
                        <a href="javascript:void(0);" className="d-flex border_right_shre common_like_function">
                          <img src="assets/images/svg_icon/like_fill.svg" className="me-1 img-fluid me-1 like_img active" alt="" /> 
                          <img src="assets/images/svg_icon/like_fill.svg" className="me-1 img-fluid like_hover" alt="" /> Like</a>
                        <a href="javascript:void(0)" className="d-inline-flex align-items-center justify-content-center"> 
                          <img src="assets/images/svg_icon/share_arrow.svg" className="img-fluid me-1 like_img " alt="" />
                          <span className="section_text ">Reply </span>
                        </a>
                        <div className="emojis position-relative likes_emoji ms-auto"> 
                          <span className="total_like font-12 outfit-SB text-dark likes_number me-3">16</span> 
                          <img src="assets/images/like.png" className="img-fluid emojis_icon" alt="" /> 
                          <img src="assets/images/love.png" className="img-fluid emojis_icon" alt="" /> 
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="recent_comments">
                    <div className="user_detail_recent_comment d-flex align-items-center"> <span className="user_img_recent_comment">
                        <img src="http://jiran360.dollopinfotech.com/uploads/business/5778611128214778b2e912d24dd9d681_2.png" className="img-fluid img_cover" alt="" />
                      </span>
                      <div className="user_details_post font-14 font-M position-relative">
                        <a href="#" className="text-dark mb-0 d-block w-100">Business  Page</a> 
                        <span className="font-12 text-secondary">Talent, leadership, organization, HR |  2 hr ago</span> 
                        <div className="post_option_menu d-flex align-items-center justify-content-center ms-auto dropdown">
                          <a href="#" className="dropdown_icon d-inline-flex align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"> <i className="fi fi-rr-menu-dots-vertical lh-0" /></a>
                          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="javascript:void(0);"><i className="fi fi-rs-flag me-2" /> Report This comment</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="user_posted_comment">
                      <p className="usr_posted_comment">111</p>
                      <div className="usr_posted_user_action d-flex align-items-center position-relative">
                        <a href="javascript:void(0);" className="d-flex border_right_shre common_like_function">
                          <img src="assets/images/svg_icon/like_fill.svg" className="me-1 img-fluid me-1 like_img active" alt="" /> 
                          <img src="assets/images/svg_icon/like_fill.svg" className="me-1 img-fluid like_hover" alt="" /> Like</a>
                        <a href="javascript:void(0)" className="d-inline-flex align-items-center justify-content-center"> 
                          <img src="assets/images/svg_icon/share_arrow.svg" className="img-fluid me-1 like_img " alt="" />
                          <span className="section_text ">Reply </span>
                        </a>
                        <div className="emojis position-relative likes_emoji ms-auto"> 
                          <span className="total_like font-12 outfit-SB text-dark likes_number me-3">16</span> 
                          <img src="assets/images/like.png" className="img-fluid emojis_icon" alt="" /> 
                          <img src="assets/images/love.png" className="img-fluid emojis_icon" alt="" /> 
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="recent_comments">
                    <div className="user_detail_recent_comment d-flex align-items-center"> <span className="user_img_recent_comment">
                        <img src="http://jiran360.dollopinfotech.com/uploads/business/5778611128214778b2e912d24dd9d681_2.png" className="img-fluid img_cover" alt="" />
                      </span>
                      <div className="user_details_post font-14 font-M position-relative">
                        <a href="#" className="text-dark mb-0 d-block w-100">Business  Page</a> 
                        <span className="font-12 text-secondary">Talent, leadership, organization, HR |  2 hr ago</span> 
                        <div className="post_option_menu d-flex align-items-center justify-content-center ms-auto dropdown">
                          <a href="#" className="dropdown_icon d-inline-flex align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"> <i className="fi fi-rr-menu-dots-vertical lh-0" /></a>
                          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="javascript:void(0);"><i className="fi fi-rs-flag me-2" /> Report This comment</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="user_posted_comment">
                      <p className="usr_posted_comment">111</p>
                      <div className="usr_posted_user_action d-flex align-items-center position-relative">
                        <a href="javascript:void(0);" className="d-flex border_right_shre common_like_function">
                          <img src="assets/images/svg_icon/like_fill.svg" className="me-1 img-fluid me-1 like_img active" alt="" /> 
                          <img src="assets/images/svg_icon/like_fill.svg" className="me-1 img-fluid like_hover" alt="" /> Like</a>
                        <a href="javascript:void(0)" className="d-inline-flex align-items-center justify-content-center"> 
                          <img src="assets/images/svg_icon/share_arrow.svg" className="img-fluid me-1 like_img " alt="" />
                          <span className="section_text ">Reply </span>
                        </a>
                        <div className="emojis position-relative likes_emoji ms-auto"> 
                          <span className="total_like font-12 outfit-SB text-dark likes_number me-3">16</span> 
                          <img src="assets/images/like.png" className="img-fluid emojis_icon" alt="" /> 
                          <img src="assets/images/love.png" className="img-fluid emojis_icon" alt="" /> 
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="recent_comments">
                    <div className="user_detail_recent_comment d-flex align-items-center"> <span className="user_img_recent_comment">
                        <img src="http://jiran360.dollopinfotech.com/uploads/business/5778611128214778b2e912d24dd9d681_2.png" className="img-fluid img_cover" alt="" />
                      </span>
                      <div className="user_details_post font-14 font-M position-relative">
                        <a href="#" className="text-dark mb-0 d-block w-100">Business  Page</a> 
                        <span className="font-12 text-secondary">Talent, leadership, organization, HR |  2 hr ago</span> 
                        <div className="post_option_menu d-flex align-items-center justify-content-center ms-auto dropdown">
                          <a href="#" className="dropdown_icon d-inline-flex align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"> <i className="fi fi-rr-menu-dots-vertical lh-0" /></a>
                          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="javascript:void(0);"><i className="fi fi-rs-flag me-2" /> Report This comment</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="user_posted_comment">
                      <p className="usr_posted_comment">111</p>
                      <div className="usr_posted_user_action d-flex align-items-center position-relative">
                        <a href="javascript:void(0);" className="d-flex border_right_shre common_like_function">
                          <img src="assets/images/svg_icon/like_fill.svg" className="me-1 img-fluid me-1 like_img active" alt="" /> 
                          <img src="assets/images/svg_icon/like_fill.svg" className="me-1 img-fluid like_hover" alt="" /> Like</a>
                        <a href="javascript:void(0)" className="d-inline-flex align-items-center justify-content-center"> 
                          <img src="assets/images/svg_icon/share_arrow.svg" className="img-fluid me-1 like_img " alt="" />
                          <span className="section_text ">Reply </span>
                        </a>
                        <div className="emojis position-relative likes_emoji ms-auto"> 
                          <span className="total_like font-12 outfit-SB text-dark likes_number me-3">16</span> 
                          <img src="assets/images/like.png" className="img-fluid emojis_icon" alt="" /> 
                          <img src="assets/images/love.png" className="img-fluid emojis_icon" alt="" /> 
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="post_comment d-flex align-items-center pt-3 border-bottom-0 pb-0 d-none"> <span className="user_img_comment">
                    <img src="assets/images/avatar_img.png" className="img-fluid cover_img" alt="" /></span>
                  <div className="input_with_emoji position-relative">
                    <a href="#" className="comment_emoji"><i className="fi fi-rr-smile" /></a>
                    <input type="text" name="comment" post_id={231} className="form-control comment_input add_comment" placeholder="Share your comment on this post..." />
                  </div>
                  <button className="post_comment_btn post-comment" post_id={231} name="comment">
                    <img src="assets/images/svg_icon/send-button.svg" className="img-fluid" alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    )
  }
}
