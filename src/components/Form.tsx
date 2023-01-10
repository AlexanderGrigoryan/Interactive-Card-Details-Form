import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

function Form() {
  const { register, handleSubmit } = useForm();

  return (
    <FormContainer>
      <Cardholder>
        <Label htmlFor="cardholder">Cardholder Name</Label>
        <CardholderInput
          type="text"
          id="cardholder"
          placeholder="e.g. Jane Appleseed"
        ></CardholderInput>
      </Cardholder>
      <CardNumber>
        <Label htmlFor="cardnumber">Card Number</Label>
        <CardNumberInput
          type="number"
          id="cardnumber"
          placeholder="e.g. 1234 5678 9123 0000"
        ></CardNumberInput>
      </CardNumber>
      <Info>
        <CardDate>
          <Label htmlFor="monthinput">Exp. Date (MM/YY)</Label>
          <Date>
            <MonthInput type="number" id="monthinput" placeholder="MM" />
            <YearInput type="number" placeholder="YY" />
          </Date>
        </CardDate>
        <Cvc>
          <Label htmlFor="cvcinput">CVC</Label>
          <CvcInput type="number" id="cvcinput" placeholder="e.g. 123" />
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
  color: #21092f;
  white-space: nowrap;
  margin-bottom: 9px;
`;

const CardholderInput = styled.input`
  width: 100%;
  height: 45px;
  border-radius: 8px;
  padding-left: 16px;
  background: #ffffff;
  border: 1px solid #dfdee0;

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
`;

const CardNumber = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardNumberInput = styled.input`
  width: 100%;
  height: 45px;
  border-radius: 8px;
  padding-left: 16px;
  background: #ffffff;
  border: 1px solid #dfdee0;

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
`;

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

const MonthInput = styled.input`
  width: 100%;
  max-width: 72px;
  height: 45px;
  border-radius: 8px;
  padding-left: 16px;
  background: #ffffff;
  border: 1px solid #dfdee0;

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
`;

const YearInput = styled.input`
  width: 100%;
  max-width: 72px;
  height: 45px;
  border-radius: 8px;
  padding-left: 16px;
  background: #ffffff;
  border: 1px solid #dfdee0;

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
`;

const Cvc = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3px;
`;

const CvcInput = styled.input`
  width: 100%;
  max-width: 164px;
  height: 45px;
  border-radius: 8px;
  padding-left: 16px;
  background: #ffffff;
  border: 1px solid #dfdee0;

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
`;

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
