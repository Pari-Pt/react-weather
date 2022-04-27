import React from "react";
import "./FeatureIcon.css";

export default function FeatureIcon(props){
    return(
    <div className="FeatureIcon">
        <div className="card feat-icon-card">
        <div className="card-body feat-icon-card-body">
          <img
            src={props.iconSrc}
            alt={props.description}
            className="feat-icon img-fluid rounded"
            id="feat-icon"
            />
          <div id="current-description">{props.description}</div>
          <div className="theme-grid"></div>
        </div>
      </div>
      </div>
    );
}