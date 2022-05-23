import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import WeatherProvider from "./contexts/WeatherContext";
import Main from "./components/Main";
import { StyleSheet } from "react-native";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <WeatherProvider>
        <Main />
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
