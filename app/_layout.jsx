import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";
import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import "./globals.css";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Sen-Regular": require("../assets/fonts/Sen-Regular.ttf"),
    "Sen-Medium": require("../assets/fonts/Sen-Medium.ttf"),
    "Sen-SemiBold": require("../assets/fonts/Sen-SemiBold.ttf"),
    "Sen-Bold": require("../assets/fonts/Sen-Bold.ttf"),
    "Sen-ExtraBold": require("../assets/fonts/Sen-ExtraBold.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider value={DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="record" options={{ headerShown: false }} />
        <Stack.Screen name="list" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
