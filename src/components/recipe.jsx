import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import recipes from "recipes";

const RecipeTitle = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  color: black;
  font-size: 26px;
  padding: 15px;
  margin-left: 10px;
  border-width: 0 1px 1px 1px;
  border-style: solid;
  border-color: lightgrey;
  background-color: lightgrey;
  z-index: 1;
`;

const StepContainer = styled.div`
  scroll-snap-align: start;
  min-height: 100%;
  width: 100vw;
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

const Recipe = ({ className, footerHeight }) => {
  let { id } = useParams();

  const currentRecipe = recipes.find(recipe => recipe.id === id);
  const nbOfSteps = currentRecipe.steps.length;

  return (
    <>
      <RecipeTitle>{currentRecipe.title}</RecipeTitle>
      {currentRecipe.steps.map(({ title, description }, index) => (
        <StepContainer key={`currentRecipe.id_${index}`}>
          <StepMark>{`${index + 1} / ${nbOfSteps}`}</StepMark>
          <div>{title}</div>
          <div>{description}</div>
        </StepContainer>
      ))}
    </>
  );
};

export default Recipe;
