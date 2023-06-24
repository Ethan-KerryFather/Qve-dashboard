import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View } from "react-native";
import { RootStack } from "./src/navigation/Rootstack";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat: require("./assets/font/Montserrat.ttf"),
    MontserratBold: require("./assets/font/Montserrat-Bold.ttf"),
  });

  if (fontsLoaded) {
    SplashScreen.hideAsync();
    return (
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
