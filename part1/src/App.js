import { useState } from "react";

const History = (props) => {
  if (props.allClicks.length === 0) {
    return <div>the app is used by pressing the buttons</div>;
  }
  return <div>button press history: {props.allClicks.join(" ")}</div>;
};

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const ComplexState = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);

  const handleLeftClick = () => {
    setAll(allClicks.concat("L"));
    setLeft(left + 1);
  };

  const handleRightClick = () => {
    setAll(allClicks.concat("R"));
    setRight(right + 1);
  };

  /* const handleLeftClick = () => {
    const newClick = {
      ...clicks,
      left: clicks.left + 1,
    };

    return newClick;
  };

  const handleRightClick = () => {
    const newClick = {
      ...clicks,
      right: clicks.right + 1,
    }; 

    return newClick;
  };
  */

  return (
    <div>
      {left}
      <Button onClick={handleLeftClick} text="left" />
      <Button onClick={handleRightClick} text="right" />
      {right}
      <History allClicks={allClicks} />
    </div>
  );
};

const Display = ({ counter }) => {
  return <div>{counter}</div>;
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
