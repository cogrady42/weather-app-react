import React from "react";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon"

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
          <div className="WeatherIcon">
            <WeatherIcon code={props.data.icon} />
            <h2>{props.data.description}</h2>
          </div>
        </div>
      </div>

      
    </div>
    )
}