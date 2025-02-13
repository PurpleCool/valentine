import styled from "styled-components";

interface CounterProps {
  count: number;
}

const Title = styled.h1`
  font-size: 5em;
  text-align: center;
  color: var(--reddish);
`;

export default function Counter({ count }: CounterProps) {
  return <Title>{count}</Title>;
}
