import React, { useState } from 'react';
import Search from './components/Search';
import Weather from './components/Weather';
import './styles/App.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);

  return (
    <div className="app">
      <div className="form-container">
        <h1>Weather Finder</h1>
        <Search setWeatherData={setWeatherData} />
      </div>
      {weatherData && <Weather data={weatherData} />}
    </div>
  );
}

export default App;
