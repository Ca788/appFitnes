import React from "react";
import { Alert, View } from "react-native";
import {
  Container,
  MainContent,
  LoginText,
  ContainerButtons,
  SessionText,
} from "./styles";
import { Button } from "../../components/button";
import { useNavigation } from "@react-navigation/native";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

export function Login() {
  const navigation = useNavigation();
  return (
    <>
      <Container>
        <Header />
        <MainContent>
          <View>
            <LoginText>BEM-VINDO</LoginText>
          </View>

          <ContainerButtons>
            <SessionText>QUAL SEU NIVEL</SessionText>
            <Button
              title="Iniciante"
              onPress={() => navigation.navigate("Welcome" as never)}
            />
            <Button
              title="Intermediario"
              onPress={() => Alert.alert("Button with adjusted color pressed")}
            />
            <Button
              title="Avançado"
              onPress={() => Alert.alert("Button with adjusted color pressed")}
            />
          </ContainerButtons>
        </MainContent>
      </Container>
      <Footer />
    </>
  );
}
