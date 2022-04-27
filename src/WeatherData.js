import React from "react";
import FeatureIcon from "./FeatureIcon.js";
import Temperature from "./Temperature.js";
import "./WeatherData.css";

export default function WeatherData(props){
    //console.log(props.data.date)
    //console.log(props.data.iconCode)
return(
     <div className="WeatherData">
        
        <div className="hstack gap-3 align-middle">
        <h1 id="current-city" className="city-name no-wrap">{props.data.name}</h1>
        </div>
       
        
           
        <div className="hstack gap-3 align-middle">
            <Temperature temp={props.data.temperature}/>
            <div className="vr"></div>
            <div className="vstack">
            <div className="sub-weather" id="humidity">Humidity: {props.data.humidity}%</div>
            <div className="sub-weather" id="wind-speed">Speed: {props.data.wind}m/s</div> 
            
            </div>
            </div>
                <FeatureIcon icon={props.data.iconCode}/>
            
            

        </div>
        

    );
}