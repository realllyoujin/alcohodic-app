import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';  // CSS 파일을 임포트합니다

const goryangjuData = [
  { name: 'Goryangju A', country: 'Korea', alcoholContent: '18%' },
  { name: 'Goryangju B', country: 'Korea', alcoholContent: '20%' },
  { name: 'Goryangju C', country: 'Japan', alcoholContent: '16%' },
  { name: 'Goryangju D', country: 'China', alcoholContent: '17%' },
  // 추가 데이터
];

const Goryangju = ({ resetButtons }) => {
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
        return [...goryangjuData].sort((a, b) => a.country.localeCompare(b.country));
      case 'alcoholContent':
        return [...goryangjuData].sort((a, b) => parseFloat(a.alcoholContent) - parseFloat(b.alcoholContent));
      default:
        return goryangjuData;
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
        <h2>Goryangju</h2>
        <p>
          Goryangju is a traditional Korean alcoholic beverage made from fermented grains. It is known for its rich, distinctive flavor and has a long history in Korean culture. Goryangju is often enjoyed as part of Korean meals or during special occasions.
        </p>
        <p>
          The alcohol content of Goryangju can vary, typically ranging from 16% to 20%. It is commonly consumed in small quantities and is appreciated for its unique taste profile, which can include both sweet and savory notes.
        </p>
        <p>
          Goryangju is a valued part of Korean heritage and continues to be enjoyed by enthusiasts around the world.
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

export default Goryangju;
