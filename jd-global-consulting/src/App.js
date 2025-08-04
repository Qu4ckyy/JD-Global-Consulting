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

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/oNas" element={<AboutUs />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/oferta" element={<Offer />} />
          <Route path="/aktualności" element={<News />} />
          <Route path="/specjalistaDS.strategii" element={<Specialist />} />
          <Route
            path="/twójBiznesPodKontrolą"
            element={<UnderControl />}
          ></Route>
          <Route path="/cyberbezpieczeństwo" element={<CyberSec />}></Route>
          <Route path="/podatki" element={<Taxes />}></Route>
          <Route path="/technologia" element={<Tech />}></Route>
          <Route path="/marketing" element={<Marketing />}></Route>
          <Route path="/finanse" element={<Finances />}></Route>
          <Route
            path="/specjalistaDS.technologii"
            element={<TechSpecialist />}
          ></Route>
          <Route
            path="/specjalistaDS.finansów"
            element={<FinanceSpecialist />}
          ></Route>
          <Route
            path="/specjalistaDS.podatków"
            element={<TaxSpecialist />}
          ></Route>
          <Route
            path="/specjalistaDS.fuzjii"
            element={<FusionSpecialist />}
          ></Route>
          <Route
            path="/specjalistaDS.prawnych"
            element={<LawSpecialist />}
          ></Route>
          <Route
            path="/specjalistaDS.zasobówLudzkich"
            element={<HResourcesSpecialist />}
          ></Route>
          <Route
            path="/specjalistaDS.marketingu"
            element={<MarketingSpecialist />}
          ></Route>
          <Route
            path="/specjalistaDS.rozwoju"
            element={<DevelopmentSpecialist />}
          ></Route>
          <Route
            path="/specjalistaDS.produkcji"
            element={<ProductionSpecialist />}
          ></Route>
          <Route
            path="/specjalistaDS.logistyki"
            element={<LogisticSpecialist />}
          ></Route>
          <Route
            path="/specjalistaDS.funduszyUE"
            element={<UEfundsSpecialist />}
          ></Route>
          <Route path="/biznes" element={<Biznes />}></Route>
          <Route path="/HR" element={<HR />}></Route>
          <Route path="/logistyka" element={<Logistic />}></Route>
          <Route path="/transformacja" element={<Transformation />}></Route>
          <Route path="/ekonomia" element={<Economic />}></Route>
          <Route path="/akutalności/:slug" element={<Article />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
