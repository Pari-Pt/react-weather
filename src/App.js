import React from "react";
import Search from "./Search.js";
import Forecast from "./Forecast.js";
import Banner from "./Banner.js";
import Footer from "./Footer.js";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <div className="container main-container">
        <div className="card main-card day-time" id="primary-card">
          <div className="card-body main-card-body">
            <div className="container overflow-hidden">
              <Search />
            </div>
          </div>
          <Forecast />
          <Banner />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;


