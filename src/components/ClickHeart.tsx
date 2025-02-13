import clickHeart from "../assets/click_heart.svg";

interface ClickHeartProps {
  onClickHandler: () => void;
}

export default function ClickHeart({ onClickHandler }: ClickHeartProps) {
  return (
    <>
      <div>ClickHeart</div>
      <label onClick={onClickHandler}>
        <img
          role='button'
          src={clickHeart}
          className='logo react'
          alt='React logo'
        />
      </label>
    </>
  );
}
