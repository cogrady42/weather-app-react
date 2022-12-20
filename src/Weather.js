import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready:false });

    function handleResponse(response) {
        console.log(response.data.main)

        setWeatherData({
            ready: true,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            temperature: response.data.main.temp,
            feelsLike: response.data.main.feels_like,
            description: response.data.weather[0].description,
        });
    }

      if (weatherData.ready) { 
        return (
          <div className="Weather">
            <div className="container-fluid">
              <div className="weather-app-wrapper">
                <div className="weather-app">
                  <div className="row">
                    <div className="col date">tuesday 4:56pm</div>
                    <div className="col">
                      <form className="change-city">
                        <input
                          type="search"
                          placeholder="change city"
                          autoComplete="off"
                          className="change-city"
                          autoFocus="on"
                        />
                        <input
                          type="submit"
                          value="search"
                          className="search-button"
                        />
                      </form>
                    </div>
                  </div>
      
                  <h1>Toronto</h1>
      
                  <div className="row align-items-center">
                    <div className="col">
                      <ul className="details">
                        <li>humidity: {weatherData.humidity}% </li>
                        <li>wind: {Math.round(weatherData.wind)}km/h </li>
                      </ul>
                    </div>
                    <div className="col">
                      <div className="temperature">
                        <span> {Math.round(weatherData.temperature)}</span>
                        <span className="unit">°C</span>
                      </div>
                    </div>
                    <div className="col">
                      <div className="feels-like">
                        feels like
                        <div className="temperature2">{Math.round(weatherData.feelsLike)}°</div>
                      </div>
                    </div>
                  </div>
      
                  <h2>{weatherData.description}</h2>
                </div>
                <div className="sourceLink">
              <a href="https://github.com/cogrady42/react-weather-app" target="blank">
                 Open-source Code  
              </a>
              <span>
                  {" "} by Cecilia O'Grady
              </span>
            </div>
              </div>
           </div>
           </div>
        );
      } else {
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse);
   

    return "Loading..."

      } 
}
       
