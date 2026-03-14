import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import './css/bootstrap.min.css'; 
import './css/style.css';
import './css/tourvisor.css';

import SearchPage from './pages/SearchPage';
import TourPage from './pages/TourPage';
import MainPage from './pages/MainPage';

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/tour/:id" element={<TourPage />} /> 
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
