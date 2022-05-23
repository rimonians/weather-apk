import React, { useContext } from "react";
import { WeatherContext } from "../contexts/WeatherContext";

const useWeather = () => {
  return useContext(WeatherContext);
};

export default useWeather;
