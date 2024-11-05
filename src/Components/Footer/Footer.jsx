import React from "react";
import "./Footer.css"; 
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="support-links">
            <h3>Support</h3>
            <ul>
                <a href=""><li>Support Center</li></a> 
                <a href=""><li>Managers</li></a> 
                <a href=""><li>Developers</li></a> 
                <a href=""><li>Service</li></a> 
            </ul>
        </div>
        <div className="social-links">
            <h3>Social Links</h3>
            <ul>
                <a href=""><li><FaFacebook /> Facebok</li></a> 
                <a href=""><li><FaInstagram /> Instagram</li></a> 
                <a href=""><li><FaSquareXTwitter /> X</li></a> 
                <a href=""><li><FaPinterest /> Pinterest</li></a> 
            </ul>
        </div>
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="email-field">
            <input type="email" placeholder="Enter Your E-Mail" />
            <button type="submit">Submit</button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
