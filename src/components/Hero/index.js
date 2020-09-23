import React from "react";
import styled from "styled-components";
import HeroImage from "../../assets/images/hero.jpg";

import Container from "../Container";
import PrimaryButton from "../PrimaryButton";

const Wrapper = styled.div`
  margin-top: 100px;
`;

const HeroContentWrapper = styled.div`
  display: flex;
  align-items: center;
  min-height: 80vh;
  padding: 30px;
  border-radius: 35px;
  background-image: linear-gradient(
      145deg,
      rgba(59, 115, 150, 0.71) 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    url(${HeroImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const HeroContent = styled.div`
  ${({ theme }) => theme.mq.xs} {
    min-width: 500px;
  }

  ${({ theme }) => theme.mq.md} {
    width: 50%;
  }

  ${({ theme }) => theme.mq.xlg} {
    width: 40%;
  }
`;

const HeroHeading = styled.h1`
  margin-bottom: 20px;
  color: #fff;
  font-size: ${({ theme }) => theme.font.size.md};

  ${({ theme }) => theme.mq.sm} {
    font-size: ${({ theme }) => theme.font.size.lg};
  }

  ${({ theme }) => theme.mq.xlg} {
    font-size: ${({ theme }) => theme.font.size.xlg};
  }
`;

const HeroParagraph = styled.p`
  margin-bottom: 20px;
  color: #fff;
  font-size: ${({ theme }) => theme.font.size.xs};

  ${({ theme }) => theme.mq.xs} {
    font-size: ${({ theme }) => theme.font.size.sm};
  }
`;

const Hero = () => {
  return (
    <Wrapper>
      <Container>
        <HeroContentWrapper>
          <HeroContent>
            <HeroHeading>
              Find Our Best Online Courses & Become the Master
            </HeroHeading>
            <HeroParagraph>
              Lorem ipsum dolor sit amet, consectet adipiscing elit nullam
              consequat elementum varius.
            </HeroParagraph>
            <PrimaryButton placeholder="Search your courses" text="Search" />
          </HeroContent>
        </HeroContentWrapper>
      </Container>
    </Wrapper>
  );
};

export default Hero;
