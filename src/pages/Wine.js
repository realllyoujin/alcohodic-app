import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';  // CSS 파일을 임포트합니다

const wineData = [
  { name: 'Wine A', country: 'France', alcoholContent: '12.5%' },
  { name: 'Wine B', country: 'Italy', alcoholContent: '13%' },
  { name: 'Wine C', country: 'Spain', alcoholContent: '14%' },
  { name: 'Wine D', country: 'USA', alcoholContent: '13.5%' },
  // 추가 데이터
];

const Wine = ({ resetButtons }) => {
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
        return [...wineData].sort((a, b) => a.country.localeCompare(b.country));
      case 'alcoholContent':
        return [...wineData].sort((a, b) => parseFloat(a.alcoholContent) - parseFloat(b.alcoholContent));
      default:
        return wineData;
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
        <h2>Wine</h2>
        <p>
          Wine is an alcoholic beverage made from fermented grapes or other fruits. The process of making wine involves crushing the fruit and fermenting the juice with yeast. There are many types of wine, including red, white, and rosé, each with its own unique flavor profile and characteristics.
        </p>
        <p>
          The alcohol content of wine typically ranges from 9% to 16%, depending on the type and production method. Wine can be enjoyed on its own or paired with a variety of foods to enhance the dining experience.
        </p>
        <p>
          Different regions around the world produce wines with distinct flavors and qualities, making wine tasting a popular and enjoyable activity. From bold reds to crisp whites, wine offers a diverse range of options for enthusiasts and casual drinkers alike.
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
              <p>Alcohol Content: {item.alcoholContent}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wine;

