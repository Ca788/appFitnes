import React from "react";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import THEME from "./src/global/theme";
import AppRoutes from "./src/Routes";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={THEME}>
      <StatusBar backgroundColor="#000" />

      <AppRoutes />
    </ThemeProvider>
  );
}
