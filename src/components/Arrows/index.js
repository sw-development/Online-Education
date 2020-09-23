import React from "react";
import styled from "styled-components";
import { ReactComponent as ArrowLeftSvg } from "../../assets/images/left-arrow.svg";
import { ReactComponent as ArrowRightSvg } from "../../assets/images/right-arrow.svg";

const Wrapper = styled.div`
  display: none;

  ${({ theme }) => theme.mq.xs} {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
  }
`;

const ArrowWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  border-radius: 15px;
  background-color: transparent;
  transition: all 0.3s linear;
  cursor: pointer;

  &:hover {
    background-color: #ecf0fb;
  }
`;

const Arrow = styled.svg`
  width: 50px;
  height: 40px;
  fill: #2575e6;
`;

const Arrows = () => (
  <Wrapper>
    <ArrowWrapper>
      <Arrow as={ArrowLeftSvg} />
    </ArrowWrapper>
    <ArrowWrapper>
      <Arrow as={ArrowRightSvg} />
    </ArrowWrapper>
  </Wrapper>
);

export default Arrows;
