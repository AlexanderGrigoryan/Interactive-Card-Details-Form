import styled from "styled-components";
import { UseFormWatch } from "react-hook-form/dist/types/form";
import { FormTypes } from "../App";
import cardBackImage from "../img/bg-card-back.png";
import cardFrontImage from "../img/bg-card-front.png";

interface CardsProps {
  watch: UseFormWatch<FormTypes>;
}

function Cards(props: CardsProps) {
  const { watch } = props;

  const displayCardholder = watch("cardholder");
  const displayCvcCode = watch("cvcinput");
  const displayMonth = watch("monthinput");
  const displayYear = watch("yearinput");
  const displayCardNumber = watch("cardnumber");

  let startingNumbers = "0000 0000 0000 0000";

  if (displayCardNumber) {
    const newCardNumber = displayCardNumber.toString();
    const fromOneToFour = newCardNumber.slice(0, 4);
    const fromFourToEight = newCardNumber.slice(4, 8);
    const fromEightToTwelve = newCardNumber.slice(8, 12);
    const fromTwelveToSixteen = newCardNumber.slice(12, 16);

    startingNumbers = `${fromOneToFour} ${fromFourToEight} ${fromEightToTwelve} ${fromTwelveToSixteen}`;
  }

  return (
    <Container>
      <CardsBlock>
        <CardBack>
          <CvcCode>
            {displayCvcCode && displayCvcCode.toString().length <= 3
              ? displayCvcCode
              : "000"}
          </CvcCode>
        </CardBack>
        <CardFront>
          <Circles>
            <BigCircle></BigCircle>
            <SmallCircle></SmallCircle>
          </Circles>
          <CardNumber>{startingNumbers}</CardNumber>
          <CardInfo>
            <CardHolderWrapper>
              <Cardholder>
                {displayCardholder
                  ? displayCardholder.toUpperCase()
                  : "JANE APPLESEED"}
              </Cardholder>
            </CardHolderWrapper>
            <CardDate>
              {displayMonth && displayMonth.toString().length <= 2
                ? displayMonth
                : "00"}
              /
              {displayYear && displayYear.toString().length <= 2
                ? displayYear
                : "00"}
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

  @media screen and (min-width: 1024px) {
    display: flex;
    width: 100%;
    padding-left: 297px;
  }
`;

const CardsBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 64px 16px 0 16px;

  @media screen and (min-width: 1024px) {
    margin-left: 20px;
  }
`;

const CardBack = styled.div`
  background: url(${cardBackImage});
  background-repeat: no-repeat;
  background-size: cover;
  width: 286px;
  height: 157px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  padding-right: 37px;
  padding-top: 71.64px;

  @media screen and (min-width: 1024px) {
    order: 2;
  }
`;

const CvcCode = styled.div`
  font-size: 9px;
  font-weight: 500;
  line-height: 11px;
  letter-spacing: 1.2857142686843872px;
  align-self: flex-end;
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

  @media screen and (min-width: 1024px) {
    order: 1;
    margin: 0 0 37px -54px;
  }
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
  border-radius: 50%;
  background: #ffffff;
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

const CardHolderWrapper = styled.div`
  width: 200px;
  height: 22px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Cardholder = styled.p`
  width: 100%;
  max-height: 22px;
  word-break: break-all;
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
