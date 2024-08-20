import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Page.css';

const Wine = ({ resetButtons }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    resetButtons();
    navigate('/');
  };

  return (
    <div className="page-wrapper">
      <div className="page-header">
        <button className="button" onClick={handleBack}>홈으로 돌아가기</button>
      </div>
      <div className="page-content">
        <h2>와인</h2>
        <p>와인은 포도를 발효시켜 만든 알코올 음료로, 다양한 종류와 맛이 있습니다. 레드 와인, 화이트 와인, 로제 와인 등으로 나뉩니다.</p>
        <p>와인의 역사와 종류, 제조 과정 등을 소개할 수 있습니다.</p>
      </div>
    </div>
  );
};

export default Wine;
