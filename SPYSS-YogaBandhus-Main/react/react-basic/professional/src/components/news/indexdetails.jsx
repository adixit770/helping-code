import React from "react";
import Footer from "../footer";
import Navbar from "../navbar";

class NewsDetails extends React.Component {
  render() {
    return (
      <>
<Navbar/>

{/* NewDetails Header */}


<section class="brdcum position-relative">
    <img src="assets/images/brdcum_bg.png" class="img-fluid brd_img" alt=""/>
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <h1 class="top_brdcum_title position-relative d-inline-block">
                    News<span class="text-primary font-B"> detail</span>
                    <img src="assets/images/brdcum_arrow.png" class="brd_arrow" alt=""/>
                </h1>
                <p class="brd_details font-14 font-M mb-0">Lorem ipssm dollor dummy text <br class="d-none d-md-block"/>
                    type real model world</p>

            </div>
            <div class="col-md-6 position-relative">
                <img src="assets/images/bussiness-peop.png" class="bussines_img_brdcum " alt=""/>
            </div>
        </div>
    </div>
</section>
{/* NewDetails Header */}

        {/* <!-- NewsDetails Starts Here --> */}
        <section class="news_detail d-inline-block pt-4 w-100">
    <div class="container">
        <div class="row">
            <div class="col-md-7">
                <div class="news_detail_box">
                    <div class="nd_image">
                        <img src="assets/images/news-1.png" class="img=fluid cover_img"/>
                    </div>
                    <div class="nd_body d-block position-relative">
                        <h3 class="nd_title font-18">The last two years have changes everything
                        in the world of working  have changes  years have
                        everything world of working</h3>
                        <p class="nd_date">March 20, 2022</p>
                        <div class="nd_pera">
                            <p>Lorem Ipsum is simply dummy text of the printing and type setting industry. Lore
                            Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                            unknown printer took a galley of type and scrambled it to make a type specimen
                            book. It has survived not only five centuries, but also the leap into electronic type
                            setting, remaining essentially unchanged.</p>
                        </div>
                        <div class="nd_pera">
                            <h4>Poco F4 5G: What’s good?</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and type setting industry. Lore
                            Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                            unknown printer took a galley of type and scrambled it to make a type specimen
                            book. It has survived not only five centuries, but also the leap into electronic type
                            setting, remaining essentially unchanged.</p>
                        </div>
                        <div class="nd_pera">
                            <h4>Poco F4 5G specifications</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and type setting industry. Lore
                            Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                            unknown printer took a galley of type and scrambled it to make a type specimen
                            book. It has survived not only five centuries, but also the leap into electronic type
                            setting, remaining essentially unchanged.</p>
                            <p>Lorem Ipsum is simply dummy text of the printing and type setting industry. Lore
                            Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                            unknown printer took a galley of type and scrambled it to make a type specimen
                            book. It has survived not only five centuries, but also the leap into electronic type
                            setting, remaining essentially unchanged.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-5">
                <div class="recent_news_listing">
                    <h4 class="font-20 font-600 mb-3">Recent News</h4>
                    <div class="recent_news_item d-flex align-items-center w-100">
                        <div class="recent_news_img">
                            <img src="assets/images/news-02 .png" class="img-fluid cover_img"/>
                        </div>
                        <div class="recent_news_body">
                            <span class="font-14 font-M mb-2 d-block">March 20, 2022</span>
                            <h6 class="text_nowrap font-18 font-600">The last two years have changes...</h6>
                            <p class="line_clamp_2 font-12 mb-0">
                            Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry. Lorem Ipsum has bee
                            </p>
                        </div>
                    </div>
                    <div class="recent_news_item d-flex align-items-center w-100">
                        <div class="recent_news_img">
                            <img src="assets/images/news-3.png" class="img-fluid cover_img"/>
                        </div>
                        <div class="recent_news_body">
                            <span class="font-14 font-M mb-2 d-block">March 20, 2022</span>
                            <h6 class="text_nowrap font-18 font-600">The last two years have changes...</h6>
                            <p class="line_clamp_2 font-12 mb-0">
                            Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry. Lorem Ipsum has bee
                            </p>
                        </div>
                    </div>
                    <div class="recent_news_item d-flex align-items-center w-100">
                        <div class="recent_news_img">
                            <img src="assets/images/news-5.png" class="img-fluid cover_img"/>
                        </div>
                        <div class="recent_news_body">
                            <span class="font-14 font-M mb-2 d-block">March 20, 2022</span>
                            <h6 class="text_nowrap font-18 font-600">The last two years have changes...</h6>
                            <p class="line_clamp_2 font-12 mb-0">
                            Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry. Lorem Ipsum has bee
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section> 

 {/* <!-- NewsDetails Ends Here --> */}
 
       <Footer/>
      </>
    );
  }
}
export default NewsDetails;
