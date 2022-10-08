import { useState } from "react";

const ComplexState = () => {
  const [clicks, setClicks] = useState({ left: 0, right: 0 });

  return (
    <div>
      {clicks.left}
      <button
        onClick={() =>
          setClicks({ left: clicks.left + 1, right: clicks.right })
        }
      >
        left
      </button>
      <button
        onClick={() =>
          setClicks({ left: clicks.left, right: clicks.right + 1 })
        }
      >
        right
      </button>
      {clicks.right}
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
