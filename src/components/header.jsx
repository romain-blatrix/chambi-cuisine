import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useRouteMatch } from "react-router-dom";

import recipes from "recipes";

import Drawer from "components/drawer.jsx";

const HeaderWrapper = styled.header`
  position: sticky;
  flex-shrink: 0;
  top: 0;
  width: 100vw;
  height: ${({ theme }) => theme.headerHeight};
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 1px 2px 8px #00000052;
  z-index: 2;
`;

const Title = styled(Link)`
  font-size: 24px;
  color: white;
  text-decoration: none;
`;

const SubTitle = styled.div`
  font-size: 18px;
  color: white;
`;

const DrawerTrigger = styled.button`
  border: 1px solid white;
  border-radius: 3px;
  padding: 15px 20px;
  font-size: 15px;
  color: white;
  background-color: transparent;
  cursor: pointer;

  position: relative;
  transition: color 100ms ease-out;

  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: white;
    transform: scaleX(0);
    transform-origin: 100% 50%;
    transition: transform 100ms ease-out;
  }

  &:hover,
  &:active {
    color: ${({ theme }) => theme.colors.primary};
    &::before {
      transform: scaleX(1);
      transition: transform 300ms ease;
    }
  }
  &:focus {
    outline: 0;
  }
`;

const Header = ({ className }) => {
  const ref = useRef(null);
  const match = useRouteMatch("/recipes/:id");

  const [subTitle, setSubTitle] = useState(null);

  useEffect(() => {
    if (match && match.params && match.params.id) {
      const currentRecipe = recipes.find(
        recipe => recipe.id === match.params.id
      );
      return setSubTitle(currentRecipe.headerTitle);
    }
    return setSubTitle(null);
  }, [match]);

  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const handleDrawerToggle = () => setIsDrawerVisible(!isDrawerVisible);
  const closeDrawer = () => setIsDrawerVisible(false);

  return (
    <HeaderWrapper className={className}>
      <div>
        <Title to="">
          Chambi cuisine{subTitle && <SubTitle>{subTitle}</SubTitle>}
        </Title>
      </div>

      <div ref={ref}>
        <DrawerTrigger onClick={handleDrawerToggle}>Les recettes</DrawerTrigger>
        <Drawer
          ref={ref}
          closeDrawer={closeDrawer}
          isVisible={isDrawerVisible}
          recipes={recipes}
        />
      </div>
    </HeaderWrapper>
  );
};

export default Header;
