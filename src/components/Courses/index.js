import React from "react";
import styled from "styled-components";
import CoursesCards from "../CoursesCards";
import Container from "../../components/Container";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-bottom: 30px;

  ${({ theme }) => theme.mq.md} {
    margin-bottom: 60px;
  } ;
`;

const CoursesHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 50px;
`;

const CoursesTitle = styled.h2`
  font-size: ${({ theme }) => theme.font.size.xs};
  position: relative;
  &:after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    bottom: -20px;
    width: 50%;
    height: 3px;
    background-color: #006aff;
  }
  ${({ theme }) => theme.mq.md} {
    font-size: ${({ theme }) => theme.font.size.lg};
  }
`;
const CoursesBtn = styled.button`
  color: #2575e6;
  background-color: white;
  border: 1px solid #2575e6;
  border-radius: 10px;
  outline: none;
  padding: 8px 6px;
  font-size: ${({ theme }) => theme.font.size.xxs};
  transition: 0.2s ease-in;
  cursor: pointer;
  &:hover {
    background-color: #2575e6;
    color: #fff;
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
          <CoursesTitle>Our Popular Courses</CoursesTitle>
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
