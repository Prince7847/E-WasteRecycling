import React from 'react';
import './ServiceContentStyle.css';
// import Assets from '../Assets/e-waste.jpeg';

const ServiceContent = () => {
  return (
    <>
       
       <section className="services-card-section">
      <div className="services-card">
        <img src="" alt="Service 1" />
        <h3>e-Waste Recycling</h3>
        <p>We provide safe and secure recycling solutions for all kinds of
              e-Waste, including computers, laptops, printers, and more.</p>
              <button className='btn'>Learn More</button>
      </div>
      <div className="services-card">
        <img src="/path/to/image2.jpg" alt="Service 2" />
        <h3>Li Battery Recycling</h3>
        <p>We offer Li Battery recycling services that help to conserve
              resources, prevent pollution, and reduce landfill waste.</p>
              <button className='btn'>Learn More</button>
      </div>
      <div className="services-card">
        <img src="/path/to/image3.jpg" alt="Service 3" />
        <h3>IT Asset Disposition</h3>
        <p>Our IT Asset Disposition services help businesses and
              organizations to safely dispose of old or unwanted technology
              equipment.</p>
              <button className='btn'>Learn More</button>
      </div>
    </section>

    </>
  )
}

export default ServiceContent
