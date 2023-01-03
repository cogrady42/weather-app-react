import React from 'react';
import Weather from './Weather';
import './App.css';

export default function App() {
  return (
    <div className="App">
    <Weather defaultCity="Toronto" />

    <footer className="sourceLink">
              <a href="https://github.com/cogrady42/react-weather-app" target="blank" rel="noopener norefferer">
                 Open-source Code  
              </a>
              <span>
                  {" "} by Cecilia O'Grady
              </span>
    </footer>
    </div>
  );
}


