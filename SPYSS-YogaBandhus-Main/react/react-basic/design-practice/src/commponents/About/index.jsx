import React from "react";
import { useParams } from "react-router-dom";
import MediaCard from "../Card";
import SimpleSlider from "../Slider";
import AboutData from "./AboutData.json";
const About = () => {
  let {id} =useParams()
  console.log("id -> ",id)
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
