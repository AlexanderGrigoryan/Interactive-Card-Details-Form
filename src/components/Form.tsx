import styled, { css } from "styled-components";
import { FormTypes } from "../App";
import { FieldErrorsImpl, UseFormRegister } from "react-hook-form/dist/types";
import {
  SubmitHandler,
  UseFormHandleSubmit,
} from "react-hook-form/dist/types/form";

interface FormProps {
  register: UseFormRegister<FormTypes>;
  handleSubmit: UseFormHandleSubmit<FormTypes>;
  onSubmit: SubmitHandler<FormTypes>;
  errors: Partial<FieldErrorsImpl<FormTypes>>;
}

function Form(props: FormProps) {
  const { register, handleSubmit, onSubmit, errors } = props;

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <Cardholder>
        <Label htmlFor="cardholder">Cardholder Name</Label>
        <CardholderInput
          errors={errors}
          type="text"
          id="cardholder"
          placeholder="e.g. Jane Appleseed"
          {...register("cardholder")}
        />
        <Error>{errors.cardholder && errors.cardholder?.message}</Error>
      </Cardholder>
      <CardNumber>
        <Label htmlFor="cardnumber">Card Number</Label>
        <CardNumberInput
          errors={errors}
          type="text"
          id="cardnumber"
          placeholder="e.g. 1234 5678 9123 0000"
          {...register("cardnumber")}
        />
        <Error>{errors.cardnumber && errors.cardnumber?.message}</Error>
      </CardNumber>
      <Info>
        <CardDate>
          <Label htmlFor="monthinput">Exp. Date (MM/YY)</Label>
          <Date>
            <MonthInputContainer>
              <MonthInput
                errors={errors}
                type="text"
                id="monthinput"
                placeholder="MM"
                {...register("monthinput")}
              />
              <Error>{errors.monthinput && errors.monthinput?.message}</Error>
            </MonthInputContainer>
            <YearInputContainer>
              <YearInput
                errors={errors}
                type="text"
                placeholder="YY"
                {...register("yearinput")}
              />
              <Error>{errors.yearinput && errors.yearinput?.message}</Error>
            </YearInputContainer>
          </Date>
        </CardDate>
        <Cvc>
          <Label htmlFor="cvcinput">CVC</Label>
          <CvcInput
            errors={errors}
            type="text"
            id="cvcinput"
            placeholder="e.g. 123"
            {...register("cvcinput")}
          />
          <Error>{errors.cvcinput && errors.cvcinput?.message}</Error>
        </Cvc>
      </Info>
      <SubmitButton type="submit">Confirm</SubmitButton>
    </FormContainer>
  );
}

export default Form;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

const Cardholder = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: 2px;
  text-transform: uppercase;
  white-space: nowrap;
  margin-bottom: 9px;
  color: #21092f;
`;

const CardholderInput = styled.input(
  (props: { errors: Partial<FieldErrorsImpl<FormTypes>> }) => css`
    width: 100%;
    height: 45px;
    border-radius: 8px;
    padding-left: 16px;
    background: #ffffff;
    border: ${props.errors.cardholder?.message
      ? "1px solid #FF5050"
      : "1px solid #dfdee0"};

    font-family: "Space Grotesk", sans-serif;
    font-size: 18px;
    font-weight: 500;
    line-height: 23px;
    color: #21092f;

    &::placeholder {
      font-size: 18px;
      font-weight: 500;
      line-height: 23px;
      color: #21092f;
      opacity: 0.25;
    }

    &:focus {
      outline: ${props.errors.cardholder?.message
        ? "none"
        : "1px solid #6348fe"};
    }

    @media screen and (min-width: 1024px) {
      min-width: 381px;
    }
  `
);

const CardNumber = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardNumberInput = styled.input(
  (props: { errors: Partial<FieldErrorsImpl<FormTypes>> }) => css`
    width: 100%;
    height: 45px;
    border-radius: 8px;
    padding-left: 16px;
    background: #ffffff;
    border: ${props.errors.cardnumber?.message
      ? "1px solid #FF5050"
      : "1px solid #dfdee0"};

    font-family: "Space Grotesk", sans-serif;
    font-size: 18px;
    font-weight: 500;
    line-height: 23px;
    color: #21092f;

    &::placeholder {
      font-size: 18px;
      font-weight: 500;
      line-height: 23px;
      color: #21092f;
      opacity: 0.25;
    }

    &:focus {
      outline: ${props.errors.cardnumber?.message
        ? "none"
        : "1px solid #6348fe"};
    }
  `
);

const Info = styled.div`
  display: flex;
  align-items: center;
  column-gap: 16px;
`;

const CardDate = styled.div``;

const Date = styled.div`
  display: flex;
  column-gap: 8px;
  margin-top: 9px;
`;

const MonthInputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const MonthInput = styled.input(
  (props: { errors: Partial<FieldErrorsImpl<FormTypes>> }) => css`
    width: 100%;
    max-width: 72px;
    height: 45px;
    border-radius: 8px;
    padding-left: 16px;
    background: #ffffff;
    border: ${props.errors.monthinput?.message
      ? "1px solid #FF5050"
      : "1px solid #dfdee0"};

    font-family: "Space Grotesk", sans-serif;
    font-size: 18px;
    font-weight: 500;
    line-height: 23px;
    color: #21092f;

    &::placeholder {
      font-size: 18px;
      font-weight: 500;
      line-height: 23px;
      color: #21092f;
      opacity: 0.25;
    }

    &:focus {
      outline: ${props.errors.monthinput?.message
        ? "none"
        : "1px solid #6348fe"};
    }
  `
);

const YearInputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const YearInput = styled.input(
  (props: { errors: Partial<FieldErrorsImpl<FormTypes>> }) => css`
    width: 100%;
    max-width: 72px;
    height: 45px;
    border-radius: 8px;
    padding-left: 16px;
    background: #ffffff;
    border: ${props.errors.yearinput?.message
      ? "1px solid #FF5050"
      : "1px solid #dfdee0"};

    font-family: "Space Grotesk", sans-serif;
    font-size: 18px;
    font-weight: 500;
    line-height: 23px;
    color: #21092f;

    &::placeholder {
      font-size: 18px;
      font-weight: 500;
      line-height: 23px;
      color: #21092f;
      opacity: 0.25;
    }

    &:focus {
      outline: ${props.errors.yearinput?.message
        ? "none"
        : "1px solid #6348fe"};
    }
  `
);

const Cvc = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3px;
`;

const CvcInput = styled.input(
  (props: { errors: Partial<FieldErrorsImpl<FormTypes>> }) => css`
    width: 100%;
    max-width: 164px;
    height: 45px;
    border-radius: 8px;
    padding-left: 16px;
    background: #ffffff;
    border: ${props.errors.cvcinput?.message
      ? "1px solid #FF5050"
      : "1px solid #dfdee0"};

    font-family: "Space Grotesk", sans-serif;
    font-size: 18px;
    font-weight: 500;
    line-height: 23px;
    color: #21092f;

    &::placeholder {
      font-size: 18px;
      font-weight: 500;
      line-height: 23px;
      color: #21092f;
      opacity: 0.25;
    }

    &:focus {
      outline: ${props.errors.cvcinput?.message ? "none" : "1px solid #6348fe"};
    }
  `
);

const SubmitButton = styled.button`
  width: 100%;
  height: 53px;
  border-radius: 8px;
  background: #21092f;
  border: none;
  cursor: pointer;
  font-family: "Space Grotesk", sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 23px;
  margin-top: 8px;
  color: #ffffff;
`;

const Error = styled.p`
  height: 10px;
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  color: #ff5050;
  margin-top: 8px;
`;
