import React from "react";
import styled, { css } from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import GlobalTheme from "theme/provider.jsx";

import Recipe from "components/recipe.jsx";
import Header from "components/header.jsx";
import Footer from "components/footer.jsx";

import Home from "components/home.jsx";

const headerHeight = "80px";
const footerHeight = "200px";

const GlobalWrapper = styled.div`
  position: relative;
  height: calc(100vh + ${footerHeight});
  width: 100vw;
  display: flex;
  flex-flow: column nowrap;
  overflow: hidden;
`;

const Main = styled.main`
  flex-grow: 1;
  height: 100%;
  background-color: white;
  margin-bottom: ${footerHeight};
  z-index: 0;
`;

const App = () => (
  <GlobalTheme>
    <Router>
      <GlobalWrapper>
        <Header height={headerHeight} />
        <Main>
          <Switch>
            <Route path="/recipes/:id" children={<Recipe />} />
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Main>
        <Footer height={footerHeight} />
      </GlobalWrapper>
    </Router>
  </GlobalTheme>
);

export default App;
