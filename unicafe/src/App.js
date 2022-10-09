import { useState } from "react";

const Statistics = (props) => {
  if (!(props.good || props.neutral || props.bad)) {
    return <div>No feedback Given</div>;
  }
  return (
    <div>
      <h2>Statistics</h2>
      <ul>
        <li>good: {props.good}</li>
        <li>neutral: {props.neutral}</li>
        <li>bad: {props.bad}</li>
        <li>total: {props.total}</li>
        <li>average: {(props.good - props.bad) / props.total}</li>
        <li>positive: {(props.good / props.total) * 100}</li>
      </ul>
    </div>
  );
};

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const total = good + neutral + bad;

  return (
    <div>
      <h1>give feedback</h1>
      <div>
        <button onClick={() => setGood(good + 1)}>good</button>
        <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
        <button onClick={() => setBad(bad + 1)}>bad</button>
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} />
    </div>
  );
}

export default App;
