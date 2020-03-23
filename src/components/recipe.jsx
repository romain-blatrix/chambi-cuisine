import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import recipes from "recipes";

import RecipeStep from "components/recipe-step.jsx";

const Recipe = ({ className }) => {
  const { id } = useParams();
  const currentRecipe = recipes.find(recipe => recipe.id === id);
  const nbOfSteps = currentRecipe.steps.length;

  return currentRecipe.steps.map(({ description, imageUrl, title }, index) => (
    <RecipeStep
      key={`currentRecipe.id_${index}`}
      id={id}
      description={description}
      title={title}
      index={index}
      imageUrl={imageUrl}
      nbOfSteps={nbOfSteps}
    />
  ));
};

export default Recipe;
