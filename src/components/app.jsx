import React from "react";
import styled, { css } from "styled-components";

import GlobalTheme from "theme/provider.jsx";

import Recipe from "components/recipe.jsx";

const footerHeight = "200px";

const Header = styled.header`
  position: sticky;
  top: 0;
  width: 100vw;
  height: ${({ theme }) => theme.headerHeight};
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  z-index: 1;
`;

const Main = styled.main`
  min-height: ${({ theme }) => css`calc(100vh - ${theme.headerHeight})`};
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
  background-color: lightgrey;
  color: white;
  z-index: -1;
`;

const App = () => (
  <GlobalTheme>
    <Header>chambi cuisine</Header>
    <Main>
      <Recipe />
    </Main>
    <Footer>bienvenue</Footer>
  </GlobalTheme>
);

export default App;
