import React from "react";
import styled from "styled-components";
import Title from "../Title";
import CoursesCards from "../CoursesCards";
import Container from "../../components/Container";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 50px 0;

  ${({ theme }) => theme.mq.sm} {
    padding: 100px 0;
  }
`;

const CoursesHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 70px;
`;

const CoursesBtn = styled.button`
  color: ${({ theme }) => theme.colors.royalBlue};
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid #2575e6;
  border-radius: 10px;
  outline: none;
  padding: 8px 6px;
  margin-left: 5px;
  font-size: ${({ theme }) => theme.font.size.xxs};
  transition: 0.2s ease-in;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.royalBlue};
    color: ${({ theme }) => theme.colors.white};
  }

  ${({ theme }) => theme.mq.md} {
    font-size: ${({ theme }) => theme.font.size.xs};
    padding: 10px 16px;
  }
`;

const CoursesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  ${({ theme }) => theme.mq.sm} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

const Courses = () => {
  return (
    <Container>
      <Wrapper>
        <CoursesHeader>
          <Title>Our Popular Courses</Title>
          <CoursesBtn>ALL COURSES</CoursesBtn>
        </CoursesHeader>
        <CoursesWrapper>
          <CoursesCards />
        </CoursesWrapper>
      </Wrapper>
    </Container>
  );
};

export default Courses;
