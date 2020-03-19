import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

import recipes from "recipes";

const myRecipe = [
  { title: "faire bouillir l'eau", description: "blablabla" },
  { title: "couper les patates", description: "blablabla" },
  { title: "couper les oignons", description: "et ouai maggle" }
];

const RecipeContainer = styled.div`
  scroll-snap-type: y mandatory;
  height: 100%;
  overflow-y: scroll;
`;

const RecipeTitle = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  color: black;
  font-size: 26px;
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
`;

const StepMark = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const Recipe = () => {
  let { id } = useParams();
  const nbOfSteps = myRecipe.length;

  const currentRecipe = recipes.find(recipe => recipe.id === id);
  return (
    <RecipeContainer>
      <RecipeTitle>{currentRecipe.title}</RecipeTitle>
      {currentRecipe.steps.map(({ title, description }, index) => (
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
