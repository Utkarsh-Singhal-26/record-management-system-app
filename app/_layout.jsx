import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import React, { useEffect } from "react";
import "./globals.css";

export default function App() {
  const [fontsLoaded, error] = useFonts({
    "Sen-Regular": require("../assets/fonts/Sen-Regular.ttf"),
    "Sen-Medium": require("../assets/fonts/Sen-Medium.ttf"),
    "Sen-SemiBold": require("../assets/fonts/Sen-SemiBold.ttf"),
    "Sen-Bold": require("../assets/fonts/Sen-Bold.ttf"),
    "Sen-ExtraBold": require("../assets/fonts/Sen-ExtraBold.ttf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}
