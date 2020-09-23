import React from "react";
import styled from "styled-components";
import Container from "../Container/index";
import Logo from "../../assets/images/logo.png";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  background-color: #ecf0fb;
  width: 100%;
  padding: 20px;
`;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  img {
    width: 30%;
  }
  ${({ theme }) => theme.mq.sm} {
    width: 25%;
  }
`;
const FooterDescription = styled.p`
  display: block;
  color: #9da1a7;
  padding: 10px 0;
  font-size: ${({ theme }) => theme.font.size.xxs};
`;

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <FooterContainer>
          <img src={Logo} alt='Logo' />
          <FooterDescription>
            Copyright @ Miltion Debnath 2020, All Rights Reserved
          </FooterDescription>
        </FooterContainer>
      </Container>
    </Wrapper>
  );
};

export default Footer;
