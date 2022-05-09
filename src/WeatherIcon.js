import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import "./WeatherIcon.css";

export default function FeatureIcon(props){
  //console.log(props)
  const codeMapping = {
    "01d": "CLEAR_DAY",
    "0ln": "CLEAR_NIGHT",
    "02d": "CLOUDY",
    "02n": "CLOUDY",
    "03d": "PARTLY_CLOUDY_DAY",
    "03n": "PARTLY_CLOUDY_NIGHT",
    "04d": "PARTLY_CLOUDY_DAY",
    "04n": "PARTLY_CLOUDY_NIGHT",
    "09d": "RAIN",
    "09n": "RAIN",
    "10d": "RAIN",
    "10n": "RAIN",
    "11d": "RAIN",
    "11n": "RAIN",
    "13d": "SNOW",
    "13n": "SNOW",
    "50d": "FOG",
    "50n": "FOG"
  }

  
    return(
      <div className="FeatureIcon">
      <ReactAnimatedWeather
      icon={codeMapping[props.icon]}
      color="#808080"
      size={props.size}
      animate={true}
    />
    </div>
    );
}