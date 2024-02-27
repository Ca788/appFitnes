import React from "react";
import { View } from "react-native";
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

export function Home() {
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
            <SessionText>QUAL SEU NÍVEL</SessionText>
            <Button
              title="Iniciante"
              onPress={() => navigation.navigate("Treino" as never)}
            />
            <Button
              title="Intermediario"
              onPress={() => navigation.navigate("Treino" as never)}
            />
            <Button
              title="Avançado"
              onPress={() => navigation.navigate("Treino" as never)}
            />
          </ContainerButtons>
        </MainContent>
      </Container>
      <Footer />
    </>
  );
}
