import React from "react";
import styled from "styled-components";

import useImage from "hooks/image-loader.jsx";

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
  line-height: 30px;
  letter-spacing: 1px;
  color: #f0f0f0;
  top: 10px;
  left: -30px;
  transform: rotate(-45deg);
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
  const [image] = useImage(`recipe/${imageUrl}`);

  return (
    <StepContainer>
      <StepMark>{`${index + 1} / ${nbOfSteps}`}</StepMark>
      <h3>{title}</h3>
      <div>{description}</div>
      {image && <Image src={image} />}
    </StepContainer>
  );
};

export default RecipeStep;
