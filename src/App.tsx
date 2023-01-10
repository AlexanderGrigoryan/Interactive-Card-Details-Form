import React from "react";
import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import { Helmet, HelmetProvider } from "react-helmet-async";
import mobileBackground from "./img/bg-main-mobile.png";
import Cards from "./components/Cards";
import Form from "./components/Form";

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

      <Wrapper>
        <Cards />
      </Wrapper>
      <FormWrapper>
        <Form />
      </FormWrapper>
    </>
  );
}

export default App;

const Wrapper = styled.div`
  background: url(${mobileBackground});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 240px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 90px;
`;

const FormWrapper = styled.div`
  padding: 0 24px;
`;
