import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  const inscreaseByOne = () => setCounter(counter + 1);

  const reset = () => setCounter(0);

  return (
    <div>
      <div>{counter}</div>
      <button onClick={inscreaseByOne}>add 1</button>
      <button onClick={reset}>reset to 0</button>
    </div>
  );
};

export default App;
