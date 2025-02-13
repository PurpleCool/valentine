import styled from "styled-components";
import me from "../assets/me.png";

const Title = styled.h1`
  font-size: 5rem;
  color: #f5f5dc;

  display: block;
  position: absolute;
  top: 5%;
  left: 50%;
  min-width: 100vw;
  transform: translateX(-50%);
  user-select: none;
  pointer-events: none;

  background-clip: text;
  -webkit-background-clip: text; /* For Safari */

  /* Add glow effect */
  text-shadow: 0 0 8px var(--red), 0 0 15px var(--red), 0 0 20px var(--red),
    0 0 30px var(--reddish), 0 0 45px var(--reddish), 0 0 60px var(--reddish),
    0 0 80px var(--magenta), 0 0 120px var(--magenta), 0 0 150px var(--magenta); /* Neon glow with fading edges */
`;

const Me = styled.img`
  height: 90vh;
`;

export default function Valentine() {
  return (
    <>
      <Title>Will you be my Valentine?</Title>
      <Me src={me} />
    </>
  );
}
