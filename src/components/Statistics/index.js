import React from "react";
import styled from "styled-components";
import image1 from "../../assets/images/stat1.png";
import image2 from "../../assets/images/stat2.png";
import image3 from "../../assets/images/stat3.png";
import Container from "../../components/Container/index";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  padding: 50px 0 0;

  ${({ theme }) => theme.mq.sm} {
    padding: 100px 0 0;
  }

  ${({ theme }) => theme.mq.md} {
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto;
  }
`;

const StatContainer = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 30px;
  justify-content: center;

  ${({ theme }) => theme.mq.md} {
    width: fit-content;
  }
`;

const StatCircle = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
  width: 70px;
  border-radius: 50%;
  background-color: white;
  justify-content: center;
  box-shadow: 0 20px 56px rgba(84, 104, 255, 0.14);
  img {
    width: 40%;
  }
  ${({ theme }) => theme.mq.md} {
    width: 100px;
    height: 100px;
  }
`;

const StatContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  justify-content: center;
`;

const StatContentHeader = styled.h2`
  font-size: ${({ theme }) => theme.font.size.sm};
  font-weight: 900;
  ${({ theme }) => theme.mq.md} {
    font-size: ${({ theme }) => theme.font.size.md};
  }
`;

const StateContentDescription = styled.p`
  color: #6e707d;
  font-weight: 500;
  ${({ theme }) => theme.mq.md} {
    font-size: 22px;
  }
`;

const Statisctics = () => {
  return (
    <Container>
      <Wrapper>
        <StatContainer>
          <StatCircle>
            <img src={image1} alt="icons" />
          </StatCircle>
          <StatContent>
            <StatContentHeader>20,000+</StatContentHeader>
            <StateContentDescription>Special Courses</StateContentDescription>
          </StatContent>
        </StatContainer>
        <StatContainer>
          <StatCircle>
            <img src={image2} alt="icons" />
          </StatCircle>
          <StatContent>
            <StatContentHeader>480,000+</StatContentHeader>
            <StateContentDescription>Enrolled Student</StateContentDescription>
          </StatContent>
        </StatContainer>
        <StatContainer>
          <StatCircle>
            <img src={image3} alt="icons" />
          </StatCircle>
          <StatContent>
            <StatContentHeader>4000+</StatContentHeader>
            <StateContentDescription>Expert Instructor</StateContentDescription>
          </StatContent>
        </StatContainer>
      </Wrapper>
    </Container>
  );
};
export default Statisctics;
