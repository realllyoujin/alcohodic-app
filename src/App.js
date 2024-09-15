import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Layout from './Layout';
import Soju from './pages/Soju';
import Beer from './pages/Beer';
import Whiskey from './pages/Whiskey';
import Wine from './pages/Wine';
import Sake from './pages/Sake';
import Gaoliang from './pages/Gaoliang';
import './App.css';  // CSS 파일을 임포트합니다

const App = () => {
  const [showButtons, setShowButtons] = React.useState(true);
  const navigate = useNavigate();

  const handleNavigate = () => setShowButtons(false);

  const handleBack = () => setShowButtons(true);

  return (
    <Layout showButtons={showButtons} handleNavigate={handleNavigate} handleBack={handleBack}>
      <Routes>
        <Route
          path="/"
          element={
            <div className="home-page">
              <h2 className="home-title">kind of</h2>
              <div className="button-container">
                <button className="home-button" onClick={() => { handleNavigate(); navigate('/soju'); }}>Soju</button>
                <button className="home-button" onClick={() => { handleNavigate(); navigate('/beer'); }}>Beer</button>
                <button className="home-button" onClick={() => { handleNavigate(); navigate('/whiskey'); }}>Whiskey</button>
                <button className="home-button" onClick={() => { handleNavigate(); navigate('/wine'); }}>Wine</button>
                <button className="home-button" onClick={() => { handleNavigate(); navigate('/sake'); }}>Sake</button>
                <button className="home-button" onClick={() => { handleNavigate(); navigate('/Gaoliang'); }}>Gaoliang</button>
              </div>
            </div>
          }
        />
        <Route path="/soju" element={<Soju resetButtons={() => setShowButtons(true)} />} />
        <Route path="/beer" element={<Beer resetButtons={() => setShowButtons(true)} />} />
        <Route path="/whiskey" element={<Whiskey resetButtons={() => setShowButtons(true)} />} />
        <Route path="/wine" element={<Wine resetButtons={() => setShowButtons(true)} />} />
        <Route path="/sake" element={<Sake resetButtons={() => setShowButtons(true)} />} />
        <Route path="/Gaoliang" element={<Gaoliang resetButtons={() => setShowButtons(true)} />} />
      </Routes>
    </Layout>
  );
};

export default App;
