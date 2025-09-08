import React from 'react';

const AboutPage = () => {
  return (
    <div className="about-section">
      <h2>About LegalEase</h2>
      
      <div className="about-content">
        <div className="about-text">
          <h3>Our Mission</h3>
          <p>LegalEase aims to bridge the gap between complex legal systems and everyday citizens by providing simple, accessible information about legal rights in multiple languages.</p>
          
          <h3>Who We Help</h3>
          <ul>
            <li>Citizens in rural/remote areas</li>
            <li>First-time legal help seekers</li>
            <li>NGOs or legal aid workers assisting others</li>
          </ul>
          
          <h3>Our Approach</h3>
          <p>We simplify legal jargon into easy-to-understand language, provide scenario-based examples, and make all information available in regional languages to ensure everyone can understand their rights.</p>
        </div>
        
        <div className="about-image">
          <div className="placeholder-image">
            <i className="fas fa-scale-balanced"></i>
            <p>LegalEase Team</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;