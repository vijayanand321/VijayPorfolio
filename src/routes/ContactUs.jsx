import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer'; 
import HeroImage2 from '../Components/HeroImage2';
import Form from '../Components/Form';

const ContactUs = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeroImage2 heading="CONTACT" text="Lets have a chat"></HeroImage2>
      <Form></Form>
        <Footer/>
    </div>
  )
}

export default ContactUs