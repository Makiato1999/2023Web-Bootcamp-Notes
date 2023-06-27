import React, { useState } from "react";
import Todoitem from "../components/Todoitem";
import InputArea from "./InputArea";

function App() {
  const [items, setItems] = useState([]);

  function handleOnClick(userInput) {
    setItems((preItems) => {
      return [...preItems, userInput];
    });
  }

  function deleteItem(id) {
    console.log("item " + id + " was removed");
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return id !== index;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={handleOnClick} />
      <div>
        <ul>
          {items.map((todoItem, index) => {
            return (
              <Todoitem
                key={index}
                id={index}
                item={todoItem}
                onChecked={deleteItem}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
