import React, { useState, useRef } from "react";
import styled, { css, keyframes } from "styled-components";

import useOnClickOutside from "hooks/click-outside.jsx";

import logo from "assets/image/logo/chambi_black.png";

const wiggle = keyframes`
  0% {
    transform: scale(1) rotate(90deg);
  }
  8% {
    transform: scale(1.2) rotate(90deg);
  }
  16% {
    transform: scale(1) rotate(90deg);
  }
  24% {
    transform: scale(1.2) rotate(90deg);
  }
  32% {
    transform: scale(1) rotate(90deg);
  }
`;

const IngregientsWrapper = styled.div`
  height: calc(100vh - ${({ theme }) => theme.headerHeight});
  @supports (color: var(--)) {
    height: calc(var(--vh, 1vh) * 100 - ${({ theme }) => theme.headerHeight});
  }
  width: 280px;
  position: fixed;
  background-color: #e4bdcd;
  z-index: 1;
  box-shadow: 0px 0px 6px 2px #0000003b;
  transform: translateX(-280px);
  transition: transform 150ms ease-out;
  ${({ isVisible }) =>
    isVisible &&
    css`
      transform: translateX(0);
      transition: transform 300ms ease;
    `}
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
  ${({ animateTrigger }) =>
    animateTrigger &&
    css`
      animation: ${wiggle} 5000ms 5 3000ms;
    `};
  &:focus {
    outline: 0;
  }
`;

const IngredientsContent = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  padding: 15px;
`;

const Title = styled.div`
  margin: 5px 0 15px;
  font-weight: 700;
`;

const DifficultyWrapper = styled.div`
  display: flex;
`;

const StyledIngredients = styled.ul`
  margin: 0;
  padding: 10px;
  border: 1px solid #5d5d5d;
  border-radius: 8px;
`;

const Logo = styled.div`
  height: 17px;
  width: 39px;
  flex-shrink: 0;
  margin-top: 3px;
  background: url(${logo}) no-repeat;
  background-size: contain;
  ${({ difficulty }) =>
    difficulty &&
    css`
      height: 30px;
      width: 30px;
      background-position: center;
      margin-right: 2px;
      &:nth-of-type(-n + ${difficulty}) {
        background-color: white;
        border-radius: 50%;
      }
    `}
`;

const Ingredient = styled.li`
  margin-bottom: 12px;
  list-style: none;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

const Ingredients = ({ className, ingredients, nbPeople, prepTime, level }) => {
  const ref = useRef(null);
  const [isIngredientsVisible, setIsIngredientsVisible] = useState(false);
  const [animateTrigger, setAnimateTrigger] = useState(true);

  const handleIngredientsToggle = () => {
    if (!isIngredientsVisible && animateTrigger) {
      setAnimateTrigger(false);
    }
    setIsIngredientsVisible(!isIngredientsVisible);
  };

  const closeIngredients = () => setIsIngredientsVisible(false);

  useOnClickOutside(ref, closeIngredients);

  return (
    <IngregientsWrapper ref={ref} isVisible={isIngredientsVisible}>
      <IngredientsTrigger
        onClick={handleIngredientsToggle}
        animateTrigger={animateTrigger}
      >
        <span>Ingredients</span>
      </IngredientsTrigger>
      <IngredientsContent>
        {prepTime && <Title>Temps de préparation : {prepTime}</Title>}
        {level && (
          <Title>
            Niveau de difficulté :
            <DifficultyWrapper>
              {Array(5)
                .fill()
                .map((_, index) => (
                  <Logo key={`difficulty${index}`} difficulty={level} />
                ))}
            </DifficultyWrapper>
          </Title>
        )}
        <Title>Ingrédients{nbPeople && ` pour ${nbPeople} personnes :`}</Title>
        <StyledIngredients>
          {ingredients.map((ingredient, index) => (
            <Ingredient key={`ingredient${index}`}>
              <Logo />
              {ingredient}
            </Ingredient>
          ))}
        </StyledIngredients>
      </IngredientsContent>
    </IngregientsWrapper>
  );
};

export default Ingredients;
