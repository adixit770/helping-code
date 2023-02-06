import React, { Component } from 'react'
import Footer from '../footer'
import Navbar from '../navbar'

export default class Career extends Component {
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
                  Graynod<span class="text-primary font-B"> Careers</span>
                    <img src="assets/images/brdcum_arrow.png" class="brd_arrow" alt=""/>
                </h1>
                <p class="brd_details font-14 font-M mb-0">Lorem ipssm dollor dummy text <br class="d-none d-md-block"/>
                    type real model world</p>

            </div>
            <div class="col-md-6 position-relative">
                <img src="assets/images/careers_bg.png" class="people_img_brdcum " alt=""/>
            </div>
        </div>
    </div>
</section>

{/* <!-- career top section --> */}

<section class="career_top_section d-inline-block w-100">
    <div class="container">
        <h2 class="font-22 font-M mb-4"><span class="text-primary">Graynod careers</span> and opportunities below. We have more than 100<br class="d-none d-md-block"/>
        employees globally, with engineering based in Kolkata, India.</h2>
        <p class="font-16 font-SB text-secondary">
        Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the
        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specim book. It has survived not only five centuries, but
        also theleap into electronic type setting.
        </p>
    </div>
</section>
{/* <!-- career top section end --> */}

{/* <!-- career everyone section --> */}
<section class="career_everyone_section d-inline-block w-100 text-center position-relative">
<img src="assets/images/brdcum_bg.png" class="img-fluid brd_img" alt=""/>
    <div class="container">
        <h2 class="font-22 font-M mb_20">Something for <span class="text-primary">everyone</span></h2>
        <p class="font-16 font-SB text-secondary mb-0">
        Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the<br class="d-none d-md-block"/>
        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
        </p>
        <a href="#" class="btn btn-primary rounded-pill">Learn about our team</a>
    </div>
</section>
{/* <!-- career everyone section end --> */}

{/* <!-- career opening section --> */}

<section class="career_opening">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="carrer_opening_items">
                    <h3 class="font-22 text-dark mb_20">Senior Enterprise Software Engineer (Java Developer)</h3>
                    <p class="career_opening_pera font-18  text-secondary">The Senior Enterprise Software Engineer will be a Java developer with 4+ years of experience
and expertise in Core Java, Spring, Hibernate and Web services. Spring Boot/Angular/Reactjs
expertise will be an added advantage in this role.</p>
                    <a href="#" class="readmore font-14 font-SB">Read More</a>
                </div>
                <div class="carrer_opening_items">
                    <h3 class="font-22 text-dark mb_20">Senior Enterprise Software Engineer (Java Developer)</h3>
                    <p class="career_opening_pera font-18  text-secondary">The Senior Enterprise Software Engineer will be a Java developer with 4+ years of experience
and expertise in Core Java, Spring, Hibernate and Web services. Spring Boot/Angular/Reactjs
expertise will be an added advantage in this role.</p>
                    <a href="#" class="readmore font-14 font-SB">Read More</a>
                </div>
                <div class="carrer_opening_items">
                    <h3 class="font-22 text-dark mb_20">Senior Enterprise Software Engineer (Java Developer)</h3>
                    <p class="career_opening_pera font-18  text-secondary">The Senior Enterprise Software Engineer will be a Java developer with 4+ years of experience
and expertise in Core Java, Spring, Hibernate and Web services. Spring Boot/Angular/Reactjs
expertise will be an added advantage in this role.</p>
                    <a href="#" class="readmore font-14 font-SB">Read More</a>
                </div>
                <div class="carrer_opening_items">
                    <h3 class="font-22 text-dark mb_20">Senior Enterprise Software Engineer (Java Developer)</h3>
                    <p class="career_opening_pera font-18  text-secondary">The Senior Enterprise Software Engineer will be a Java developer with 4+ years of experience
and expertise in Core Java, Spring, Hibernate and Web services. Spring Boot/Angular/Reactjs
expertise will be an added advantage in this role.</p>
                    <a href="#" class="readmore font-14 font-SB">Read More</a>
                </div>
                <div class="carrer_opening_items">
                    <h3 class="font-22 text-dark mb_20">Senior Enterprise Software Engineer (Java Developer)</h3>
                    <p class="career_opening_pera font-18  text-secondary">The Senior Enterprise Software Engineer will be a Java developer with 4+ years of experience
and expertise in Core Java, Spring, Hibernate and Web services. Spring Boot/Angular/Reactjs
expertise will be an added advantage in this role.</p>
                    <a href="#" class="readmore font-14 font-SB">Read More</a>
                </div>
                <div class="carrer_opening_items">
                    <h3 class="font-22 text-dark mb_20">Senior Enterprise Software Engineer (Java Developer)</h3>
                    <p class="career_opening_pera font-18  text-secondary">The Senior Enterprise Software Engineer will be a Java developer with 4+ years of experience
and expertise in Core Java, Spring, Hibernate and Web services. Spring Boot/Angular/Reactjs
expertise will be an added advantage in this role.</p>
                    <a href="#" class="readmore font-14 font-SB">Read More</a>
                </div>
            </div>
        </div>
    </div>
</section>
<Footer/>
{/* <!-- career opening section end --> */}

      </>
    )
  }
}
