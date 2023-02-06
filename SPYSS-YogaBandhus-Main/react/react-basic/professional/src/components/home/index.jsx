import React from "react";
import $ from "jquery";
import Footer from "../footer";
import Navbar from "../navbar";
class Home extends React.Component {

  componentDidMount(){
    
    setInterval(function () {
      document.body.classList.add("pill_animation");
    }, 800)
    
  }
  render() {
    return (
      <>
      <Navbar/>
       
        {/* Welcome To Professional Community */}
        <section className="profestional_community position-relative">
          <img
            src="assets/images/hero_pattern.png"
            className="img-fluid top_hero_pattern"
            alt="hero_pattern"
          />
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="right_text_box position-relative">
                  <h1 className="font-B tex-dark mb-3 hero_title">
                    Welcome to your
                    <br className="d-none d-md-block" />
                    <span className="text-primary">professional</span> community
                  </h1>
                  <p className="hero_description font-18 font-M text-secondary">
                    Join us your professional community
                  </p>
                  <div className="starter_join_form">
                    <form action="#" className="col-lg-10">
                      <div className="single_form_comp position-relative mb-3 d-flex align-items-center">
                        <i className="fi fi-rr-user input_user text-secondary"></i>
                        <input
                          type="text"
                          className="form-control graynod_input"
                          value="Jhon@gmail.com"
                        />
                      </div>
                      <div className="single_form_comp position-relative mb-1 d-flex align-items-center">
                        <i className="fi fi-rr-lock input_user text-secondary"></i>
                        <input
                          type="password"
                          className="form-control graynod_input"
                          value="Jhon@gmail.com"
                        />
                        <i className="fi fi-rr-eye input_eye font-20 lh-0"></i>
                      </div>
                      <a
                        href="javascript:void(0);"
                        className="font-14 float-end d-inline-block recover_password font-SB"
                      >
                        Recover Password ?
                      </a>
                      <a
                        href="javascript:void(0);"
                        className="btn login w-100 mb-3"
                      >
                        Sign In
                      </a>
                      <div className="saparator d-flex align-items-center justify-content-center mb-3">
                        <span className="sparator_text d-flex align-items-center justify-content-center font-18 font-SB text-dark">
                          or
                        </span>
                      </div>
                      <a
                        href="javascript:void(0);"
                        className="btn btn-sign-in-g w-100"
                      >
                        Sign in with Google
                      </a>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-md-5 ms-auto">
                <div className="user_img_box d-flex overflow-hidden">
                  <div className="left_user pill_animate">
                    <span className="pill_lg d-block mb-3">
                      <img
                        src="assets/images/medium-shot.png"
                        className="img-fluid cover_img"
                        alt="medium-shot"
                      />
                    </span>
                    <span className="pill_sm d-block">
                      <img
                        src="assets/images/2.png"
                        className="img-fluid cover_img"
                        alt="2"
                      />
                    </span>
                  </div>
                  <div className="midle_user mx-3">
                    <span className="pill_md d-block bg_sky_blue mb-3">
                      <img
                        src="assets/images/6.png"
                        className="img-fluid cover_img"
                        alt="6"
                      />
                    </span>
                    <span className="pill_lg d-block bg_teal">
                      <img
                        src="assets/images/3.png"
                        className="img-fluid cover_img"
                        alt="3"
                      />
                    </span>
                  </div>
                  <div className="right_user pill_animate">
                    <span className="pill_lg d-block bg_purple mb-3">
                      <img
                        src="assets/images/5.png"
                        className="img-fluid cover_img"
                        alt="5"
                      />
                    </span>
                    <span className="pill_sm d-block bg_lightskyblue">
                      <img
                        src="assets/images/4.png"
                        className="img-fluid cover_img"
                        alt="4"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  */}
        {/* <!-- explore topic  --> */}
        <section className="explore_topic">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="find_bussiness_box bg-primary position-relative">
                  <span className="icon_bussiness_outer d-flex align-items-center justify-content-center mb-3">
                    <span className="icon_bussiness_inner d-flex align-items-center justify-content-center">
                      <i className="fi fi-sr-briefcase briefcase_icon"></i>
                    </span>
                  </span>
                  <img
                    src="assets/images/up-arrow 2.svg"
                    className="up_icon"
                    alt=""
                  />
                  <h3 className="common_title_section text-white font-B">
                    Find A Business
                  </h3>
                  <p className="font-18 font-M text-white">
                    Here's how to find the perfect
                    <br className="d-none d-md-block" />
                    idea for your business
                  </p>
                  <button className="btn btn-b-search">Search</button>
                  <img
                    src="assets/images/bussiness_modal.png"
                    className="bussiness_modal"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-md-6">
                <h3 className="common_title_section font-SB mb-3">
                  Explore <span className="text-primary font-B">topics</span>
                  <br className="d-none d-md-block" />
                  you are interested in
                </h3>
                <p className="font-16 font-M text-secondary topics">
                  Content Topics
                </p>
                <div className="all_topic_box">
                  <a href="#" className="btn btn-tpoic">
                    See All Topics
                  </a>
                  <a href="#" className="btn btn-tpoic">
                    Science and Environment
                  </a>
                  <a href="#" className="btn btn-tpoic">
                    Marketing and Advertising
                  </a>
                  <a href="#" className="btn btn-tpoic">
                    Sales and Retail
                  </a>
                  <a href="#" className="btn btn-tpoic">
                    Technology
                  </a>
                  <a href="#" className="btn btn-tpoic">
                    Finance and Economy
                  </a>
                  <a href="#" className="btn btn-tpoic">
                    Health
                  </a>
                  <a href="#" className="btn btn-tpoic">
                    Business and Management
                  </a>
                </div>
                <a href="#" className="btn btn-see_all">
                  See more
                </a>
              </div>
            </div>
          </div>
        </section>
        {/*  */}
        {/* Meet Your Community People */}
        <section className="community_people position-relative">
          <img
            src="assets/images/hero_pattern.png"
            className="img-fluid top_hero_pattern"
            alt="hero_pattern"
          />
          <div className="col-md-6 ps-0 community_imaage_left">
            <img
              src="assets/images/world_map.png"
              className="img-fluid"
              alt="world_map"
            />
            <span className="user_icon d-inline-flex align-items-center justify-content-center overflow-hidden usa">
              <img
                src="assets/images/w1.png"
                className="img-fluid user_pic"
                alt="w1"
              />
            </span>
            <span className="user_icon d-inline-flex align-items-center justify-content-center overflow-hidden argentina">
              <img
                src="assets/images/w2.png"
                className="img-fluid user_pic"
                alt="w2"
              />
            </span>
            <span className="user_icon d-inline-flex align-items-center justify-content-center overflow-hidden green-land">
              <img
                src="assets/images/w3.png"
                className="img-fluid user_pic"
                alt="w3"
              />
            </span>
            <span className="user_icon d-inline-flex align-items-center justify-content-center overflow-hidden africa">
              <img
                src="assets/images/w4.png"
                className="img-fluid user_pic"
                alt="w4"
              />
            </span>
            <span className="user_icon d-inline-flex align-items-center justify-content-center overflow-hidden russia">
              <img
                src="assets/images/w5.png"
                className="img-fluid user_pic"
                alt="w5"
              />
            </span>
            <span className="user_icon d-inline-flex align-items-center justify-content-center overflow-hidden australia">
              <img
                src="assets/images/w6.png"
                className="img-fluid user_pic"
                alt="w6"
              />
            </span>
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="community_text">
                  <h3 className="common_title_section font-SB mb-3">
                    Meet Your
                    <img src="assets/images/meet_arrow.png" alt="meet_arrow" />
                    <br className="d-none d-md-block" />
                    <span className="text-primary font-B"> Community </span>
                    People
                  </h3>
                  <p className="mb-0 mt-1 text-secondary font-M">
                    A community is a familiar t hread used to bring people
                    together
                    <br className="d-none d-md-block" />
                    to business and stocks each other in the fight to overcome
                    those threats
                  </p>
                  <a href="#" className="btn btn-explore">
                    Explore More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  */}
        {/* Graynod Community News Poeple */}
        <section className="community_news">
          <div className="container">
            <div className="section_text text-center">
              <h3 className="common_title_section font-SB mb-3">
                Graynod Community <span className="text-primary font-B">News </span>
                People
              </h3>
              <p className="mb-0 mt-1 text-secondary font-M">
                Get the latest news from business, real estate, stocks
                <br className="d-none d-md-block" />
                and other feature stories.
              </p>
            </div>
            <div className="community_news_box">
              <div className="row">
                <div className="col-md-4">
                  <div className="single_news_box text-center">
                    <span className="news_icon d-flex align-items-center justify-content-center mx-auto">
                      <i className="fi fi-sr-briefcase briefcase_icon text-primary"></i>
                    </span>
                    <h4 className="news-title font-18 font-B mb-3">Business</h4>
                    <p className="mb-0 text-secondary font-14 font-M">
                      Lorem Ipsum is simply dummy text of the
                      <br className="d-none d-md-block" />
                      printing and typesetting industry.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="single_news_box text-center">
                    <span className="news_icon d-flex align-items-center justify-content-center mx-auto">
                      <i className="fi fi-sr-briefcase briefcase_icon text-primary"></i>
                    </span>
                    <h4 className="news-title font-18 font-B mb-3">Real Estate</h4>
                    <p className="mb-0 text-secondary font-14 font-M">
                      Lorem Ipsum is simply dummy text of the
                      <br className="d-none d-md-block" />
                      printing and typesetting industry.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="single_news_box text-center">
                    <span className="news_icon d-flex align-items-center justify-content-center mx-auto">
                      <i className="fi fi-sr-briefcase briefcase_icon text-primary"></i>
                    </span>
                    <h4 className="news-title font-18 font-B mb-3">Stocks</h4>
                    <p className="mb-0 text-secondary font-14 font-M">
                      Lorem Ipsum is simply dummy text of the
                      <br className="d-none d-md-block" />
                      printing and typesetting industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  */}
        {/* Find The Right Job Internship For You  */}
        <section className="right_job position-relative">
          <img
            src="assets/images/job-background.png"
            className="job_back img-fluid"
            alt="job-background"
          />
          <div className="container">
            <div className="row align-items-end">
              <div className="col-md-6">
                <div className="right_find_right_job_text">
                  <h3 className="common_title_section font-SB mb-3">
                    Find the
                    <span className="text-primary font-B">right job</span>
                    <br className="d-none d-md-block" />
                    internship for you
                  </h3>
                  <p className="mb-0 text-secondary font-16 font-M">
                    Suggested Searches
                  </p>
                  <div className="suggestion_search_box position-relative">
                    <a href="#" className="btn btn-tpoic">
                      Engineering
                    </a>
                    <a href="#" className="btn btn-tpoic">
                      Business Development
                    </a>
                    <a href="#" className="btn btn-tpoic">
                      Finance
                    </a>
                    <a href="#" className="btn btn-tpoic">
                      Administrative Assistant
                    </a>
                    <a href="#" className="btn btn-tpoic">
                      Retail Associate
                    </a>
                    <a href="#" className="btn btn-tpoic">
                      Customer Services
                    </a>
                    <a href="#" className="btn btn-tpoic">
                      Operations
                    </a>
                    <a href="#" className="btn btn-tpoic">
                      Information Technology
                    </a>
                  </div>
                  <a href="#" className="btn btn-see-all position-relative">
                    See more
                  </a>
                </div>
              </div>
              <div className="col-md-6 d-flex align-items-end">
                <img
                  src="assets/images/job-modal.png"
                  className="img-fluid ms-auto position-relative"
                  alt="job-modal"
                />
              </div>
            </div>
          </div>
        </section>
        {/*  */}
        {/* Get In Touch */}
        <section className="get-in-touch">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-7">
                <h3 className="common_title_section font-SB mb-3">
                  Get in<span className="text-primary font-B"> Touch</span>
                </h3>
                <p className="mb-0 font-16 font-M text-secondary">
                  If you have any Query, Our team will get back to
                  <br className="d-none d-md-block" />
                  you within 24 Hours
                </p>
                <div className="contact_form_box">
                  <form action="#" className="w-100">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="input_box position-relative d-flex align-items-center">
                          <i className="fi fi-rr-user contact_user"></i>
                          <input
                            type="text"
                            value="Jhon"
                            className="form-control graynod_input touch_input"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input_box position-relative d-flex align-items-center">
                          <i className="fi fi-rr-envelope contact_email"></i>
                          <input
                            type="email"
                            placeholder="Email Address"
                            className="form-control graynod_input touch_input"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="input_box">
                          <textarea
                            name=""
                            className="form-control graynod_input touch_input"
                            id=""
                            cols="30"
                            rows="2"
                            placeholder="Write Your Message Here......"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <button className="btn btn-submit">Submit</button>
                  </form>
                </div>
              </div>
              <div className="col-md-4 ms-auto">
                <div className="get-in-touch-right position-relative">
                  <span className="back-drop"></span>
                  <h5 className="bussiness-hub-title font-SB text-white">
                    Business Hub
                  </h5>
                  <p className="text-white font-16 font-M position-relative">
                    Everyone from newly online businesses to
                    <br className="d-none d-md-block" />
                    experienced marketers can get results with
                    <br className="d-none d-md-block" />
                    Meta. Check out their stories
                    <br className="d-none d-md-block" />
                    for some inspiration.
                  </p>
                  <a
                    href="#"
                    className="btn btn-get-started d-flex mx-auto align-items-center justify-content-center"
                  >
                    Get Started
                    <i className="fi fi-rr-arrow-small-right font-20 ms-1 lh-0"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
       <Footer/>
        {/*  */}
      </>
    );
  }
}

export default Home;
