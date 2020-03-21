import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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

const DrawerTrigger = styled.button`
  border: 1px solid white;
  border-radius: 3px;
  padding: 15px 20px;
  font-size: 15px;
  color: white;
  background-color: transparent;
  cursor: pointer;

  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  transition-property: color;
  transition-duration: 0.3s;

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
    transition-property: transform;
    transition-duration: 150ms;
    transition-timing-function: ease-out;
  }

  &:hover,
  &:active {
    color: ${({ theme }) => theme.colors.primary};

    &::before {
      transform: scaleX(1);
    }
  }
  &:focus {
    outline: 0;
  }
`;

const Header = ({ className }) => {
  const ref = useRef(null);

  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const handleDrawerToggle = () => {
    // document.getElementById("router") &&
    //   document.getElementById("router").firstChild.scrollIntoView();
    // console.log(document.getElementById("router").firstChild);

    setIsDrawerVisible(!isDrawerVisible);
  };
  const closeDrawer = () => setIsDrawerVisible(false);

  return (
    <HeaderWrapper className={className}>
      <Title to="">Chambi cuisine</Title>
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
