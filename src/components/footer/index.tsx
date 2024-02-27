import React, { useState } from "react";
import {
  TouchableOpacity,
  Text,
  Linking,
  Modal,
  View,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { StackNavigationProp } from "@react-navigation/stack";
import { FooterWrapper, NavOptions } from "./styles";

type RootStackParamList = {
  Home?: undefined;
  Welcome?: undefined;
  Contact?: undefined;
};

type NavigationProp = StackNavigationProp<RootStackParamList>;

export const Footer = () => {
  const navigation = useNavigation<NavigationProp>();
  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);

  const navigateToScreen = (screenName: keyof RootStackParamList) => {
    navigation.navigate(screenName);
  };

  const openYoutubeVideo = () => {
    Linking.openURL("https://www.youtube.com/watch?v=nbP7m0S0Ato");
  };

  const handleLogout = () => {
    setShowLogoutConfirmation(false);
    navigateToScreen("Welcome");
  };

  return (
    <FooterWrapper>
      <NavOptions>
        <TouchableOpacity onPress={() => navigateToScreen("Home")}>
          <AntDesign name="home" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigateToScreen("Contact")}>
          <AntDesign name="book" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigateToScreen("Contact")}>
          <AntDesign name="plussquareo" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity onPress={openYoutubeVideo}>
          <AntDesign name="youtube" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setShowLogoutConfirmation(true)}>
          <AntDesign name="logout" size={24} color="black" />
        </TouchableOpacity>
      </NavOptions>

      <Modal
        visible={showLogoutConfirmation}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShowLogoutConfirmation(false)}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <View
            style={{ backgroundColor: "white", padding: 20, borderRadius: 10 }}
          >
            <Text
              style={{ marginBottom: 20, fontSize: 20, fontWeight: "bold" }}
            >
              Tem certeza que deseja sair?
            </Text>
            <View style={{ marginBottom: 20 }}>
              <Button title="SIM" onPress={handleLogout} />
            </View>

            <Button
              title="NÃO"
              onPress={() => setShowLogoutConfirmation(false)}
            />
          </View>
        </View>
      </Modal>
    </FooterWrapper>
  );
};
