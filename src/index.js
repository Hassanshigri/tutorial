import React from "react";
import ReactDOM from "react-dom";
const name ="Muhammad Hassan"
ReactDOM.render(
<>
  <h1>React expression</h1>
  <p>My name is {name}</p>
  <p>My lucky number is {Math.random()}</p>
</>,
    document.getElementById("root"));