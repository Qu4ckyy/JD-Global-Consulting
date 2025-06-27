import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import "./App.css";
import MainPage from "./components/MainPage/MainPage";
import AboutUs from "./components/AboutUs/AboutUs";
import Contact from "./components/Contact/Contact";
import Offer from "./components/Offer/Offer";
import News from "./components/News/News";
import UnderControl from "./components/Offer/moreOffers/yourBiznesUnderControl/underControl";
import CyberSec from "./components/Offer/moreOffers/cyberSec/cyberSec";
import Taxes from "./components/Offer/moreOffers/taxes/taxes";
import Tech from "./components/Offer/moreOffers/tech/tech";
import Marketing from "./components/Offer/moreOffers/marketing/marketing";
import Finances from "./components/Offer/moreOffers/finances/finances";
import ScrollToTop from "./components/ScrollToTop";
import Specialist from "./components/Specialists/strategy/specialist";
import TechSpecialist from "./components/Specialists/techSpec/techSpec";
import FinanceSpecialist from "./components/Specialists/financeSpec/financeSpec";
import TaxSpecialist from "./components/Specialists/taxSpec/taxSpec";
import FusionSpecialist from "./components/Specialists/fusionSpec/fusionSpec";
import LawSpecialist from "./components/Specialists/lawSpec/lawSpec";
import HResourcesSpecialist from "./components/Specialists/hResourcesSpec/hResourcesSpec";
import MarketingSpecialist from "./components/Specialists/marketingSpec/marketingSpec";
import DevelopmentSpecialist from "./components/Specialists/developmentSpec/developmentSpec";
import ProductionSpecialist from "./components/Specialists/productionSpec/productionSpec";
import LogisticSpecialist from "./components/Specialists/logisticSpec/logisticSpec";
import UEfundsSpecialist from "./components/Specialists/UEfundsSpec/UEfundsSpec";
import Biznes from "./components/Offer/moreOffers/biznes/biznes";
import HR from "./components/Offer/moreOffers/HR/HR";
import Logistic from "./components/Offer/moreOffers/logistic/logistic";
import Transformation from "./components/Offer/moreOffers/transformation/transformation";
import Economic from "./components/Offer/moreOffers/economic/economic";
import Article from "./components/Article/Article";
import Login from "./components/CMS/Login";
import CMS from "./components/CMS/CMS";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <Router>
      <ScrollToTop />
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
          <Route path="/techSpecialist" element={<TechSpecialist />}></Route>
          <Route
            path="/financeSpecialist"
            element={<FinanceSpecialist />}
          ></Route>
          <Route path="/taxSpecialist" element={<TaxSpecialist />}></Route>
          <Route
            path="/fusionSpecialist"
            element={<FusionSpecialist />}
          ></Route>
          <Route path="/lawSpecialist" element={<LawSpecialist />}></Route>
          <Route
            path="/HumanResourcesSpecialist"
            element={<HResourcesSpecialist />}
          ></Route>
          <Route
            path="/marketingSpecialist"
            element={<MarketingSpecialist />}
          ></Route>
          <Route
            path="/developmentSpecialist"
            element={<DevelopmentSpecialist />}
          ></Route>
          <Route
            path="/productionSpecialist"
            element={<ProductionSpecialist />}
          ></Route>
          <Route
            path="/logisticSpecialist"
            element={<LogisticSpecialist />}
          ></Route>
          <Route
            path="/UEfundsSpecialist"
            element={<UEfundsSpecialist />}
          ></Route>
          <Route path="/biznes" element={<Biznes />}></Route>
          <Route path="/HR" element={<HR />}></Route>
          <Route path="/logistic" element={<Logistic />}></Route>
          <Route path="/transformation" element={<Transformation />}></Route>
          <Route path="/economic" element={<Economic />}></Route>
          <Route path="/news/:slug" element={<Article />} />
          <Route
            path="/login"
            element={<Login onAuth={() => setIsAuth(true)} />}
          ></Route>
          <Route
            path="/cms/*"
            element={isAuth ? <CMS /> : <Navigate to="/login" replace />}
          />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
