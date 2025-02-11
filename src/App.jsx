import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import FlipperModel from "./flipper.jsx";
import Home from "./home.jsx";

const App = () => {
  return (
    <Router>
      <RedirectHandler />
      <Routes>
        <Route path="/" element={<FlipperModel />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

const RedirectHandler = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isMobile = /Mobi|Android/i.test(navigator.userAgent) || window.innerWidth < 768;
    if (isMobile && window.location.pathname === "/") {
      navigate("/home", { replace: true });
    }
  }, [navigate]);

  return null; // Doesn't render anything, just handles redirection
};

export default App;
