import styled, { keyframes } from "styled-components";

interface CounterProps {
  count: number;
}

const Title = styled.h1`
  font-size: 5em;
  text-align: center;
  color: var(--reddish);
`;

const fadeInOut = keyframes`
  0% {
    opacity: 0;
    visibility: visible
  }

  50% {
    opacity: 1;
  }
  
  100% {
    opacity: 0;
    visibility: hidden;
  }
`;

const FadeInOut = styled.div`
  display: inline-block;
  animation: ${fadeInOut};
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: 1;
  -webkit-animation-fill-mode: forwards;
`;

export default function Counter({ count }: CounterProps) {
  return (
    <FadeInOut>
      <Title>{count}</Title>
    </FadeInOut>
  );
}
