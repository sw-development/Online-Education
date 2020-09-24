import React from "react";
import styled from "styled-components";

const TitleWrapper = styled.h2`
  position: relative;
  font-size: ${({ theme }) => theme.font.size.sm};

  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -20px;
    width: 150px;
    height: 5px;
    border-radius: 15px;
    background-color: ${({ theme }) => theme.colors.dodgerBlue};
  }

  ${({ theme }) => theme.mq.md} {
    font-size: ${({ theme }) => theme.font.size.md};
  }

  ${({ theme }) => theme.mq.md} {
    font-size: ${({ theme }) => theme.font.size.lg};
  }
`;

const Title = ({ children }) => <TitleWrapper>{children}</TitleWrapper>;

export default Title;
