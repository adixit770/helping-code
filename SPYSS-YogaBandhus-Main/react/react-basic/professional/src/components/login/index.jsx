import React, { Component } from 'react'
import $ from 'jquery'; 

export default class Login extends Component {
  render() {
    return (
      <>
      
<body class="vh-100">
    <div class="login-body ">
        <div class="right_side_img">
            <img src="assets/images/login-right-img.png" class="img-fluid login-right" alt=""/>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="login-top-menu d-flex align-items-center">
                        <a href="index.html"
                            class="text-decoration-none font-14 font-M text-dark d-flex align-items-center"><span
                                class="bck-btn-icon d-flex align-items-center justify-content-center"><i
                                    class="fi fi-rr-arrow-small-left lh-0 font-22"></i></span> Back to Home</a>
                        <span class="login-logo ms-auto"><img src="assets/images/login-logo.png" class="img-fluid"
                                alt=""/></span>
                    </div>
                    <div class="right_text_box position-relative pt-0">
                        <h3 class="common_title_section font-B position-relative">Welcome <span
                                class="text-primary font-B">Back,</span><img src="assets/images/login-arrow.png"
                                class="login-arrow img-fluid" alt=""/> </h3>

                        <p class="login-form-sec text-secondary font-16 font-M">Please enter your email or password to
                            sign in and access<br class="d-none d-md-block"/>
                            to your account.</p>
                        <div class="starter_join_form ">
                            <form action="#" class="col-lg-10">
                                <div class="single_form_comp position-relative mb-3 d-flex align-items-center">
                                    <i class="fi fi-rr-user input_user text-secondary"></i>
                                    <input type="text" class="form-control graynod_input" placeholder="User Name"/>
                                </div>
                                <div class="single_form_comp position-relative mb-1 d-flex align-items-center">
                                    <i class="fi fi-rr-lock input_user text-secondary"></i>
                                    <input type="password" class="form-control graynod_input" placeholder="Jhon@gmail.com"/>
                                    <i class="fi fi-rr-eye input_eye font-20 lh-0"></i>
                                </div>
                                <a href="#" class=" font-14 float-end d-inline-block recover_password font-SB"
                                    data-bs-toggle="modal" data-bs-target="#recoverModal">Recover Password
                                    ?</a>
                                <a href="Dashboard" class="btn login w-100 mb-3">Sign In </a>
                                <div class="saparator d-flex align-items-center justify-content-center mb-3">
                                    <span class="saparator_line d-block"></span><span
                                        class="sparator_text d-flex align-items-center justify-content-center font-18 font-SB text-dark">or</span><span
                                        class="saparator_line d-block"></span>
                                </div>
                                <a href="javascript:void(0);" class="btn btn-sign-in-g w-100" data-bs-toggle="modal" data-bs-target="#googleloginModal"><i
                                        class="fi fi-brands-google me-2"></i>Sign in with Google</a>
                                <p class="mb-0 create_new_ac font-14 text-secondary text-center">Don’t have an account?
                                    <a href="createOption" class="text-primary font-B"> Create New</a></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="assets/js/bootstrap.bundle.min.js"></script>
    <script src="assets/js/jquery-3.6.0.slim.min.js"></script>
    <script>
        $(document).ready(function () {
                $('.btn-creat-user').click(function () {
                $(".email-send-box").addClass("d-none");
                $(".check-email-box").removeClass("d-none");
            })
        });
    </script>
</body>

{/* <!-- RECOVER PASSWORD MODAL  --> */}
{/* <!-- Modal --> */}
<div class="modal fade recover-modal" id="recoverModal" tabindex="-1" aria-labelledby="recoverModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-body p-0">
                <div class="email-send-box">
                    <h5 class="text-center box-title font-18 font-SB">Not Remember Your Password?</h5>
                    <p class="text-center text-secondary font-14 font-SB mb-3">Please enter your email address or mobile
                        number <br class="d-none d-md-block"/>
                        to recover your password</p>
                    <input type="email" class="form-control graynod_input reset_form"
                        placeholder="Enter your email id or mobile number"/>
                    <div class="reset_btn_box d-flex justify-content-center">
                        <a href="login.html" class="btn btn-prev d-flex align-items-center">Cancel</a>
                        <a href="#" class="btn btn-creat-user d-flex align-items-center ms-3">Send</a>
                    </div>
                </div>
                <div class="check-email-box d-none text-center">
                    <h5 class="box-title font-24 font-SB">Get <span class="text-primary"> OTP</span></h5>
                    <p class="text-center text-secondary font-14 font-SB mb-3">Please enter OTP code We have sent <br/>to
                        <span class="text-dark font-SB"> jhon@gmail.com</span><br class="d-none d-md-block"/></p>
                        <div class="otp_inputs d-flex align-items-center justify-content-center">
                            <input type="text" class="form-control" placeholder="" value=""/>
                            <input type="text" class="form-control" placeholder="" value=""/>
                            <input type="text" class="form-control" placeholder="" value=""/>
                            <input type="text" class="form-control" placeholder="" value=""/>
                        </div>
                    <div class="reset_btn_box d-flex align-items-center">
                        <p class="otp_resend font-14 mb-0 text-dark">Don’t receive code? <a hrfe="#" class="text-primary font-M">Resend</a></p>
                        <a href="resetpassword" class="btn btn-creat-user d-flex align-items-center ms-auto">Verify OTP</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


{/* <!-- google login modal  --> */}

<div class="modal fade recover-modal" id="googleloginModal" tabindex="-1" aria-labelledby="googleloginModalLabel" aria-modal="true" role="dialog">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-body p-0">
                <div class="email-send-box">
                    <h5 class="text-center box-title font-22 font-SB">Select Role <span class="text-primary">Type</span></h5>
                    <p class="text-center text-secondary font-14 font-SB mb-3">Please select your role to continue with google</p>
                    <div class="choose_role_type d-flex align-items-center justify-content-center mt-4">
                        <div class="radio_box d-inline-block left position-relative">
                                    {/* <!-- <input type="radio" name="category" class="" id="user"> --> */}
                                    {/* <!-- <label for="user"> --> */}
                                    {/* <!-- <img src="assets/images/svg_icon/checked.svg" class="check-mark" alt=""> --> */}
                                    <a href="#" class="single_radio_box d-block">
                                        <span class="radio-icon d-flex align-items-center justify-content-center mx-auto">
                                            <i class="fi fi-rr-user text-secondary lh-0 font-24"></i>
                                        </span>
                                        <p class="mb-0 font-16 font-SB text-center text-secondary">User</p>
    </a>
                                {/* <!-- </label> --> */}
                            </div>
                            <div class="radio_box d-inline-block position-relative">
                                {/* <!-- <input type="radio" class="" name="category" id="company"> --> */}
                                {/* <!-- <label for="company"> --> */}
                                {/* <!-- <img src="assets/images/svg_icon/checked.svg" class="check-mark" alt=""> --> */}
                                <a href="#" class="single_radio_box d-block">
                                    <span class="radio-icon d-flex align-items-center justify-content-center mx-auto">
                                        <i class="fi fi-rs-building text-secondary lh-0 font-24"></i>
                                    </span>
                                    <p class="mb-0 font-16 font-SB text-center text-secondary">Company</p>
    </a>
                            {/* <!-- </label> --> */}
                        </div>
                    </div>
                     <div class="reset_btn_box d-flex justify-content-center">
                        <a href="login" class="btn btn-prev d-flex align-items-center">Cancel</a>
                        <a href="createOption" class="btn btn-creat-user d-flex align-items-center ms-3">Next</a>
                    </div> 
                </div>
            </div>
        </div>
    </div>
</div>
      </>
    )
  }
}

