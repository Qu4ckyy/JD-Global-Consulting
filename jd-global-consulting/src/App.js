import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./components/MainPage/MainPage";
import AboutUs from "./components/AboutUs/AboutUs";
import Contact from "./components/Contact/Contact";
import Offer from "./components/Offer/Offer";
import News from "./components/News/News";
import Specialist from "./components/Specialists/specialist";
import UnderControl from "./components/Offer/moreOffers/yourBiznesUnderControl/underControl";
import CyberSec from "./components/Offer/moreOffers/cyberSec/cyberSec";
import Taxes from "./components/Offer/moreOffers/taxes/taxes";
import Tech from "./components/Offer/moreOffers/tech/tech";
import Marketing from "./components/Offer/moreOffers/marketing/marketing";
import Finances from "./components/Offer/moreOffers/finances/finances";
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
          <Route path="/underControl" element={<UnderControl />}></Route>
          <Route path="/cyberSec" element={<CyberSec />}></Route>
          <Route path="/taxes" element={<Taxes />}></Route>
          <Route path="/tech" element={<Tech />}></Route>
          <Route path="/marketing" element={<Marketing />}></Route>
          <Route path="/finances" element={<Finances />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
