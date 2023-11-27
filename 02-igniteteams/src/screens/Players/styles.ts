import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 20px;
`;

export const Form = styled.View`
  width: 100%;
  background: ${({ theme }) => theme.COLORS.GRAY_700};

  flex-direction: row;
  align-items: center;

  border-radius: 6px;
`;

export const HeaderList = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;

  margin: 32px 0 12px;

  border-radius: 6px;
`;

export const NumbersOfPlayers = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_200};
  `};
`;