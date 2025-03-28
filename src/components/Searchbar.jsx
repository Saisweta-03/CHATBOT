import React from 'react';
import './Searchbar.css';

const Searchbar = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Medicines and Essentials</h1>
        
        <div className="search-bar">
          <span className="search-icon">🔍</span>
          <input type="text" placeholder="Search Medicines" />
        </div>
      </div>
    </section>
  );
};

export default Searchbar;
