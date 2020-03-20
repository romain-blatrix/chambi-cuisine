import React from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";

import Recipe from "components/recipe.jsx";
import Home from "components/home.jsx";

const RegularContainer = styled.div`
  height: calc(100vh - ${({ theme }) => theme.headerHeight});
  background-color: white;
  margin-bottom: ${({ theme }) => theme.footerHeight};
`;

const AppRouter = ({ className }) => (
  <div className={className}>
    <Switch>
      <Route path="/recipes/:id" exact>
        <Recipe />
      </Route>
      <Route path="/">
        <RegularContainer>
          <Home />
        </RegularContainer>
      </Route>
    </Switch>
  </div>
);

export default AppRouter;
