import React from "react";

export default function DateTime(props){
    console.log(props);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    let day = days[props.date.getDay()];
    let date = props.date.getDate();
    let month = months[props.date.getMonth()];

    let hours = props.date.getHours();
    let minutes = props.date.getMinutes();

    if (hours < 10) {
        hours = `0${hours}`;
    }
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    let formattedDate = `${day}, ${date} ${month}`;
    let formattedTime = `${hours}:${minutes}`;

    return (
        <div className="DateTime">
            <div className="date-display" id="current-date">{formattedDate}</div>
            <div className="time-display" id="current-time">{formattedTime}</div>
        </div>
    )
}