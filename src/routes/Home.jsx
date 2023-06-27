import React from 'react';
import Navbar from '../Components/Navbar';
import HeroImage from '../Components/HeroImage';
import Footer from '../Components/Footer'; 
import Work from "../Components/Work"
import AboutContent from '../Components/AboutContent';
import PriceCart from '../Components/PriceCart';
const Home = () => {
  return (
    <div>
        <Navbar></Navbar>
        <HeroImage></HeroImage>
        <Work></Work>
        <AboutContent></AboutContent>
        <PriceCart></PriceCart>
        <Footer/>
    </div>
  )
}

export default Home