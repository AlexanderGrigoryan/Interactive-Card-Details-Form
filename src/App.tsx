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
  cardholder: yup.string().required("Can’t be blank"),
  cardnumber: yup
    .number()
    .positive("Wrong format, can be only positive numbers")
    .integer("Wrong format, can be only integer numbers")
    .lessThan(10 ** 12, "Wrong format, only 12 digits")
    .required("Can’t be blank")
    .typeError("Wrong formats, numbers only"),
  monthinput: yup
    .number()
    .positive("Wrong format, can be only positive numbers")
    .integer("Wrong format, can be only integer numbers")
    .max(2, "Wrong format, only 2 digits")
    .required("Can’t be blank")
    .typeError("Wrong formats, numbers only"),
  yearinput: yup
    .number()
    .positive("Wrong format, can be only positive numbers")
    .integer("Wrong format, can be only integer numbers")
    .max(2, "Wrong format, only 2 digits")
    .required("Can’t be blank")
    .typeError("Wrong formats, numbers only"),
  cvcinput: yup
    .number()
    .positive("Wrong format, can be only positive numbers")
    .integer("Wrong format, can be only integer numbers")
    .max(3, "Wrong format, only 3 digits")
    .required("Can’t be blank")
    .typeError("Wrong formats, numbers only"),
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
