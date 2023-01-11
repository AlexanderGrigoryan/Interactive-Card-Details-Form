import React from "react";
import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import { Helmet, HelmetProvider } from "react-helmet-async";
import mobileBackground from "./img/bg-main-mobile.png";
import Cards from "./components/Cards";
import Form from "./components/Form";
import { useForm } from "react-hook-form";
import { FieldValues, SubmitHandler } from "react-hook-form/dist/types";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

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
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormTypes>({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<FormTypes> = (data) => console.log(data);

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
        <Cards watch={watch} />
      </Wrapper>
      <FormWrapper>
        <Form
          register={register}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          errors={errors}
        />
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
