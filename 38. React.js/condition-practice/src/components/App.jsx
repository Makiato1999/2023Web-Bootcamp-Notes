import React from "react";
import Login from "./Login";
import Form from "./Form";

var isLoggedIn = false;
var isRegistered = false;
/*
function renderConditionally() {
  if (isLoggedIn === true) {
    return <h1>Hello</h1>;
  } else {
    return <Login />;
  }
}
function App() {
  return (
    <div className="container">
      {isLoggedIn ? <h1>Hello</h1> : <Login />}
    </div>
  );
}
*/
function App() {
  return (
    <div className="container">
      <Form isRegistered={isRegistered} />
    </div>
  );
}

export default App;
