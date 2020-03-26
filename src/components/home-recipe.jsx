import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import defaultImage from "assets/image/recipe/default.jpg";

import useImage from "hooks/image-loader.jsx";

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  left: 0;
  padding: 5px;
  background-color: #616161a8;
  font-size: 20px;
`;

const StyledHomeRecipe = styled(Link)`
  position: relative;
  background-color: lightblue;
  box-shadow: 0 2px 4px #00000057;
  text-decoration: none;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: url(${({ image }) => image}) no-repeat;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  opacity: 1;
  transition: opacity 200ms ease;

  &:hover {
    box-shadow: 3px 4px 8px 0 #737373;
    transition: box-shadow 100ms ease;
    ${Title} {
      opacity: 0;
      transition: opacity 400ms ease;
    }
  }
`;

const HomeRecipe = ({ className, id, title }) => {
  const [image, status] = useImage(`recipe/${id}/main.jpg`);

  return (
    <StyledHomeRecipe
      to={`/recipes/${id}`}
      image={status === "loaded" ? image : defaultImage}
    >
      <Title>{title}</Title>
    </StyledHomeRecipe>
  );
};

export default HomeRecipe;
