import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Switch, Route, useLocation } from "react-router-dom";

import Recipe from "components/recipe.jsx";
import Home from "components/home.jsx";

const RevealFooter = styled.div`
  height: ${({ theme }) => theme.footerHeight};
  background-color: transparent;
  scroll-snap-align: start;
  box-shadow: inset 0px 6px 9px 1px #00000059;
`;

const Container = styled.div`
  scroll-snap-type: y mandatory;
  overflow: auto;
  height: calc(100vh - ${({ theme }) => theme.headerHeight});
  height: calc(var(--vh, 1vh) * 100 - ${({ theme }) => theme.headerHeight});
  z-index: 0;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  -webkit-overflow-scrolling: touch;
`;

const SnapContent = styled.div`
  scroll-snap-align: start;
  min-height: 100%;
  background-color: white;
`;

const AppRouter = ({ className }) => {
  const location = useLocation();
  const ref = useRef(null);
  useEffect(() => {
    const router = document.getElementById("router");
    router && router.scrollTo(0, 0);
  }, [location]);

  return (
    <Container className={className} ref={ref} id="router">
      <Switch>
        <Route path="/recipes/:id" exact>
          <Recipe />
        </Route>
        <Route path="/">
          <SnapContent>
            <Home />
          </SnapContent>
        </Route>
      </Switch>
      <RevealFooter />
    </Container>
  );
};

export default AppRouter;
