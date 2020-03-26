import React, { forwardRef } from "react";
import styled, { css } from "styled-components";

import { NavLink } from "react-router-dom";

import useOnClickOutside from "hooks/click-outside.jsx";

const StyledDrawer = styled.div`
  width: 300px;
  max-width: 90vw;
  height: calc(100vh - ${({ theme }) => theme.headerHeight});
  height: calc(var(--vh, 1vh) * 100 - ${({ theme }) => theme.headerHeight});
  background-color: ${({ theme }) => theme.colors.secondary};
  position: fixed;
  top: ${({ theme }) => theme.headerHeight};
  right: 0;
  transform: translateX(300px);
  transition: transform 100ms ease-out;
  display: flex;
  flex-flow: column nowrap;

  ${({ isVisible }) =>
    isVisible &&
    css`
      transition: transform 300ms ease;
      transform: translateX(0);
      box-shadow: -1px 10px 13px 4px #0000006b;
    `}
`;

const RecipeLink = styled(NavLink)`
  position: relative;
  text-decoration: none;
  color: white;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid lightgrey;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 0;
    height: 0;
    background-color: white;
    transition: height 100ms ease-out;
  }

  &:hover::after {
    width: 100%;
    height: 2px;
    transition: width 100ms ease-out;
  }

  &.active {
    transition: color 300ms ease, background-color 300ms ease;
    background-color: #9c6888;
  }

  &:focus {
    outline: 0;
  }
`;

const Drawer = ({ className, closeDrawer, isVisible, recipes }, ref) => {
  useOnClickOutside(ref, closeDrawer);

  return (
    <StyledDrawer isVisible={isVisible}>
      {recipes.map(({ id, title }) => (
        <RecipeLink
          activeClassName="active"
          key={id}
          to={`/recipes/${id}`}
          onClick={closeDrawer}
        >
          {title}
        </RecipeLink>
      ))}
    </StyledDrawer>
  );
};

export default forwardRef(Drawer);
