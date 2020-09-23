import React from "react";
import styled from "styled-components";
import CoursesCards from "../CoursesCards";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;

  ${({ theme }) => theme.mq.md} {
    width: 90%;
  } ;
`;

const CoursesHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  margin-bottom: 50px;
`;

const CoursesTitle = styled.h2`
  font-size: ${({ theme }) => theme.font.size.sm};
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
  padding: 10px 3px;
  font-size: ${({ theme }) => theme.font.size.xxs};
  transition: 0.2s ease-in;
  cursor: pointer;
  &:hover {
    background-color: #2575e6;
    color: #fff;
  }

  ${({ theme }) => theme.mq.md} {
    font-size: ${({ theme }) => theme.font.size.xs};
    padding: 15px 5px;
  }
`;

const CoursesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  ${({ theme }) => theme.mq.sm} {
    flex-direction: row;
    width: 90%;
    flex-wrap: wrap;
  }
  ${({ theme }) => theme.mq.md} {
    width: 80%;
  }
`;

const Courses = () => {
  return (
    <Wrapper>
      <CoursesHeader>
        <CoursesTitle>Our Popular Courses</CoursesTitle>
        <CoursesBtn>ALL COURSES</CoursesBtn>
      </CoursesHeader>
      <CoursesWrapper>
        <CoursesCards />
      </CoursesWrapper>
    </Wrapper>
  );
};

export default Courses;
