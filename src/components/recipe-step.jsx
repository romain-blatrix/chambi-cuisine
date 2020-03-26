import React from "react";
import styled, { css, keyframes } from "styled-components";

import useImage from "hooks/image-loader.jsx";

import defaultImage from "assets/image/recipe/default.jpg";

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

const StepContainer = styled.div`
  scroll-snap-align: start;
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
  position: relative;
  background-color: white;
  overflow: hidden;
  padding: 15px 25px;
  text-align: center;
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
  font-size: 16px;
  letter-spacing: 0.2px;
  white-space: nowrap;
  @media screen and (min-width: 400px) {
    font-size: 24px;
  }
  &::after {
    content: "";
    width: 105%;
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
  max-width: 100%;
  max-height: 70%;
`;

const RecipeStep = ({
  animationState,
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
    <StepContainer animationState={animationState}>
      <StepMark>{`${index + 1} / ${nbOfSteps}`}</StepMark>
      <Title>{title}</Title>
      <div>{description}</div>
      <Image src={status === "loaded" ? image : defaultImage} />
    </StepContainer>
  );
};

export default RecipeStep;
