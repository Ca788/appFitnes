import { fontFamily } from "../../assets/fonts/fontFamily";
import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 50%;
  height: 60px;
  background-color: ${(props) =>
    props.disabled ? props.theme.COLORS.GRAY_700 : props.theme.COLORS.BLACK};
  border-radius: ${({ theme }) => theme.CONSTANTS.RADIUS};
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  flex: 1;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  font-family: ${fontFamily.bold};
`;
