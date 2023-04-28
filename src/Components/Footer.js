import React from "react";
import "./FooterStyle.css";
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>123 office Number</p>
              <p>India</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              1-325-365132
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              remineindia@gmail.com
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>About the Company</h4>
          <p>
             Remine India is a recognized startup that is dedicated to
              recycling e-Waste and Li Batteries. Our mission is to provide safe
              and secure recycling solutions that help to conserve resources,
              prevent pollution, and reduce landfill waste. We believe in
              protecting the environment and making a positive impact on the
              world.
          </p>
          <div className="social">
          <FaFacebook
                size={30}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
               <FaTwitter
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
               <FaLinkedin
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
