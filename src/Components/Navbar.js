import React from 'react';
import './NavbarStyle.css';
import  {useState} from 'react'
import { Link } from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';

const Navbar = () => {

   const [click, setclick] = useState(false);
   
   const handleClick =()=> setclick(!click);

   const [color, setcolor] = useState(false);
   const changeColor=()=>{
    if (window.scrollY >=100) {
        setcolor(true);
    }else{
        setcolor(false);
    }
   };

   window.addEventListener("scroll", changeColor);



  return (
    <div className={color? "header header-bg": "header"}>
       <Link to="/"><h1>Remine India</h1></Link>
       <ul className={click? "nav-menu active" : 
       "nav-menu"}>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/services">Services</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
        <li>
            <Link to="/contact">Contact</Link>
        </li>
       </ul>
       <div className="hamburger" onClick={handleClick} >
       {click? ( <FaTimes size={20} style={{color:'white'}}/>) 
       : (<FaBars size={20} style={{color:'white'}}/>)}
       
        
       </div>
    </div>
  );
};

export default Navbar;
