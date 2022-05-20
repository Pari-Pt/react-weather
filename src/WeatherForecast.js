import React, {useState, useEffect} from "react";
import ForecastDay from "./ForecastDay.js";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props){
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() => {
        setLoaded(false)
    }, [props.coordinates]
    );

    function handleResponse(response){
        setLoaded(true);
        setForecast(response.data.daily);
    }
    
    function loadForecast(){
        let apiKey = `ea283403784bc63466a22fcf17ab8227`;
        let latitude = props.coordinates.lat;
        let longitude = props.coordinates.lon;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,hourly,alerts&appid=${apiKey}&units=metric`;
        
        axios.get(apiUrl).then(handleResponse);
    }
    
    if (loaded) {
        return (
        <div className="WeatherForecast">
            <div className="row mt-5">
            {forecast.map(function (dailyForecast, index) {
                if (index > 0 && index < 6) {
                    return (
                        <div className="col" key={index}>
                        <ForecastDay data={dailyForecast} />
                        </div>
                    );
                }
                return null;
            })}
            
        </div>
    </div>
        );

    } else {
        loadForecast()
        
        return null;

    }
}