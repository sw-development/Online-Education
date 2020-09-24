import React from "react";
import styled from "styled-components";
import PrimaryButton from "../PrimaryButton";
import Container from "../Container";

import NewsletterBg from "../../assets/images/newsletter.png";

const Wrapper = styled.div`
  padding: 100px 0;
`;

const NewsletterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-image: url(${NewsletterBg});
  background-position: center;
  background-size: cover;
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.font.size.lg};
  font-weight: ${({ theme }) => theme.font.weight.xbold};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 15px;
`;

const Description = styled.p`
  max-width: 550px;
  margin: 0 auto 50px;
  font-size: ${({ theme }) => theme.font.size.xs};
  line-height: 1.6;
`;

const Newsletter = () => {
  return (
    <Wrapper>
      <Container>
        <NewsletterContent>
          <Title>Subscribe Newsletter</Title>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            metus diam Aenean molestie ultrices risus, ut vestibulum metus
            rutrum
          </Description>
          <PrimaryButton
            placeholder="Enter Your Email Address"
            text="Subscribe"
            visibility={true}
            lg={true}
          />
        </NewsletterContent>
      </Container>
    </Wrapper>
  );
};

export default Newsletter;
