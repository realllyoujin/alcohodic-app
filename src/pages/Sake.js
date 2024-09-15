import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'; 

// JSON 파일을 import합니다
import sakeData from './Data/sakeData.json';

const Sake = ({ resetButtons }) => {
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
        return [...sakeData].sort((a, b) => a.country.localeCompare(b.country));
      case 'alcoholContent':
        return [...sakeData].sort((a, b) => a.alcoholContent - b.alcoholContent);
      default:
        return sakeData;
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
        <h2>Sake</h2>
        <p>
          Sake is a traditional Japanese alcoholic beverage made from fermented rice. Its production process involves brewing and fermenting polished rice, and it has a unique taste and aroma that can vary widely depending on the type and brewing method. Sake can be enjoyed warm or chilled, and is often served at various occasions and meals in Japan.
        </p>
        <p>
          The alcohol content of sake typically ranges from 15% to 20%, and it can be classified into various types such as Junmai, Ginjo, and Daiginjo. Each type has its own distinctive flavor profile, influenced by factors like rice variety, water quality, and brewing techniques.
        </p>
        <p>
          Sake pairs well with a range of foods, from sushi and sashimi to grilled meats and savory dishes. Its versatility and rich flavors make it a popular choice among those who appreciate a nuanced and culturally significant beverage.
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

export default Sake;
