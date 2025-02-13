import { JSX, useState } from "react";
import "./App.css";
import ClickHeart from "./components/ClickHeart";
import Counter from "./components/Counter";
import Valentine from "./components/Valentine";

function App() {
  const [count, setCount] = useState(1);
  const [clicked, setClicked] = useState<boolean>(false);
  const [components, setComponents] = useState<JSX.Element[]>([]); // Store the created components in an array

  const updateClickCount = () => {
    setCount((count) => count + 1);
    setClicked(true);

    handleAddComponent();

    const timerId = setTimeout(() => {
      setClicked(false);
      clearTimeout(timerId);
    }, 1000);
  };

  const handleAddComponent = () => {
    // Add a new component to the array each time the button is clicked
    setComponents((prevComponents) => [
      ...prevComponents.map((component) => ({
        ...component,
        props: { ...component.props, clicked: false },
      })),
      <Counter clicked={true} count={count} key={prevComponents.length} />,
    ]);
  };

  console.log(components.map((item) => item.props.clicked));
  return (
    <>
      {count <= 14 ? (
        <>
          <ClickHeart onClickHandler={updateClickCount} />
          {clicked &&
            components.map((component) => component.props.clicked && component)}
        </>
      ) : (
        <Valentine />
      )}
    </>
  );
}

export default App;
