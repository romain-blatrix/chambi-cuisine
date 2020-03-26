import React, { useRef, useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { Link, useRouteMatch } from "react-router-dom";

import recipes from "recipes";

import RecipeDrawer from "components/recipe-drawer.jsx";

import logoChambi from "assets/image/logo/chambi_black.png";

const HeaderWrapper = styled.header`
  position: sticky;
  flex-shrink: 0;
  top: 0;
  width: 100%;
  height: ${({ theme }) => theme.headerHeight};
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 1px 2px 8px #00000052;
  z-index: 2;
  @media screen and (min-width: 700px) {
    padding: 0 30px;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const shake = keyframes`
  25% {
    transform: rotate(-10deg);
  }
  75% {
    transform: rotate(10deg);
  }
`;

const LogoContainer = styled(Link)`
  width: 60px;
  height: 60px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  flex-shrink: 0;
  box-shadow: 0 0 7px 2px #0000004a;
  @media (hover: hover) {
    &:hover {
      animation: ${shake} 400ms infinite;
    }
  }
  &:active {
    animation: ${shake} 400ms infinite;
  }
`;

const Logo = styled.img`
    width: 50px;
  }
`;

const SubTitle = styled.div`
  font-size: 16px;
  color: white;
  i {
    display: none;
    @media screen and (min-width: 700px) {
      display: inline;
    }
  }
`;

const Title = styled(Link)`
  @media screen and (min-width: 370px) {
    font-size: 24px;
    ${SubTitle} {
      font-size: 20px;
    }
  }
  @media screen and (min-width: 700px) {
    flex-direction: row;
    font-size: 38px;
    ${SubTitle} {
      font-size: 28px;
    }
  }
  font-family: "Parisienne";
  font-size: 18px;
  color: white;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  line-height: 1;
`;

const DrawerContainer = styled.div`
  flex-shrink: 0;
  margin-left: 15px;
`;

const DrawerTrigger = styled.button`
  @media screen and (min-width: 400px) {
    font-size: 15px;
  }
  border: 1px solid white;
  border-radius: 3px;
  padding: 15px 20px;
  font-size: 12px;
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
      <TitleContainer>
        <LogoContainer to="/">
          <Logo src={logoChambi} alt="logo chambi cuisine" />
        </LogoContainer>
        <Title to="">
          <span>Chambi cuisine</span>
          {subTitle && (
            <SubTitle>
              <i>...&nbsp;</i>
              {subTitle}
            </SubTitle>
          )}
        </Title>
      </TitleContainer>

      <DrawerContainer ref={ref}>
        <DrawerTrigger onClick={handleDrawerToggle}>Les recettes</DrawerTrigger>
        <RecipeDrawer
          ref={ref}
          closeDrawer={closeDrawer}
          isVisible={isDrawerVisible}
          recipes={recipes}
        />
      </DrawerContainer>
    </HeaderWrapper>
  );
};

export default Header;
