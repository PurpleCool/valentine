import { useState } from "react";
import "./App.css";
import ClickHeart from "./components/ClickHeart";
import Counter from "./components/Counter";

function App() {
  const [count, setCount] = useState(0);
  const updateClickCount = () => {
    setCount((count) => count + 1);
  };

  return (
    <>
      {count < 14 ? (
        <>
          <ClickHeart onClickHandler={updateClickCount} />
          <Counter count={count} />
        </>
      ) : (
        <p>sdld</p>
      )}
    </>
  );
}

export default App;
