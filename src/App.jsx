import React from 'react';
import './App.css';
import FlipperModel from './flipper.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './home.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define routes */}
        <Route path="/" element={<FlipperModel />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
