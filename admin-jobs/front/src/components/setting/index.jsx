import React from 'react'
import { Link } from 'react-router-dom'
import MainLayout from '../mainLayout'

export default function Setting() {
  return (
   <MainLayout>
 <div>
          <div className="box-heading">
            <div className="box-title"> 
              <h3 className="mb-35">Setting</h3>
            </div>
            <div className="box-breadcrumb"> 
              <div className="breadcrumbs">
                <ul> 
                  <li> <Link className="icon-home" to="/">Admin</Link></li>
                  <li><span>Setting</span></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row"> 
            <div className="col-xxl-9 col-xl-8 col-lg-8">
              <div className="section-box">
                <div className="container"> 
                  <div className="panel-white mb-30">
                    <div className="box-padding">
                      <h6 className="color-text-paragraph-2">Update your profile</h6>
                      <div className="box-profile-image"> 
                        <div className="img-profile"> <img src="assets/imgs/page/dashboard/img3.png" alt="jobBox" /></div>
                        <div className="info-profile"> <Link className="btn btn-default">Company Logo / Brand</Link><Link className="btn btn-link">Delete</Link></div>
                      </div>
                      <div className="row"> 
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group mb-30"> 
                            <label className="font-sm color-text-mutted mb-10">Company Name *</label>
                            <input className="form-control" type="text" placeholder="WillowTree" />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group mb-30">
                            <label className="font-sm color-text-mutted mb-10">Email *</label>
                            <input className="form-control" type="text" placeholder="willowtree@gmail.com" />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group mb-30">
                            <label className="font-sm color-text-mutted mb-10">Contact number</label>
                            <input className="form-control" type="text" placeholder="01 - 234 567 89" />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group mb-30">
                            <label className="font-sm color-text-mutted mb-10">Website</label>
                            <input className="form-control" type="text" placeholder="https://alithemes.com" />
                          </div>
                        </div>
                        <div className="col-lg-12"> 
                          <div className="form-group mb-30"> 
                            <label className="font-sm color-text-mutted mb-10">Bio</label>
                            <textarea className="form-control" name="message" rows={5} defaultValue={"We are AliThemes , a creative and dedicated group of individuals who love web development almost as much as we love our customers. We are passionate team with the mission for achieving the perfection in web design."} />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group mb-30"> 
                            <label className="font-sm color-text-mutted mb-10">Experience</label>
                            <input className="form-control" type="text" placeholder="1 - 5 Years" />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group mb-30">
                            <label className="font-sm color-text-mutted mb-10">Number of employees</label>
                            <input className="form-control" type="text" placeholder="1-50 employees" />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group mb-30">
                            <label className="font-sm color-text-mutted mb-10">Languages</label>
                            <input className="form-control" type="text" placeholder="English, French" />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group mb-30">
                            <label className="font-sm color-text-mutted mb-10">Categories </label>
                            <input className="form-control" type="text" placeholder="UI/UX, Web Design, Brand identity" />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group mb-30">
                            <label className="font-sm color-text-mutted mb-10">Working time</label>
                            <input className="form-control" type="text" placeholder="Full time" />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group mb-30">
                            <label className="font-sm color-text-mutted mb-10">Average wage </label>
                            <input className="form-control" type="text" placeholder="$3500" />
                          </div>
                        </div>
                        <div className="col-lg-12"> 
                          <div className="form-group mt-10">
                            <button className="btn btn-default btn-brand icon-tick">Save Change</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="panel-white mb-30">
                    <div className="box-padding">
                      <h6 className="color-text-paragraph-2">Contact Information</h6>
                      <div className="row mt-30">
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group mb-30"> 
                            <label className="font-sm color-text-mutted mb-10">Country</label>
                            <input className="form-control" type="text" placeholder="United States of America" />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group mb-30">
                            <label className="font-sm color-text-mutted mb-10">City</label>
                            <input className="form-control" type="text" placeholder="Chicago" />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group mb-30">
                            <label className="font-sm color-text-mutted mb-10">Complete Address</label>
                            <input className="form-control" type="text" placeholder="205 North Michigan Avenue, Suite 810, Chicago, 60601, USA" />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group mb-30">
                            <label className="font-sm color-text-mutted mb-10">Find On Map</label>
                            <input className="form-control" type="text" placeholder="205 North Michigan Avenue, Suite 810, Chicago, 60601, USA" />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group mb-30"> 
                            <label className="font-sm color-text-mutted mb-10">Latitude</label>
                            <input className="form-control" type="text" placeholder="41.881832" />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="form-group mb-30">
                            <label className="font-sm color-text-mutted mb-10">Longitude</label>
                            <input className="form-control" type="text" placeholder=" -87.623177" />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group mb-30">
                            <label className="font-sm color-text-mutted mb-10">Google Map</label>
                            <div className="box-map"> 
                              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.4860084541583!2d-87.62575418429162!3d41.88608087922149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2ca8b34afe61%3A0x6caeb5f721ca846!2s205%20N%20Michigan%20Ave%20Suit%20810%2C%20Chicago%2C%20IL%2060601%2C%20Hoa%20K%E1%BB%B3!5e1!3m2!1svi!2s!4v1663165156864!5m2!1svi!2s" width="100%" height={400} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12"> 
                          <div className="form-group mt-0">
                            <button className="btn btn-default btn-brand icon-tick">Save Change</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-4 col-lg-4">
              <div className="section-box">
                <div className="container"> 
                  <div className="panel-white">
                    <div className="panel-head"> 
                      <h5>Social Network</h5><Link className="menudrop" id="dropdownMenu3" type="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-display="static" />
                      <ul className="dropdown-menu dropdown-menu-light dropdown-menu-end" aria-labelledby="dropdownMenu3">
                        <li><Link className="dropdown-item active" to="#">Add new</Link></li>
                        <li><Link className="dropdown-item" to="#">Settings</Link></li>
                        <li><Link className="dropdown-item" to="#">Actions</Link></li>
                      </ul>
                    </div>
                    <div className="panel-body pt-20">
                      <div className="row">
                        <div className="col-lg-12"> 
                          <div className="form-group mb-30"> 
                            <label className="font-sm color-text-mutted mb-10">Facebook</label>
                            <input className="form-control" type="text" placeholder="https://www.facebook.com" />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group mb-30">
                            <label className="font-sm color-text-mutted mb-10">Twitter</label>
                            <input className="form-control" type="text" placeholder="https://twitter.com" />
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="form-group mb-30">
                            <label className="font-sm color-text-mutted mb-10">Instagram</label>
                            <input className="form-control" type="text" placeholder="https://www.instagram.com" />
                          </div>
                        </div>
                        <div className="col-lg-12"> 
                          <div className="form-group mt-0">
                            <button className="btn btn-default btn-brand icon-tick">Save Change</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10"> 
            <div className="section-box">
              <div className="container"> 
                <div className="panel-white pt-30 pb-30 pl-15 pr-15">
                  <div className="box-swiper">
                    <div className="swiper-container swiper-group-10">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide"> <img src="assets/imgs/page/dashboard/microsoft.svg" alt="jobBox" /></div>
                        <div className="swiper-slide"> <img src="assets/imgs/page/dashboard/sony.svg" alt="jobBox" /></div>
                        <div className="swiper-slide"> <img src="assets/imgs/page/dashboard/acer.svg" alt="jobBox" /></div>
                        <div className="swiper-slide"> <img src="assets/imgs/page/dashboard/nokia.svg" alt="jobBox" /></div>
                        <div className="swiper-slide"> <img src="assets/imgs/page/dashboard/asus.svg" alt="jobBox" /></div>
                        <div className="swiper-slide"> <img src="assets/imgs/page/dashboard/casio.svg" alt="jobBox" /></div>
                        <div className="swiper-slide"> <img src="assets/imgs/page/dashboard/dell.svg" alt="jobBox" /></div>
                        <div className="swiper-slide"> <img src="assets/imgs/page/dashboard/panasonic.svg" alt="jobBox" /></div>
                        <div className="swiper-slide"> <img src="assets/imgs/page/dashboard/vaio.svg" alt="jobBox" /></div>
                        <div className="swiper-slide"> <img src="assets/imgs/page/dashboard/sony.svg" alt="jobBox" /></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
   </MainLayout>
  )
}
