import styled from "styled-components";
import clickHeart from "../assets/click_heart.svg";

interface ClickHeartProps {
  onClickHandler: () => void;
}

const Image = styled.img`
  user-select: none;
  pointer-events: auto;
  height: 15em;
  padding: 2em;
  will-change: filter;
  transition: filter 300ms;
  &:hover {
    filter: drop-shadow(0 0 2em var(--reddish));
  }
`;

export default function ClickHeart({ onClickHandler }: ClickHeartProps) {
  const handleMouseOver = (event: React.MouseEvent) => {
    event.preventDefault();
  };

  return (
    <label onClick={onClickHandler}>
      <Image alt='' title='' src={clickHeart} onMouseOver={handleMouseOver} />
    </label>
  );
}
