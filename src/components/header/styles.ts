import styled from "styled-components/native";
import { Platform } from "react-native";

export const HeaderContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  height: ${Platform.OS === "ios" ? "130px" : "70px"};
  background-color: ${({ theme }) =>
    Platform.OS === "ios" ? theme.COLORS.TERTIRARY : theme.COLORS.WHITE};
`;

export const LogoImage = styled.Image`
  width: 20%;
  height: 60px;
`;
