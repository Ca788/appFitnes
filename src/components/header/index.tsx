import React from "react";
import { Foundation } from "@expo/vector-icons";
import { View } from "react-native";
import { HeaderContent, LogoImage } from "./styles";

export function Header() {
  return (
    <HeaderContent>
      <LogoImage source={require("../../assets/images/logo.png")} />
      <View>
        <Foundation name="home" size={30} style={{ color: "#15191d" }} />
      </View>
      <View>
        <Foundation name="music" size={30} style={{ color: "#15191d" }} />
      </View>
      <View>
        <Foundation name="heart" size={30} style={{ color: "#15191d" }} />
      </View>
    </HeaderContent>
  );
}
