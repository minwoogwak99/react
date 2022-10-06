import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    console.log("button clicked");
    setCounter(counter + 1);
  };

  return (
    <div>
      <div>{counter}</div>
      <button onClick={handleClick}>add 1</button>
    </div>
  );
};

export default App;
