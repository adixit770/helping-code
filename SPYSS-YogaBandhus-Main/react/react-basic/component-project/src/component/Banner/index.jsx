import { Slider } from "@mui/material";
import React from "react";
class Banner extends React.Component{
     SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
          />
        );
      }
      
     SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
          />
        );
      }
   settings = {
    dots: true,
    autoplay:true,
    infinite: true,
    speed: 500,
    
    slidesToShow: 3,
    slidesToScroll: 2,
    arrows:false,
    nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]

  };
    render()
    {
        return (
            <Slider {...settings}>
              <div className="color-blue">
                <h3>1</h3>
              </div>
              <div className="color-green" >
                <h3>2</h3>
              </div>
              <div className="color-blue">
                <h3>3</h3>
              </div>
              <div className="color-green">
                <h3>4</h3>
              </div>
              <div className="color-red">
                <h3>5</h3>
              </div>
            </Slider>
          );
        }
}

export default Banner;