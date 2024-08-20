import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Page.css';

const Whiskey = ({ resetButtons }) => {
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
        <h2>위스키</h2>
        <p>위스키는 주로 보리, 옥수수, 호밀 등의 곡물로 만들어진 증류주로, 오크통에서 숙성시켜 깊은 맛과 향을 가지고 있습니다.</p>
        <p>위스키의 역사와 다양한 종류, 제조 과정 등을 소개할 수 있습니다.</p>
      </div>
    </div>
  );
};

export default Whiskey;
