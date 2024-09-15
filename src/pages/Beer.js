import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import beerData from './Data/beerData.json'; // JSON 파일 import

const Beer = ({ resetButtons }) => {
  const [sortBy, setSortBy] = useState('none');
  const navigate = useNavigate();
  
  const handleBack = () => {
    resetButtons();
    navigate('/');
  };

  const handleSort = (criteria) => {
    setSortBy(criteria);
  };

  const sortedData = () => {
    switch (sortBy) {
      case 'country':
        return [...beerData].sort((a, b) => a.country.localeCompare(b.country));
      case 'alcoholContent':
        return [...beerData].sort((a, b) => parseFloat(a.alcoholContent) - parseFloat(b.alcoholContent));
      default:
        return beerData;
    }
  };

  return (
    <div className="page-wrapper">
      <div className="search-bar">
        <input type="text" className="search-input" placeholder="Search..." />
        <button className="search-button">
          <span role="img" aria-label="Search">🔍</span>
        </button>
      </div>
      <div className="page-header">
        <button className="button" onClick={handleBack}>Home</button>
      </div>
      <div className="page-content">
        <h2>Beer</h2>
        <p>
          Beer is one of the oldest and most widely consumed alcoholic beverages, made from fermented grains. It comes in many varieties, including lagers, ales, stouts, and IPAs, each offering unique flavors.
        </p>

        <div className="sort-buttons">
          <button className="sort-button" onClick={() => handleSort('country')}>By country</button>
          <button className="sort-button" onClick={() => handleSort('alcoholContent')}>By alcohol content</button>
        </div>

        <div className="data-list">
          {sortedData().map((item, index) => (
            <div key={index} className="data-item">
              <h3>{item.name}</h3>
              <p>Country: {item.country}</p>
              <p>Alcohol Content: {item.alcoholContent}%</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Beer;
