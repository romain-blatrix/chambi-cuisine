import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import recipes from "recipes";

const RecipeContainer = styled.div`
  scroll-snap-type: y mandatory;
  height: 100%;
`;

const RecipeTitle = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  color: black;
  font-size: 26px;
  z-index: 1;
`;

const StepContainer = styled.div`
  min-height: 100%;
  width: 100vw;
  scroll-snap-align: start;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: white;
`;

const StepMark = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const RevealFooter = styled.div`
  height: ${({ theme }) => theme.footerHeight};
  background-color: transparent;
  scroll-snap-align: start;
`;

const Recipe = ({ className, footerHeight }) => {
  let { id } = useParams();

  const currentRecipe = recipes.find(recipe => recipe.id === id);
  const nbOfSteps = currentRecipe.steps.length;

  return (
    <RecipeContainer className={className}>
      <RecipeTitle>{currentRecipe.title}</RecipeTitle>
      {currentRecipe.steps.map(({ title, description }, index) => (
        <StepContainer key={`currentRecipe.id_${index}`}>
          <StepMark>{`${index + 1} / ${nbOfSteps}`}</StepMark>
          <div>{title}</div>
          <div>{description}</div>
        </StepContainer>
      ))}
      <RevealFooter />
    </RecipeContainer>
  );
};

export default Recipe;
