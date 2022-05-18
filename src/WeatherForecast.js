import React, {useState} from "react";

import WeatherIcon from "./WeatherIcon.js";
import ForecastDay from "./ForecastDay.js";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props){
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    function handleResponse(response){
        setLoaded(true);
        setForecast(response.data.daily);
    }
    
    if (loaded) {
        return (
            <div className="WeatherForecast">
        <div className="row">
            <div className="col">
                <ForecastDay data={forecast[0]}/>
            </div>
        </div>
    </div>
        );

    } else {
        let apiKey = `ea283403784bc63466a22fcf17ab8227`;
        let latitude = props.coordinates.lat;
        let longitude = props.coordinates.lon;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,hourly,alerts&appid=${apiKey}&units=metric`;
        
        axios.get(apiUrl).then(handleResponse);
        
        return (null);

    }
}