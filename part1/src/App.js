import { useState } from "react";

const Display = (props) => {
  return <div>{props.counter}</div>;
};

const Button = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

const App = () => {
  const [counter, setCounter] = useState(0);

  const inscreaseByOne = () => setCounter(counter + 1);

  const reset = () => setCounter(0);

  return (
    <div>
      <Display counter={counter} />
      <Button onClick={inscreaseByOne} text="add 1" />
      <Button onClick={reset} text="reset to 0" />
    </div>
  );
};

export default App;
