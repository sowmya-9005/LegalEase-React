import React, { useState } from 'react';

const EmergencyPage = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [showEmergencyModal, setShowEmergencyModal] = useState(false);
  const [emergencyCalling, setEmergencyCalling] = useState(null);

  // Emergency resources data
  const emergencyResources = [
    {
      id: 'legal-aid',
      title: 'Legal Aid',
      description: 'Find legal assistance for those who can\'t afford it.',
      icon: 'fas fa-gavel',
      details: 'Free or low-cost legal services for eligible individuals. Assistance with court representation, legal advice, and document preparation.',
      contacts: [
        { name: 'National Legal Services Authority', number: '011-23382778' },
        { name: 'State Legal Services Authority', number: 'Check local number' }
      ]
    },
    {
      id: 'counselors',
      title: 'Counselors',
      description: 'Immediate protection and support for domestic abuse victims.',
      icon: 'fas fa-hands-helping',
      details: 'Trained professionals providing emotional support, crisis intervention, and safety planning for those experiencing domestic violence.',
      contacts: [
        { name: 'Domestic Violence Helpline', number: '181' },
        { name: 'Crisis Counseling', number: '022-27546669' }
      ]
    },
    {
      id: 'child-protection',
      title: 'Child Protection',
      description: 'Report child abuse or exploitation to authorities.',
      icon: 'fas fa-child',
      details: 'Immediate intervention for children at risk. Anonymous reporting available in most regions.',
      contacts: [
        { name: 'Child Helpline', number: '1098' },
        { name: 'Child Welfare Committee', number: 'Check local number' }
      ]
    },
    {
      id: 'cva',
      title: 'Others (CVA)',
      description: 'Crime Victim Assistance programs and resources.',
      icon: 'fas fa-first-aid',
      details: 'Support services for victims of crime including compensation, counseling, and legal assistance.',
      contacts: [
        { name: 'Victim Assistance', number: '155345' },
        { name: 'Crime Stopper', number: '1090' }
      ]
    }
  ];

  // Essential contacts data
  const essentialContacts = [
    { name: 'Police Emergency', number: '100', description: 'Immediate police response' },
    { name: 'Women Helpline', number: '1091', description: '24/7 support for women in distress' },
    { name: 'Emergency Helpline', number: '112', description: 'All-in-one emergency number' },
    { name: 'Human Trafficking', number: '1091', description: 'Report human trafficking cases' },
    { name: 'Medical Emergency', number: '108', description: 'Ambulance and medical help' },
    { name: 'Mental Health', number: '080-46110007', description: 'Crisis support and counseling' }
  ];

  const toggleSection = (sectionId) => {
    if (expandedSection === sectionId) {
      setExpandedSection(null);
    } else {
      setExpandedSection(sectionId);
    }
  };

  const handleEmergencyHelp = () => {
    setShowEmergencyModal(true);
    setEmergencyCalling({ number: '112', name: 'Emergency Services' });
    
    // Simulate emergency call process
    setTimeout(() => {
      setShowEmergencyModal(false);
      setEmergencyCalling(null);
      alert('Emergency services have been alerted. Help is on the way.');
    }, 4000);
  };

  return (
    <div className="emergency-page">
      <div className="emergency-header">
        <h1>Immediate Legal Assistance</h1>
        <p>If you're in immediate danger or need urgent help, use these resources:</p>
        
        <div className="emergency-call-buttons">
          <div className="emergency-reference">
            <i className="fas fa-phone"></i> Police: 100
          </div>
          <div className="emergency-reference">
            <i className="fas fa-phone"></i> Women Helpline: 1091
          </div>
        </div>
      </div>

      <div className="emergency-content">
        <div className="emergency-resources">
          <h2>Emergency Resources</h2>
          
          {emergencyResources.map(resource => (
            <div key={resource.id} className="resource-card">
              <div className="resource-header" onClick={() => toggleSection(resource.id)}>
                <div className="resource-title">
                  <i className={resource.icon}></i>
                  <h3>{resource.title}</h3>
                </div>
                <i className={`fas ${expandedSection === resource.id ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
              </div>
              
              <p className="resource-description">{resource.description}</p>
              
              {expandedSection === resource.id && (
                <div className="resource-details">
                  <p>{resource.details}</p>
                  
                  <div className="resource-contacts">
                    <h4>Contacts:</h4>
                    {resource.contacts.map((contact, index) => (
                      <div key={index} className="contact-item">
                        <span className="contact-name">{contact.name}:</span>
                        <span className="contact-number">{contact.number}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="essential-contacts">
          <h2>Essential Contacts</h2>
          
          <div className="contacts-grid">
            {essentialContacts.map((contact, index) => (
              <div key={index} className="contact-card">
                <h3>{contact.name}</h3>
                <p>{contact.description}</p>
                <div className="contact-reference">
                  <i className="fas fa-phone"></i> {contact.number}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="emergency-footer">
        {/* HIGHLIGHTED SAFETY TIPS SECTION */}
        <div className="safety-tips">
          <h3>
            <span role="img" aria-label="warning">⚠️</span> 
            Important Safety Information
          </h3>
          <ul>
            <li>If in immediate danger, find a safe location first</li>
            <li>Provide clear information about your location to emergency services</li>
            <li>If unable to speak, dial the emergency number and leave the line open</li>
            <li>Document incidents if safe to do so</li>
            <li>Reach out to trusted friends or family members</li>
          </ul>
        </div>
      </div>

      {/* Emergency Calling Modal */}
      {showEmergencyModal && (
        <div className="emergency-modal">
          <div className="modal-content">
            <div className="calling-animation">
              <div className="phone-icon">
                <i className="fas fa-phone"></i>
              </div>
              <div className="pulsating-circle"></div>
            </div>
            
            <h3>Calling {emergencyCalling?.name}</h3>
            <p>{emergencyCalling?.number}</p>
          </div>
        </div>
      )}

      
    </div>
  );
};

export default EmergencyPage;