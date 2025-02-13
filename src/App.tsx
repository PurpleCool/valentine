import { useState } from "react";
import "./App.css";
import ClickHeart from "./components/ClickHeart";

function App() {
  const [count, setCount] = useState(0);
  const updateClickCount = () => {
    setCount((count) => count + 1);
  };

  return (
    <>
      {count < 14 ? (
        <ClickHeart onClickHandler={updateClickCount} />
      ) : (
        <p>sdld</p>
      )}
    </>
  );
}

export default App;
