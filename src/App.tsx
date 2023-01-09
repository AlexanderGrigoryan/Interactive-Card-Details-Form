import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Helmet, HelmetProvider } from "react-helmet-async";
import mobileBackground from "./img/bg-main-mobile.png";
import Cards from "./components/Cards";

const GlobalStyles = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Space Grotesk', sans-serif;
}
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <HelmetProvider>
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500&display=swap"
            rel="stylesheet"
          />
        </Helmet>
      </HelmetProvider>

      <MainContainer>
        <Cards />
      </MainContainer>
    </>
  );
}

export default App;

const MainContainer = styled.main`
  background: url(${mobileBackground});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 240px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
