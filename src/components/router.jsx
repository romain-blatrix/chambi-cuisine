import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Route, useLocation } from "react-router-dom";
import { Transition } from "react-transition-group";

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

const routes = [{ path: "/", Component: Home }];

const AppRouter = ({ className }) => {
  const { pathname } = useLocation();
  const ref = useRef(null);

  useEffect(() => {
    const router = document.getElementById("router");
    router && router.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Container className={className} ref={ref} id="router">
      {routes.map(({ path, Component }) => (
        <Route key={path} exact path={path}>
          {({ match }) => (
            <Transition
              in={match != null}
              timeout={300}
              unmountOnExit
              mountOnEnter
            >
              {state => <Component animationState={state} />}
            </Transition>
          )}
        </Route>
      ))}
      <Route exact path="/recipes/:id">
        <Recipe />
      </Route>

      <RevealFooter />
    </Container>
  );
};

export default AppRouter;
