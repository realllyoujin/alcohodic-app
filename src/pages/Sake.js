import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';  // CSS 파일을 임포트합니다

const sakeData = [
  { name: 'Sake A', country: 'Japan', alcoholContent: '15%' },
  { name: 'Sake B', country: 'Japan', alcoholContent: '17%' },
  { name: 'Sake C', country: 'China', alcoholContent: '14%' },
  { name: 'Sake D', country: 'Korea', alcoholContent: '16%' },
  // 추가 데이터
];

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
        return [...sakeData].sort((a, b) => parseFloat(a.alcoholContent) - parseFloat(b.alcoholContent));
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
          Sake is a traditional Japanese alcoholic beverage made from fermented rice. It is often referred to as "rice wine," though its production process is more akin to brewing than winemaking. Sake has a wide range of flavors, from sweet and fruity to dry and crisp.
        </p>
        <p>
          The alcohol content of sake typically ranges from 15% to 20%. It can be enjoyed warm or chilled, depending on the type of sake and personal preference. Sake is often paired with Japanese cuisine and can be served in a variety of settings, from casual to formal.
        </p>
        <p>
          Sake is a versatile drink that has gained popularity worldwide, with many varieties available to suit different tastes and occasions.
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

export default Sake;
