import { StyleSheet, View, Text } from "react-native";
import React from "react";
import useWeather from "../hooks/useWeather";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

const TopContent = () => {
  const { units, setUnits, load } = useWeather();

  return (
    <View style={styles.topContent}>
      {units === "metric" ? (
        <MaterialCommunityIcons
          style={styles.topIcon}
          name="temperature-celsius"
          onPress={() => setUnits("imperial")}
        />
      ) : (
        <MaterialCommunityIcons
          style={styles.topIcon}
          name="temperature-fahrenheit"
          onPress={() => setUnits("metric")}
        />
      )}
      <Text style={styles.appName}>Weather App</Text>
      <Ionicons style={styles.topIcon} name="reload" onPress={load} />
    </View>
  );
};

export default TopContent;

const styles = StyleSheet.create({
  topContent: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  topIcon: {
    fontSize: 24,
  },
  appName: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
