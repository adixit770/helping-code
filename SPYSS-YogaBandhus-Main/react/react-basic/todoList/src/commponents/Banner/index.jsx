import React from "react";
import SimpleSlider from "../Slider";
import BannerData from "./BannerData.json";
const Banner = () => {
  return (
    <>
      <SimpleSlider
        data={BannerData.map((data, index) => {
          return (
            <div key={index} style={{width:"100%",height:"500px",maxHeight:"500px",overflow:"hidden"}}>
              <img alt="no" src={data.imageUrl} width="100%" height={"500px"} />
            </div>
          );
        })}
        customSettings={{autoplay:true}}
      />
    </>
  );
};
export default Banner;
