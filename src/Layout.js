import React from 'react';
import './Layout.css';

const Layout = ({ showButtons, handleNavigate, handleBack, children }) => {
  return (
    <div className="app">
      {showButtons ? (
        <div className="app-header">
          <h1>Alcohol Dictionary</h1>
          <div className="button-container">
            {/* Buttons are managed in App.js */}
          </div>
        </div>
      ) : (
        <div className="hidden">
          {/* Remove the button from here */}
        </div>
      )}
      <main className="main-content">
        {children}
      </main>
    </div>
  );
};

export default Layout;
