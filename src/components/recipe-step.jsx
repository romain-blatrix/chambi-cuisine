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
  padding: 15px;
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
      <h3>{title}</h3>
      <div>{description}</div>
      <Image src={status === "loaded" ? image : defaultImage} />
    </StepContainer>
  );
};

export default RecipeStep;
