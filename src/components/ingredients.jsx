import React, { useState, useRef } from "react";
import styled, { css } from "styled-components";

import { NavLink } from "react-router-dom";

import useOnClickOutside from "hooks/click-outside.jsx";

const IngregientsWrapper = styled.div`
  height: 100%;
  width: 300px;
  position: fixed;
  background-color: #e4bdcd;
  padding: 15px;
  z-index: 1;
  transform: translateX(-300px);
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
  padding-left: 18px;
`;

const IngredientsTrigger = styled.button`
  width: 100px;
  height: 30px;
  position: absolute;
  right: -65px;
  top: calc(50vh - 50px);
  z-index: 1;
  transform: rotate(90deg);
  transform-origin: 50% 50%;
  background-color: #e4bdcd;
  border-radius: 3px 3px 0 0;
  border: 0;
  cursor: pointer;
  &:focus {
    outline: 0;
  }
`;

const Ingredient = styled.li`
  margin-bottom: 5px;
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
        {ingredients.map(ingredient => (
          <Ingredient>{ingredient}</Ingredient>
        ))}
      </StyledIngredients>
    </IngregientsWrapper>
  );
};

export default Ingredients;
