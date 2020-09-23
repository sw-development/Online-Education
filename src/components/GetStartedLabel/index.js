import React from "react";
import styled from "styled-components";
import Bg from "../../assets/images/bg.png";
import BgDecorator from "../../assets/images/decoration.png";
import GirlPhoto from "../../assets/images/thumb and video.png";
import { PrimaryBtn } from "../Navigation/navigation.styles";
import Container from "../../components/Container";

const BackgroundWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-image: url(${Bg});
  position: relative;
  &:after {
    content: "";
    position: absolute;
    width: 75%;
    height: 20%;
    bottom: 0;
    right: 0;
    z-index: 0;
    background-image: url(${BgDecorator});
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  ${({ theme }) => theme.mq.sm} {
    flex-direction: row;
    padding: 40px 0;
  }
  ${({ theme }) => theme.mq.lg} {
    padding: 10vh 0;
  }
`;

const GirlCard = styled.div`
  width: 70%;
  border-radius: 20px;
  img {
    width: 100%;
  }
  ${({ theme }) => theme.mq.sm} {
    width: 40%;
  }
`;

const ContentCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  width: 90%;
  z-index: 1;
  & > ${PrimaryBtn} {
    align-self: flex-start;
  }
  ${({ theme }) => theme.mq.sm} {
    width: 45%;
    height: 100%;
  }
`;

const ContentHeader = styled.h2`
  font-size: ${({ theme }) => theme.font.size.sm};
  position: relative;
  width: 100%;
  margin: 25px 0;
  &:after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    bottom: -20px;
    width: 30%;
    height: 3px;
    background-color: #006aff;
  }
  ${({ theme }) => theme.mq.md} {
    font-size: ${({ theme }) => theme.font.size.lg};
  }
`;

const ContentDescription = styled.p`
  display: block;
  color: #6b6b6b;
  margin-bottom: 15px;
  font-size: ${({ theme }) => theme.font.size.xxs};
  ${({ theme }) => theme.mq.sm} {
    font-size: ${({ theme }) => theme.font.size.xs};
    padding: 15px 0;
  }
`;

const GetStartedLabel = () => {
  return (
    <BackgroundWrapper>
      <Container>
        <Wrapper>
          <ContentCard>
            <ContentHeader>
              Find Your Course That Makes Bright Future
            </ContentHeader>
            <ContentDescription>
              Lorem ipsum dolor sit amet, consecteturei adipiscing elit nulla
              elementum sem vel porttitorr ornare nullam ultricies turpis magnai
              accumsan odiold scelerisque lorem ipsum nulla elementum sem vel
              porttitorr ornare nullam ultricies dolor met id consectetur
              adipiscing elit.
            </ContentDescription>
            <PrimaryBtn>Get Started</PrimaryBtn>
          </ContentCard>
          <GirlCard>
            <img src={GirlPhoto} alt='Girl photo' />
          </GirlCard>
        </Wrapper>
      </Container>
    </BackgroundWrapper>
  );
};

export default GetStartedLabel;
