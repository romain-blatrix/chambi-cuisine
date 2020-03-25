import React from "react";
import styled from "styled-components";

import recipes from "recipes";

import HomeRecipe from "components/home-recipe.jsx";

const Content = styled.div`
  padding: 15px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: left;
  align-items: flex-start;
  max-width: 800px;
  margin: 0 auto;
  @media screen and (min-width: 400px) {
    justify-content: center;
  }
`;

const H1 = styled.h1`
  z-index: 0;
  white-space: nowrap;
  &::after {
    content: "";
    width: 110%;
    display: block;
    height: 15px;
    background-color: #cc769569;
    margin-top: -14px;
    margin-left: 10px;
    transform: skew(-20deg);
    border-radius: 2px;
    z-index: -1;
    position: relative;
  }
`;

const HomeRecipeList = styled.div`
  width: 100%;
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

const ContactLink = styled.a`
  padding: 10px 0;
  width: 90px;
  text-align: center;
  border: 1px solid currentColor;
  color: inherit;
  text-decoration: none;
  border-radius: 21px;
  background-color: white;
  transition: all 200ms ease;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    border-style: solid;
    border-width: 20px 45px 0 45px;
    border-color: lightgray transparent transparent transparent;
    opacity: 0;
  }
  &:hover {
    border-radius: 2px;
    border-color: lightgray;
    background-color: white;
    transition: all 300ms ease;
    & > span {
      opacity: 0;
      transition: opacity 100ms ease;
    }
    &::before {
      opacity: 1;
      transition: opacity 300ms ease 100ms;
    }
  }
`;

const Home = ({ className }) => {
  return (
    <Content>
      <H1>Le projet</H1>
      <div>Y'en a pas vraiment</div>
      <H1>Qui sont-ils?</H1>
      <div>Des burgonds libres</div>

      <H1>Les recettes</H1>
      <HomeRecipeList>
        {recipes.map(({ title, id }) => (
          <HomeRecipe id={id} key={id} title={title} />
        ))}
      </HomeRecipeList>
      <H1>Contact</H1>
      <ContactLink href="mailto:romain.blatrix@gmail.com?cc=chambriermatthieu@gmail.com&tommydessine@gmail.com">
        <span>Par mail</span>
      </ContactLink>
    </Content>
  );
};

export default Home;
