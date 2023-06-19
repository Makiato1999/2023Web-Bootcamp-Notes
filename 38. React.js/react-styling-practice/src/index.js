import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
//import PI, { doublePi, triplePi } from "./math.js";
import * as PI from "./PI.js";
import * as Calculator from "./math";
// import { add, subtract, mutiply, divide } from "./math.js";

const date = new Date(2022, 1, 1, 19);
const currentTime = date.getHours();
let greeting;
const customStyle = {
  color: ""
};
let a = 6;
let b = 3;

if (currentTime < 12) {
  greeting = "Good Morning";
  customStyle.color = "red";
} else if (currentTime < 18) {
  greeting = "Good Afternoon";
  customStyle.color = "blue";
} else {
  greeting = "Good Evening";
  customStyle.color = "green";
}

ReactDOM.render(
  <div>
    <h1 className="heading" style={customStyle}>
      {greeting}
    </h1>
    <App />
    <h3>PI</h3>
    <ul>
      <li>{PI.doublePi()}</li>
      <li>{PI.triplePi()}</li>
    </ul>
    <h3>
      When a = {a}, b = {b}
    </h3>
    <ul>
      <li>a+b = {Calculator.add(a, b)}</li>
      <li>a-b = {Calculator.subtract(a, b)}</li>
      <li>a*b = {Calculator.mutiply(a, b)}</li>
      <li>a/b = {Calculator.divide(a, b)}</li>
    </ul>
  </div>,
  document.getElementById("root")
);
