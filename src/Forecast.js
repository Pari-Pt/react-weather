import React from "react";
import axios from "axios";
import "./Forecast.css";

export default function Forecast(props) {
  let latitude = props.latitude
  let longitude = props.longitude
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=currently,minutely,hourly,alerts&appid=ea283403784bc63466a22fcf17ab8227&units=metric`;
  
  axios.get(apiUrl).then(displayForecast);
 
  function displayForecast(response){
    let forecast = response.data.daily;
    console.log(forecast)

    //forecast.forEach(forecastDay, index){
        //if (index >= 1 && < 6){
          //maxTempC = 

      }

    



    //console.log(response)

  
  return (
    <div className="Forecast">
      <div className="card forecast-card">
        <div className="card-body forecast-card-body">
          <div className="forecast-title">5-Day Forecast</div>
          <div className="weather-forecast" id="forecast">{longitude}</div>
        </div>
      </div>
    </div>
  );
}

