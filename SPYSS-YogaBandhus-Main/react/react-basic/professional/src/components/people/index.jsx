import React from "react";
import Footer from "../footer";
import Navbar from "../navbar";

class People extends React.Component {
  render() {
    return (
      <>
      <Navbar/>
      
        {/* <!-- People Starts Here  --> */}
        <section className="brdcum position-relative">
          <img
            src="assets/images/brdcum_bg.png"
            className="img-fluid brd_img"
            alt="brdcum_bg"
          />
          
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h1 className="top_brdcum_title position-relative d-inline-block">
                  Find a Graynod
                  <span className="text-primary font-B"> Peoples</span>
                  <img
                    src="assets/images/brdcum_arrow.png"
                    className="brd_arrow"
                    alt="brdcum_arrow"
                  />
                </h1>
                <p className="brd_details font-14 font-M mb-0">
                  Lorem ipssm dollor dummy text
                  <br className="d-none d-md-block" />
                  type real model world
                </p>
              </div>
              <div className="col-md-6 position-relative">
                <img
                  src="assets/images/people_brdcum_img.png"
                  className="people_img_brdcum"
                  alt="people_brdcum_img"
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
                    placeholder="Serach Business..."
                  />
                  <button className="btn btn-search">Find Business</button>
                </div>
              </div>
            </div>
            <h1 className="card_top_title font-18 font-SB">
              Showing 100+ results for john
            </h1>
            <div className="people_card">
              <div className="row">
                <div className="col-md-4">
                  <div className="people_card_item d-flex w-100 flex-wrap">
                    <div className="people_card_head d-inline-flex w-100">
                      <div className="people_img">
                        <img
                          src="assets/images/portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing%201.png"
                          className="img-fluid"
                          alt="portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing%201"
                        />
                      </div>
                      <div className="people_detail">
                        <a
                          href="user_profile.php"
                          className="font-16 font- mb-1 d-inline-flex align-items-center text-dark w-100 font-B"
                        >
                          John Taft
                          <span className="people_location text-secondary font-10 px-3 font-M position-relative">
                            <i className="fi fi-rr-marker me-1"></i> New York USA
                          </span>
                        </a>
                        <p className="font-14 mb-0 text-secondary">
                          Practicing company secretary at ashique sameer
                          association...
                        </p>
                      </div>
                    </div>
                    <div className="people_contact_detail">
                      <p className="location font-12 d-inline-flex w-100 align-items-center mb-2">
                        <i className="fi fi-rr-marker me-2"></i>
                        <span>New York USA</span>
                      </p>
                      <p className="people_address font-12 mb-0 d-inline-flex w-100 align-items-center">
                        <i className="fi fi-rs-bank me-2"></i> Universitaria Sanitas
                        - Unisanitas, <span className="font-M">8 more + </span>
                      </p>
                    </div>
                              </div>
                </div>
                <div className="col-md-4">
                  <div className="people_card_item d-flex w-100 flex-wrap">
                    <div className="people_card_head d-inline-flex w-100">
                      <div className="people_img">
                        <img
                          src="assets/images/portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing%201.png"
                          className="img-fluid"
                          alt="portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing%201"
                        />
                      </div>
                      <div className="people_detail">
                        <a
                          href="user_profile.php"
                          className="font-16 font- mb-1 d-inline-flex align-items-center text-dark w-100 font-B"
                        >
                          John Taft
                          <span className="people_location text-secondary font-10 px-3 font-M position-relative">
                            <i className="fi fi-rr-marker me-1"></i> New York USA
                          </span>
                        </a>
                        <p className="font-14 mb-0 text-secondary">
                          Practicing company secretary at ashique sameer
                          association...
                        </p>
                      </div>
                    </div>
                    <div className="people_contact_detail">
                      <p className="location font-12 d-inline-flex w-100 align-items-center mb-2">
                        <i className="fi fi-rr-marker me-2"></i>
                        <span>New York USA</span>
                      </p>
                      <p className="people_address font-12 mb-0 d-inline-flex w-100 align-items-center">
                        <i className="fi fi-rs-bank me-2"></i> Universitaria Sanitas
                        - Unisanitas, <span className="font-M">8 more + </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="people_card_item d-flex w-100 flex-wrap">
                    <div className="people_card_head d-inline-flex w-100">
                      <div className="people_img">
                        <img
                          src="assets/images/portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing%201.png"
                          className="img-fluid"
                          alt="portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing%201"
                        />
                      </div>
                      <div className="people_detail">
                        <a
                          href="user_profile.php"
                          className="font-16 font- mb-1 d-inline-flex align-items-center text-dark w-100 font-B"
                        >
                          John Taft
                          <span className="people_location text-secondary font-10 px-3 font-M position-relative">
                            <i className="fi fi-rr-marker me-1"></i> New York USA
                          </span>
                        </a>
                        <p className="font-14 mb-0 text-secondary">
                          Practicing company secretary at ashique sameer
                          association...
                        </p>
                      </div>
                    </div>
                    <div className="people_contact_detail">
                      <p className="location font-12 d-inline-flex w-100 align-items-center mb-2">
                        <i className="fi fi-rr-marker me-2"></i>
                        <span>New York USA</span>
                      </p>
                      <p className="people_address font-12 mb-0 d-inline-flex w-100 align-items-center">
                        <i className="fi fi-rs-bank me-2"></i> Universitaria Sanitas
                        - Unisanitas, <span className="font-M">8 more + </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="people_card_item d-flex w-100 flex-wrap">
                    <div className="people_card_head d-inline-flex w-100">
                      <div className="people_img">
                        <img
                          src="assets/images/portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing%201.png"
                          className="img-fluid"
                          alt="portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing%201"
                        />
                      </div>
                      <div className="people_detail">
                        <a
                          href="user_profile.php"
                          className="font-16 font- mb-1 d-inline-flex align-items-center text-dark w-100 font-B"
                        >
                          John Taft
                          <span className="people_location text-secondary font-10 px-3 font-M position-relative">
                            <i className="fi fi-rr-marker me-1"></i> New York USA
                          </span>
                        </a>
                        <p className="font-14 mb-0 text-secondary">
                          Practicing company secretary at ashique sameer
                          association...
                        </p>
                      </div>
                    </div>
                    <div className="people_contact_detail">
                      <p className="location font-12 d-inline-flex w-100 align-items-center mb-2">
                        <i className="fi fi-rr-marker me-2"></i>
                        <span>New York USA</span>
                      </p>
                      <p className="people_address font-12 mb-0 d-inline-flex w-100 align-items-center">
                        <i className="fi fi-rs-bank me-2"></i> Universitaria Sanitas
                        - Unisanitas, <span className="font-M">8 more + </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="people_card_item d-flex w-100 flex-wrap">
                    <div className="people_card_head d-inline-flex w-100">
                      <div className="people_img">
                        <img
                          src="assets/images/portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing%201.png"
                          className="img-fluid"
                          alt="portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing%201"
                        />
                      </div>
                      <div className="people_detail">
                        <a
                          href="user_profile.php"
                          className="font-16 font- mb-1 d-inline-flex align-items-center text-dark w-100 font-B"
                        >
                          John Taft
                          <span className="people_location text-secondary font-10 px-3 font-M position-relative">
                            <i className="fi fi-rr-marker me-1"></i> New York USA
                          </span>
                        </a>
                        <p className="font-14 mb-0 text-secondary">
                          Practicing company secretary at ashique sameer
                          association...
                        </p>
                      </div>
                    </div>
                    <div className="people_contact_detail">
                      <p className="location font-12 d-inline-flex w-100 align-items-center mb-2">
                        <i className="fi fi-rr-marker me-2"></i>
                        <span>New York USA</span>
                      </p>
                      <p className="people_address font-12 mb-0 d-inline-flex w-100 align-items-center">
                        <i className="fi fi-rs-bank me-2"></i> Universitaria Sanitas
                        - Unisanitas, <span className="font-M">8 more + </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="people_card_item d-flex w-100 flex-wrap">
                    <div className="people_card_head d-inline-flex w-100">
                      <div className="people_img">
                        <img
                          src="assets/images/portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing%201.png"
                          className="img-fluid"
                          alt="portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing%201"
                        />
                      </div>
                      <div className="people_detail">
                        <a
                          href="user_profile.php"
                          className="font-16 font- mb-1 d-inline-flex align-items-center text-dark w-100 font-B"
                        >
                          John Taft
                          <span className="people_location text-secondary font-10 px-3 font-M position-relative">
                            <i className="fi fi-rr-marker me-1"></i> New York USA
                          </span>
                        </a>
                        <p className="font-14 mb-0 text-secondary">
                          Practicing company secretary at ashique sameer
                          association...
                        </p>
                      </div>
                    </div>
                    <div className="people_contact_detail">
                      <p className="location font-12 d-inline-flex w-100 align-items-center mb-2">
                        <i className="fi fi-rr-marker me-2"></i>
                        <span>New York USA</span>
                      </p>
                      <p className="people_address font-12 mb-0 d-inline-flex w-100 align-items-center">
                        <i className="fi fi-rs-bank me-2"></i> Universitaria Sanitas
                        - Unisanitas, <span className="font-M">8 more + </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="people_card_item d-flex w-100 flex-wrap">
                    <div className="people_card_head d-inline-flex w-100">
                      <div className="people_img">
                        <img
                          src="assets/images/portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing%201.png"
                          className="img-fluid"
                          alt="portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing%201"
                        />
                      </div>
                      <div className="people_detail">
                        <a
                          href="user_profile.php"
                          className="font-16 font- mb-1 d-inline-flex align-items-center text-dark w-100 font-B"
                        >
                          John Taft
                          <span className="people_location text-secondary font-10 px-3 font-M position-relative">
                            <i className="fi fi-rr-marker me-1"></i> New York USA
                          </span>
                        </a>
                        <p className="font-14 mb-0 text-secondary">
                          Practicing company secretary at ashique sameer
                          association...
                        </p>
                      </div>
                    </div>
                    <div className="people_contact_detail">
                      <p className="location font-12 d-inline-flex w-100 align-items-center mb-2">
                        <i className="fi fi-rr-marker me-2"></i>
                        <span>New York USA</span>
                      </p>
                      <p className="people_address font-12 mb-0 d-inline-flex w-100 align-items-center">
                        <i className="fi fi-rs-bank me-2"></i> Universitaria Sanitas
                        - Unisanitas, <span className="font-M">8 more + </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="people_card_item d-flex w-100 flex-wrap">
                    <div className="people_card_head d-inline-flex w-100">
                      <div className="people_img">
                        <img
                          src="assets/images/portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing%201.png"
                          className="img-fluid"
                          alt="portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing%201"
                        />
                      </div>
                      <div className="people_detail">
                        <a
                          href="user_profile.php"
                          className="font-16 font- mb-1 d-inline-flex align-items-center text-dark w-100 font-B"
                        >
                          John Taft
                          <span className="people_location text-secondary font-10 px-3 font-M position-relative">
                            <i className="fi fi-rr-marker me-1"></i> New York USA
                          </span>
                        </a>
                        <p className="font-14 mb-0 text-secondary">
                          Practicing company secretary at ashique sameer
                          association...
                        </p>
                      </div>
                    </div>
                    <div className="people_contact_detail">
                      <p className="location font-12 d-inline-flex w-100 align-items-center mb-2">
                        <i className="fi fi-rr-marker me-2"></i>
                        <span>New York USA</span>
                      </p>
                      <p className="people_address font-12 mb-0 d-inline-flex w-100 align-items-center">
                        <i className="fi fi-rs-bank me-2"></i> Universitaria Sanitas
                        - Unisanitas, <span className="font-M">8 more + </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="people_card_item d-flex w-100 flex-wrap">
                    <div className="people_card_head d-inline-flex w-100">
                      <div className="people_img">
                        <img
                          src="assets/images/portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing%201.png"
                          className="img-fluid"
                          alt="portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing%201"
                        />
                      </div>
                      <div className="people_detail">
                        <a
                          href="user_profile.php"
                          className="font-16 font- mb-1 d-inline-flex align-items-center text-dark w-100 font-B"
                        >
                          John Taft
                          <span className="people_location text-secondary font-10 px-3 font-M position-relative">
                            <i className="fi fi-rr-marker me-1"></i> New York USA
                          </span>
                        </a>
                        <p className="font-14 mb-0 text-secondary">
                          Practicing company secretary at ashique sameer
                          association...
                        </p>
                      </div>
                    </div>
                    <div className="people_contact_detail">
                      <p className="location font-12 d-inline-flex w-100 align-items-center mb-2">
                        <i className="fi fi-rr-marker me-2"></i>
                        <span>New York USA</span>
                      </p>
                      <p className="people_address font-12 mb-0 d-inline-flex w-100 align-items-center">
                        <i className="fi fi-rs-bank me-2"></i> Universitaria Sanitas
                        - Unisanitas, <span className="font-M">8 more + </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="people_card_item d-flex w-100 flex-wrap">
                    <div className="people_card_head d-inline-flex w-100">
                      <div className="people_img">
                        <img
                          src="assets/images/portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing%201.png"
                          className="img-fluid"
                          alt="portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing%201"
                        />
                      </div>
                      <div className="people_detail">
                        <a
                          href="user_profile.php"
                          className="font-16 font- mb-1 d-inline-flex align-items-center text-dark w-100 font-B"
                        >
                          John Taft
                          <span className="people_location text-secondary font-10 px-3 font-M position-relative">
                            <i className="fi fi-rr-marker me-1"></i> New York USA
                          </span>
                        </a>
                        <p className="font-14 mb-0 text-secondary">
                          Practicing company secretary at ashique sameer
                          association...
                        </p>
                      </div>
                    </div>
                    <div className="people_contact_detail">
                      <p className="location font-12 d-inline-flex w-100 align-items-center mb-2">
                        <i className="fi fi-rr-marker me-2"></i>
                        <span>New York USA</span>
                      </p>
                      <p className="people_address font-12 mb-0 d-inline-flex w-100 align-items-center">
                        <i className="fi fi-rs-bank me-2"></i> Universitaria Sanitas
                        - Unisanitas, <span className="font-M">8 more + </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="people_card_item d-flex w-100 flex-wrap">
                    <div className="people_card_head d-inline-flex w-100">
                      <div className="people_img">
                        <img
                          src="assets/images/portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing%201.png"
                          className="img-fluid"
                          alt="portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing%201"
                        />
                      </div>
                      <div className="people_detail">
                        <a
                          href="user_profile.php"
                          className="font-16 font- mb-1 d-inline-flex align-items-center text-dark w-100 font-B"
                        >
                          John Taft
                          <span className="people_location text-secondary font-10 px-3 font-M position-relative">
                            <i className="fi fi-rr-marker me-1"></i> New York USA
                          </span>
                        </a>
                        <p className="font-14 mb-0 text-secondary">
                          Practicing company secretary at ashique sameer
                          association...
                        </p>
                      </div>
                    </div>
                    <div className="people_contact_detail">
                      <p className="location font-12 d-inline-flex w-100 align-items-center mb-2">
                        <i className="fi fi-rr-marker me-2"></i>
                        <span>New York USA</span>
                      </p>
                      <p className="people_address font-12 mb-0 d-inline-flex w-100 align-items-center">
                        <i className="fi fi-rs-bank me-2"></i> Universitaria Sanitas
                        - Unisanitas, <span className="font-M">8 more + </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="people_card_item d-flex w-100 flex-wrap">
                    <div className="people_card_head d-inline-flex w-100">
                      <div className="people_img">
                        <img
                          src="assets/images/portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing%201.png"
                          className="img-fluid"
                          alt="portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing%201"
                        />
                      </div>
                      <div className="people_detail">
                        <a
                          href="user_profile.php"
                          className="font-16 font- mb-1 d-inline-flex align-items-center text-dark w-100 font-B"
                        >
                          John Taft
                          <span className="people_location text-secondary font-10 px-3 font-M position-relative">
                            <i className="fi fi-rr-marker me-1"></i> New York USA
                          </span>
                        </a>
                        <p className="font-14 mb-0 text-secondary">
                          Practicing company secretary at ashique sameer
                          association...
                        </p>
                      </div>
                    </div>
                    <div className="people_contact_detail">
                      <p className="location font-12 d-inline-flex w-100 align-items-center mb-2">
                        <i className="fi fi-rr-marker me-2"></i>
                        <span>New York USA</span>
                      </p>
                      <p className="people_address font-12 mb-0 d-inline-flex w-100 align-items-center">
                        <i className="fi fi-rs-bank me-2"></i> Universitaria Sanitas
                        - Unisanitas, <span className="font-M">8 more + </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Poeple Ends Here */}
        
       <Footer/>
      </>
    );
  }
}
export default People;
