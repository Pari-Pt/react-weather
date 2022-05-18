import React from "react";
import WeatherIcon from "./WeatherIcon.js";


export default function ForecastDay(props){
    console.log(props.data.dt)

    function day(){
        let date = new Date(props.data.dt * 1000);
        let day = date.getDay();
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        return(days[day]);
    }
    function maxTemp(){
        let temperature = Math.round(props.data.temp.max);
        return(`${temperature}°`);
    }

    function minTemp(){
        let temperature = Math.round(props.data.temp.min);
        return(`${temperature}°`);
    }


    return(
        <div className="ForecastDay">
            <div className="ForecastDay-name">{day()}</div>
            <WeatherIcon icon={props.data.weather[0].icon} size={50} />
            <div className="ForecastDay-temps">
                <span className="ForecastDay-temp-max">{maxTemp()} | </span>
                <span className="ForecastDay-temp-min">{minTemp()}</span>
            </div>
        </div>);
}