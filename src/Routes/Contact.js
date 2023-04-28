import React from 'react'
import Navbar from '../Components/Navbar';
import Heroimg2 from '../Components/Heroimg2';
import Footer from '../Components/Footer';
import ContactForm from '../Components/ContactForm';


const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="CONTACT US" text="Have any questions or concerns? Get in touch with us today"/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default Contact;
