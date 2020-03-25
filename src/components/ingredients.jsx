import React, { useState, useRef } from "react";
import styled, { css } from "styled-components";

import useOnClickOutside from "hooks/click-outside.jsx";

import logo from "assets/image/logo/chambi_black.png";

const IngregientsWrapper = styled.div`
  height: calc(100vh - ${({ theme }) => theme.headerHeight});
  width: 260px;
  position: fixed;
  background-color: #e4bdcd;
  padding: 15px;
  z-index: 1;
  box-shadow: 0px 0px 6px 2px #0000003b;
  transform: translateX(-260px);
  transition: transform 150ms ease-out;
  ${({ isVisible }) =>
    isVisible &&
    css`
      transform: translateX(0);
      transition: transform 300ms ease;
    `}
`;

const StyledIngredients = styled.ul`
  height: 100%;
  margin: 0;
  padding-left: 10px;
  overflow: auto;
`;

const IngredientsTrigger = styled.button`
  width: 100px;
  height: 30px;
  position: absolute;
  right: -65px;
  top: calc(50vh - 50px);
  z-index: 1;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.2px;
  transform: rotate(90deg);
  transform-origin: 50% 50%;
  background-color: #e4bdcd;
  border-radius: 3px 3px 0 0;
  border: 0;
  cursor: pointer;
  box-shadow: 1px -3px 3px 0px #00000021;
  &:focus {
    outline: 0;
  }
`;

const Logo = styled.div`
  height: 17px;
  width: 39px;
  flex-shrink: 0;
  background: url(${logo}) no-repeat;
  background-size: contain;
`;

const Ingredient = styled.li`
  margin-bottom: 12px;
  list-style: none;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

const Ingredients = ({ className, ingredients }) => {
  const ref = useRef(null);
  const [isIngredientsVisible, setIsIngredientsVisible] = useState(false);

  const handleIngredientsToggle = () =>
    setIsIngredientsVisible(!isIngredientsVisible);

  const closeIngredients = () => setIsIngredientsVisible(false);

  useOnClickOutside(ref, closeIngredients);

  return (
    <IngregientsWrapper ref={ref} isVisible={isIngredientsVisible}>
      <IngredientsTrigger onClick={handleIngredientsToggle}>
        Ingredients
      </IngredientsTrigger>
      <StyledIngredients>
        {ingredients.map((ingredient, index) => (
          <Ingredient key={`ingredient${index}`}>
            <Logo />
            {ingredient}
          </Ingredient>
        ))}
      </StyledIngredients>
    </IngregientsWrapper>
  );
};

export default Ingredients;
