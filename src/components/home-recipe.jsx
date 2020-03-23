import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import defaultImage from "assets/image/recipe/default.jpeg";

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
  background-size: contain;
  overflow: hidden;
`;

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

const HomeRecipe = ({ className, id, title }) => {
  const [image, setImage] = useState(defaultImage);

  const loadImage = async id => {
    try {
      const image = await import(
        /* webpackMode: "eager" */
        `assets/image/recipe/${id}/main.jpeg`
      );
      setImage(image.default);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    loadImage(id);
  }, [id]);

  return (
    <StyledHomeRecipe to={`/recipes/${id}`} image={image}>
      <Title>{title}</Title>
    </StyledHomeRecipe>
  );
};

export default HomeRecipe;
