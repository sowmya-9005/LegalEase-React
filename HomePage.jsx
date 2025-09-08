import React from 'react';

const HomePage = ({ setActiveTab, searchQuery, setSearchQuery, legalRights }) => {
  return (
    <div className="home-section">
      <div className="hero-banner">
        <h2>Know Your Rights, Protect Yourself</h2>
        <p>LegalEase provides simple, accessible information about your legal rights in multiple languages. Empower yourself with knowledge.</p>
        
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Search in English or your language..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button>
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
      
      <div className="features-section">
        <h3>How LegalEase Helps You</h3>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-gavel"></i>
            </div>
            <h4>Simplified Legal Info</h4>
            <p>Easy-to-understand explanations of your rights without complex legal jargon.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-language"></i>
            </div>
            <h4>Multiple Languages</h4>
            <p>Available in regional languages to ensure everyone can access the information.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-robot"></i>
            </div>
            <h4>Legal Chatbot</h4>
            <p>Get answers to your legal questions instantly with our AI assistant.</p>
          </div>
        </div>
      </div>
      
      <div className="quick-access-section">
        <h3>Quick Access to Important Rights</h3>
        
        <div className="rights-preview">
          {legalRights.slice(0, 3).map((right, index) => (
            <div key={index} className="preview-card">
              <h4>{right.title}</h4>
              <p>{right.description}</p>
              <button 
                className="read-more-btn"
                onClick={() => setActiveTab('rights')}
              >
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;