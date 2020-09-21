import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0 10px;

  ${({ theme }) => theme.mq.sm} {
    margin: 0 auto;
    width: 750px;
  }

  ${({ theme }) => theme.mq.md} {
    width: 970px;
  }

  ${({ theme }) => theme.mq.lg} {
    width: 1170px;
  }
`;

const Layout = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Layout;
