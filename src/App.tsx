import { useState } from "react";
import "./App.css";
import ClickHeart from "./components/ClickHeart";
import Counter from "./components/Counter";

function App() {
  const [count, setCount] = useState(0);
  const [clicked, setClicked] = useState<boolean>(false);

  const updateClickCount = () => {
    setCount((count) => count + 1);
    setClicked(true);
    const timerId = setTimeout(() => {
      setClicked(false);
      clearTimeout(timerId);
    }, 500);
  };

  return (
    <>
      {count < 14 ? (
        <>
          <ClickHeart onClickHandler={updateClickCount} />
          {clicked && <Counter clicked={clicked} count={count} />}
        </>
      ) : (
        <p>sdld</p>
      )}
    </>
  );
}

export default App;
