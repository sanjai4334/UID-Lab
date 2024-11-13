import React, { useState } from 'react';
import axios from 'axios';

function Search({ setWeatherData }) {
  const [city, setCity] = useState('');
  const apiKey = '17e03eec5b04e7a493e233ac2f834848'; // Replace with your OpenWeatherMap API key

  const handleSearch = () => {
    if (!city) return;

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      .then(response => setWeatherData(response.data))
      .catch(error => console.error('Error fetching weather data:', error));
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Enter city name" 
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <button onClick={handleSearch}>Get Weather</button>
    </div>
  );
}

export default Search;
