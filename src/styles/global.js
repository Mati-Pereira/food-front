import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    padding: 0,
    margin: 0,
    box-sizing: border-box
  }
body {
  background-color: ${({ theme }) => theme.colors.background};
  }
`;
