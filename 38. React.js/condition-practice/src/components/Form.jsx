import React from "react";
import Input from "./Input";
import Login from "./Login";

function Form(props) {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      {props.isRegistered === false && (
        <Input type="confirm_password" placeholder="Confirm Password" />
      )}
      <button type="submit">
        {props.isRegistered === true ? "Login" : "Register"}
      </button>
    </form>
  );
}

export default Form;
