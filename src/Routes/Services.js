import React from 'react'
import Navbar from '../Components/Navbar';
import Heroimg2 from '../Components/Heroimg2';
import Footer from '../Components/Footer';
import ServiceContent from '../Components/ServiceContent';


const Services = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="OUR SERVICES" text="Recycling e-Waste and Li Batteries"/>
     <ServiceContent/>

      <Footer/>
    </div>
  )
}

export default Services;