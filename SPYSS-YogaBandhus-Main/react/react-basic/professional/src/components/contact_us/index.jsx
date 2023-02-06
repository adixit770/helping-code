import React, { Component } from 'react'
import Footer from '../footer'
import Navbar from '../navbar'

export default class ContactUs extends Component {
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
                Get a<span class="text-primary font-B"> quotes</span>
                    <img src="assets/images/brdcum_arrow.png" class="brd_arrow" alt=""/>
                </h1>
                <p class="brd_details font-14 font-M mb-0">Lorem ipssm dollor dummy text <br class="d-none d-md-block"/>
                    type real model world</p>

            </div>
            <div class="col-md-6 position-relative">
                <img src="assets/images/woman-bg.png" class="people_img_brdcum " alt=""/>
            </div>
        </div>
    </div>
</section>
<section class="contact_page d-inline-block w-100 pb-3 pb-md-5">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-10">
                <div class="contact_form d-flex w-100 flex-wrap ">
                    <div class="contact_fields">
                        <h2 class="contact_title font-16 font-M">Enter the details and <span class="text-primary">submit the form</span></h2>
                        <div class="row">
                            <div class="col-md-6 mb-3 materila_input">
                                <input class="form-control" placeholder="" value="John Diesel"/>
                                <label class="font-M">Full Name</label>
                            </div>
                            <div class="col-md-6 mb-3 materila_input">
                                <input class="form-control" placeholder="Enter your email id" value=""/>
                                <label class="font-M">Email Id</label>
                            </div>
                            <div class="col-md-12 mb-3 materila_input">
                                <textarea class="form-control"></textarea>
                                <label class="font-M">Massage</label>
                            </div>
                        </div>
                        <div class="submit_btn d-inline-block w-100 text-center">
                            <a href="#" class="btn btn-primary">Submit</a>
                        </div>
                    </div>
                    <div class="contact_info">
                    <h2 class="contact_title font-16 font-M">Contact Info</h2>
                    <div class="contact_detail d-flex align-items-center w-100">
                        <span class="contact_detail_icon"><i class="fi fi-sr-envelope"></i></span>
                        <div class="contact_info_detail">
                            <p class="contact_info_title mb-0 font-16 font-M">Email Address</p>
                            <p class="contact_info_text font-18 font-SB mb-0">support@graynod.com</p>
                        </div>
                    </div>
                    <div class="contact_detail d-flex align-items-center w-100">
                        <span class="contact_detail_icon"><i class="fi fi-sr-phone-call"></i></span>
                        <div class="contact_info_detail">
                            <p class="contact_info_title mb-0 font-16 font-M">Contact Number</p>
                            <p class="contact_info_text font-18 font-SB mb-0">+91 - 82546 52444</p>
                            <p class="contact_info_text font-18 font-SB mb-0">+91 - 82546 52444</p>
                        </div>
                    </div>
                    <div class="contact_detail d-flex align-items-center w-100">
                        <span class="contact_detail_icon"><i class="fi fi-sr-marker"></i></span>
                        <div class="contact_info_detail">
                            <p class="contact_info_title mb-0 font-16 font-M">Our Address</p>
                            <p class="contact_info_text font-18 font-SB mb-0">Street: Level 2 Menara
Chan 138 Jalan Ampang</p>
                        </div>
                    </div>
                </div>
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
