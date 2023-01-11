import React from "react";
import { FieldErrorsImpl, FieldValues } from "react-hook-form";
import { UseFormWatch } from "react-hook-form/dist/types/form";
import styled from "styled-components";
import { FormTypes } from "../App";
import cardBackImage from "../img/bg-card-back.png";
import cardFrontImage from "../img/bg-card-front.png";

interface CardsProps {
  watch: UseFormWatch<FormTypes>;
}

function Cards(props: CardsProps) {
  const { watch } = props;

  const displayCardNumber = watch("cardnumber");
  const displayCardholder = watch("cardholder");
  const displayCvcCode = watch("cvcinput");
  const displayMonth = watch("monthinput");
  const displayYear = watch("yearinput");

  return (
    <Container>
      <CardsBlock>
        <CardBack>
          <CvcCode>{displayCvcCode ? displayCvcCode : "000"}</CvcCode>
        </CardBack>
        <CardFront>
          <Circles>
            <BigCircle></BigCircle>
            <SmallCircle></SmallCircle>
          </Circles>
          <CardNumber>
            {displayCardNumber ? displayCardNumber : "0000 0000 0000 0000"}
          </CardNumber>
          <CardInfo>
            <Cardholder>
              {displayCardholder
                ? displayCardholder.toUpperCase()
                : "JANE APPLESEED"}
            </Cardholder>
            <CardDate>
              {displayMonth ? displayMonth : "00"}/
              {displayYear ? displayYear : "00"}
            </CardDate>
          </CardInfo>
        </CardFront>
      </CardsBlock>
      
    </Container>
  );
}

export default Cards;

const Container = styled.div`
  width: 375px;
`;

const CardsBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 64px 16px 0 16px;
`;

const CardBack = styled.div`
  background: url(${cardBackImage});
  background-repeat: no-repeat;
  background-size: cover;
  width: 286px;
  height: 157px;
  border-radius: 6px;
  align-self: flex-end;
  padding-right: 37px;
  padding-top: 73.64px;
  display: flex;
  flex-direction: column;
`;

const CvcCode = styled.div`
  align-self: flex-end;
  font-size: 9px;
  font-weight: 500;
  line-height: 11px;
  letter-spacing: 1.2857142686843872px;
  color: #ffffff;
`;

const CardFront = styled.div`
  background: url(${cardFrontImage});
  background-repeat: no-repeat;
  background-size: cover;
  width: 285px;
  height: 156px;
  border-radius: 6px;
  margin-top: -68px;
  padding: 18px 20px 21px 19px;
`;

const Circles = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10.32px;
  margin-bottom: 37px;
`;

const BigCircle = styled.div`
  width: 30.18633460998535px;
  height: 30px;
  background: #ffffff;
  border-radius: 50%;
`;

const SmallCircle = styled.div`
  width: 13.583850860595703px;
  height: 13.5px;
  border: 1px solid white;
  border-radius: 50%;
`;

const CardNumber = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 23px;
  letter-spacing: 2.200000047683716px;
  color: #ffffff;
`;

const CardInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 17px;
`;

const Cardholder = styled.p`
  font-size: 9px;
  font-weight: 500;
  line-height: 11px;
  letter-spacing: 1.2857142686843872px;
  color: #ffffff;
`;

const CardDate = styled.p`
  font-size: 9px;
  font-weight: 500;
  line-height: 11px;
  letter-spacing: 1.2857142686843872px;
  color: #ffffff;
`;

const Error = styled.p``;
