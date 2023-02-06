import React from 'react'

export default function DashNavbar() {
  return (
   
    <div>

    {/* <!-- header start here --> */}

    <nav className="navbar navbar-expand-lg navbar-light bg-light home_navbar dashboard_header p-0">
        <div className="container">
            <a className="navbar-brand" href="dashboard">
                <img src="assets/images/graynod_logo.svg" className="img-fluid" alt="" />
            </a>
            <div className="head_search_bar d-inline-block ps-3">
                <div className="search_group position-relative d-inline-flex w-100 align-items-center">
                    <input type="text" className="head_serch_input" placeholder="Search.." />
                    <i className="fi fi-rr-search search_icon"></i>
                </div>
            </div>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
                    <li className="nav-item">
                        <a className="nav-link user-dashboard-active active" aria-current="page" href="dashboard">
                            <img src="assets/images/svg_icon/home.svg" className="nav_icon_default nav_icon" />
                            <img src="assets/images/svg_icon/home_active.svg" className="nav_icon_active nav_icon" />
                            Home
                        </a>
                    </li>
                    <li className="nav-item ">
                        <a className="nav-link marketplace-active pr_30" href="business">
                            <img src="assets/images/svg_icon/business.svg" className="nav_icon_default nav_icon" />
                            Business
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link groups-active" href="group">
                            <img src="assets/images/svg_icon/group.svg" className="nav_icon_default nav_icon" />
                            Groups
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link message-active" href="mesagess">
                            <img src="assets/images/svg_icon/chat.svg" className="nav_icon_default nav_icon" />
                            Messages
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link message-active" href="mesagess">
                            <img src="assets/images/svg_icon/chat.svg" className="nav_icon_default nav_icon" />
                            Job
                        </a>
                    </li>

                    <li className="nav-item">
                        <span className="divider"></span>
                    </li>
                    <li className="nav-item noti_icon">
                        <a className="nav-link d-inline-flex align-items-center" href="notification">
                            <img src="assets/images/svg_icon/notification-bell.svg" />
                            <span
                                className="noti_circle d-flex align-items-center justify-content-center notification-counter">

                            </span>
                        </a>
                    </li>
                    <li className="nav-item dropdown user_dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">

                            <span className="user_image">
                                <img src="assets/images/avatar_img.png" className="cover_img" />
                            </span>

                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li>
                                <a className="dropdown-item main_dropdown d-flex" href="profile">
                                    <span className="dropdown_user_pic">
                                        <img src="assets/images/avatar_img.png"
                                            className="img-fluid cover_img" />
                                    </span>
                                    <div className="user_profile_box d-flex flex-wrap align-items-center">
                                        <h4 className="d-inline-flex align-items-center m-0" id="full_name">
                                            David Smith
                                            <img src="assets/images/svg_icon/user-verified.svg" className="user-verified ms-1" />
                                        </h4>
                                        <span className="btn btn-primary ms-auto">
                                            View Profile
                                        </span>

                                    </div>
                                </a>
                            </li>

                            <li>
                                <h2 className="drp_acc font_12">Account</h2>
                            </li>
                            <li>
                                <a className="dropdown-item py-2 px-0 d-flex align-items-center w-100 position-relative"
                                    href="bookmarks">
                                    <span className="pro_dropdown_icon d-flex align-items-center justify-content-center me-2">
                                        <img src="assets/images/svg_icon/bookmark.svg" className="img-fluid " />
                                    </span>
                                    <span className="list_tittle_drpdwn">
                                        Bookmarks
                                    </span>
                                    <i className="fi fi-rs-angle-right ms-auto"></i>
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item py-2 px-0 d-flex align-items-center w-100 position-relative"
                                    href="managesettings">
                                    <span className="pro_dropdown_icon d-flex align-items-center justify-content-center me-2">
                                        <img src="assets/images/svg_icon/setting.svg" className="img-fluid " />
                                    </span>
                                    <span className="list_tittle_drpdwn">
                                        Settings
                                    </span>
                                    <i className="fi fi-rs-angle-right ms-auto"></i>
                                </a>
                            </li>
                            <li>
                                <a className="dropdown-item py-2 px-0 d-flex align-items-center w-100 position-relative"
                                    href="#">
                                    <span className="pro_dropdown_icon d-flex align-items-center justify-content-center me-2">
                                        <img src="assets/images/svg_icon/question.svg" className="img-fluid " />
                                    </span>
                                    <span className="list_tittle_drpdwn">
                                        FAQ
                                    </span>
                                    <i className="fi fi-rs-angle-right ms-auto"></i>
                                </a>
                            </li>

                            <li className="sign_out">
                                <a className="dropdown-item py-3 px-0 d-flex align-items-center w-100 position-relative"
                                    href="/">
                                    <span className="pro_dropdown_icon d-flex align-items-center justify-content-center me-2">
                                        <img src="assets/images/svg_icon/logout.svg" className="img-fluid " />
                                    </span>
                                    <span>
                                        Log Out
                                    </span>
                                    <i className="fi fi-rs-angle-right ms-auto"></i>

                                </a>
                            </li>
                            <li>
                                <div className="dropdown_footer text-center">
                                    <p className="font-12 text-secondary font-M mb-0">
                                        2020. Graynod All rights reserved.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    {/* <!-- header end here --> */}
</div>
)
}


   
   