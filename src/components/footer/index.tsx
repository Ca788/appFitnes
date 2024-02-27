import React from "react";
import { TouchableOpacity, Text, Linking } from "react-native";
import { useNavigation, RouteProp } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { StackNavigationProp } from "@react-navigation/stack";
import { FooterWrapper, NavOptions } from "./styles";

type RootStackParamList = {
  Welcome: undefined;
  About: undefined;
  Contact: undefined;
};

type NavigationProp = StackNavigationProp<RootStackParamList>;

export const Footer = () => {
  const navigation = useNavigation<NavigationProp>();

  const navigateToScreen = (screenName: keyof RootStackParamList) => {
    navigation.navigate(screenName);
  };

  const openYoutubeVideo = () => {
    Linking.openURL("https://www.youtube.com/watch?v=nbP7m0S0Ato");
  };

  return (
    <FooterWrapper>
      <NavOptions>
        <TouchableOpacity onPress={() => navigateToScreen("Welcome")}>
          <AntDesign name="home" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigateToScreen("About")}>
          <AntDesign name="book" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigateToScreen("Contact")}>
          <AntDesign name="plussquareo" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigateToScreen("Contact")}>
          <AntDesign name="save" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity onPress={openYoutubeVideo}>
          <AntDesign name="youtube" size={24} color="black" />
        </TouchableOpacity>
      </NavOptions>
    </FooterWrapper>
  );
};
