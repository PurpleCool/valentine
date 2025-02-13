import styled, { css, keyframes } from "styled-components";

interface CounterProps {
  count: number;
  clicked?: boolean;
}

const Title = styled.h1`
  font-size: 10rem;
  text-align: center;
  color: #f5f5dc;
  transform: translateY(-60%);

  background-clip: text;
  -webkit-background-clip: text; /* For Safari */

  /* Add glow effect */
  text-shadow: 0 0 8px var(--red), 0 0 15px var(--red), 0 0 20px var(--red),
    0 0 30px var(--reddish), 0 0 45px var(--reddish), 0 0 60px var(--reddish),
    0 0 80px var(--magenta), 0 0 120px var(--magenta), 0 0 150px var(--magenta); /* Neon glow with fading edges */
`;

const fadeInOut = keyframes`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;
interface FadeInOutProps {
  $isClicked: boolean;
}

const FadeInOut = styled.div<FadeInOutProps>`
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  user-select: none;
  pointer-events: none;

  ${({ $isClicked }) =>
    $isClicked &&
    css`
      animation: ${fadeInOut};
      animation-duration: 1000ms;
      animation-timing-function: ease-in-out;
      animation-iteration-count: 1;
      -webkit-animation-fill-mode: forwards;
    `}
`;

export default function Counter({ count, clicked = false }: CounterProps) {
  return (
    <FadeInOut $isClicked={clicked}>
      <Title>{count}</Title>
    </FadeInOut>
  );
}
