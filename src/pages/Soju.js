import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'; 

const sojuData = [
  { name: 'Soju A', country: 'Korea', alcoholContent: '20%' },
  { name: 'Soju B', country: 'Korea', alcoholContent: '25%' },
  { name: 'Soju C', country: 'Japan', alcoholContent: '15%' },
  { name: 'Soju D', country: 'China', alcoholContent: '22%' },
];

const Soju = ({ resetButtons }) => {
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
        return [...sojuData].sort((a, b) => a.country.localeCompare(b.country));
      case 'alcoholContent':
        return [...sojuData].sort((a, b) => parseFloat(a.alcoholContent) - parseFloat(b.alcoholContent));
      default:
        return sojuData;
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
        <h2>Soju</h2>
        <p>
          Soju is a traditional Korean distilled spirit with a long history dating back to the 13th century. It is typically made from grains like rice, barley, or wheat, and has a clear, neutral taste. Soju is often enjoyed straight, in cocktails, or as part of Korean barbecue meals.
        </p>
        <p>
          The alcohol content of soju usually ranges from 16% to 25%, making it a versatile and popular choice for many occasions. It is commonly consumed in small shots or as a base for a variety of cocktails, often accompanied by side dishes and snacks.
        </p>
        <p>
          Soju's smooth taste and lower alcohol content compared to other spirits make it a favorite among many who enjoy a lighter alcoholic beverage. Its popularity has also spread beyond Korea, with many international drinkers discovering its unique qualities.
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

export default Soju;
