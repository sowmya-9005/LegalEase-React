import React, { useState } from 'react';
import './LegalEaseApp.css';
import Header from './Header';
import Footer from './Footer';
import HomePage from './HomePage';
import RightsPage from './RightsPage';
import EmergencyPage from './EmergencyPage';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';

const LegalEaseApp = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [chatMessage, setChatMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { sender: 'bot', text: 'Hello! I am your legal assistant. How can I help you today?' }
  ]);
  const [searchQuery, setSearchQuery] = useState('');

  // Sample legal rights data
  const legalRights = [
    // ... (same as before)
  ];

  // Sample emergency contacts
  const emergencyContacts = [
    // ... (same as before)
  ];

  // Sample languages
  const languages = ['English', 'Hindi', 'Bengali', 'Telugu', 'Tamil', 'Marathi', 'Gujarati'];

  const handleSendMessage = () => {
    // ... (same as before)
  };

  return (
    <div className="legal-ease-app">
      <Header 
        activeTab={activeTab} 
        setActiveTab={setActiveTab}
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
        languages={languages}
      />
      
      <main className="app-main">
        {activeTab === 'home' && (
          <HomePage 
            setActiveTab={setActiveTab}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            legalRights={legalRights}
          />
        )}
        
        {activeTab === 'rights' && (
          <RightsPage 
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            legalRights={legalRights}
          />
        )}
        
        {activeTab === 'emergency' && (
          <EmergencyPage emergencyContacts={emergencyContacts} />
        )}
        
        {activeTab === 'about' && <AboutPage />}
        
        {activeTab === 'contact' && <ContactPage />}
      </main>
      
      <Footer setActiveTab={setActiveTab} />
    </div>
  );
};

export default LegalEaseApp;