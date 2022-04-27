import React from "react";

import "./WeatherData.css";

export default function WeatherData(props){
    console.log(props.data.date)
return(
     <div className="WeatherData">
        
        
        <h1 id="current-city" className="city-name no-wrap">{props.data.name}</h1>
       
        
           
        <div class="hstack gap-3 align-middle">
            <h2 id="current-temp">{props.data.temperature}°C</h2>
            <div className="vr"></div>
            <div className="vstack">
            <div className="sub-weather" id="humidity">Humidity: {props.data.humidity}%</div>
            <div className="sub-weather" id="wind-speed">Speed: {props.data.wind}km/h</div> 
            </div>
        </div>
        </div>

    );
}