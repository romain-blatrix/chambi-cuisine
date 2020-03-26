import React from "react";
import styled, { css, keyframes } from "styled-components";

import { ReactComponent as InstagramSvg } from "assets/svg/instagram.svg";
import { ReactComponent as Heart } from "assets/svg/heart.svg";

const Wrapper = styled.div`
  ${({ snap }) =>
    snap &&
    css`
      scroll-snap-align: start;
    `};
  position: relative;
  height: ${({ theme }) => theme.footerHeight};
  background-color: transparent;
  box-shadow: inset 0px 6px 9px 1px #00000059;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const MainFooterContent = styled.div`
  width: 70%;
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
  right: 25px;
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
  margin: 0 2px;
  animation: ${pulse} 1s ease infinite;
`;

const DevLink = styled.a`
  text-decoration: none;
  position: relative;
  color: white;
  font-weight: 700;
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

const RevealFooter = ({ className, snap }) => (
  <Wrapper className={className} snap={snap}>
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
    {/* <Contact /> */}
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
  </Wrapper>
);

export default RevealFooter;
