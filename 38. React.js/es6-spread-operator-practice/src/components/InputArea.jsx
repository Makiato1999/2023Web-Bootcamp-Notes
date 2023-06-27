import React, { useState } from "react";

function InputArea(props) {
  const [userInput, setUserInput] = useState("");

  function handleOnChange(event) {
    const newValue = event.target.value;
    setUserInput(newValue);
  }

  return (
    <div className="form">
      <input type="text" onChange={handleOnChange} value={userInput} />
      <button
        onClick={() => {
          props.onAdd(userInput);
          setUserInput("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
