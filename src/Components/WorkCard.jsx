import { NavLink } from "react-router-dom";
import "./WorkCard.css";
import React from 'react';

const WorkCard = (props) => {
  return (
    <div className="project-card">
                 <img src={props.image_data} alt="images" /> 
                <h2 className="project-title">{props.title}</h2>
                <div className="pro-details">
                    <p>{props.text}</p>
                    <div className="pro-btn">
                        <NavLink to={props.view} className="btn" target="blank">View</NavLink>
                        <NavLink to="https://github.com/vijayanand321" className="btn" target="blank">Source</NavLink>
                    </div>
                </div>
            </div>
  )
}

export default WorkCard