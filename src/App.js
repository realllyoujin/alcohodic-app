import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Soju from './pages/Soju';
import Beer from './pages/Beer';
import Whiskey from './pages/Whiskey';
import Wine from './pages/Wine';
import Layout from './Layout';
import './App.css';

const App = () => {
  const [showButtons, setShowButtons] = useState(true);
  const navigate = useNavigate();

  const handleNavigate = () => setShowButtons(false);
  const handleBack = () => {
    setShowButtons(true);
    navigate('/');
  };

  return (
    <Layout showButtons={showButtons} handleNavigate={handleNavigate} handleBack={handleBack}>
      <Routes>
        <Route
          path="/"
          element={
            <div className="home-page">
              <form className="search-form">
                <input className="search-input" type="text" placeholder="Search..." />
                <button className="search-button" type="button">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.707 20.293l-4.388-4.388a8.979 8.979 0 0 0 1.4-5.326C18.719 4.546 14.173 0 8.36 0 3.218 0 0 3.218 0 8.36s3.218 8.36 8.36 8.36c2.016 0 3.87-.755 5.326-1.4l4.388 4.388a1 1 0 0 0 1.414-1.414zM8.36 14.6a6.24 6.24 0 0 1-6.24-6.24 6.24 6.24 0 0 1 6.24-6.24 6.24 6.24 0 0 1 6.24 6.24 6.24 6.24 0 0 1-6.24 6.24z"/></svg>
                </button>
              </form>
              <h2 className="home-title">kind of</h2>
              <div className="button-container">
                <button className="home-button" onClick={() => { handleNavigate(); navigate('/soju'); }}>Soju</button>
                <button className="home-button" onClick={() => { handleNavigate(); navigate('/beer'); }}>Beer</button>
                <button className="home-button" onClick={() => { handleNavigate(); navigate('/whiskey'); }}>Whiskey</button>
                <button className="home-button" onClick={() => { handleNavigate(); navigate('/wine'); }}>Wine</button>
              </div>
            </div>
          }
        />
        <Route path="/soju" element={<Soju resetButtons={() => setShowButtons(true)} />} />
        <Route path="/beer" element={<Beer resetButtons={() => setShowButtons(true)} />} />
        <Route path="/whiskey" element={<Whiskey resetButtons={() => setShowButtons(true)} />} />
        <Route path="/wine" element={<Wine resetButtons={() => setShowButtons(true)} />} />
      </Routes>
    </Layout>
  );
};

export default App;
