import React from 'react'
import { Link } from 'react-router-dom';
import MainLayout from '../mainLayout';

export default function MyTaskList() {
    return (
      <MainLayout>

        <div>
          <div className="box-heading">
            <div className="box-title"> 
              <h3 className="mb-35">My Tasks</h3>
            </div>
            <div className="box-breadcrumb"> 
              <div className="breadcrumbs">
                <ul> 
                  <li> <Link className="icon-home" to="/">Admin</Link></li>
                  <li><span>My Jobs</span></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row"> 
            <div className="col-lg-12"> 
              <div className="section-box">
                <div className="container"> 
                  <div className="panel-white mb-30">
                    <div className="box-padding">
                      <div className="row display-list">
                        <div className="col-xl-3 col-lg-4 col-md-6">
                          <div className="card-style-2 hover-up">
                            <div className="card-head">
                              <div className="card-image"> <img src="assets/imgs/page/dashboard/img1.png" alt="jobBox" /></div>
                              <div className="card-title"> 
                                <h6>Senior Full Stack Engineer, Creator Success</h6><span className="text-muted">Start:</span><span>1 days ago</span>
                              </div>
                            </div>
                            <div className="mr-15"> <Link className="btn btn-tag high">High</Link><Link className="btn btn-tag planing">Planing</Link>
                            </div>
                            <div className="card-progress"><span>Complete:</span><strong>80</strong><span className="hour"> %</span></div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                          <div className="card-style-2 hover-up">
                            <div className="card-head">
                              <div className="card-image"> <img src="assets/imgs/page/dashboard/img2.png" alt="jobBox" /></div>
                              <div className="card-title"> 
                                <h6>Senior Full Stack Engineer, Creator Success</h6><span className="text-muted">Start:</span><span>3 days ago</span>
                              </div>
                            </div>
                            <div className="mr-15"> <Link className="btn btn-tag mid">Medium</Link><Link className="btn btn-tag in-progress">In Progress</Link>
                            </div>
                            <div className="card-progress"><span>Complete:</span><strong>68</strong><span className="hour"> %</span></div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">   
                          <div className="card-style-2 hover-up">
                            <div className="card-head">
                              <div className="card-image"> <img src="assets/imgs/page/dashboard/img3.png" alt="jobBox" /></div>
                              <div className="card-title"> 
                                <h6>Senior Full Stack Engineer, Creator Success</h6><span className="text-muted">Start:</span><span>4 days ago</span>
                              </div>
                            </div>
                            <div className="mr-15"> <Link className="btn btn-tag low">Low</Link><Link className="btn btn-tag in-progress">In Progress</Link>
                            </div>
                            <div className="card-progress"><span>Complete:</span><strong>20</strong><span className="hour"> %</span></div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">   
                          <div className="card-style-2 hover-up">
                            <div className="card-head">
                              <div className="card-image"> <img src="assets/imgs/page/dashboard/img4.png" alt="jobBox" /></div>
                              <div className="card-title"> 
                                <h6>Senior Full Stack Engineer, Creator Success</h6><span className="text-muted">Start:</span><span>5 days ago</span>
                              </div>
                            </div>
                            <div className="mr-15"> <Link className="btn btn-tag complete">Completed</Link>
                            </div>
                            <div className="card-progress"><span>Complete:</span><strong>100</strong><span className="hour"> %</span></div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                          <div className="card-style-2 hover-up">
                            <div className="card-head">
                              <div className="card-image"> <img src="assets/imgs/page/dashboard/img5.png" alt="jobBox" /></div>
                              <div className="card-title"> 
                                <h6>Senior Full Stack Engineer, Creator Success</h6><span className="text-muted">Start:</span><span>8 days ago</span>
                              </div>
                            </div>
                            <div className="mr-15"> <Link className="btn btn-tag complete">Completed</Link>
                            </div>
                            <div className="card-progress"><span>Complete:</span><strong>100</strong><span className="hour"> %</span></div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                          <div className="card-style-2 hover-up">
                            <div className="card-head">
                              <div className="card-image"> <img src="assets/imgs/page/dashboard/img5.png" alt="jobBox" /></div>
                              <div className="card-title"> 
                                <h6>Senior Full Stack Engineer, Creator Success</h6><span className="text-muted">Start:</span><span>12 days ago</span>
                              </div>
                            </div>
                            <div className="mr-15"> <Link className="btn btn-tag complete">Completed</Link>
                            </div>
                            <div className="card-progress"><span>Complete:</span><strong>100</strong><span className="hour"> %</span></div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                          <div className="card-style-2 hover-up">
                            <div className="card-head">
                              <div className="card-image"> <img src="assets/imgs/page/dashboard/img1.png" alt="jobBox" /></div>
                              <div className="card-title"> 
                                <h6>Senior Full Stack Engineer, Creator Success</h6><span className="text-muted">Start:</span><span>14 days ago</span>
                              </div>
                            </div>
                            <div className="mr-15"> <Link className="btn btn-tag complete">Completed</Link>
                            </div>
                            <div className="card-progress"><span>Complete:</span><strong>100</strong><span className="hour"> %</span></div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                          <div className="card-style-2 hover-up">
                            <div className="card-head">
                              <div className="card-image"> <img src="assets/imgs/page/dashboard/img2.png" alt="jobBox" /></div>
                              <div className="card-title"> 
                                <h6>Senior Full Stack Engineer, Creator Success</h6><span className="text-muted">Start:</span><span>23 days ago</span>
                              </div>
                            </div>
                            <div className="mr-15"> <Link className="btn btn-tag complete">Completed</Link>
                            </div>
                            <div className="card-progress"><span>Complete:</span><strong>100</strong><span className="hour"> %</span></div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">   
                          <div className="card-style-2 hover-up">
                            <div className="card-head">
                              <div className="card-image"> <img src="assets/imgs/page/dashboard/img3.png" alt="jobBox" /></div>
                              <div className="card-title"> 
                                <h6>Senior Full Stack Engineer, Creator Success</h6><span className="text-muted">Start:</span><span>25 days ago</span>
                              </div>
                            </div>
                            <div className="mr-15"> <Link className="btn btn-tag complete">Completed</Link>
                            </div>
                            <div className="card-progress"><span>Complete:</span><strong>100</strong><span className="hour"> %</span></div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">   
                          <div className="card-style-2 hover-up">
                            <div className="card-head">
                              <div className="card-image"> <img src="assets/imgs/page/dashboard/img4.png" alt="jobBox" /></div>
                              <div className="card-title"> 
                                <h6>Senior Full Stack Engineer, Creator Success</h6><span className="text-muted">Start:</span><span>26 days ago</span>
                              </div>
                            </div>
                            <div className="mr-15"> <Link className="btn btn-tag complete">Completed</Link>
                            </div>
                            <div className="card-progress"><span>Complete:</span><strong>100</strong><span className="hour"> %</span></div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                          <div className="card-style-2 hover-up">
                            <div className="card-head">
                              <div className="card-image"> <img src="assets/imgs/page/dashboard/img5.png" alt="jobBox" /></div>
                              <div className="card-title"> 
                                <h6>Senior Full Stack Engineer, Creator Success</h6><span className="text-muted">Start:</span><span>30 days ago</span>
                              </div>
                            </div>
                            <div className="mr-15"> <Link className="btn btn-tag complete">Completed</Link>
                            </div>
                            <div className="card-progress"><span>Complete:</span><strong>100</strong><span className="hour"> %</span></div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                          <div className="card-style-2 hover-up">
                            <div className="card-head">
                              <div className="card-image"> <img src="assets/imgs/page/dashboard/img5.png" alt="jobBox" /></div>
                              <div className="card-title"> 
                                <h6>Senior Full Stack Engineer, Creator Success</h6><span className="text-muted">Start:</span><span>32 days ago</span>
                              </div>
                            </div>
                            <div className="mr-15"> <Link className="btn btn-tag complete">Completed</Link>
                            </div>
                            <div className="card-progress"><span>Complete:</span><strong>100</strong><span className="hour"> %</span></div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">   
                          <div className="card-style-2 hover-up">
                            <div className="card-head">
                              <div className="card-image"> <img src="assets/imgs/page/dashboard/img3.png" alt="jobBox" /></div>
                              <div className="card-title"> 
                                <h6>Senior Full Stack Engineer, Creator Success</h6><span className="text-muted">Start:</span><span>34 days ago</span>
                              </div>
                            </div>
                            <div className="mr-15"> <Link className="btn btn-tag complete">Completed</Link>
                            </div>
                            <div className="card-progress"><span>Complete:</span><strong>100</strong><span className="hour"> %</span></div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">   
                          <div className="card-style-2 hover-up">
                            <div className="card-head">
                              <div className="card-image"> <img src="assets/imgs/page/dashboard/img4.png" alt="jobBox" /></div>
                              <div className="card-title"> 
                                <h6>Senior Full Stack Engineer, Creator Success</h6><span className="text-muted">Start:</span><span>36 days ago</span>
                              </div>
                            </div>
                            <div className="mr-15"> <Link className="btn btn-tag complete">Completed</Link>
                            </div>
                            <div className="card-progress"><span>Complete:</span><strong>100</strong><span className="hour"> %</span></div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                          <div className="card-style-2 hover-up">
                            <div className="card-head">
                              <div className="card-image"> <img src="assets/imgs/page/dashboard/img5.png" alt="jobBox" /></div>
                              <div className="card-title"> 
                                <h6>Senior Full Stack Engineer, Creator Success</h6><span className="text-muted">Start:</span><span>3 days ago</span>
                              </div>
                            </div>
                            <div className="mr-15"> <Link className="btn btn-tag complete">Completed</Link>
                            </div>
                            <div className="card-progress"><span>Complete:</span><strong>100</strong><span className="hour"> %</span></div>
                          </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">   
                          <div className="card-style-2 hover-up">
                            <div className="card-head">
                              <div className="card-image"> <img src="assets/imgs/page/dashboard/img4.png" alt="jobBox" /></div>
                              <div className="card-title"> 
                                <h6>Senior Full Stack Engineer, Creator Success</h6><span className="text-muted">Start:</span><span>36 days ago</span>
                              </div>
                            </div>
                            <div className="mr-15"> <Link className="btn btn-tag complete">Completed</Link>
                            </div>
                            <div className="card-progress"><span>Complete:</span><strong>100</strong><span className="hour"> %</span></div>
                          </div>
                        </div>
                      </div>
                      <div className="paginations">
                        <ul className="pager">
                          <li><Link className="pager-prev" to="#" /></li>
                          <li><Link className="pager-number" to="#">1</Link></li>
                          <li><Link className="pager-number" to="#">2</Link></li>
                          <li><Link className="pager-number" to="#">3</Link></li>
                          <li><Link className="pager-number" to="#">4</Link></li>
                          <li><Link className="pager-number" to="#">5</Link></li>
                          <li><Link className="pager-number active" to="#">6</Link></li>
                          <li><Link className="pager-number" to="#">7</Link></li>
                          <li><Link className="pager-next" to="#" /></li>
                        </ul>
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
      );
}