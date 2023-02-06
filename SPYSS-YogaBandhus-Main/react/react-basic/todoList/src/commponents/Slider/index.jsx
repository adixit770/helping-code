import React from "react";
import Slider from "react-slick";

export default function SimpleSlider({ data, customSettings = {} }) {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "red",
          position: "absolute",
          right: "50px",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green", position: "absolute",
        left: "50px",zIndex:999 }}
        onClick={onClick}
      />
    );
  }
  var settings = {
    dots: true,
    autoplay: false,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    adaptiveHeight: false,
  };

  settings = { ...settings, ...customSettings };
  return <Slider {...settings}>{data}</Slider>;
}
