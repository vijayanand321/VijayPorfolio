import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer'; 
import HeroImage2 from '../Components/HeroImage2';
import PriceCart from '../Components/PriceCart';
import Work from '../Components/Work';


const Project = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeroImage2 heading="PROJECTS" text="Some of my Works"></HeroImage2>
      <Work></Work>
      <PriceCart></PriceCart>
        <Footer/>
    </div>
  )
}

export default Project