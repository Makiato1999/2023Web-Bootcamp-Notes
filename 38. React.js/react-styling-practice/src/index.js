import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

const date = new Date(2022, 1, 1, 19);
const currentTime = date.getHours();
let greeting;
const customStyle = {
  color: ""
};

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
    <App />
  </div>,
  document.getElementById("root")
);
