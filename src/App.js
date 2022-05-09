import React from "react";
import WeatherSearch from "./WeatherSearch.js";
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
            
              <WeatherSearch defaultCity="Faro" />
            </div>
          </div>
          <Banner />
        </div>
      </div>
          <Footer />
      </div>
    
  );
}

export default App;


