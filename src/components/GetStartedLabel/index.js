import React from "react";
import styled from "styled-components";
import BgDecorator from "../../assets/images/decoration.png";
import GirlPhoto from "../../assets/images/thumb_and_video.png";
import Title from "../Title";
import { PrimaryBtn } from "../Navigation/navigation.styles";
import Container from "../../components/Container";

const BackgroundWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.solitude};
  position: relative;
  padding: 50px 0;

  ${({ theme }) => theme.mq.sm} {
    flex-direction: row;
    padding: 100px 0;
  }

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

  ${({ theme }) => theme.mq.sm} {
    flex-direction: row;
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

const ContentDescription = styled.p`
  display: block;
  color: ${({ theme }) => theme.colors.grey};
  margin-bottom: 15px;
  margin-top: 30px;
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
            <Title>Find Your Course That Makes Bright Future</Title>
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
            <img src={GirlPhoto} alt="Girl photo" />
          </GirlCard>
        </Wrapper>
      </Container>
    </BackgroundWrapper>
  );
};

export default GetStartedLabel;
