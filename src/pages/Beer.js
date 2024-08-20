import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Page.css';

const Beer = ({ resetButtons }) => {
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
        <h2>맥주</h2>
        <p>맥주는 발효 과정을 통해 만들어진 알코올 음료로, 보통 보리나 밀 등의 곡물로 만듭니다. 다양한 종류와 맛이 있으며, 세계 각국에서 인기가 있습니다.</p>
        <p>맥주의 역사와 종류, 양조 과정 등을 소개할 수 있습니다.</p>
      </div>
    </div>
  );
};

export default Beer;
