import React from "react";
import "./WeatherData.css";

export default function WeatherData(props){
    console.log(props)
return(
     <div className="WeatherData">
        
        
        <h1 id="current-city" className="city-name no-wrap">{props.name}</h1>
        <h2 id="current-temp">{props.temperature}°C</h2>
        <div className="sub-weather" id="humidity">
        Humidity: {props.humidity}%
        </div>
        <div className="sub-weather" id="wind-speed">Speed: {props.wind}km/h
        </div>
       
        
    </div>

    );
}