import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import React from "react";
import useWeather from "../hooks/useWeather";

const Error = () => {
  const { error, load } = useWeather();

  return (
    <View style={styles.wrapper}>
      <Text style={styles.errorText}>{error}</Text>
      <TouchableOpacity onPress={() => load()}>
        <Text style={styles.errorButton}>Reload App</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Error;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    fontWeight: "bold",
    marginBottom: 10,
  },
  errorButton: {
    backgroundColor: "dodgerblue",
    color: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
});
