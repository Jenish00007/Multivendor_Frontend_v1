import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <div className="logo-circle-small">
                <span className="logo-text-small">BNSN</span>
              </div>
              <p className="footer-tagline">Buy, Sell, and Negotiate</p>
            </div>
            <p className="footer-description">
              Your trusted marketplace for buying and selling. Connect with local buyers and sellers in your community.
            </p>
          </div>
          
          
          
          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms-conditions">Terms & Conditions</Link></li>
              <li><Link to="/delete-account">Delete Account</Link></li>
            </ul>
          </div>
          
          <div className="footer-section about-section">
            <h4>About BNSN</h4>
            <p>
              We help India’s local sellers and shoppers meet in a safe, transparent environment.
              Discover trusted listings, negotiate confidently, and grow your business with our multivendor tools.
            </p>
           
          </div>

          <div className="footer-section contact-section">
            <h4>Contact Us</h4>
            <ul className="contact-info">
              <li>
                <strong>Email</strong>
                <span>bnsn.info7@gmail.com</span>
              </li>
              <li>
                <strong>Support Hours</strong>
                <span>Mon-Fri · 9 AM – 6 PM IST</span>
              </li>
              <li>
                <strong>Location</strong>
                <span>Bengaluru, India</span>
              </li>
            </ul>
        
          </div>

        

          <div className="footer-section call-section">
            <h4>Call Us</h4>
            <p className="footer-description">
              Need quick assistance? Speak with our support team directly for onboarding and order-related queries.
            </p>
            <a href="tel:+919741906407" className="footer-call-link">📞 +91 97419 06407</a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} BNSN. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

