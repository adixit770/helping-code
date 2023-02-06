import React from 'react';
import Footer from '../footer';
import Navbar from '../navbar';



class Business extends React.Component {
  render(){
    return (
<>
<Navbar/>
{/* <!-- Business Starts Here  --> */}
<section className="brdcum position-relative">
    <img src="assets/images/brdcum_bg.png" className="img-fluid brd_img" alt=""/>
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <h1 className="top_brdcum_title position-relative d-inline-block">
                    Find a Graynod <span className="text-primary font-B">Business</span>
                    <img src="assets/images/brdcum_arrow.png" className="brd_arrow" alt=""/>
                </h1>
                <p className="brd_details font-14 font-M mb-0">Lorem ipssm dollor dummy text <br className="d-none d-md-block"/>
                    type real model world</p>

            </div>
            <div className="col-md-6 position-relative">
                <img src="assets/images/bussiness-peop.png" className="bussines_img_brdcum " alt=""/>
            </div>
        </div>
    </div>
</section>
<section className="business_listing">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="top_section_search d-flex align-items-center position-relative mb-5">
                    <span className="seach_icon d-flex align-items-center justify-content-center"><i className="fi fi-rr-search text-secondary lh-0"></i></span>
                    <input type="text" className="form-control section-search w-100" placeholder="Serach Business..."/>
                    <button className="btn btn-search">Find Business</button>
                </div>
        
            </div>
        </div>
        <div className="business_card">
            <div className="row">
                <div className="col-md-4">
                    <div className="single_business_card">
                        <div className="card_top_img position-relative">
                            <img src="assets/images/card-1.png" className="crd_img img-fluid" alt=""/>
                            <span className="img-overlay"></span>
                        </div>
                        <div className="businesscard_body">
                            <a href="#" className="bus_card_title_box d-flex align-items-center">
                                <span className="bus_card_icon d-flex align-items-center justify-content-center">
                                    <img src="assets/images/bus_icon_first.png" className="img-fluid icon_img" alt=""/>
                                </span>
                                <span className="bus_card_title">
                                    <h5 className="mb-1 busi_title">Enesco Disney Traditions </h5>
                                    <p className="mb-0 text-secondary busi_sub_title">Talent, leadership, organization, HR</p>
                                </span>
                            </a>
                            <div className="bus_card_description">
                                <p className="text-secondary font-14">Jim Shore's unmistakable style evokes a sense of <br className="d-none d-md-block"/>
                                    nostalgia with traditional themes, quilt patterns and<br className="d-none d-md-block"/>
                                    design motifs inspired by American and European...</p>
                            </div>
                            <span className="product_count d-flex justify-content-center">23 Products</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="single_business_card">
                        <div className="card_top_img position-relative">
                            <img src="assets/images/card-2.png" className="crd_img img-fluid" alt=""/>
                            <span className="img-overlay"></span>
                        </div>
                        <div className="businesscard_body">
                            <a href="#" className="bus_card_title_box d-flex align-items-center">
                                <span className="bus_card_icon d-flex align-items-center justify-content-center">
                                    <img src="assets/images/images_1.png" className="img-fluid icon_img" alt=""/>
                                </span>
                                <span className="bus_card_title">
                                    <h5 className="mb-1 busi_title">Wegmans Furniture Industries </h5>
                                    <p className="mb-0 text-secondary busi_sub_title">We are a home furniture manufacturer</p>
                                </span>
                            </a>
                            <div className="bus_card_description">
                                <p className="text-secondary font-14">Jim Shore's unmistakable style evokes a sense of <br className="d-none d-md-block"/>
                                    nostalgia with traditional themes, quilt patterns and<br className="d-none d-md-block"/>
                                    design motifs inspired by American and European...</p>
                            </div>
                            <span className="product_count d-flex justify-content-center">23 Products</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="single_business_card">
                        <div className="card_top_img position-relative">
                            <img src="assets/images/card-3.png" className="crd_img img-fluid" alt=""/>
                            <span className="img-overlay"></span>
                        </div>
                        <div className="businesscard_body">
                            <a href="#" className="bus_card_title_box d-flex align-items-center">
                                <span className="bus_card_icon d-flex align-items-center justify-content-center">
                                    <img src="assets/images/bus_icon_first.png" className="img-fluid icon_img" alt=""/>
                                </span>
                                <span className="bus_card_title">
                                    <h5 className="mb-1 busi_title">Lime Road </h5>
                                    <p className="mb-0 text-secondary busi_sub_title">India's most loved fashion platform</p>
                                </span>
                            </a>
                            <div className="bus_card_description">
                                <p className="text-secondary font-14">Jim Shore's unmistakable style evokes a sense of <br className="d-none d-md-block"/>
                                    nostalgia with traditional themes, quilt patterns and<br className="d-none d-md-block"/>
                                    design motifs inspired by American and European...</p>
                            </div>
                            <span className="product_count d-flex justify-content-center">105 Products</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="single_business_card">
                        <div className="card_top_img position-relative">
                            <img src="assets/images/card-2.png" className="crd_img img-fluid" alt=""/>
                            <span className="img-overlay"></span>
                        </div>
                        <div className="businesscard_body">
                            <a href="#" className="bus_card_title_box d-flex align-items-center">
                                <span className="bus_card_icon d-flex align-items-center justify-content-center">
                                    <img src="assets/images/images_1.png" className="img-fluid icon_img" alt=""/>
                                </span>
                                <span className="bus_card_title">
                                    <h5 className="mb-1 busi_title">Wegmans Furniture Industries </h5>
                                    <p className="mb-0 text-secondary busi_sub_title">We are a home furniture manufacturer</p>
                                </span>
                            </a>
                            <div className="bus_card_description">
                                <p className="text-secondary font-14">Jim Shore's unmistakable style evokes a sense of <br className="d-none d-md-block"/>
                                    nostalgia with traditional themes, quilt patterns and<br className="d-none d-md-block"/>
                                    design motifs inspired by American and European...</p>
                            </div>
                            <span className="product_count d-flex justify-content-center">23 Products</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="single_business_card">
                        <div className="card_top_img position-relative">
                            <img src="assets/images/card-1.png" className="crd_img img-fluid" alt=""/>
                            <span className="img-overlay"></span>
                        </div>
                        <div className="businesscard_body">
                            <a href="#" className="bus_card_title_box d-flex align-items-center">
                                <span className="bus_card_icon d-flex align-items-center justify-content-center">
                                    <img src="assets/images/bus_icon_first.png" className="img-fluid icon_img" alt=""/>
                                </span>
                                <span className="bus_card_title">
                                    <h5 className="mb-1 busi_title">Enesco Disney Traditions </h5>
                                    <p className="mb-0 text-secondary busi_sub_title">Talent, leadership, organization, HR</p>
                                </span>
                            </a>
                            <div className="bus_card_description">
                                <p className="text-secondary font-14">Jim Shore's unmistakable style evokes a sense of <br className="d-none d-md-block"/>
                                    nostalgia with traditional themes, quilt patterns and<br className="d-none d-md-block"/>
                                    design motifs inspired by American and European...</p>
                            </div>
                            <span className="product_count d-flex justify-content-center">23 Products</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="single_business_card">
                        <div className="card_top_img position-relative">
                            <img src="assets/images/card-3.png" className="crd_img img-fluid" alt=""/>
                            <span className="img-overlay"></span>
                        </div>
                        <div className="businesscard_body">
                            <a href="#" className="bus_card_title_box d-flex align-items-center">
                                <span className="bus_card_icon d-flex align-items-center justify-content-center">
                                    <img src="assets/images/bus_icon_first.png" className="img-fluid icon_img" alt=""/>
                                </span>
                                <span className="bus_card_title">
                                    <h5 className="mb-1 busi_title">Lime Road </h5>
                                    <p className="mb-0 text-secondary busi_sub_title">India's most loved fashion platform</p>
                                </span>
                            </a>
                            <div className="bus_card_description">
                                <p className="text-secondary font-14">Jim Shore's unmistakable style evokes a sense of <br className="d-none d-md-block"/>
                                    nostalgia with traditional themes, quilt patterns and<br className="d-none d-md-block"/>
                                    design motifs inspired by American and European...</p>
                            </div>
                            <span className="product_count d-flex justify-content-center">105 Products</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<Footer/>
</>  
// <-- Business Ends Here -->
);
}
}
export default Business;