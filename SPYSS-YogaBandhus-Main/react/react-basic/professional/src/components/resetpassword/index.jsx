import React, { Component } from 'react'
import DashNavbar from '../dashboardNavbar'

export default class ResetPassword extends Component {
  render() {
    return (
        <>
        <header>
        <DashNavbar/>
        </header>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center">
              <div className="reset-password-body">
                <h1 className="reset_main-heading text-dark">
                  <span className="text-primary"> Reset</span> Your Password?
                </h1>
                <p className="text-secondary font-14 font-SB">
                  Generate your new password and login to your account{" "}
                  <br className="d-none d-md-block" />
                  by the updated password
                </p>
                <div className="resetpass-input-box">
                  <div className="reset-input-box d-flex align-items-center text-start position-relative">
                    <input
                      type="email"
                      className="form-control graynod_input reset_form"
                      placeholder="New Password"
                    />
                    <i className="fi fi-sr-eye password-eye-reset text-secondary lh-0" />
                  </div>
                  <div className="reset-input-box d-flex align-items-center text-start position-relative">
                    <input
                      type="email"
                      className="form-control graynod_input reset_form"
                      placeholder="Confirm New Password"
                    />
                    <i className="fi fi-sr-eye password-eye-reset text-secondary lh-0" />
                  </div>
                  <div className="reset-pass-sap ">
                    <a
                      href="#"
                      className="btn btn-creat-user d-inline-flex align-items-center justify-content-center font-14"
                    >
                      Save Password
                    </a>
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
