import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import WeatherProvider from "./contexts/WeatherContext";
import Main from "./components/Main";
import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <WeatherProvider>
        <Main />
        <StatusBar backgroundColor="royalblue" style="auto" />
      </WeatherProvider>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
