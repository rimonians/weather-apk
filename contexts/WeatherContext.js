import React, { createContext, useState, useEffect } from "react";
import * as Location from "expo-location";
import axios from "axios";

const API_KEY = `ef6483483b0f29aa664e876c0c2ad84a`;
const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?`;

export const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [error, setError] = useState(null);
  const [units, setUnits] = useState("metric");

  useEffect(() => {
    load(units);
  }, [units]);

  const load = async () => {
    setLoading(true);
    setCurrentWeather(null);
    setError(null);
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setLoading(false);
        setCurrentWeather(null);
        setError("Permission to access location was denied");
        return;
      }
      const location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;

      const weatherUrl = `${BASE_URL}lat=${latitude}&lon=${longitude}&units=${units}&appid=${API_KEY}`;

      const res = await axios.get(weatherUrl);
      setLoading(false);
      setCurrentWeather(res.data);
      setError(null);
    } catch (err) {
      setLoading(false);
      setError(err.message);
      setCurrentWeather(null);
    }
  };

  return (
    <WeatherContext.Provider
      value={{ loading, currentWeather, error, units, setUnits, load }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
