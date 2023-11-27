import { UsersThree } from "phosphor-react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 20px;
`;

export const Content = styled.View`
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 124px;
`;

export const Icon = styled(UsersThree).attrs(({ theme }) => ({
  color: theme.COLORS.GREEN_700,
  size: 56,
}))``;
