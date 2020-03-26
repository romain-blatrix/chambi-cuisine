import React from "react";
import styled, { css, keyframes } from "styled-components";

import recipes from "recipes";

import HomeRecipe from "components/home-recipe.jsx";

const show = keyframes`
  0% {
    opacity: 0.5;
  }
  20% {
    opacity: 1;
  }
  100% {
    transform: scale(1.02);
  }
`;

const hide = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.7);
    opacity: 0;
  }
`;

const Content = styled.div`
  /* scroll-snap-type: y mandatory;
  overflow-x: hidden;
  overflow-y: auto;
  height: calc(100vh - ${({ theme }) => theme.headerHeight});
  height: calc(var(--vh, 1vh) * 100 - ${({ theme }) => theme.headerHeight});
  position: relative;
  z-index: 1;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  -webkit-overflow-scrolling: touch; */
  ${({ state }) => {
    if (state === "entering" || state === "entered") {
      return css`
        animation: ${show} 150ms ease-out;
      `;
    }
    if (state === "exiting" || state === "exited") {
      return css`
        animation: ${hide} 80ms ease-in forwards;
      `;
    }
    return null;
  }}
`;

const Transition = ({ state, children }) => (
  <Content state={state}>{children}</Content>
);

export default Transition;
