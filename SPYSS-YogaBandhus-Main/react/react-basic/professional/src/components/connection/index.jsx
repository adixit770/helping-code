import React, { Component } from 'react'
import DashNavbar from '../dashboardNavbar'

export default class Connection extends Component {
  render() {
    return (
      <>
     <DashNavbar/>

{/* // <!-- header end here --> */}

{/* // <!-- connection page start here --> */}

<div class="connection_page top_spacing">
    <div class="container">
        <div class="row">
            <div class="col-md-3">
                <div class="right_side_tabs common_box p-0">
                    <ul class="nav nav-tabs flex-column column_tabs" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">
                            <i class="fi fi-rr-users-alt tab_icon"></i> Connections <i class="fi fi-rs-angle-right ms-auto"></i>
                            </button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link border-0" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">
                                <i class="fi fi-rr-user-add tab_icon"></i> Invitations  <i class="fi fi-rs-angle-right ms-auto"></i>
                             </button>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-md-6">
                <div class="invitation_listing tab-content" id="myTabContent">    
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <h3 class="font-16 font-M">Connections</h3>
                        <div class="modal_search position-relative">
                            <input type="text" class="form-control" placeholder="Search for people..."/>
                            <i class="fi fi-rr-search search_icon"></i>
                        </div>
                        <div class="listing_box connection_listing common_box d-inline-block w-100">
                            <div class="connection_item d-inline-flex align-items-center w-100">
                                <span class="medium_circle_img d-flex">
                                    <img src="assets/images/mutual-2.png" class="cover_img"/>
                                </span>
                                <div class="ci_details d-inline-block">
                                    <h3 class="font-16 font-M mb-1 text_nowrap">Patrick Koller</h3>
                                    <p class="ci_location font-14 mb-0 d-flex align-items-center line_clamp_2"><i class="fi fi-sr-marker me-1 lh-0"></i>Rammurthy nagar, Bangalore</p>
                                </div>
                                <div class="ms-auto d-inline-flex align-items-center">
                                    <a href="#" class="btn btn-primary rounded-pill">Message</a>
                                    <div class="post_option_menu d-flex align-items-center justify-content-center ms-2 dropdown">
                                        <a href="#" class="dropdown_icon d-inline-flex align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"> <i class="fi fi-rr-menu-dots-vertical lh-0"></i></a>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a class="dropdown-item" href="javascript:void(0);"><i class="fi fi-rr-cross-circle me-2"></i> Remove Connection</a></li>
                                            <li><a class="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#postreportModal"><i class="fi fi-rr-ban me-2"></i>Block</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="connection_item d-inline-flex align-items-center w-100">
                                <span class="medium_circle_img d-flex">
                                    <img src="assets/images/posted_user.png" class="cover_img"/>
                                </span>
                                <div class="ci_details d-inline-block">
                                    <h3 class="font-16 font-M mb-1 text_nowrap">Keith Ferrazzi</h3>
                                    <p class="ci_location font-14 mb-0 d-flex align-items-center line_clamp_2"><i class="fi fi-sr-marker me-1 lh-0"></i>Rammurthy nagar, Bangalore</p>
                                </div>
                                <div class="ms-auto d-inline-flex align-items-center">
                                    <a href="#" class="btn btn-primary rounded-pill">Message</a>
                                    <div class="post_option_menu d-flex align-items-center justify-content-center ms-2 dropdown">
                                        <a href="#" class="dropdown_icon d-inline-flex align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"> <i class="fi fi-rr-menu-dots-vertical lh-0"></i></a>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a class="dropdown-item" href="javascript:void(0);"><i class="fi fi-rr-cross-circle me-2"></i> Remove Connection</a></li>
                                            <li><a class="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#postreportModal"><i class="fi fi-rr-ban me-2"></i>Block</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="connection_item d-inline-flex align-items-center w-100">
                                <span class="medium_circle_img d-flex">
                                    <img src="assets/images/mutual-2.png" class="cover_img"/>
                                </span>
                                <div class="ci_details d-inline-block">
                                    <h3 class="font-16 font-M mb-1 text_nowrap">Patrick Koller</h3>
                                    <p class="ci_location font-14 mb-0 d-flex align-items-center line_clamp_2"><i class="fi fi-sr-marker me-1 lh-0"></i>Rammurthy nagar, Bangalore</p>
                                </div>
                                <div class="ms-auto d-inline-flex align-items-center">
                                    <a href="#" class="btn btn-primary rounded-pill">Message</a>
                                    <div class="post_option_menu d-flex align-items-center justify-content-center ms-2 dropdown">
                                        <a href="#" class="dropdown_icon d-inline-flex align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"> <i class="fi fi-rr-menu-dots-vertical lh-0"></i></a>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a class="dropdown-item" href="javascript:void(0);"><i class="fi fi-rr-cross-circle me-2"></i> Remove Connection</a></li>
                                            <li><a class="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#postreportModal"><i class="fi fi-rr-ban me-2"></i>Block</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="connection_item d-inline-flex align-items-center w-100">
                                <span class="medium_circle_img d-flex">
                                    <img src="assets/images/posted_user.png" class="cover_img"/>
                                </span>
                                <div class="ci_details d-inline-block">
                                    <h3 class="font-16 font-M mb-1 text_nowrap">Keith Ferrazzi</h3>
                                    <p class="ci_location font-14 mb-0 d-flex align-items-center line_clamp_2"><i class="fi fi-sr-marker me-1 lh-0"></i>Rammurthy nagar, Bangalore</p>
                                </div>
                                <div class="ms-auto d-inline-flex align-items-center">
                                    <a href="#" class="btn btn-primary rounded-pill">Message</a>
                                    <div class="post_option_menu d-flex align-items-center justify-content-center ms-2 dropdown">
                                        <a href="#" class="dropdown_icon d-inline-flex align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"> <i class="fi fi-rr-menu-dots-vertical lh-0"></i></a>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><a class="dropdown-item" href="javascript:void(0);"><i class="fi fi-rr-cross-circle me-2"></i> Remove Connection</a></li>
                                            <li><a class="dropdown-item" href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#postreportModal"><i class="fi fi-rr-ban me-2"></i>Block</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h3  class="font-16 font-M mt-4">Suggestions for You</h3>
                        <div class="listing_box connection_listing sugestion_list common_box d-inline-block w-100">
                            <div class="connection_item d-inline-flex align-items-center w-100">
                                <span class="medium_circle_img d-flex">
                                    <img src="assets/images/mutual-2.png" class="cover_img"/>
                                </span>
                                <div class="ci_details d-inline-block">
                                    <h3 class="font-16 font-M mb-1 text_nowrap">Patrick Koller</h3>
                                    <p class="ci_location font-14 mb-0 d-flex align-items-center line_clamp_2"><i class="fi fi-sr-marker me-1 lh-0"></i>Rammurthy nagar, Bangalore</p>
                                </div>
                                <div class="ms-auto d-inline-flex align-items-center">
                                    <a href="#" class="btn btn-primary rounded-pill">Connection</a>
                                </div>
                            </div>
                            <div class="connection_item d-inline-flex align-items-center w-100">
                                <span class="medium_circle_img d-flex">
                                    <img src="assets/images/posted_user.png" class="cover_img"/>
                                </span>
                                <div class="ci_details d-inline-block">
                                    <h3 class="font-16 font-M mb-1 text_nowrap">Keith Ferrazzi</h3>
                                    <p class="ci_location font-14 mb-0 d-flex align-items-center line_clamp_2"><i class="fi fi-sr-marker me-1 lh-0"></i>Rammurthy nagar, Bangalore</p>
                                </div>
                                <div class="ms-auto d-inline-flex align-items-center">
                                    <a href="#" class="btn btn-primary rounded-pill">Connection</a>
                                </div>
                            </div>
                            <div class="connection_item d-inline-flex align-items-center w-100">
                                <span class="medium_circle_img d-flex">
                                    <img src="assets/images/mutual-2.png" class="cover_img"/>
                                </span>
                                <div class="ci_details d-inline-block">
                                    <h3 class="font-16 font-M mb-1 text_nowrap">Patrick Koller</h3>
                                    <p class="ci_location font-14 mb-0 d-flex align-items-center line_clamp_2"><i class="fi fi-sr-marker me-1 lh-0"></i>Rammurthy nagar, Bangalore</p>
                                </div>
                                <div class="ms-auto d-inline-flex align-items-center">
                                    <a href="#" class="btn btn-primary rounded-pill">Connection</a>
                                </div>
                            </div>
                            <div class="connection_item d-inline-flex align-items-center w-100">
                                <span class="medium_circle_img d-flex">
                                    <img src="assets/images/posted_user.png" class="cover_img"/>
                                </span>
                                <div class="ci_details d-inline-block">
                                    <h3 class="font-16 font-M mb-1 text_nowrap">Keith Ferrazzi</h3>
                                    <p class="ci_location font-14 mb-0 d-flex align-items-center line_clamp_2"><i class="fi fi-sr-marker me-1 lh-0"></i>Rammurthy nagar, Bangalore</p>
                                </div>
                                <div class="ms-auto d-inline-flex align-items-center">
                                    <a href="#" class="btn btn-primary rounded-pill">Connection</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <div class="invitation_tabs common_box pb-0">
                            <ul class="nav nav-tabs profile_comapny_tab common-tab pt-0 border-0" id="myTab" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link active" id="receive-tab" data-bs-toggle="tab" data-bs-target="#receive" type="button" role="tab" aria-controls="receive" aria-selected="true">Received</button>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <button class="nav-link" id="sent-tab" data-bs-toggle="tab" data-bs-target="#sent" type="button" role="tab" aria-controls="sent" aria-selected="false">Sent</button>
                                </li>
                            </ul>
                        </div>
                        <div class="invitation_tab_body tab-content mt-3 common_box" id="myTabContent">
                            <div class="tab-pane fade show active" id="receive" role="tabpanel" aria-labelledby="receive-tab">
                                <div class="listing_box rquest_listing d-inline-block w-100">
                                    <div class="connection_item d-inline-flex align-items-center w-100">
                                        <span class="medium_circle_img d-flex">
                                            <img src="assets/images/mutual-2.png" class="cover_img"/>
                                        </span>
                                        <div class="ci_details d-inline-block">
                                            <h3 class="font-16 font-M mb-1 text_nowrap">Patrick Koller</h3>
                                            <p class="ci_location font-14 mb-0 d-flex align-items-center line_clamp_2"><i class="fi fi-sr-marker me-1 lh-0"></i>Rammurthy nagar, Bangalore</p>
                                        </div>
                                        <div class="ms-auto d-inline-flex align-items-center">
                                            <a href="javascript:void(0)" class="btn btn-default rounded-pill ">Ignore</a>
                                            <a href="javascript:void(0)" class="btn btn-primary rounded-pill">Accept</a>
                                        </div>
                                    </div>
                                    <div class="connection_item d-inline-flex align-items-center w-100">
                                        <span class="medium_circle_img d-flex">
                                            <img src="assets/images/mutual-2.png" class="cover_img"/>
                                        </span>
                                        <div class="ci_details d-inline-block">
                                            <h3 class="font-16 font-M mb-1 text_nowrap">Patrick Koller</h3>
                                            <p class="ci_location font-14 mb-0 d-flex align-items-center line_clamp_2"><i class="fi fi-sr-marker me-1 lh-0"></i>Rammurthy nagar, Bangalore</p>
                                        </div>
                                        <div class="ms-auto d-inline-flex align-items-center">
                                            <a href="javascript:void(0)" class="btn btn-default rounded-pill ">Ignore</a>
                                            <a href="javascript:void(0)" class="btn btn-primary rounded-pill">Accept</a>
                                        </div>
                                    </div>
                                    <div class="connection_item d-inline-flex align-items-center w-100">
                                        <span class="medium_circle_img d-flex">
                                            <img src="assets/images/mutual-2.png" class="cover_img"/>
                                        </span>
                                        <div class="ci_details d-inline-block">
                                            <h3 class="font-16 font-M mb-1 text_nowrap">Patrick Koller</h3>
                                            <p class="ci_location font-14 mb-0 d-flex align-items-center line_clamp_2"><i class="fi fi-sr-marker me-1 lh-0"></i>Rammurthy nagar, Bangalore</p>
                                        </div>
                                        <div class="ms-auto d-inline-flex align-items-center">
                                            <a href="javascript:void(0)" class="btn btn-default rounded-pill ">Ignore</a>
                                            <a href="javascript:void(0)" class="btn btn-primary rounded-pill">Accept</a>
                                        </div>
                                    </div>
                                    <div class="connection_item d-inline-flex align-items-center w-100">
                                        <span class="medium_circle_img d-flex">
                                            <img src="assets/images/mutual-2.png" class="cover_img"/>
                                        </span>
                                        <div class="ci_details d-inline-block">
                                            <h3 class="font-16 font-M mb-1 text_nowrap">Patrick Koller</h3>
                                            <p class="ci_location font-14 mb-0 d-flex align-items-center line_clamp_2"><i class="fi fi-sr-marker me-1 lh-0"></i>Rammurthy nagar, Bangalore</p>
                                        </div>
                                        <div class="ms-auto d-inline-flex align-items-center">
                                            <a href="javascript:void(0)" class="btn btn-default rounded-pill ">Ignore</a>
                                            <a href="javascript:void(0)" class="btn btn-primary rounded-pill">Accept</a>
                                        </div>
                                    </div>
                                    <div class="connection_item d-inline-flex align-items-center w-100">
                                        <span class="medium_circle_img d-flex">
                                            <img src="assets/images/mutual-2.png" class="cover_img"/>
                                        </span>
                                        <div class="ci_details d-inline-block">
                                            <h3 class="font-16 font-M mb-1 text_nowrap">Patrick Koller</h3>
                                            <p class="ci_location font-14 mb-0 d-flex align-items-center line_clamp_2"><i class="fi fi-sr-marker me-1 lh-0"></i>Rammurthy nagar, Bangalore</p>
                                        </div>
                                        <div class="ms-auto d-inline-flex align-items-center">
                                            <a href="javascript:void(0)" class="btn btn-default rounded-pill ">Ignore</a>
                                            <a href="javascript:void(0)" class="btn btn-primary rounded-pill">Accept</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="sent" role="tabpanel" aria-labelledby="sent-tab">
                                <div class="listing_box rquest_listing d-inline-block w-100">
                                    <div class="connection_item d-inline-flex align-items-center w-100">
                                        <span class="medium_circle_img d-flex">
                                            <img src="assets/images/mutual-2.png" class="cover_img"/>
                                        </span>
                                        <div class="ci_details d-inline-block">
                                            <h3 class="font-16 font-M mb-1 text_nowrap">Patrick Koller</h3>
                                            <p class="ci_location font-14 mb-0 d-flex align-items-center line_clamp_2"><i class="fi fi-sr-marker me-1 lh-0"></i>Rammurthy nagar, Bangalore</p>
                                        </div>
                                        <div class="ms-auto d-inline-flex align-items-center">
                                            <a href="javascript:void(0)" class="btn btn-primary-outline rounded-pill">Pending</a>
                                        </div>
                                    </div>
                                    <div class="connection_item d-inline-flex align-items-center w-100">
                                        <span class="medium_circle_img d-flex">
                                            <img src="assets/images/mutual-2.png" class="cover_img"/>
                                        </span>
                                        <div class="ci_details d-inline-block">
                                            <h3 class="font-16 font-M mb-1 text_nowrap">Patrick Koller</h3>
                                            <p class="ci_location font-14 mb-0 d-flex align-items-center line_clamp_2"><i class="fi fi-sr-marker me-1 lh-0"></i>Rammurthy nagar, Bangalore</p>
                                        </div>
                                        <div class="ms-auto d-inline-flex align-items-center">
                                        <a href="javascript:void(0)" class="btn btn-default rounded-pill me-0">Withdraw</a>
                                        </div>
                                    </div>
                                    <div class="connection_item d-inline-flex align-items-center w-100">
                                        <span class="medium_circle_img d-flex">
                                            <img src="assets/images/mutual-2.png" class="cover_img"/>
                                        </span>
                                        <div class="ci_details d-inline-block">
                                            <h3 class="font-16 font-M mb-1 text_nowrap">Patrick Koller</h3>
                                            <p class="ci_location font-14 mb-0 d-flex align-items-center line_clamp_2"><i class="fi fi-sr-marker me-1 lh-0"></i>Rammurthy nagar, Bangalore</p>
                                        </div>
                                        <div class="ms-auto d-inline-flex align-items-center">
                                            <a href="javascript:void(0)" class="btn btn-primary-outline rounded-pill">Pending</a>
                                        </div>
                                    </div>
                                    <div class="connection_item d-inline-flex align-items-center w-100">
                                        <span class="medium_circle_img d-flex">
                                            <img src="assets/images/mutual-2.png" class="cover_img"/>
                                        </span>
                                        <div class="ci_details d-inline-block">
                                            <h3 class="font-16 font-M mb-1 text_nowrap">Patrick Koller</h3>
                                            <p class="ci_location font-14 mb-0 d-flex align-items-center line_clamp_2"><i class="fi fi-sr-marker me-1 lh-0"></i>Rammurthy nagar, Bangalore</p>
                                        </div>
                                        <div class="ms-auto d-inline-flex align-items-center">
                                            <a href="javascript:void(0)" class="btn btn-primary-outline rounded-pill">Pending</a>
                                        </div>
                                    </div>
                                    <div class="connection_item d-inline-flex align-items-center w-100">
                                        <span class="medium_circle_img d-flex">
                                            <img src="assets/images/mutual-2.png" class="cover_img"/>
                                        </span>
                                        <div class="ci_details d-inline-block">
                                            <h3 class="font-16 font-M mb-1 text_nowrap">Patrick Koller</h3>
                                            <p class="ci_location font-14 mb-0 d-flex align-items-center line_clamp_2"><i class="fi fi-sr-marker me-1 lh-0"></i>Rammurthy nagar, Bangalore</p>
                                        </div>
                                        <div class="ms-auto d-inline-flex align-items-center">
                                            <a href="javascript:void(0)" class="btn btn-primary-outline rounded-pill">Pending</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                    <div class="advertisment_cards mb_20 "> 
                        <img src="assets/images/ads-1.png" class="img-fluid cover_img"/>
                    </div>
                    <div class="advertisment_cards mb_20"> </div>
                    <div class="advertisment_cards mb_20 "> 
                        <img src="assets/images/ads-2.png" class="img-fluid cover_img"/>
                    </div>
                </div>
        </div>
    </div>
</div>

{/* <!-- connection page end here --> */}


<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
   
    {/* <!-- emoji tooltip script --> */}



      </>
    )
  }
}
