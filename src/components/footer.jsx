import React from "react";
import styled from "styled-components";
import Particles from "react-particles-js";

const FooterWrapper = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: ${({ theme }) => theme.footerHeight};
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  z-index: -1;
`;

const StyledParticles = styled(Particles)`
  width: 100%;
  height: 100%;
`;

const Footer = ({ className }) => (
  <FooterWrapper className={className}>
    <StyledParticles
      params={{
        particles: {
          number: {
            value: 10,
            density: {
              enable: false,
              value_area: 2004.2650760819035
            }
          },
          shape: {
            type: "images",

            images: [
              {
                src:
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Emoji_u1f955.svg/1200px-Emoji_u1f955.svg.png",
                width: 3,
                height: 3
              },
              {
                src:
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Rotten_Tomatoes.svg/1200px-Rotten_Tomatoes.svg.png",
                width: 3,
                height: 3
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
            value: 160,
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
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "repulse"
            },
            onclick: {
              enable: false,
              mode: "push"
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3
            },
            repulse: {
              distance: 200,
              duration: 0.4
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true
      }}
    />
  </FooterWrapper>
);

export default Footer;
