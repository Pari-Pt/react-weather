import React, {useState} from "react";

import WeatherIcon from "./WeatherIcon.js";
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
console.log(forecast[1].temp.max);
        return (
            <div className="WeatherForecast">
        <div className="row">
            <div className="col">
                <div className="day-name">Mon</div>
                <WeatherIcon icon="13d" size={50} />
                <div className="temperatures">
                    <span className="temp-max">19° | </span>
                    <span className="temp-min">9°</span>
                </div>
            </div>
        </div>
    </div>
        );

    } else {
        let latitude = props.coordinates.lat;
        let longitude = props.coordinates.lon;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,hourly,alerts&appid=8a986f69d218ec337be3c1ef2d26c6e8&units=metric`;
        
        axios.get(apiUrl).then(handleResponse);
        
        return (null);

    }
}