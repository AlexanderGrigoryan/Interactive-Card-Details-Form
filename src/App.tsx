import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import schema from "./schema";
import { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import { yupResolver } from "@hookform/resolvers/yup";
import Cards from "./components/Cards";
import Form from "./components/Form";
import ThankYou from "./components/ThankYou";
import mobileBackground from "./img/bg-main-mobile.png";
import desktopBackground from "./img/bg-main-desktop.png";

export interface FormTypes {
  cardholder: string;
  cardnumber: number;
  monthinput: number;
  yearinput: number;
  cvcinput: number;
}

function App() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormTypes>({
    resolver: yupResolver(schema),
  });

  const [submitted, setSubmitted] = useState<boolean>(false);

  const onSubmit: SubmitHandler<FormTypes> = (data) => {
    setSubmitted(true);
  };

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
        <Wrapper>
          <Cards watch={watch} />
        </Wrapper>
        <FormWrapper>
          {!submitted ? (
            <Form
              register={register}
              handleSubmit={handleSubmit}
              onSubmit={onSubmit}
              errors={errors}
            />
          ) : (
            <ThankYou setSubmitted={setSubmitted} reset={reset} />
          )}
        </FormWrapper>
      </MainContainer>
    </>
  );
}

export default App;

const MainContainer = styled.main`
  @media screen and (min-width: 1024px) {
    display: flex;
    align-items: center;
    column-gap: 349px;
    width: 100%;
    height: 100%;
  }
`;

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

  @media screen and (min-width: 1024px) {
    background: url(${desktopBackground});
    background-size: 100% 100%;
    width: 483px;
    height: 100%;
    margin-bottom: 0;
  }
`;

const FormWrapper = styled.div`
  padding: 0 24px;
`;
