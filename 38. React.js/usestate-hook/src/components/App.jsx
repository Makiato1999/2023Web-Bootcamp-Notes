import React, { useState } from "react";

function App() {
  //var state = React.useState(0);
  //const [red, green, blue] = [9, 132, 227];
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    setCount(count - 1);
  }

  let currTime = new Date().toLocaleTimeString();
  var [time, setTime] = useState(currTime);
  function change() {
    const newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  }
  return (
    <div className="container">
      <h1 className="count">{count}</h1>
      <h1 className="time">{time}</h1>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      <button onClick={change}>c</button>
    </div>
  );
}

export default App;
