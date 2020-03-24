import React from "react";
import styled from "styled-components";

const Letter = styled.div`
  position: absolute;
  width: 300px;
  height: 150px;
  margin-top: 0;
  background: #e6e6e6;
  z-index: 5;
  transition: margin-top 500ms;
`;

const Envelope = styled.a`
  box-sizing: content-box;
  display: block;
  margin: 0 auto;
  margin-top: 150px;
  width: 300px;
  height: 150px;
  border: 10px solid #a5a5a5;
  background: #a5a5a5;
  z-index: 2;
  &::before {
    content: "";
    position: absolute;
    margin: -10px 0 0 -10px;
    border-top: 97px solid #e5e5e5;
    z-index: 10;
    border-left: 160px solid transparent;
    border-bottom: 0px solid #d0d0d0;
    border-right: 160px solid transparent;
    transition: border-bottom 500ms linear, margin-top 500ms linear,
      border-top 500ms linear 500ms, z-index 0s 500ms;
  }

  &::after {
    content: "";
    position: absolute;
    margin: -10px 0 0 -10px;
    width: 40px;
    border-top: 85px solid transparent;
    border-left: 140px solid #bababa;
    border-bottom: 85px solid #d0d0d0;
    border-right: 140px solid #bababa;
    box-shadow: -5px 5px 10px #121212;
    z-index: 6;
  }

  &:hover {
    &::before {
      transition: border-top 500ms linear, border-bottom 500ms linear 500ms,
        margin-top 500ms linear 500ms, z-index 0s 500ms;

      z-index: 4;
      border-bottom: 75px solid #d0d0d0;
      border-top: 0px solid #a5a5a5;
      margin-top: -85px;
    }
    & > ${Letter} {
      margin-top: -60px;
      transition: margin-top 500ms 1000ms;
    }
  }
`;

const Contact = () => (
  <Envelope href="mailto:romain.blatrix@gmail.com?cc=chambriermatthieu@gmail.com&tommydessine@gmail.com">
    <Letter>coucou</Letter>
  </Envelope>
);

export default Contact;
