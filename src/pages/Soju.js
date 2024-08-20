import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Page.css';

const Soju = ({ resetButtons }) => {
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
        <h2>소주</h2>
        <p>소주는 한국의 전통적인 증류주로, 주로 쌀, 보리, 고구마 등으로 만듭니다. 보통 16~25도 정도의 알코올 도수를 가지며, 맑고 투명한 색깔을 가지고 있습니다.</p>
        <p>소주의 역사와 다양한 종류, 제조 과정 등을 소개할 수 있습니다.</p>
      </div>
    </div>
  );
};

export default Soju;
