import React, { Component } from 'react'

export default class CreateUser extends Component {
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
                        <div class="login-top-menu create-user d-flex align-items-center">
                            <a href="index.html" class="text-decoration-none font-14 font-M text-dark d-flex align-items-center"><span class="bck-btn-icon d-flex align-items-center justify-content-center"><i class="fi fi-rr-arrow-small-left lh-0 font-22"></i></span> Back to Home</a>
                            <span class="login-logo ms-auto"><img src="assets/images/login-logo.png" class="img-fluid" alt=""/></span>
                        </div>
                        <div class="right_text_box position-relative pt-0">
                            <h3 class="common_title_section font-B position-relative">Create an user <span class="text-primary font-B"> account</span><img src="assets/images/login-arrow.png" class="login-arrow img-fluid" alt=""/> </h3>
                            
                            <p class="login-form-sec text-secondary font-16 font-M">Please enter the following details in the given form to create<br class="d-none d-md-block"/>
                                to your account.</p>
                            <div class="starter_join_form ">
                                <form action="#" class="col-lg-10">
                                    <div class="single_form_comp position-relative mb-3 d-flex align-items-center">
                                        <input type="text" class="form-control graynod_input create-user_form" placeholder="Enter your name full name"/>
                                    </div>
                                    <div class="single_form_comp position-relative mb-1 d-flex align-items-center mb-3">
                                        <input type="password" class="form-control graynod_input create-user_form" placeholder="Enter your email id"/>
                                    </div>
                                    <div class="single_form_comp position-relative mb-1 d-flex align-items-center ">
                                        <input type="password" class="form-control graynod_input create-user_form" placeholder="Enter your mobile number  (Optional)"/>
                                    </div>
                                    <div class="btn-box-nuser d-flex">
                                        <a href="createOption" class="btn btn-prev d-flex align-items-center"><i class="fi fi-rr-arrow-small-left me-2 lh-0 font-24 text-dark"></i>Prev</a>
                                        <a href="#" class="btn btn-creat-user d-flex align-items-center ms-auto"data-bs-toggle="modal" data-bs-target="#thankModal">Create Now</a>
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

{/* <!-- THANKYOU MODAL  --> */}

<div class="modal fade recover-modal thank-modal" id="thankModal" tabindex="-1" aria-labelledby="thankModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-body p-0">
                <div class="check-email-box text-center">
                    <p class="thnkyou font-12 font-SB text-secondary">Thank you for registering!</p>
                    <img src="assets/images/svg_icon/password_email.svg" class=" img-fluid mb-3" alt=""/>
                    <h5 class="box-title">Check Your Email</h5>
                    <p class="text-secondary font-12 font-SB mb-3">Please click on the link that has just been sent to your email account to verify <br class="d-none d-md-block"/>
                        your email and continue the create account.</p>
                    <p class="mb-0 font-12 font-SB text-dark">Don’t get the mail? <a href="#" class="text-primary">&nbsp; Send it again</a></p>
                </div>
            </div>
        </div>
    </div>
</div>
      </>
    )
  }
}
