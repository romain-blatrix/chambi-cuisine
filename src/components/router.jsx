import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Switch, Route, useLocation } from "react-router-dom";

import Recipe from "components/recipe.jsx";
import Home from "components/home.jsx";
import RevealFooter from "components/reveal-footer.jsx";

const Container = styled.div`
  scroll-snap-type: y mandatory;
  overflow-x: hidden;
  overflow-y: auto;
  height: calc(100vh - ${({ theme }) => theme.headerHeight});
  height: calc(var(--vh, 1vh) * 100 - ${({ theme }) => theme.headerHeight});
  position: relative;
  z-index: 1;
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
      <RevealFooter></RevealFooter>
    </Container>
  );
};

export default AppRouter;
