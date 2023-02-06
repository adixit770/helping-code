import React, { Component } from "react";

import Footer from "../footer";
import Navbar from "../navbar";

export default class Jobs extends Component {


componentDidMount(){
 
    document.querySelector('.job_title_item').addEventListener("click",(function (){
        document.querySelector('.job_items_cards').classList.add('flex-column');
        document.querySelector('.jobs_cards').classList.add('show_job_detail');
    }))
  

    document.querySelector('.job_detail_close').addEventListener("click",(function (){
        document.querySelector('.job_items_cards').classList.remove('flex-column');
        document.querySelector('.jobs_cards').classList.remove('show_job_detail');
    }))
}



  render() {
    return (
      <>
      <Navbar/>
        {/* <!-- TOP BREADCUM  --> */}
        <section className="brdcum position-relative">
          <img
            src="assets/images/brdcum_bg.png"
            className="img-fluid brd_img"
            alt=""
          />
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h1 className="top_brdcum_title position-relative d-inline-block">
                  Find a <span className="text-primary font-B"> Jobs</span>
                  <img
                    src="assets/images/brdcum_arrow.png"
                    className="brd_arrow"
                    alt=""
                  />
                </h1>
                <p className="brd_details font-14 font-M mb-0">
                  Lorem ipssm dollor dummy text <br className="d-none d-md-block" />
                  type real model world
                </p>
              </div>
              <div className="col-md-6 position-relative">
                <img
                  src="assets/images/job-bg.png"
                  className="bussines_img_brdcum "
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
        <section className="business_listing">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="top_section_search d-flex align-items-center position-relative mb-5">
                  <span className="seach_icon d-flex align-items-center justify-content-center">
                    <i className="fi fi-rr-search text-secondary lh-0"></i>
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
            <h1 className="card_top_title font-18 font-SB">
              Showing 100+ Jobs in Indore, Madhya Pradesh, India
            </h1>
            <div className="jobs_cards position-relative">
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
                            for="bookmark"
                            className="bookmark_icon d-inline-flex align-items-center justify-content-center"
                          >
                            <i className="fi fi-rr-bookmark"></i>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="people_contact_detail position-relative d-flex align-items-center w-100 flex-wrap">
                      <p className="location font-12 d-inline-flex w-100 align-items-center mb-3">
                        <i className="fi fi-rr-marker me-2"></i>Indore,Madhya
                        Pradesh,India
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
                  <div className=" job_card   people_card_item d-flex w-100 flex-wrap">
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
                            for="bookmark"
                            className="bookmark_icon d-inline-flex align-items-center justify-content-center"
                          >
                            <i className="fi fi-rr-bookmark"></i>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="people_contact_detail position-relative d-flex align-items-center w-100 flex-wrap">
                      <p className="location font-12 d-inline-flex w-100 align-items-center mb-3">
                        <i className="fi fi-rr-marker me-2"></i>Indore,Madhya
                        Pradesh,India
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
                            for="bookmark"
                            className="bookmark_icon d-inline-flex align-items-center justify-content-center"
                          >
                            <i className="fi fi-rr-bookmark"></i>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="people_contact_detail position-relative d-flex align-items-center w-100 flex-wrap">
                      <p className="location font-12 d-inline-flex w-100 align-items-center mb-3">
                        <i className="fi fi-rr-marker me-2"></i>Indore,Madhya
                        Pradesh,India
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
                            for="bookmark"
                            className="bookmark_icon d-inline-flex align-items-center justify-content-center"
                          >
                            <i className="fi fi-rr-bookmark"></i>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="people_contact_detail position-relative d-flex align-items-center w-100 flex-wrap">
                      <p className="location font-12 d-inline-flex w-100 align-items-center mb-3">
                        <i className="fi fi-rr-marker me-2"></i>Indore,Madhya
                        Pradesh,India
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
                            for="bookmark"
                            className="bookmark_icon d-inline-flex align-items-center justify-content-center"
                          >
                            <i className="fi fi-rr-bookmark"></i>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="people_contact_detail position-relative d-flex align-items-center w-100 flex-wrap">
                      <p className="location font-12 d-inline-flex w-100 align-items-center mb-3">
                        <i className="fi fi-rr-marker me-2"></i>Indore,Madhya
                        Pradesh,India
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
                            for="bookmark"
                            className="bookmark_icon d-inline-flex align-items-center justify-content-center"
                          >
                            <i className="fi fi-rr-bookmark"></i>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="people_contact_detail position-relative d-flex align-items-center w-100 flex-wrap">
                      <p className="location font-12 d-inline-flex w-100 align-items-center mb-3">
                        <i className="fi fi-rr-marker me-2"></i>Indore,Madhya
                        Pradesh,India
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
                            for="bookmark"
                            className="bookmark_icon d-inline-flex align-items-center justify-content-center"
                          >
                            <i className="fi fi-rr-bookmark"></i>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="people_contact_detail position-relative d-flex align-items-center w-100 flex-wrap">
                      <p className="location font-12 d-inline-flex w-100 align-items-center mb-3">
                        <i className="fi fi-rr-marker me-2"></i>Indore,Madhya
                        Pradesh,India
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
                            for="bookmark"
                            className="bookmark_icon d-inline-flex align-items-center justify-content-center"
                          >
                            <i className="fi fi-rr-bookmark"></i>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="people_contact_detail position-relative d-flex align-items-center w-100 flex-wrap">
                      <p className="location font-12 d-inline-flex w-100 align-items-center mb-3">
                        <i className="fi fi-rr-marker me-2"></i>Indore,Madhya
                        Pradesh,India
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
                            for="bookmark"
                            className="bookmark_icon d-inline-flex align-items-center justify-content-center"
                          >
                            <i className="fi fi-rr-bookmark"></i>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="people_contact_detail position-relative d-flex align-items-center w-100 flex-wrap">
                      <p className="location font-12 d-inline-flex w-100 align-items-center mb-3">
                        <i className="fi fi-rr-marker me-2"></i>Indore,Madhya
                        Pradesh,India
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
                            for="bookmark"
                            className="bookmark_icon d-inline-flex align-items-center justify-content-center"
                          >
                            <i className="fi fi-rr-bookmark"></i>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="people_contact_detail position-relative d-flex align-items-center w-100 flex-wrap">
                      <p className="location font-12 d-inline-flex w-100 align-items-center mb-3">
                        <i className="fi fi-rr-marker me-2"></i>Indore,Madhya
                        Pradesh,India
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
                            for="bookmark"
                            className="bookmark_icon d-inline-flex align-items-center justify-content-center"
                          >
                            <i className="fi fi-rr-bookmark"></i>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="people_contact_detail position-relative d-flex align-items-center w-100 flex-wrap">
                      <p className="location font-12 d-inline-flex w-100 align-items-center mb-3">
                        <i className="fi fi-rr-marker me-2"></i>Indore,Madhya
                        Pradesh,India
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
                            for="bookmark"
                            className="bookmark_icon d-inline-flex align-items-center justify-content-center"
                          >
                            <i className="fi fi-rr-bookmark"></i>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="people_contact_detail position-relative d-flex align-items-center w-100 flex-wrap">
                      <p className="location font-12 d-inline-flex w-100 align-items-center mb-3">
                        <i className="fi fi-rr-marker me-2"></i>Indore,Madhya
                        Pradesh,India
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
                          UI/UX designer for responsive designing for vactors &
                          real stick theme with potential long term position
                        </h2>
                        <a href="#" className="job_detail_close ms-auto">
                          <i className="fi fi-rr-cross"></i>
                        </a>
                      </div>
                    </div>
                    <ul className="job_location_details d-flex align-items-center p-0">
                      <li>
                        <i className="fi fi-rr-marker me-2"></i> Indore, Madhya
                        Pradesh, India
                      </li>
                      |<li>2 days ago</li>
                    </ul>
                    <div className="job_apply_btn d-inline-block w-100">
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
                        Not that long ago, we were on whatsapp with a handful of
                        customers, many of whom were friends and family. Today,
                        we're an app covering Bangalore, Chennai, Jaipur,
                        Mumbai, Hyderabad, Delhi, Noida, Pune and Gurgaon. Dunzo
                        is a technology company that makes local deliveries fast
                        and easy. Time is the most valuable commodity in today's
                        time. Our aim is to give it back to you. We take care of
                        your daily chores, from groceries, food, laundry to even
                        organising party supplies - all at the tap of a button.
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
                        <p className="font-12 font-M mb-0">Mid-Senior level</p>
                      </div>
                      <div className="job_type_item">
                        <p className="job_type_title font-12 font-M text-secondary mb-0">
                          Seniority level
                        </p>
                        <p className="font-12 font-M mb-0">Mid-Senior level</p>
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
                        Referrals increase your chances of interviewing at Capco
                        Industries Weblinks Inc by 2x
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
        </section>
       <Footer/>
      </>
    );
  }
}
