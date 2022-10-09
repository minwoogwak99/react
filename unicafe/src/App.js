import { useState } from "react";

const Statistics = (props) => {
  if (!(props.good || props.neutral || props.bad)) {
    return <div>No feedback Given</div>;
  }
  return (
    <div>
      <h2>Statistics</h2>
      <ul>
        <StatisticLine text="good" value={props.good} />
        <StatisticLine text="neutral" value={props.neutral} />
        <StatisticLine text="bad" value={props.bad} />
        <StatisticLine text="total" value={props.total} />
        <StatisticLine
          text="average"
          value={(props.good - props.bad) / props.total}
        />
        <StatisticLine
          text="positive"
          value={(props.good / props.total) * 100}
        />
      </ul>
    </div>
  );
};

const StatisticLine = (props) => {
  return (
    <li>
      {props.text}: {props.value}
    </li>
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
