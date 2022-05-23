import { StyleSheet, View } from "react-native";
import React from "react";
import useWeather from "../hooks/useWeather";
import {
  FontAwesome,
  Entypo,
  Feather,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import Item from "./Item";

const FooterContent = () => {
  const { currentWeather } = useWeather();

  return (
    <View style={styles.footerContent}>
      <Item
        data={{
          title: "Feels like",
          value: currentWeather.main.feels_like + "°",
        }}
      >
        <FontAwesome style={styles.footerIcon} name="thermometer-4" />
      </Item>
      <Item
        data={{
          title: "Humidity",
          value: currentWeather.main.humidity + " %",
        }}
      >
        <Entypo style={styles.footerIcon} name="drop" />
      </Item>
      <Item
        data={{
          title: "Wind speed",
          value: currentWeather.wind.speed + " m/s",
        }}
      >
        <Feather style={styles.footerIcon} name="wind" />
      </Item>
      <Item
        data={{
          title: "Pressure",
          value: currentWeather.main.pressure + " hPa",
        }}
      >
        <MaterialCommunityIcons style={styles.footerIcon} name="speedometer" />
      </Item>
    </View>
  );
};

export default FooterContent;

const styles = StyleSheet.create({
  footerContent: {
    padding: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  footerIcon: {
    color: "#fff",
    fontSize: 24,
  },
});
