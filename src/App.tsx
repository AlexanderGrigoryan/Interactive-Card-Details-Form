import React, { useState } from "react";
import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import { Helmet, HelmetProvider } from "react-helmet-async";
import mobileBackground from "./img/bg-main-mobile.png";
import desktopBackground from "./img/bg-main-desktop.png";
import Cards from "./components/Cards";
import Form from "./components/Form";
import { useForm } from "react-hook-form";
import { FieldValues, SubmitHandler } from "react-hook-form/dist/types";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ThankYou from "./components/ThankYou";

export interface FormTypes {
  cardholder: string;
  cardnumber: number;
  monthinput: number;
  yearinput: number;
  cvcinput: number;
}

const schema = yup.object({
  cardholder: yup
    .string()
    .required("Can’t be blank")
    .matches(/^[A-Za-z\s]*$/, "Wrong formats, letters only"),
  cardnumber: yup
    .string()
    .required("Can’t be blank")
    .matches(/^[0-9]*$/, "Wrong formats, numbers only")
    .length(12, "Should be 12 digits"),
  monthinput: yup
    .string()
    .required("Can’t be blank")
    .matches(/^[0-9]*$/, "Wrong formats, numbers only")
    .length(2, "Should be 2 digits"),
  yearinput: yup
    .string()
    .required("Can’t be blank")
    .matches(/^[0-9]*$/, "Wrong formats, numbers only")
    .length(2, "Should be 2 digits"),
  cvcinput: yup
    .string()
    .required("Can’t be blank")
    .matches(/^[0-9]*$/, "Wrong formats, numbers only")
    .length(3, "Should be 3 digits"),
});
function App() {
  const [submitted, setSubmitted] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormTypes>({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<FormTypes> = (data) => {
    setSubmitted(true);
    console.log(data);
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
    background-size: cover;
    background-repeat: no-repeat;
    width: 483px;
    height: 100vh;
  }
`;

const FormWrapper = styled.div`
  padding: 0 24px;
`;
