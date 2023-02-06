import React, { Component } from 'react'
import Footer from '../footer'
import Navbar from '../navbar'

export default class About extends Component {
  render() {
    return (
      <>
      
      <Navbar/>
{/* <!-- TOP BREADCUM  --> */}
<section class="brdcum position-relative">
    <img src="assets/images/brdcum_bg.png" class="img-fluid brd_img" alt=""/>
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <h1 class="top_brdcum_title position-relative d-inline-block">
                  About<span class="text-primary font-B"> Us</span>
                    <img src="assets/images/brdcum_arrow.png" class="brd_arrow" alt=""/>
                </h1>
                <p class="brd_details font-14 font-M mb-0">Lorem ipssm dollor dummy text <br class="d-none d-md-block"/>
                    type real model world</p>

            </div>
            <div class="col-md-6 position-relative">
                <img src="assets/images/about_bg.png" class="people_img_brdcum " alt=""/>
            </div>
        </div>
    </div>
</section>
<section class="about_us_page d-inline-block w-100">
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="mission_box">
                    <h2 class="font-22 font-B">Our <span class="text-primary font-B"> Mission</span></h2>
                    <p class="font-14 text-secondary">
                    Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to make a type specim book.
                    It has survived not only five centuries, but also theleap into electronic type setting.
                    Lorem Ipsum is simply dummy.
                    </p>
                </div>
            </div>
            
            <div class="col-md-6">
                <div class="mission_box">
                    <h2 class="font-22 font-B">Our <span class="text-primary font-B"> Vission</span></h2>
                    <p class="font-14 text-secondary">
                    Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem
                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and scrambled it to make a type specim book.
                    It has survived not only five centuries, but also theleap into electronic type setting.
                    Lorem Ipsum is simply dummy.
                    </p>
                </div>
            </div>
            <div class="col-md-12">
                <div class="who_we_are">
                    <h2 class="font-22 font-B mb-3">Who  <span class="text-primary font-B"> Vission</span></h2>
                    <p class="font-16 text-secondary who_pera d-block mx-auto">Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem
                        Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                        unknown printer took a galley of type and scrambled it to make a</p>
                </div>
            </div>  
        </div>
    </div>
</section>
<Footer/>
   

      </>
    )
  }
}
