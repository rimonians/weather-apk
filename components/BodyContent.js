import { StyleSheet, View, Text, Image } from "react-native";
import React from "react";
import useWeather from "../hooks/useWeather";

const BodyContent = () => {
  const { currentWeather } = useWeather();

  return (
    <View style={styles.bodyContent}>
      <Text style={styles.country}>{currentWeather.name}</Text>
      <Image
        style={styles.image}
        source={{
          uri: `http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`,
        }}
      />
      <Text style={styles.temp}>{currentWeather.main.temp + "°"}</Text>
      <Text style={styles.description}>
        {currentWeather.weather[0].description}
      </Text>
      <Text style={styles.main}>{currentWeather.weather[0].main}</Text>
    </View>
  );
};

export default BodyContent;

const styles = StyleSheet.create({
  bodyContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  country: {
    fontWeight: "bold",
    fontSize: 20,
    color: "dodgerblue",
  },
  image: {
    height: 120,
    width: 120,
  },
  temp: {
    fontSize: 36,
    fontWeight: "bold",
    color: "dodgerblue",
  },
  description: {
    textTransform: "capitalize",
    marginVertical: 5,
  },
  main: {
    fontWeight: "bold",
    fontSize: 20,
    color: "gray",
  },
});
