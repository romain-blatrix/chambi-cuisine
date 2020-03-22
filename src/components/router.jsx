import React, { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { Switch, Route, useLocation } from "react-router-dom";

import Recipe from "components/recipe.jsx";
import Home from "components/home.jsx";

import { ReactComponent as InstagramSvg } from "assets/svg/instagram.svg";
import { ReactComponent as Heart } from "assets/svg/heart.svg";

const RevealFooter = styled.div`
  position: relative;
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

const MainFooterContent = styled.div`
  width: 80%;
  max-width: 450px;
  height: 60%;
  border-radius: 10px;
  background-color: #00000066;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
`;

const StyledInstagramSvg = styled(InstagramSvg)`
  transform: scale(0);
  transition: height 300ms ease;
  height: 0;
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
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  }
  &:last-of-type {
    border: 0;
  }

  &:hover ${StyledInstagramSvg} {
    transform: scale(1);
    margin: 3px 0;
    height: 24px;
    transition: transform 200ms ease 100ms, height 300ms ease;
  }
`;

const Dev = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-size: 14px;
  display: flex;
  align-items: center;
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.3); }
  100% { transform: scale(1); }

`;

const StyledHeart = styled(Heart)`
  fill: #e03c3c;
  stroke: #a04955;
  position: relative;
  width: 14px;
  margin: 0 1px;
  animation: ${pulse} 1s ease infinite;
`;

const DevLink = styled.a`
  text-decoration: none;
  position: relative;
  color: white;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1px;
    background-color: white;
    transition: width 100ms ease-out;
  }

  &:hover::after {
    width: 100%;
    transition: width 100ms ease-out;
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
        <MainFooterContent>
          <Block
            onClick={() =>
              window.open("https://www.instagram.com/chambicuisine/", "_blank")
            }
          >
            <div>
              Chambi
              <StyledInstagramSvg />
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
              <StyledInstagramSvg />
              Dessine
            </div>
          </Block>
        </MainFooterContent>
        <Dev>
          <span>Fait avec&nbsp;</span>
          <StyledHeart />
          <span>&nbsp;par&nbsp;</span>
          <DevLink
            href="https://www.instagram.com/romain_blatrix"
            target="_blank"
            rel="noopener noreferrer"
          >
            Romain Blatrix
          </DevLink>
        </Dev>
      </RevealFooter>
    </Container>
  );
};

export default AppRouter;
