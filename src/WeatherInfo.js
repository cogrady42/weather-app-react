import React from "react";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
            <h1>{props.data.city}</h1>
      
      <div className="row align-items-center">
        <div className="col">
          <ul className="details">
            <li>humidity: {props.data.humidity}% </li>
            <li>wind: {Math.round(props.data.wind)}km/h </li>
          </ul>
        </div>
        <div className="col">
          <div className="temperature">
           <WeatherTemperature celsius={props.data.temperature} />
          </div>
        </div>
        <div className="col">
          <div className="feels-like">
            feels like
            <div className="temperature2">{Math.round(props.data.feelsLike)}°c</div>
          </div>
        </div>
      </div>

      <h2>{props.data.description}</h2>
    </div>
    )
}