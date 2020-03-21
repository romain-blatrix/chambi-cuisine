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
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

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

const FooterContent = styled.div`
  width: 80%;
  max-width: 500px;
  height: 80%;
  border-radius: 10px;
  background-color: #00000066;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
`;

const Block = styled.div`
  flex: 1;
  border-right: 1px solid white;
  height: 100%;
  transform: skew(-20deg);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 10px;

  cursor: pointer;
  & > div {
    transform: skew(20deg);
  }
  &:last-of-type {
    border: 0;
  }
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
      <RevealFooter>
        <FooterContent>
          <Block
            onClick={() =>
              window.open("https://www.instagram.com/chambicuisine/", "_blank")
            }
          >
            <div>
              Chambi <br />
              Cuisine
            </div>
          </Block>
          <Block
            onClick={() =>
              window.open("https://www.instagram.com/tommydessine/", "_blank")
            }
          >
            <div>
              Tommy
              <br />
              Dessine
            </div>
          </Block>
        </FooterContent>
      </RevealFooter>
    </Container>
  );
};

export default AppRouter;
