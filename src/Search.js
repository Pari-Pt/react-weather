import React, { useState } from "react";
import axios from "axios";
import "./Search.css";

export default function Form() {
  let [search, setSearch] = useState(null);
  let [name, setName] = useState("Porto");
  let [temp, setTemp] = useState(12);
  let [humidity, setHumidity] = useState("...");
  let [windSpeed, setWindSpeed] = useState("...");
  let [latitude, setLatitude] = useState(null);
  let [longitude, setLongitude] = useState(null);
  let [icon, setIcon] = useState("04d");
  let [description, setDescription] = useState(null);

  let primaryUrl = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=ea283403784bc63466a22fcf17ab8227&units=metric`;

  function handleSubmit(event) {
    event.preventDefault();
    if (search) {
      axios.get(primaryUrl).then(displayWeather);
    } else {
      alert("Please input a city.");
    }
  }

  function updateCity(event) {
    setSearch(event.target.value);
  }

  function geolocateCity() {
    navigator.geolocation.getCurrentPosition(retrievePosition);
  }

  function retrievePosition(position) {
    //console.log(position);
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
    let gelocationUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=ea283403784bc63466a22fcf17ab8227&units=metric`;
    axios.get(gelocationUrl).then(displayWeather);
  }

  function displayWeather(response) {
    console.log(response);
    setTemp(Math.round(response.data.main.temp));
    setName(response.data.name);
    setHumidity(response.data.main.humidity);
    setWindSpeed(Math.round(response.data.wind.speed));
    setIcon(response.data.weather[0].icon);
    setDescription(response.data.weather[0].setDescription);
  }

  return (
    <div className="Search">
      <div className="row">
        <div className="col-6">
          <h1 id="current-city" className="city-name no-wrap">
            {name}
          </h1>

          <h2 id="current-temp">{temp}°C</h2>
          <div className="sub-weather" id="humidity">
            Humidity: {humidity}%
          </div>
          <div className="sub-weather" id="wind-speed">
            Wind Speed: {windSpeed}km/h
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
              className="input"
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
          <div className="date-display" id="current-date"></div>
          <div className="time-display" id="current-time"></div>
          <div id="sunset-time"></div>
        </div>
      </div>
      <div className="card feat-icon-card">
        <div className="card-body feat-icon-card-body">
          <img
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            alt=""
            className="feat-icon rounded"
            id="feat-icon"
          />
          <div id="current-description">{description}</div>
          <div className="theme-grid"></div>
        </div>
      </div>
    </div>
  );
}
