import React from "react";

export default function DateTime(){
    let now = new Date();
    let hours = now.getHours();
    if (hours < 10){
        hours = `0${hours}`;
    }

    let minutes = now.getMinutes();
    if (minutes < 10){
        minutes = `0${minutes}`
    }

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];
    let day = days[now.getDay()];

    let date = now.getDate();

    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Oct", "Nov", "Dec"];
    let month = months[now.getMonth()];

    
    let currentTime = `${hours}:${minutes}`;
    let currentDate = `${day}, ${date} ${month}`;

    return (

        <div className="DateTime">
        <div className="date-display" id="current-date">{currentDate}</div>
          <div className="time-display" id="current-time">{currentTime}</div>
          <div id="sunset-time"></div>
          </div>
          );
}