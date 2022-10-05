import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

const Test = (props) => {
  let a = 1;
  let b = 2;

  return (
    <div>
      <h2>{a}</h2>
      <h3>{b}</h3>
      <p>{propsss.content}</p>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Test content="hello world"/>);
