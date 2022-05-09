import React, { useState } from "react";
import axios from "axios";
import WeatherData from "./WeatherData.js";
import WeatherForecast from "./WeatherForecast.js";
import DateTime from "./DateTime.js";
import "./WeatherSearch.css";

export default function WeatherSearch(props) {
  let [weatherData, setWeatherData] = useState({ready: false});
  let [search, setSearch] = useState(null);
  let [coordinates, setCoordinates] = useState({ready:false});

  
  function handleWeather(response){
    
    setWeatherData(
      { ready: true,
        date: new Date(response.data.dt * 1000),
        name: response.data.name,
        temperature: Math.round(response.data.main.temp),
        wind: Math.round(response.data.wind.speed),
        humidity: response.data.main.humidity,
        description: response.data.weather[0].description,
        iconCode: response.data.weather[0].icon
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
  }

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

    let geolocationUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${coordinates.latitude}&lon=${coordinates.longitude}&appid=8a986f69d218ec337be3c1ef2d26c6e8&units=metric`;
    
    
     
     if (weatherData.ready) { 
       return (
           
         <div className="WeatherSearch">
          <div className="row">
          <div className="col-9">
          <form id="search-form" className="mb-3" onSubmit={handleSubmit}>
            <span>
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
              value="🔎Go"
              />
             </span>
          </form>
          </div>

          <div className="col-3 button-bundle text-end">
            <button id="locator-button"  onClick={geolocateCity}>
            <span role="img" aria-label="pin">📍Find Me</span>
            </button>
          </div> 
        </div>
            <DateTime timestamp={weatherData.date}/>
            <WeatherData data={weatherData} />
            <WeatherForecast />
  </div>
   );} 

  
  else {
    
    let defaultApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=8a986f69d218ec337be3c1ef2d26c6e8&units=metric`;
    axios.get(defaultApiUrl).then(handleWeather);
    return ("Loading...");
  }
  }
  
