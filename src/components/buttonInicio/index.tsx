import React from "react";
import { ButtonContainer, ButtonText } from "./styles";

interface ButtonInicioProps {
  onPress: () => void;
}

export function ButtonInicio({ onPress }: ButtonInicioProps) {
  return (
    <ButtonContainer onPress={onPress}>
      <ButtonText>Entrar</ButtonText>
    </ButtonContainer>
  );
}
