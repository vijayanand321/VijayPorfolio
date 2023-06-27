import "./AboutContent.css"
import React from 'react'
import { Link } from "react-router-dom";
import img from "../Images/pic1.jpg";
import data from './AboutData'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I ?</h1>
            <p>Software developer </p>

            <Link to="/ContactUs">
                <button className="btn">CONTACT</button>
            </Link>
        </div>
        <div className="right">
            <div className="image-container">
                <div  className="image-stack top">
                    <img src={img} className="images" alt="true" />
                </div>
                <div  className="image-stack bottom">
                    <img src={img} className="images" alt="true" />
                </div>
            </div>
        </div>
       <div className="info">
        <h4>{data}</h4>
       </div>

    </div>
  )
}

export default AboutContent