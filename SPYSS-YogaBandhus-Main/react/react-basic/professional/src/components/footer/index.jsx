import React from "react";

class Footer extends React.Component {
  render() {
    return (
      // Footer Starts Here
      <footer className="footer">
        <div className="container">
          <img
            src="assets/images/footer_logo.png"
            className="img-fluid mx-auto d-flex footer-logo"
            alt=""
          />
          <div className="row">
            <div className="col-md-3">
              <div className="footer-about">
                <h4 className="footer-col-heading font-18 font-B">About Us</h4>
                <p className="mb-0 font-14 font-M">
                  Lorem Ipsum is simply dummy text of the
                  <br className="d-none d-md-none" />
                  printing and typesetting industry. Lorem
                  <br className="d-none d-md-none" />
                  Ipsum has been the industry's standard
                  <br className="d-none d-md-none" />
                  dummy text ever since the 1500s
                </p>
              </div>
            </div>
            <div className="col-md-3 d-flex ">
              <div className="col-box mx-auto">
                <h4 className="footer-col-heading font-18 font-B mb-4">
                  Comapny
                </h4>
                <ul className="footer-list mb-0">
                  <li>
                    <a href="about">Abouts us</a>
                  </li>
                  <li>
                    <a href="contactUs">Contact Us</a>
                  </li>
                  <li>
                    <a href="termscondition">Terms & conditions</a>
                  </li>
                  <li>
                    <a href="privacyPolicy">Privacy & Policy</a>
                  </li>
                  <li>
                    <a href="career">Career</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 d-flex ">
              <div className="col-box mx-auto">
                <h4 className="footer-col-heading font-18 font-B mb-4">
                  Business Links
                </h4>
                <ul className="footer-list mb-0">
                  <li>
                    <a href="business">Business</a>
                  </li>
                  <li>
                    <a href="people">People</a>
                  </li>
                  <li>
                    <a href="news">News</a>
                  </li>
                  <li>
                    <a href="jobs">Jobs</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 d-flex ">
              <div className="col-box mx-auto">
                <h4 className="footer-col-heading font-18 font-B mb-4">
                  Social Links
                </h4>
                <ul className="footer-list mb-0">
                  <li>
                    <a href="#">Facebook</a>
                  </li>
                  <li>
                    <a href="#">Instagram</a>
                  </li>
                  <li>
                    <a href="#">Twitter</a>
                  </li>
                  <li>
                    <a href="#">Linkedin</a>
                  </li>
                  <li>
                    <a href="#">Youtube</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="copy-right text-center">
            <p className="font-14 mb-0">
              &#169; 2020. Graynod. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      // Footer Ends Here
    );
  }
}

export default Footer;
