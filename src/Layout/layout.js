import React from "react";
import styled, { ThemeProvider } from "styled-components";

import { theme } from "../theme/theme";
import GlobalStyle from "../theme/globalStyles";

const Container = styled.div`
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
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>{children}</Container>
    </ThemeProvider>
  );
};

export default Layout;
