import React, { useState } from "react";
import axios from "axios";
import DateTime from "./DateTime.js";
import WeatherData from "./WeatherData.js";
import FeatureIcon from "./FeatureIcon.js";
import "./WeatherSearch.css";

export default function WeatherSearch(props) {
  let [weatherData, setWeatherData] = useState({ready: false});
  let [search, setSearch] = useState(null);
  let [coordinates, setCoordinates] = useState({ready:false});

  
  function handleWeather(response){
    //console.log(response)
    setWeatherData(
      { ready: true,
        date: new Date(response.data.dt * 1000),
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
           <div className="container overflow-hidden">
         <div className="WeatherSearch">
           <div className="row">
        <div className="col text-start">
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
          <DateTime date={weatherData.date} />
          
        </div>


            <div className="col text-end">
            <WeatherData data={weatherData} />
            </div>
      
      </div>
  </div>
      <FeatureIcon iconSrc={weatherData.iconSrc} description={weatherData.description} />
      
  </div>
  );} 
  
  else {
    
    let defaultApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=8a986f69d218ec337be3c1ef2d26c6e8&units=metric`;
    axios.get(defaultApiUrl).then(handleWeather);
    return ("Loading...");
  }
  }
  
