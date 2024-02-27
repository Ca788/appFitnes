import { fontFamily } from "../../assets/fonts/fontFamily";
import styled from "styled-components/native";

export const Container = styled.View``;

export const LoginText = styled.Text`
  font-family: ${fontFamily.bold};
  margin: 0 auto;
  margin-top: 10px;
  font-size: 50px;
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const MainContent = styled.View`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  height: 100%;
`;

export const ContainerButtons = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: ${({ theme }) => theme.CONSTANTS.RADIUS};
  margin-top: 25%;
  gap: 20px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  height: 35%;
`;

export const SessionText = styled.Text`
  font-family: ${fontFamily.bold};
  font-size: 30px;
  color: ${({ theme }) => theme.COLORS.BLACK};
`;
