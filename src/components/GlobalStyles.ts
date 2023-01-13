import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Space Grotesk', sans-serif;
  background: #F2F2F2;
  width: 100vw;
  height: 100vh;
}
`;

export default GlobalStyles