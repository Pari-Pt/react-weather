import React from "react";
import "./DateTime.css";

export default function DateTime(props){
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    let day = days[props.timestamp.getDay()];
    let date = props.timestamp.getDate();
    let month = months[props.timestamp.getMonth()];

    let hours = props.timestamp.getHours();
    let minutes = props.timestamp.getMinutes();

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
            <div className="date-display" id="formatted-date">{formattedDate}</div>
            <div className="time-display" id="formatted-time">Last updated:{" "}{formattedTime} UTC</div>
        </div>
    )
}