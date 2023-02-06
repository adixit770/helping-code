import React, { Component } from 'react'

export default class CreateOption extends Component {
  render() {
    return (
      <>
      <body class="vh-100">
    <div class="login-body ">
            <div class="right_side_img">
                <img src="assets/images/login-right-img.png" class="img-fluid login-right" alt=""/>
            </div>
            <div class="container">
                <div class="row ">
                    <div class="col-md-6">
                        <div class="login-top-menu create-options d-flex align-items-center">
                            <a href="/" class="text-decoration-none font-14 font-M text-dark d-flex align-items-center"><span class="bck-btn-icon d-flex align-items-center justify-content-center"><i class="fi fi-rr-arrow-small-left lh-0 font-22"></i></span> Back to Home</a>
                            <span class="login-logo ms-auto"><img src="assets/images/login-logo.png" class="img-fluid" alt=""/></span>
                        </div>
                        <div class="right_text_box position-relative pt-0">
                            <h3 class="common_title_section font-B position-relative">Create an <span class="text-primary font-B"> account</span><img src="assets/images/login-arrow.png" class="login-arrow img-fluid" alt=""/> </h3>
                            
                            <p class="login-form-sec text-secondary font-16 font-M">Please select your role to proceed a  next setp</p>
                             <div class="starter_join_form ceate-opt-page">
                                <form action="#" class="col-lg-10">
                                    <div class="radio_box d-inline-block left position-relative">
                                        <input type="radio" name="category" class="" id="user"/>
                                        <label for="user" >
                                        <img src="assets/images/svg_icon/checked.svg" class="check-mark" alt=""/>
                                        <span class="single_radio_box d-block">
                                            <span class="radio-icon d-flex align-items-center justify-content-center mx-auto">
                                                <i class="fi fi-rr-user text-secondary lh-0 font-24"></i>
                                            </span>
                                            <p class="mb-0 font-18 font-B text-center text-secondary">User</p>
                                        </span>
                                    </label>
                                </div>
                                <div class="radio_box d-inline-block position-relative">
                                    <input type="radio" class="" name="category"  id="company"/>
                                    <label for="company" >
                                    <img src="assets/images/svg_icon/checked.svg" class="check-mark" alt=""/>
                                    <span class="single_radio_box d-block">
                                        <span class="radio-icon d-flex align-items-center justify-content-center mx-auto">
                                            <i class="fi fi-rs-building text-secondary lh-0 font-24"></i>
                                        </span>
                                        <p class="mb-0 font-18 font-B text-center text-secondary">Company</p>
                                    </span>
                                </label>
                            </div>

                                    <div class="btn-box-nuser d-flex">
                                        <a href="CreateUser" class="btn btn-creat-user d-flex align-items-center justify-content-center w-100">Next <i class="fi fi-rr-arrow-small-right ms-1 lh-0 font-24"></i></a>
                                        <a href="RegisterCompany" class="btn btn-creat-user d-flex align-items-center justify-content-center w-100">Next <i class="fi fi-rr-arrow-small-right ms-1 lh-0 font-24"></i></a>
                                    </div>
                                    
                                    
                                </form>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
    </div>
  





    <script src="assets/js/bootstrap.bundle.min.js"></script>
    <script src="assets/js/jquery-3.6.0.slim.min.js"></script>
    
</body>

      </>
    )
  }
}
