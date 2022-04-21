import React, { useState } from "react";
import axios from "axios";
import DateTime from "./DateTime.js"
import "./WeatherSearch.css";

export default function WeatherSearch(props) {
  let [weatherData, setWeatherData] = useState({ready: false});
  let [search, setSearch] = useState(null);
  let [coordinates, setCoordinates] = useState({ready:false});

  
  function handleWeather(response){
    
    setWeatherData(
      { ready: true,
        name: response.data.name,
        temperature: Math.round(response.data.main.temp),
        wind: Math.round(response.data.wind.speed),
        humidity: response.data.main.humidity,
        description: response.data.weather[0].description,
        iconSrc: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
      });
     
    
    }
    
    
    function updateCity(event) {
      setSearch(event.target.value);
    }
      
    
    function handleSubmit(event) {
      event.preventDefault();
      if (search){
        axios.get(primaryUrl).then(handleWeather);
      } else {
        alert("Please input a city 😃");
      }
    }
    let primaryUrl = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=8a986f69d218ec337be3c1ef2d26c6e8&units=metric`;
    



  function geolocateCity(){
    navigator.geolocation.getCurrentPosition(retrievePosition);

    function retrievePosition(position){
      setCoordinates(
        { ready: true,
          latitude: position.coords.latitude,
         longitude: position.coords.longitude
       });

         if (coordinates.ready) {
           axios.get(geolocationUrl).then(handleWeather);
         }
      }
    }
    let geolocationUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.latitude}&lon=${coordinates.longitude}&appid=8a986f69d218ec337be3c1ef2d26c6e8&units=metric`;
    
    
     
     if (weatherData.ready) { 
       return (
         <div className="WeatherSearch">
      <div className="row">
        <div className="col-6">
          <h1 id="current-city" className="city-name no-wrap">
            {weatherData.name}
          </h1>

          <h2 id="current-temp">{weatherData.temperature}°C</h2>
          <div className="sub-weather" id="humidity">
            Humidity: {weatherData.humidity}%
          </div>
          <div className="sub-weather" id="wind-speed">
            Wind Speed: {weatherData.wind}km/h
          </div>
        </div>
        <div className="col text-end">
          <form id="search-form" onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Search for a City..."
              id="city-search"
              autoComplete="off"
              spellCheck="false"
              className="input text-capitalize"
              onChange={updateCity}
              />

            <input
              type="submit"
              id="submit-button"
              className="submit"
              value="🔎"
              />
          </form>

          <button id="locator-button" onClick={geolocateCity}>
          Current Location
          </button>
          <br />

          <button id="deg-c-button" className="button inactive">
            °C
          </button>
          <button id="deg-f-button" className="button active">
            °F
          </button>
          <button className="button bg-theme-button">
            <span role="img" aria-label="theme-button">
              😜
            </span>
          </button>
          <DateTime />
          
        </div>
      </div>
      <div className="card feat-icon-card">
        <div className="card-body feat-icon-card-body">
          <img
            src={weatherData.iconSrc}
            alt={weatherData.description}
            className="feat-icon rounded"
            id="feat-icon"
            />
          <div id="current-description">{weatherData.description}</div>
          <div className="theme-grid"></div>
        </div>
      </div>
    </div>
  );} 
  
  else {
    
    let defaultApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=8a986f69d218ec337be3c1ef2d26c6e8&units=metric`;
    axios.get(defaultApiUrl).then(handleWeather);
    return ("Loading...");
  }
}
  
