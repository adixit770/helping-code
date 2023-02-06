import React from "react";
import MediaCard from "../Card";
import SimpleSlider from "../Slider";
import AboutData from "./AboutData.json";
const About = () => {
  return (
    <>
      <SimpleSlider
        data={AboutData.map((data, index) => {
          return (
            <div key={index} style={{margin:"0 auto"}}>
              <MediaCard data={data}/>
            </div>
          );
        })}
        customSettings={{slidesToShow:3,arrows:true}}
      />
    </>
  );
};
export default About;
