import React from "react";
import styled, { css } from "styled-components";

import GlobalTheme from "theme/provider.jsx";

import Recipe from "components/recipe.jsx";

const headerHeight = "80px";
const footerHeight = "200px";

const GlobalWrapper = styled.div`
  position: relative;
  height: calc(100vh + ${footerHeight});
  width: 100vw;
  display: flex;
  flex-flow: column nowrap;
`;

const Header = styled.header`
  position: sticky;
  flex-shrink: 0;
  top: 0;
  width: 100vw;
  height: ${headerHeight};
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 0 10px;
  display: flex;
  align-items: center;
  z-index: 1;
`;

const Main = styled.main`
  flex-grow: 1;
  height: c100%;
  background-color: white;
  margin-bottom: ${footerHeight};
  z-index: 0;
`;

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: ${footerHeight};
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  z-index: -1;
`;

const App = () => (
  <GlobalTheme>
    <GlobalWrapper>
      <Header>chambi cuisine</Header>
      <Main>
        <Recipe />
      </Main>
      <Footer>GROS FOOTER MAGGLE</Footer>
    </GlobalWrapper>
  </GlobalTheme>
);

export default App;
