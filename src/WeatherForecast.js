import React from "react";
import WeatherIcon from "./WeatherIcon.js";
import "./WeatherForecast.css";

export default function WeatherForecast(){
return (
    <div className="WeatherForecast">
        <div className="row">
            <div className="col">
                <div className="day-name">Sun</div>
                <WeatherIcon icon="13d" size={50} />
                <div className="temperatures">
                    <span className="temp-max">19° | </span>
                    <span className="temp-min">9°</span>
                </div>
            </div>
        </div>
    </div>
)    
}