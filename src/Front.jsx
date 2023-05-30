import React, { useState } from 'react';

const Front = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const getWeatherData = () => {
    //const apiKey = '0a494f07c3c4b4ed5102f97a2901b834';
    //const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
  //const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
     const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=81739cb263d4c35c74e9090d4dada2df`

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setWeather(data);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  };

  return (
    <div>
      <div className="top">
        <h1> CHECK  TEMPERATURE</h1>
      </div>
     <div className='inputField'>
      <input type="text" placeholder="Enter city name" value={city} onChange={handleInputChange} />
      <button onClick={getWeatherData}>Get Weather</button>
      </div>

      {weather && weather.main ? (
  <div className='result'>
    <h2>Weather Information for {city}</h2>
    <p>Temperature: {weather.main.temp}°C</p>
    <p>Condition: {weather.weather[0].description}</p>
    <p>Wind Speed: {weather.wind.speed} km/h</p>
  </div>
) : (
  <p>Please enter a city and click "Get Weather"</p>
)}

    </div>
  );
};

export default Front;
