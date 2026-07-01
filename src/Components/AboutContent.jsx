import "./AboutContent.css"
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import img from "../Images/pic3.jpeg";
import img2 from "../Images/pic2.jpg"
import { getVijay } from "../API/VijayApi";
const AboutContent = () => {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [nextImageIndex, setNextImageIndex] =useState(1);
    const[vijay, setVijay]=useState();

   const images =[img,img2];

   useEffect(() => {
    getVijay()
    .then(data=>setVijay(data))
    .catch(err=>console.error("Failed to load vijay", err));
  }, []);

   useEffect(() => {
    const imageTimeout = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>{ const newIndex = (prevIndex + 1) % images.length;
      setNextImageIndex(newIndex === 0 ? 1 : 0);
      return newIndex;
      });
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(imageTimeout);
  }, [images.length]);
   
  if (!vijay) {
    return <div>Loading...</div>; 
  }

  const skillsArray = vijay.skills ? vijay.skills.split(",").map(s => s.trim()) : [];

  return (
    <div className="about">
        <div className="left">
            <h1>{vijay.intro}</h1>
            <p>{vijay.role} </p>

            <Link to="/ContactUs">
                <button className="btn">CONTACT</button>
            </Link>
        </div>
        <div className="right">
            <div className="image-container">
                <div  className="image-stack top">
                    <img src={images[currentImageIndex]} className="images" alt="true" />
                </div>
                <div  className="image-stack bottom">
                    <img src={images[nextImageIndex]} className="images" alt="true" />
                </div>
            </div>
        </div>

        <div className="experience">
  <h2>Experience</h2>
  <ul>
    {vijay.experience?.map((exp, index) => (
      <li key={index} className="experience-item">
        <h3>{exp.role} @ {exp.company}</h3>
        <span>{exp.startDate} - {exp.endDate}</span>
        <ul className="description-list">
          {exp.description?.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </li>
    ))}
  </ul>
</div>

      <div className="skills">
        <h2>Skills</h2>
        <div className="skills-list">
          {skillsArray.map((skill, idx) => (
            <span key={idx} className="skill-badge">{skill}</span>
          ))}
        </div>
      </div>

       <div className="info">
        <h4 className="info-data">{vijay.aboutData}</h4>
       </div>

    </div>
  )
}

export default AboutContent