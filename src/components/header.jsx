import React, { useState } from "react";
import styled, { css } from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import recipes from "recipes";

const HeaderWrapper = styled.header`
  position: sticky;
  flex-shrink: 0;
  top: 0;
  width: 100vw;
  height: ${({ height }) => height};
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
`;

const Title = styled(Link)`
  font-size: 24px;
  color: white;
  text-decoration: none;
`;

const DrawerTrigger = styled.button`
  border: 1px solid white;
  border-radius: 3px;
  padding: 10px 15px;
  color: white;
  background-color: transparent;
  cursor: pointer;
  &:focus {
    outline: O;
  }
  &:hover {
    background-color: white;
    color: ${({ theme }) => theme.colors.primary};
    transition: background-color 100ms ease, color 100ms ease;
  }
`;

const Drawer = styled.div`
  width: 300px;
  height: calc(100vh - ${({ height }) => height});
  background-color: ${({ theme }) => theme.colors.secondary};
  position: absolute;
  top: ${({ height }) => height};
  right: 0;
  transform: translateX(300px);
  transition: transform 300ms ease;
  display: flex;
  flex-flow: column nowrap;
  padding: 20px 0;
  ${({ visible }) =>
    visible &&
    css`
      transform: translateX(0);
    `}
`;

const RecipeLink = styled(Link)`
  text-decoration: none;
  color: white;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid lightgrey;
  &:focus {
    outline: O;
  }
`;

const Header = ({ className, height }) => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const handleDrawerToggle = () => setIsDrawerVisible(!isDrawerVisible);

  return (
    <HeaderWrapper className={className} height={height}>
      <Title to="/">Chambi cuisine</Title>
      <DrawerTrigger onClick={handleDrawerToggle}>Les recettes</DrawerTrigger>
      <Drawer height={height} visible={isDrawerVisible}>
        {recipes.map(({ id, title }) => (
          <RecipeLink
            key={id}
            to={`/recipes/${id}`}
            onClick={handleDrawerToggle}
          >
            {title}
          </RecipeLink>
        ))}
      </Drawer>
    </HeaderWrapper>
  );
};

export default Header;
