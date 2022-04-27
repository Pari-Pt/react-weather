import React, {useState} from "react";
import "./Temperature.css";

export default function Temperature(props){
    const [unit, setUnit] = useState("celsius");

    function showFahrenheit(event){
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function showCelsius(event){
        event.preventDefault();
        setUnit("celsius");
    }

    if (unit === "celsius"){
        return(
            
        <div className="Temperature">
             <div className="hstack gap-2 align-middle">
            <h2 id="current-temp">{props.temp}</h2>

            <span className="unit-link">
           
                
                °C
              
              
              </span>

              <div className="vr small-vr"></div>

              <span className="unit-link">
            
                  <a href="/" onClick={showFahrenheit}>
                °F
              </a>
             
            </span>
            </div>
        </div>
              );
    } else {
        let fahrenheit = Math.round((props.temp*9)/5+32);
        return(
            <div className="Temperature">
             <div className="hstack gap-2 align-middle">
            <h2 id="current-temp">{Math.round(fahrenheit)}</h2>

            <span className="unit-link">
           
                <a href="/"  onClick={showCelsius} >
                °C
              </a>
              
              </span>

              <div className="vr small-vr"></div>

              <span className="unit-link">
            
                  
                °F
              
             
            </span>
            </div>
        </div>
        );
    }
}