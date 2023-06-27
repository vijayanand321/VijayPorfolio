// import { NavLink } from "react-router-dom";
import "./WorkCard.css";
import React from 'react';
import WorkCard from "./WorkCard";
import ProjectCardData from "./WorkCardData";
const Work = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
          {ProjectCardData.map((val,index)=>{
            return(
                <WorkCard 
                    key={index}
                    image_data={val.image_data}
                    title ={val.title}
                    text={val.text}
                    view={val.view}>
                </WorkCard>
            );
          })} 
        </div>
    </div>
  )
}

export default Work