import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer'; 
import HeroImage2 from '../Components/HeroImage2';
import AboutContent from '../Components/AboutContent';
const About = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeroImage2 heading="About" text="An aspiring Full Stack Developer"></HeroImage2>
      <AboutContent></AboutContent>
        <Footer/>
    </div>
  )
}

export default About