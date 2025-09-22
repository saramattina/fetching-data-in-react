import { useState, useEffect } from "react";
import * as weatherService from "./services/weatherService";
import WeatherSearch from './components/WeatherSearch/WeatherSearch';
import WeatherData from "./components/WeatherData/WeatherData.jsx";
import "./App.css";

const App = () => {
  const [weather, setWeather] = useState({
    location: "",
    temp: "",
    condition: "",
  });

  useEffect(() => {
    fetchWeather("London");
  }, [])

  const fetchWeather = async (city) => {
    const weatherData = await weatherService.show(city);
    setWeather({
      location: weatherData.location.name,
      temp: weatherData.current.temp_f,
      condition: weatherData.current.condition.text,
    });
  };


  return (
    <>
      <h1>Weather API</h1>
    
      <WeatherSearch fetchWeather={fetchWeather}/>
      <WeatherData weather={weather} />
    </>
  );
};

export default App;
