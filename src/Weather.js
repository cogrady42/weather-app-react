import React from "react";
import "./Weather.css";

export default function Weather() {
        let weatherData = {
          date: "Wednesday 10:21pm",
          city: "Toronto",
          temperature: 19,
          humidity: 69,
          wind: 10,
          feelslike: 25,
          description: "Cloudy"
        };
      
        return (
          <div className="Weather">
            <div className="container-fluid">
              <div className="weather-app-wrapper">
                <div className="weather-app">
                  <div className="row">
                    <div className="col date">{weatherData.date}</div>
                    <div className="col">
                      <form className="change-city">
                        <input
                          type="search"
                          placeholder="change city"
                          autocomplete="off"
                          className="change-city"
                        />
                        <input
                          type="submit"
                          value="search"
                          className="search-button"
                        />
                        <button className="search-button">location</button>
                      </form>
                    </div>
                  </div>
      
                  <h1>{weatherData.city}</h1>
      
                  <div className="row align-items-center">
                    <div className="col">
                      <div className="details">
                        humidity: <span>{weatherData.humidity}</span>%
                        <br />
                        wind: <span>{weatherData.wind}</span>km/h
                      </div>
                    </div>
                    <div className="col">
                      <div className="temperature">
                        <span> {weatherData.temperature}</span>
                        <span className="unit">°C|</span>
                        <span className="unit">°F </span>
                      </div>
                    </div>
                    <div className="col">
                      <div className="feels-like">
                        feels like
                        <div className="temperature2">{weatherData.feelslike}°</div>
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
                  {""} by Cecilia O'Grady
              </span>
            </div>
              </div>
           </div>
           </div>
        );
}
       
