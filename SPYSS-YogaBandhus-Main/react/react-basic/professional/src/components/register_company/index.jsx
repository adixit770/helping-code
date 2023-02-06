import React, { Component } from 'react'

export default class RegisterCompany extends Component {
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
                        <div class="login-top-menu register-company d-flex align-items-center">
                            <a href="/" class="text-decoration-none font-14 font-M text-dark d-flex align-items-center"><span class="bck-btn-icon d-flex align-items-center justify-content-center"><i class="fi fi-rr-arrow-small-left lh-0 font-22"></i></span> Back to Home</a>
                            <span class="login-logo ms-auto"><img src="assets/images/login-logo.png" class="img-fluid" alt=""/></span>
                        </div>
                        <div class="right_text_box position-relative pt-0">
                            <h3 class="common_title_section font-B position-relative">Register an <span class="text-primary font-B"> company</span><img src="assets/images/login-arrow.png" class="login-arrow img-fluid" alt=""/> </h3>
                            
                            <p class="login-form-sec text-secondary font-16 font-M">Please enter the following details in the given form to register <br class="d-none d-md-block"/>
                                your account</p>
                             <div class="starter_join_form"> 
                                <form action="#" class="col-lg-10"> 
                                <div class="row">
                                    <div class="col-md-6 mb-3">
                                        <select class="form-select comapny-type" aria-label="Default select example">
                                            <option value="1">Company Type</option>    
                                            <option value="1">Private</option>
                                            <option value="2">Public</option>
                                          </select>
                                    </div>
                                    <div class="col-md-6 mb-3">
                                    <select class="form-select comapny-type" aria-label="Default select example">
                                        <option value="1">Industry</option>
                                            <option value="1">Agriculture and Allied</option>
                                            <option value="2">Auto Components</option>
                                            <option value="3">Automobiles</option>
                                            <option value="4">Aviation</option>
                                            <option value="5">Banking</option>
                                            <option value="6">Biotechnology</option>
                                            <option value="7">Cement</option>
                                            <option value="8">Chemicals</option>
                                            <option value="9">Consumer Durables</option>
                                            <option value="10">Defence Manufacturing</option>
                                            <option value="11">E-Commerce</option>
                                            <option value="12">Education and Training</option>
                                            <option value="13">Electronics System Design & Manufacturing</option>
                                            <option value="14">Engineering and Capital Goods</option>
                                            <option value="15">Financial Services</option>
                                            <option value="16">FMCG</option>
                                            <option value="17">Gems and Jewellery</option>
                                            <option value="18">Healthcare</option>
                                            <option value="19">Infrastructure</option>
                                            <option value="20">Insurance</option>
                                            <option value="21">IT & BPM</option>
                                            <option value="22">Manufacturing</option>
                                            <option value="23">Media and Entertainment</option>
                                            <option value="23">Medical Devices</option>
                                            <option value="23">Metals and Mining</option>
                                            <option value="23">MSME</option>
                                            <option value="23">Oil and Gas</option>
                                            <option value="23">Pharmaceuticals</option>
                                            <option value="23">Ports</option>
                                            <option value="23">Power</option>
                                            <option value="23">Railways</option>
                                            <option value="23">Real Estate</option>
                                            <option value="23">Renewable Energy</option>
                                            <option value="23">Retail</option>
                                            <option value="23">Roads</option>
                                            <option value="23">Science and Technology</option>
                                            <option value="23">Services</option>
                                            <option value="23">Steel</option>
                                            <option value="23">Telecommunications</option>
                                            <option value="23">Textiles</option>
                                            <option value="23">Tourism and Hospitality</option>
                                            <option value="23">Other</option>
                                          </select>
                                    </div>
                                    <div class="col-md-12 mb-3">
                                        <input type="text" class="form-control graynod_input com-register" placeholder="Enter your address"/>
                                    </div>
                                    <div class="col-md-12 mb-3">
                                        <input type="text" class="form-control graynod_input com-register" placeholder="Enter your registration Id & country specific  (Optional)"/>
                                    </div>
                                    <div class="col-md-12 mb-3">
                                        <textarea name="" class="form-control graynod_input touch_input com-register" id="" cols="30" rows="2" placeholder="Description  (Optional)"></textarea>
                                    </div>
                                    <div class="col-md-12 mb-3">
                                        <input type="text" class="form-control graynod_input com-register" placeholder="Enter your website  (Optional)"/>
                                    </div>
                                    <div class="col-md-6">
                                        <input type="password" class="form-control graynod_input com-register" placeholder="Choose Password"/>
                                    </div>
                                    <div class="col-md-6">
                                        <input type="password" class="form-control graynod_input com-register" placeholder="Confirm Password"/>
                                    </div>
                                </div>
                                <p class="tnc_box d-flex align-items-center font-12 font-M text-secondary mb-4">
                                    <span class="lh-0 me-2">
                                        <input type="checkbox" id="tnc_argree"/>
                                        <label for="tnc_argree" class="checkmark_tnc position-relative d-flex align-items-center">
                                        </label>
                                    </span>
                                    Agree <a href="termscondition" class="text-primary">&nbsp; Terms & Conditions</a> 
                                </p>
                                <div class="btn-box-nuser d-flex mt-0 mb-5">
                                    <a href="createOption" class="btn btn-prev d-flex align-items-center"><i class="fi fi-rr-arrow-small-left me-2 lh-0 font-24 text-dark"></i>Prev</a>
                                    <a href="#" class="btn btn-creat-user d-flex align-items-center ms-auto">Submit</a>
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
