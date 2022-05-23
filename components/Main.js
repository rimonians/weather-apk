import React from "react";
import useWeather from "../hooks/useWeather";
import Loading from "./Loading";
import Error from "./Error";
import WeatherInfo from "./WeatherInfo";

const Main = () => {
  const { loading, error, currentWeather } = useWeather();

  return (
    <>
      {loading && <Loading />}
      {error && <Error />}
      {currentWeather && <WeatherInfo />}
    </>
  );
};

export default Main;
