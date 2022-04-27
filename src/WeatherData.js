import React from "react";
import FeatureIcon from "./FeatureIcon.js";
import "./WeatherData.css";

export default function WeatherData(props){
    //console.log(props.data.date)
    //console.log(props.data.iconCode)
return(
     <div className="WeatherData">
        
        <div className="hstack gap-3 align-middle">
        <h1 id="current-city" className="city-name no-wrap">{props.data.name}</h1>
        <FeatureIcon code={props.data.iconCode}/>
        </div>
       
        
           
        <div className="hstack gap-3 align-middle">
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