import { useState } from "react";

const ComplexState = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);

  return (
    <div>
      {left}
      <button onClick={() => setLeft(left + 1)}>left</button>
      <button onClick={() => setRight(right + 1)}>right</button>
      {right}
    </div>
  );
};

const Display = ({ counter }) => {
  return <div>{counter}</div>;
};

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const App = () => {
  const [counter, setCounter] = useState(0);

  const decreaseByOne = () => setCounter(counter - 1);
  const inscreaseByOne = () => setCounter(counter + 1);
  const reset = () => setCounter(0);

  return (
    <div>
      <div>
        <Display counter={counter} />
        <Button onClick={inscreaseByOne} text="add 1" />
        <Button onClick={decreaseByOne} text="remove 1" />
        <Button onClick={reset} text="reset to 0" />
      </div>
      <div>
        <ComplexState />
      </div>
    </div>
  );
};

export default App;
