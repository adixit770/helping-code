import React, { Component } from 'react'
import Footer from '../footer'
import Navbar from '../navbar'

export default class PrivacyPolicy extends Component {
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
                    Privacy & <span class="text-primary font-B"> Policy</span>
                    <img src="assets/images/brdcum_arrow.png" class="brd_arrow" alt=""/>
                </h1>
                <p class="brd_details font-14 font-M mb-0">Lorem ipssm dollor dummy text <br class="d-none d-md-block"/>
                    type real model world</p>

            </div>
            <div class="col-md-6 position-relative">
                <img src="assets/images/privacy_policy_bg.png" class="people_img_brdcum " alt=""/>
            </div>
        </div>
    </div>
</section>
<section class="privacy_policy py-4">
    <div class="container">
        <h1 class="card_top_title font-18 font-SB">Our Privacy Policy has been updated.</h1>
        <p class="col-8 font-20 SB text-secondary">Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a type specim book. It
            has survived not only five centuries, but also theleap into electronic type setting.</p>
            <ul class="privacy_point py-4">
                <li class="privacy_item">
                    Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's
standard dummy text ever since the simply dummy text of the printing and type setting industry
                </li> 
                <li class="privacy_item">
                    Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's
standard dummy text ever since the simply dummy text of the printing and type setting industry
                </li> 
                <li class="privacy_item">
                    Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's
standard dummy text ever since the simply dummy text of the printing and type setting industry
                </li> 
                <li class="privacy_item">
                    Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's
standard dummy text ever since the simply dummy text of the printing and type setting industry
                </li> 
                <li class="privacy_item">
                    Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's
standard dummy text ever since the simply dummy text of the printing and type setting industry
                </li> 

            </ul>
            <h1 class="card_top_title font-18 font-SB">What Information Does Graynod Collect?</h1>
        <p class="col-8 font-20 SB text-secondary">Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a type specim book. It
            has survived not only five centuries, but also theleap into electronic type setting.</p>
    </div>
</section>

       <Footer/>
      </>
    )
  }
}
