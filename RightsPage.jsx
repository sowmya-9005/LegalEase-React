import React, { useState } from 'react';

const RightsPage = ({ searchQuery, setSearchQuery }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Complete legal rights data based on the image
  const legalRights = [
    { 
      title: 'Free education for children 6-14 years', 
      description: 'Under the RTE Act, every child aged 6-14 has the right to free and compulsory education. Including textbooks, uniforms, meals, and a safe learning environment.',
      scenarios: ['If a school denies admission to your child', 'If a school asks for capitation fees'],
      category: 'Education'
    },
    { 
      title: 'Midday Meal for School Children', 
      description: 'Provides free meals to children in government and aided schools to improve nutrition, encourage attendance, and support overall health.',
      scenarios: ['If your child is denied midday meals', 'If the meal quality is poor or unsafe'],
      category: 'Education'
    },
    { 
      title: 'Student Scholarships', 
      description: 'Various central and state government scholarship schemes provide financial support to students from economically weaker sections, minorities, and differently-abled students to continue their education and pursue higher studies.',
      scenarios: ['If you qualify but are denied scholarship', 'If scholarship funds are delayed'],
      category: 'Education'
    },
    { 
      title: 'Adult Literacy Programs', 
      description: 'Adult literacy initiatives aim to reduce illiteracy among adults by providing basic reading, writing, and numeracy skills. These programs improve employment opportunities, empower communities, and promote lifelong learning.',
      scenarios: ['If you want to enroll in literacy programs', 'If programs are not available in your area'],
      category: 'Education'
    },
    { 
      title: 'Protection from domestic violence', 
      description: 'The Protection of Women from Domestic Violence Act (2005) provides legal safeguards against physical, emotional, sexual, or economic abuse by a partner or family member. It ensures access to protection orders, emergency shelter, counseling, and financial support.',
      scenarios: ['If you are facing physical abuse at home', 'If you are being economically deprived by family'],
      category: 'Women'
    },
    { 
      title: 'Right to vote (18+ years)', 
      description: 'Every Indian citizen aged 18 or above has the fundamental right to vote in elections. A valid Voter ID is mandatory for exercising this right. Voting is a civic duty that ensures representation in local, state, and national governments.',
      scenarios: ['If you are denied the right to vote', 'If your name is missing from voter lists'],
      category: 'Fundamental Rights'
    },
    { 
      title: 'Access government information (RTI)', 
      description: 'The Right to Information Act (2005) empowers citizens to seek information from public authorities, promoting transparency and accountability in governance.',
      scenarios: ['If you want to know the status of your application', 'If you want government spending details'],
      category: 'Government'
    },
    { 
      title: 'Resolve land disputes', 
      description: 'Various legal mechanisms exist to resolve land and property disputes, including civil courts, revenue courts, and alternative dispute resolution methods.',
      scenarios: ['If there is a boundary dispute with neighbors', 'If property documents are contested'],
      category: 'Property'
    },
    { 
      title: 'Protection against caste discrimination', 
      description: 'The Constitution of India prohibits discrimination on the basis of caste and provides safeguards through various laws including the Scheduled Castes and Scheduled Tribes (Prevention of Atrocities) Act.',
      scenarios: ['If you face discrimination in employment', 'If you are denied access to public places'],
      category: 'Fundamental Rights'
    },
    { 
      title: 'Right to Information', 
      description: 'You can request information from any government authority by filing an RTI application.',
      scenarios: ['If you want to know the status of your application', 'If you want government spending details'],
      category: 'Government'
    },
    { 
      title: 'Consumer Rights', 
      description: 'As a consumer, you have the right to be protected against hazardous goods and unfair trade practices.',
      scenarios: ['If you bought a defective product', 'If you were overcharged for a service'],
      category: 'Consumer'
    },
    { 
      title: 'Right to Equality', 
      description: 'The Constitution prohibits discrimination on grounds of religion, race, caste, sex, or place of birth.',
      scenarios: ['If you face discrimination in employment', 'If you are denied access to a public place'],
      category: 'Fundamental Rights'
    }
  ];

  // Categories extracted from the image and data
  const categories = ["All", "Education", "Women", "Consumer", "Fundamental Rights", "Government", "Property"];

  // Filter rights based on search query and selected category
  const filteredRights = legalRights.filter(right => {
    const matchesSearch = 
      right.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      right.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      right.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All' || right.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSearchQuery(''); // Clear search when selecting a category
  };

  return (
    <div className="rights-page">
      <div className="rights-header">
        <h1>LegalEase - Know Your Rights</h1>
        <p>Simplified legal information for all citizens</p>
        
        <div className="search-container">
          <div className="search-bar">
            <input 
              type="text" 
              placeholder="Search rights (e.g. 'voting', 'land dispute')" 
              value={searchQuery}
              onChange={handleSearch}
            />
            <button>
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="categories-section">
        <h2>All Categories</h2>
        <div className="categories-list">
          {categories.map((category, index) => (
            <span 
              key={index} 
              className={`category-tag ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => handleCategorySelect(category)}
            >
              {category}
            </span>
          ))}
        </div>
      </div>

      <div className="rights-content">
        <div className="rights-grid">
          {filteredRights.length > 0 ? (
            filteredRights.map((right, index) => (
              <div key={index} className="right-card">
                <h3>{right.title}</h3>
                <p className="right-category">{right.category}</p>
                <p>{right.description}</p>
                <div className="scenarios">
                  <h4>Common Scenarios:</h4>
                  <ul>
                    {right.scenarios.map((scenario, i) => (
                      <li key={i}>{scenario}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))
          ) : (
            <div className="no-results">
              <p>No rights found matching your search. Try a different term or category.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RightsPage;