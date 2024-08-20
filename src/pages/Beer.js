import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';  // CSS 파일을 임포트합니다

const beerData = [
  { name: 'Beer A', country: 'USA', alcoholContent: '5%' },
  { name: 'Beer B', country: 'Germany', alcoholContent: '4.5%' },
  { name: 'Beer C', country: 'Belgium', alcoholContent: '6%' },
  { name: 'Beer D', country: 'UK', alcoholContent: '4.2%' },
  // 추가 데이터
];

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
          Beer is one of the oldest and most widely consumed alcoholic beverages in the world. It is typically made from cereal grains, such as barley, and is flavored with hops. Beer comes in a variety of styles and flavors, from light lagers to rich stouts.
        </p>
        <p>
          The alcohol content of beer generally ranges from 4% to 6%, though some styles can be much stronger. It is often enjoyed socially and pairs well with a variety of foods. Craft beer has also gained popularity, with many breweries experimenting with new and unique flavors.
        </p>
        <p>
          Beer is typically served chilled and can be enjoyed in a variety of settings, from casual gatherings to fine dining. Its rich history and diverse range of styles make it a favorite among many drinkers worldwide.
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

export default Beer;
