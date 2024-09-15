import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import gaoliangData from './Data/gaoliangData.json';  // JSON 파일을 임포트합니다

const Gaoliang = ({ resetButtons }) => {
  const [sortBy, setSortBy] = useState('none');
  const navigate = useNavigate();

  // 뒤로가기 버튼 핸들러
  const handleBack = () => {
    resetButtons();
    navigate('/');
  };

  // 정렬 핸들러
  const handleSort = (criteria) => {
    setSortBy(criteria);
  };

  // 정렬된 데이터 반환
  const sortedData = () => {
    switch (sortBy) {
      case 'country':
        return [...gaoliangData].sort((a, b) => a.country.localeCompare(b.country));
      case 'alcoholContent':
        return [...gaoliangData].sort((a, b) => a.alcoholContent - b.alcoholContent);
      default:
        return gaoliangData;
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
        <h2>Gaoliang</h2>
        <p>
          Gaoliang is a traditional Chinese distilled spirit made from sorghum. It is known for its high alcohol content and strong flavor. Gaoliang is often consumed in small quantities and is a popular choice in Chinese culture.
        </p>
        <p>
          The flavor profile of Gaoliang can vary, but it typically has a robust and complex taste with a distinct aroma. It is commonly enjoyed straight or as part of various traditional Chinese dishes.
        </p>
        <p>
          Gaoliang's strong taste and high alcohol content make it a unique and flavorful choice for those interested in exploring traditional Chinese spirits.
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
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gaoliang;

