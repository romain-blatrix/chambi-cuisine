import React from "react";
import styled from "styled-components";

import recipes from "recipes";

import HomeRecipe from "components/home-recipe.jsx";

const Content = styled.div`
  padding: 15px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: left;
  max-width: 800px;
  margin: 0 auto;
  @media screen and (min-width: 400px) {
    justify-content: center;
  }
`;

const RecipeListTitle = styled.h1``;

const HomeRecipeList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(8rem, 1fr));
  grid-auto-rows: 1fr;
  grid-gap: 10px;
  &::before {
    content: "";
    width: 0;
    padding-bottom: 100%;
    grid-row: 1 / 1;
    grid-column: 1 / 1;
  }
  & > *:first-child {
    grid-row: 1 / 1;
    grid-column: 1 / 1;
  }
`;

// const StyledLazyImage = styled(LazyImage)`
//   position: absolute;
//   top: 0;
//   left: 0;
//   height: 100%;
//   width: 100%;
// `;

const Home = ({ className }) => {
  return (
    <Content>
      Le projet
      <br />
      Qui sont-ils?
      <br /> quoi d'autre ?<br />
      <RecipeListTitle>Les recettes</RecipeListTitle>
      <HomeRecipeList>
        {recipes.map(({ title, id }) => (
          <HomeRecipe id={id} key={id} title={title} />
        ))}
      </HomeRecipeList>
    </Content>
  );
};

export default Home;
