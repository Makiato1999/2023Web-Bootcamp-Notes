import React, { useState } from "react";

function Todoitem(props) {
  const [isDone, setIsDone] = useState(false);

  function handleClick() {
    setIsDone((prevIsDone) => {
      return !prevIsDone;
    });
  }

  /*
  return (
    <div onClick={handleClick}>
      <li style={{ textDecoration: isDone ? "line-through" : "none" }}>
        {props.item}
      </li>
    </div>
  );
  */
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li style={{ textDecoration: isDone ? "line-through" : "none" }}>
        {props.item}
      </li>
    </div>
  );
}

export default Todoitem;
