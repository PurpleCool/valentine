import styled from "styled-components";
import clickHeart from "../assets/click_heart.svg";

interface ClickHeartProps {
  onClickHandler: () => void;
}

const Image = styled.img`
  height: 15em;
  padding: 2em;
  will-change: filter;
  transition: filter 300ms;
  &:hover {
    filter: drop-shadow(0 0 2em var(--reddish));
  }
`;

export default function ClickHeart({ onClickHandler }: ClickHeartProps) {
  return (
    <>
      <label onClick={onClickHandler}>
        <Image
          role='button'
          src={clickHeart}
          className='logo react'
          alt='React logo'
        />
      </label>
    </>
  );
}
