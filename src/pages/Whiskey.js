import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import whiskeyData from './Data/whiskeyData.json';
import '../App.css';  // CSS 파일을 임포트합니다

const Whiskey = ({ resetButtons }) => {
  const [sortBy, setSortBy] = useState('none');
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // JSON 데이터 세팅
    setData(whiskeyData);
  }, []);

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
        return [...data].sort((a, b) => a.country.localeCompare(b.country));
      case 'alcoholContent':
        return [...data].sort((a, b) => parseFloat(a.alcoholContent) - parseFloat(b.alcoholContent));
      default:
        return data;
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
        <h2>Whiskey</h2>
        <p>
          Whiskey is a distilled alcoholic beverage made from fermented grain mash. The grains used can include barley, corn, rye, and wheat. The production process involves aging the whiskey in wooden casks, which imparts unique flavors and colors to the final product.
        </p>
        <p>
          Whiskey is known for its rich, complex flavors that vary depending on the type and region of production. Scotch whiskey, bourbon, and Irish whiskey are some of the most well-known varieties. Each type has its own distinctive characteristics, influenced by factors such as ingredients, distillation process, and aging time.
        </p>
        <p>
          Whiskey can be enjoyed neat, on the rocks, or as part of various cocktails. Its diverse range of flavors and styles makes it a popular choice for connoisseurs and casual drinkers alike.
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

export default Whiskey;
