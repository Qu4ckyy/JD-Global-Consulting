import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./components/MainPage/MainPage";
import AboutUs from "./components/AboutUs/AboutUs";
import Contact from "./components/Contact/Contact";
import Offer from "./components/Offer/Offer";
import News from "./components/News/News";
import Specialist from "./components/Specialists/specialist";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/offer" element={<Offer />} />
          <Route path="/news" element={<News />} />
          <Route path="/specialist" element={<Specialist />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
