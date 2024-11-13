import React from 'react';
import '../styles/Weather.css';


function Weather({ data }) {
  const { name, main, weather } = data;

  return (
    <div className="weather">
      <h2>{name}</h2>
      <h3>{main.temp}°C</h3>
      <p>{weather[0].description}</p>
      <p>Humidity: {main.humidity}%</p>
      <p>Pressure: {main.pressure} hPa</p>
    </div>
  );
}

export default Weather;
