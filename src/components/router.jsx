import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Switch, Route, useLocation } from "react-router-dom";
import { Transition, CSSTransition } from "react-transition-group";

import Recipe from "components/recipe.jsx";
import Home from "components/home.jsx";
import RevealFooter from "components/reveal-footer.jsx";
import TransitionComponent from "components/transition.jsx";

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

const routes = [
  { path: "/", name: "Home", Component: Home },
  { path: "/recipes/:id", name: "Recipe", Component: Recipe }
];

const AppRouter = ({ className }) => {
  const location = useLocation();
  const ref = useRef(null);

  useEffect(() => {
    const router = document.getElementById("router");
    router && router.scrollTo(0, 0);
  }, [location]);

  return (
    <Container className={className} ref={ref} id="router">
      {routes.map(({ path, Component }) => (
        <Route key={path} exact path={path}>
          {({ match }) => {
            console.log(match);

            return (
              <Transition in={match != null} timeout={300} unmountOnExit>
                {state => (
                  <TransitionComponent state={state}>
                    <Component />
                  </TransitionComponent>
                )}
              </Transition>
            );
          }}
        </Route>
      ))}
      <RevealFooter />
    </Container>
  );
};

export default AppRouter;
