import React from "react";
import { useParams } from "react-router-dom";

import recipes from "recipes";

import RecipeStep from "components/recipe-step.jsx";
import Ingredients from "components/ingredients.jsx";

const Recipe = ({ className, animationState }) => {
  const { id } = useParams();
  const currentRecipe = recipes.find(recipe => recipe.id === id);

  if (!currentRecipe) {
    return null;
  }

  const nbOfSteps = currentRecipe.steps.length;
  const { ingredients, nbPeople } = currentRecipe;

  return (
    <>
      {ingredients && (
        <Ingredients ingredients={ingredients} nbPeople={nbPeople} />
      )}
      {currentRecipe.steps.map(({ description, imageUrl, title }, index) => (
        <RecipeStep
          key={`currentRecipe.id_${index}`}
          animationState={animationState}
          id={id}
          description={description}
          title={title}
          index={index}
          imageUrl={imageUrl}
          nbOfSteps={nbOfSteps}
        />
      ))}
    </>
  );
};

export default Recipe;
