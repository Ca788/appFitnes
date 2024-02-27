import styled from "styled-components/native";

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-size: 18px;
  margin: 0 auto;
  font-weight: bold;
`;

export const ButtonContainer = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 10px 20px;
  border-radius: 5px;
  width: 50%;
  margin: 0 auto;
  margin-top: 30px;
`;
