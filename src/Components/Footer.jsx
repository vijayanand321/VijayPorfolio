import "./Footer.css";
import React from 'react';
import { FaHome ,FaPhone,FaMailBulk, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
              <div className="location">
                <FaHome size={20} style={{color:"whitesmoke",marginRight:"2rem"}}></FaHome>
                <div >
                  <p>#752/1</p>
                    <p> Sree Vinayaka temple street</p>
                     <p> Oorgaumpet KGF</p>
                     <p>563121</p>
                </div>
              </div>
              <div className="phone">
             <h4><FaPhone size={20} style={{color:"whitesmoke",marginRight:"2rem"}}></FaPhone>
                   +91 7975187121
             </h4>
              </div>
              <div className="email">
             <h4><FaMailBulk size={20} style={{color:"whitesmoke",marginRight:"2rem"}}></FaMailBulk>
             <a href="https://vijayanand030201@gmail.com" target="blank">vijayanand030201@gmail.com</a>
             </h4>
              </div>
            </div>
            <div className="right">
              <h4>About Me</h4>
              <p>
                I Enjoy Coding,Building new projects
              </p>
                <div className="social">
               <a href="https://www.facebook.com/gopinath.gopi.18041092" target="blank">
               <FaFacebook size={20} style={{color:"whitesmoke",marginRight:"2rem"}}>  </FaFacebook>
               </a>
                
                <a href="https://www.linkedin.com/in/vijayanand-g-aa2136229" target="blank">
                <FaLinkedin size={20} style={{color:"whitesmoke",marginRight:"2rem"}}></FaLinkedin>
                </a>
                <a href="https://www.instagram.com/__vijay_anand_321__/" target="blank">
                <FaInstagram size={20} style={{color:"whitesmoke",marginRight:"2rem"}}></FaInstagram>
                </a>
               
              </div>
              <br />
              <p>Copyrights@2023 All rights reserved -Vijayanand.G</p>
            </div>
        </div>
    </div>
  )
}

export default Footer