import React from 'react';

const Footer = ({ setActiveTab }) => {
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="logo">
            <i className="fas fa-scale-balanced"></i>
            <h3>LegalEase</h3>
          </div>
          <p>Empowering citizens with knowledge of their legal rights through simple, accessible information.</p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><button onClick={() => setActiveTab('home')}>Home</button></li>
            <li><button onClick={() => setActiveTab('rights')}>Know Your Rights</button></li>
            <li><button onClick={() => setActiveTab('emergency')}>Emergency Help</button></li>
            <li><button onClick={() => setActiveTab('about')}>About Us</button></li>
            <li><button onClick={() => setActiveTab('contact')}>Contact</button></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>contact@legalease.org</p>
          <p>+91 9876543210</p>
          <p>New Delhi, India</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© 2023 LegalEase. This is a demo application and does not provide legal advice.</p>
      </div>
    </footer>
  );
};

export default Footer;