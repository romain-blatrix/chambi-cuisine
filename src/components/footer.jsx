import React from "react";
import styled from "styled-components";
import Particles from "react-particles-js";

import Carotte from "assets/image/footer/carotte.png";
import Couteau from "assets/image/footer/couteau.png";
import Cuillere from "assets/image/footer/cuillere.png";
import Fouet from "assets/image/footer/fouet.png";
import Navet from "assets/image/footer/navet.png";
import Oeuf from "assets/image/footer/oeuf.png";
import Oignon from "assets/image/footer/oignons.png";

const FooterWrapper = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 400px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

const StyledParticles = styled(Particles)`
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
`;

const Footer = ({ className }) => (
  <FooterWrapper className={className}>
    <StyledParticles
      params={{
        particles: {
          number: {
            value: 14,
            density: {
              enable: false,
              value_area: 2004.2650760819035
            }
          },
          shape: {
            type: "images",

            images: [
              {
                src: Carotte,
                width: 120,
                height: 199
              },
              {
                src: Couteau,
                width: 200,
                height: 180
              },
              {
                src: Cuillere,
                width: 200,
                height: 226
              },
              {
                src: Fouet,
                width: 200,
                height: 192
              },
              {
                src: Navet,
                width: 200,
                height: 358
              },
              {
                src: Oeuf,
                width: 200,
                height: 108
              },
              {
                src: Oignon,
                width: 200,
                height: 216
              }
            ]
          },
          opacity: {
            value: 0.3,
            random: true,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 80,
            random: true,
            anim: {
              enable: true,
              speed: 4,
              size_min: 18.677775882930938,
              sync: false
            }
          },
          line_linked: {
            enable: false,
            distance: 336.7165327817598,
            color: "#ffffff",
            opacity: 1,
            width: 2
          },
          move: {
            enable: true,
            speed: 3,
            direction: "bottom",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 881.8766334760375,
              rotateY: 801.7060304327614
            }
          }
        },
        retina_detect: true
      }}
    />
  </FooterWrapper>
);

export default Footer;
