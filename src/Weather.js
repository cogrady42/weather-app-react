import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready:false });
    const [city, setCity] = useState(props.defaultCity);

    function handleResponse(response) {
        setWeatherData({
            ready: true,
            coordinates: response.data.coord,
            city: response.data.name,
            humidity: response.data.main.humidity,
            date: new Date(response.data.dt * 1000),
            wind: response.data.wind.speed,
            temperature: response.data.main.temp,
            feelsLike: response.data.main.feels_like,
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
        });
    }

    function search() {
        let apiKey = "9eca7aac0b071aa16e3cb063adba0785";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse);
    };

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleCityChange(event) {
        setCity(event.target.value);
    }

      if (weatherData.ready) { 
        return (
          <div className="Weather">
            <div className="container-fluid">
              <div className="weather-app-wrapper">
                <div className="weather-app">
                  <div className="row">
                    <div className="col date">
                        <FormattedDate date={weatherData.date} />
                    </div>
                    <div className="col">
                      <form onSubmit={handleSubmit} className="change-city">
                        <input
                          type="search"
                          placeholder="change city"
                          autoComplete="off"
                          className="change-city"
                          autoFocus="on"
                          onChange={handleCityChange}
                        />
                        <input
                          type="submit"
                          value="search"
                          className="search-button"
                        />
                      </form>
                    </div>
                  </div>
                  <WeatherInfo data={weatherData}/>           
                  <WeatherForecast coordinates={weatherData.coordinates} />
              </div>
      
           </div>
           </div>
           </div>

        );
      } 
      else {
        search();
    return "Loading..."
      } 
}
       
