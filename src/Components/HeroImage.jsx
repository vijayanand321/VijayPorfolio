import "./HeroImage.css";
import  IntroImg from "../Images/pic1.jpg";
import React from 'react'
import { Link } from "react-router-dom";

const HeroImage = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img  className="intro-img" src={IntroImg} alt="IntroImg" />
        </div>
        <div className="content">
            <p>I'am VijayAnand G</p>
            <h1>FULL STACK DEVELOPER</h1>
            <div>
                <Link to="/Project" className="btn">Projects</Link>
                <Link to="/ContactUs" className="btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImage