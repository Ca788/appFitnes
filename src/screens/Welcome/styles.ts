import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GREEN};
  height: 100%;
`;

export const ImageMuscle = styled.Image`
  height: 100px;
  width: 100px;
  position: absolute;
  top: 10px;
  transform: translateX(20px) translateY(50px) rotate(-15deg);
`;

export const ImageMuscle2 = styled.Image`
  height: 100px;
  width: 100px;
  position: absolute;
  top: -30px;
  left: 100px;
  transform: translateX(50px) translateY(50px) rotate(-5deg);
`;

export const ImageMuscle3 = styled.Image`
  height: 100px;
  width: 100px;
  position: absolute;
  top: 130px;
  left: -30px;
  transform: translateX(50px) translateY(50px) rotate(15deg);
`;

export const ImageMuscle4 = styled.Image`
  height: 200px;
  width: 200px;
  position: absolute;
  top: 110px;
  left: 100px;
  transform: translateX(50px) translateY(50px) rotate(-15deg);
`;

export const ContainerMainContent = styled.View`
  padding: 22px;
  position: absolute;
  top: 380px;
  width: 100%;
`;

export const FirstText = styled.Text`
  font-size: 50px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const ContainerInto = styled.View`
  margin-top: 22px;
  margin-bottom: 22px;
`;

export const TextInto = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.WHITE};
  margin-bottom: 4px;
  padding-left: 4px;
  padding-right: 11px;
`;
