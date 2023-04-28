import './HeroimgStyle.css';
import React from 'react'
// import  '../Assets/e-waste.webp';
import { Link} from 'react-router-dom';
const Heroimg = () => {
  return (
    <div className='hero'>
      <div className="mask">
        {/* <img className='into-img'  src={} alt='waste-img'/> */}
      </div>
      <div className='content'>
        <p>Remine India</p>
        <h1>We're a recognized startup working on recycling e-Waste and Li Batteries</h1>
        <div>
          <Link to="/services" className="btn">Services</Link>
          <Link to="/contact" className="btn btn-light">Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default Heroimg;
