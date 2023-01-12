import React from "react";
import { UseFormReset } from "react-hook-form";
import styled from "styled-components";
import { FormTypes } from "../App";
import completeIcon from "../img/icon-complete.svg";

interface Props {
  setSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
  reset: UseFormReset<FormTypes>;
}

function ThankYou(props: Props) {
  const { setSubmitted, reset } = props;

  const submitHandler = () => {
    setSubmitted(false);
    reset();
  };
  return (
    <Container>
      <Icon src={completeIcon} alt="complete icon" />
      <Title>Thank You!</Title>
      <Text>We’ve added your card details</Text>
      <Button onClick={submitHandler}>Continue</Button>
    </Container>
  );
}

export default ThankYou;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Icon = styled.img``;

const Title = styled.h2`
  font-size: 28px;
  font-weight: 500;
  line-height: 36px;
  letter-spacing: 3.422222137451172px;
  text-transform: uppercase;
  margin: 35px 0 16px;
  color: #21092f;
`;

const Text = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 23px;
  letter-spacing: 0px;
  margin-bottom: 48px;
  color: #8f8694;
`;

const Button = styled.button`
  width: 100%;
  height: 53px;
  border-radius: 8px;
  background: #21092f;
  font-family: "Space Grotesk", sans-serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 23px;
  cursor: pointer;
  color: #ffffff;
`;
