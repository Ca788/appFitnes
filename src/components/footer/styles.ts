import styled from "styled-components/native";

export const FooterWrapper = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  padding: 20px;
  align-items: center;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const NavOptions = styled.View`
  flex-direction: row;
  justify-content: center;
  gap: 50px;
  align-items: center;
  margin-bottom: 5px;
`;
