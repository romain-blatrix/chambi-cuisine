import React from "react";
import styled, { css, keyframes } from "styled-components";

import recipes from "recipes";

import HomeRecipe from "components/home-recipe.jsx";

const show = keyframes`
  0% {
    opacity: 0.5;
  }
  20% {
    opacity: 1;
  }
  100% {
    transform: scale(1.02);
  }
`;

const hide = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.7);
    opacity: 0;
  }
`;

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

  ${({ animationState }) => {
    if (animationState === "entering" || animationState === "entered") {
      return css`
        animation: ${show} 150ms ease-out;
      `;
    }
    if (animationState === "exiting" || animationState === "exited") {
      return css`
        animation: ${hide} 80ms ease-in forwards;
      `;
    }
    return null;
  }}
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

const ContactWrapper = styled.div`
  display: flex;
  & > * {
    margin-right: 20px;
  }
`;

const ContactLink = styled.a`
  padding: 10px 0;
  width: 90px;
  text-align: center;
  border: 1px solid currentColor;
  color: inherit;
  text-decoration: none;
  border-radius: 20px;
  background-color: white;
  transition: all 200ms ease;
  transition: all 200ms ease;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    border-style: solid;
    border-width: 20px 44px 0 44px;
    border-color: lightgray transparent transparent transparent;
    opacity: 0;
  }
  &:hover {
    border-radius: 4px;
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

const Home = ({ className, animationState }) => {
  return (
    <Content animationState={animationState}>
      <H1>Le projet</H1>
      <div>
        <p>
          Conjonction des cerveaux féconds de 3 amis en manque de code, de
          dessin et de cuisine, ce projet a pour vocation de permettre à tous de
          faire entrer la canaillerie dans le quotidien.
        </p>
        <p>
          Loin des standards des guides de cuisine ou des tutoriels en tout
          genre, ce projet se veut autant ludique que lubrique. Ici pas de place
          pour le calcul calorique et les néologismes finissant en « isme », ce
          que nous proposons est une cuisine identifiable avec « du beurre, de
          la crème, des os et des arêtes » comme le défendait le regretté Paul
          Bocuse.
        </p>
        <p>
          Que vous soyez des cordons bleus en herbe, des bec fins, des
          épicuriens ventripotents ou de simple curieux, vous trouverez sur ce
          site de quoi combler votre faim et même plus encore.
        </p>
        <p>
          Soyez curieux, soyez gourmands, faites-vous plaisir et n’oubliez pas
          que « la cuisine est l’art de transformer instantanément en joie des
          produits chargés d’histoire ».
        </p>
      </div>
      <H1>Qui sont-ils?</H1>
      <div>
        Des Burgonds libres. Chambi cuisine, Tommy dessine et Romain développe.
      </div>

      <H1>Les recettes</H1>
      <HomeRecipeList>
        {recipes.map(({ title, id }) => (
          <HomeRecipe id={id} key={id} title={title} />
        ))}
      </HomeRecipeList>
      <H1>Contact</H1>
      <ContactWrapper>
        <ContactLink href="mailto:romain.blatrix@gmail.com?cc=chambriermatthieu@gmail.com&cc=tommydessine@gmail.com">
          <span>Par mail</span>
        </ContactLink>
        <ContactLink
          href="https://viralviralvideos.com/wp-content/uploads/2017/05/GIF-laughing-funny-LOL-haha-hehe-hilarious-fun-happy-laugh-Kevin-Malone-Brian-Baumgartner-The-Office-GIF.gif"
          target="_blank"
        >
          <span>Sur TikTok</span>
        </ContactLink>
      </ContactWrapper>
    </Content>
  );
};

export default Home;
