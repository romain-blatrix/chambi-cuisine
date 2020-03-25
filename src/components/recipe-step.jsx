import React from "react";
import styled from "styled-components";

import useImage from "hooks/image-loader.jsx";

import defaultImage from "assets/image/recipe/default.jpg";

const StepContainer = styled.div`
  scroll-snap-align: start;
  min-height: 100%;
  width: 100vw;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
  position: relative;
  background-color: white;
  overflow: hidden;
  padding: 15px 25px;
  text-align: center;
`;

const StepMark = styled.div`
  font-size: 14px;
  width: 100px;
  background: #e45b4e9e;
  position: absolute;
  text-align: center;
  line-height: 35px;
  letter-spacing: 1px;
  color: #f0f0f0;
  top: 4px;
  left: -28px;
  transform: rotate(-45deg);
  user-select: none;
  cursor: default;
`;

const Title = styled.h3`
  z-index: 0;
  font-size: 20px;
  letter-spacing: 0.2px;
  &::after {
    content: "";
    width: 110%;
    display: block;
    height: 10px;
    background-color: #cc769569;
    margin-top: -7px;
    margin-left: 10px;
    transform: skew(-20deg);
    border-radius: 2px;
    z-index: -1;
    position: relative;
  }
`;

const Image = styled.img`
  max-width: 500px;
  width: 100%;
`;

const RecipeStep = ({
  className,
  id,
  title,
  description,
  imageUrl,
  index,
  nbOfSteps
}) => {
  const [image, status] = useImage(`recipe/${imageUrl}`);

  return (
    <StepContainer>
      <StepMark>{`${index + 1} / ${nbOfSteps}`}</StepMark>
      <Title>{title}</Title>
      <div>{description}</div>
      <Image src={status === "loaded" ? image : defaultImage} />
    </StepContainer>
  );
};

export default RecipeStep;
