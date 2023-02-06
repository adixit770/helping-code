import React from "react";
import Footer from "../footer";
import Navbar from "../navbar";

class News extends React.Component {
  render() {
    return (
      <>
      <Navbar/>
        {/* <!-- News Starts Here --> */}
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
                  Find a <span className="text-primary font-B"> News</span>
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
                  src="assets/images/news-bg.png"
                  className="bussines_img_brdcum "
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
        <section className="news_listing d-inline-block w-100">
          <div className="container">
            <h1 className="card_top_title font-18 font-SB">Top & Latest News</h1>
            <div className="news_cards">
              <div className="row">
                <div className="col-md-4">
                  <div className="news_card_item">
                    <div className="news_img">
                      <img
                        src="assets/images/news-1.png"
                        className="img-fluid img_cover"
                      />
                    </div>
                    <div className="news_body">
                      <p className="news_date text-secondary font-12 font-M">
                        March 20, 2022
                      </p>
                      <a
                        href="newsDetails"
                        className="news_title d-block font-16 font-SB mb-2 text-dark"
                      >
                        The last two years have changes everything in the world
                        of working have changes years have everything world of
                        working
                      </a>
                      <p className="nesw_pera font-14 text-secondary mb-0">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown .
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="news_card_item">
                    <div className="news_img">
                      <img
                        src="assets/images/news-02 .png"
                        className="img-fluid img_cover"
                      />
                    </div>
                    <div className="news_body">
                      <p className="news_date text-secondary font-12 font-M">
                        March 20, 2022
                      </p>
                      <a
                        href="newsDetails"
                        className="news_title d-block font-16 font-SB mb-2"
                      >
                        The last two years have changes everything in the world
                        of working have changes years have everything world of
                        working
                      </a>
                      <p className="nesw_pera font-14 text-secondary mb-0">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown .
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="news_card_item">
                    <div className="news_img">
                      <img
                        src="assets/images/news-3.png"
                        className="img-fluid img_cover"
                      />
                    </div>
                    <div className="news_body">
                      <p className="news_date text-secondary font-12 font-M">
                        March 20, 2022
                      </p>
                      <a
                        href="newsDetails"
                        className="news_title d-block font-16 font-SB mb-2"
                      >
                        The last two years have changes everything in the world
                        of working have changes years have everything world of
                        working
                      </a>
                      <p className="nesw_pera font-14 text-secondary mb-0">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown .
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="news_card_item">
                    <div className="news_img">
                      <img
                        src="assets/images/news-4.png"
                        className="img-fluid img_cover"
                      />
                    </div>
                    <div className="news_body">
                      <p className="news_date text-secondary font-12 font-M">
                        March 20, 2022
                      </p>
                      <a
                        href="newsDetails"
                        className="news_title d-block font-16 font-SB mb-2"
                      >
                        The last two years have changes everything in the world
                        of working have changes years have everything world of
                        working
                      </a>
                      <p className="nesw_pera font-14 text-secondary mb-0">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown .
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="news_card_item">
                    <div className="news_img">
                      <img
                        src="assets/images/news-5.png"
                        className="img-fluid img_cover"
                      />
                    </div>
                    <div className="news_body">
                      <p className="news_date text-secondary font-12 font-M">
                        March 20, 2022
                      </p>
                      <a
                        href="newsDetails"
                        className="news_title d-block font-16 font-SB mb-2"
                      >
                        The last two years have changes everything in the world
                        of working have changes years have everything world of
                        working
                      </a>
                      <p className="nesw_pera font-14 text-secondary mb-0">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown .
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="news_card_item">
                    <div className="news_img">
                      <img
                        src="assets/images/news-6.png"
                        className="img-fluid img_cover"
                      />
                    </div>
                    <div className="news_body">
                      <p className="news_date text-secondary font-12 font-M">
                        March 20, 2022
                      </p>
                      <a
                        href="newsDetails"
                        className="news_title d-block font-16 font-SB mb-2"
                      >
                        The last two years have changes everything in the world
                        of working have changes years have everything world of
                        working
                      </a>
                      <p className="nesw_pera font-14 text-secondary mb-0">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown .
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="load_more_button d-inline-block w-100 text-center py-5">
                <button type="button" className="btn btn-primary py-4">
                  Load More
                </button>
              </div>
            </div>
          </div>
        </section>
       <Footer/>
 {/* <!-- News Ends Here --> */}
      </>
    );
  }
}
export default News;
