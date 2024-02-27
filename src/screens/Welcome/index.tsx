import React from "react";
import { View, Text } from "react-native";
import { Header } from "../../components/header";
import {
  Container,
  ContainerInto,
  ContainerMainContent,
  FirstText,
  ImageMuscle,
  ImageMuscle2,
  ImageMuscle3,
  ImageMuscle4,
  TextInto,
} from "./styles";
import { ButtonInicio } from "../../components/buttonInicio";
import { useNavigation } from "@react-navigation/native";

export function Welcome() {
  const navigation = useNavigation();

  return (
    <View>
      <Header />
      <Container>
        <View>
          <ImageMuscle source={require("../../assets/images/m.png")} />
          <ImageMuscle2 source={require("../../assets/images/proteina.png")} />
          <ImageMuscle3 source={require("../../assets/images/imc.png")} />
          <ImageMuscle4 source={require("../../assets/images/woman.png")} />
        </View>

        <ContainerMainContent>
          <FirstText>Seu treino</FirstText>
          <FirstText>Perfeito</FirstText>

          <ContainerInto>
            <TextInto>Escolha seu nível e evolua seu corpo,</TextInto>
            <TextInto>Aqui você encontra seu treino personalizado.</TextInto>

            <ButtonInicio
              onPress={() => navigation.navigate("Home" as never)}
            />
          </ContainerInto>
        </ContainerMainContent>
      </Container>
    </View>
  );
}
