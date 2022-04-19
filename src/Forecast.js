import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <div className="card forecast-card">
        <div className="card-body forecast-card-body">
          <div className="forecast-title">5-Day Forecast</div>
          <div className="weather-forecast" id="forecast"></div>
        </div>
      </div>
    </div>
  );
}
