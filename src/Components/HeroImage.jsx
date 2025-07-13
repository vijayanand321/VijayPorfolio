import "./HeroImage.css";
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { getImages } from "../API/ImageApi";
import { GetResumeApi } from "../API/ResumeApi";

// Import multiple images for the carousel
import IntroImg1 from "../Images/pic2.jpg";
import IntroImg2 from "../Images/pic1.jpg";
import IntroImg3 from "../Images/pic4.jpeg";
import IntroImg4 from "../Images/pic3.jpeg";
import { getVijay } from "../API/VijayApi";

const HeroImage = () => {
  const defaultImages = [IntroImg4, IntroImg2, IntroImg3,IntroImg1]; 
  const [images, setImages]= useState(defaultImages);
  const[vijay, setVijay]=useState();
  const[nameText, setNameText]=useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  useEffect(() => {

    getVijay()
    .then(data=>setVijay(data))
    .catch(err=>console.error("Failed to load vijay", err));
  
    const fetchImage = async () => {
      const data =  await getImages();
      setImages(data);
  };

  fetchImage();
    
  }, [])

  useEffect(() => {
    if(vijay!=null){
      setNameText(`I'am ${vijay.name}`)
    }else{
      setNameText(`I'am Vijay`)
    }
  }, [vijay])
  
  useEffect(() => {
    
    if (index < nameText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + nameText[index]);
        setIndex(index + 1);
      }, 150);
      return () => clearTimeout(timeout);
    }
  }, [index, nameText]);
    
  // Image carousel effect (changes image every 4 seconds)
  useEffect(() => {
    const imageTimeout = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(imageTimeout);
  }, [images.length]);
   
  
  if (!vijay) {
    return <div>Loading...</div>; 
  }
  
  return (
    <div className="hero">
      <div className="mask">
        {/* Set background image dynamically based on the currentImageIndex */}
        <img className="intro-img active" src={images[currentImageIndex]} alt="IntroImg" />
      </div>
      <div className="content">
        <p className="typed-text">{text}</p> {/* Typing effect */}
        <h1>{vijay.role}</h1>
        <div className="btn-controller">
          <Link to="/Project" className="btn-light">Projects</Link>
          <Link to="/ContactUs" className="btn-light">Contact</Link>
          <button className="btn-light" onClick={GetResumeApi}>Download Resume</button>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
