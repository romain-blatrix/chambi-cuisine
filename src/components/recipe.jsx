import React, { useState } from "react";
import styled, { css } from "styled-components";

const myRecipe = [
  { title: "faire bouillir l'eau", description: "blablabla" },
  { title: "couper les patates", description: "blablabla" },
  { title: "couper les oignons", description: "et ouai maggle" }
];

const RecipeContainer = styled.div`
  scroll-snap-type: y mandatory;
  max-height: ${({ theme }) => css`calc(100vh - ${theme.headerHeight})`};
  overflow-y: scroll;
`;

const StepContainer = styled.div`
  min-height: ${({ theme }) => css`calc(100vh - ${theme.headerHeight})`};
  width: 100vw;
  scroll-snap-align: start;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const StepMark = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const Recipe = () => {
  const nbOfSteps = myRecipe.length;
  return (
    <RecipeContainer>
      {myRecipe.map(({ title, description }, index) => (
        <StepContainer>
          <StepMark>{`${index + 1} / ${nbOfSteps}`}</StepMark>
          <div>{title}</div>
          <div>{description}</div>
        </StepContainer>
      ))}
    </RecipeContainer>
  );
};

export default Recipe;
