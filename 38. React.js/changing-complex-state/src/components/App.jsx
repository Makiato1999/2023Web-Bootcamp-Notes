import React, { useState } from "react";

function App() {
  /*
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  */
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function handleOnChange(event) {
    console.log(event.target);
    const { name, value } = event.target;
    /*
    const newValue = event.target.value;
    const inputName = event.target.name;
    
    event.target.name === "fName"
      ? setFullName({ fName: event.target.value })
      : setFullName({ lName: event.target.value });
    */
    //setFname(event.target.value);
    setContact((preValue) => {
      console.log(preValue);
      if (name === "fName") {
        return {
          fName: value,
          lName: preValue.lName,
          email: preValue.email
        };
      } else if (name === "lName") {
        return {
          fName: preValue.fName,
          lName: value,
          email: preValue.email
        };
      } else if (name === "email") {
        return {
          fName: preValue.fName,
          lName: preValue.lName,
          email: value
        };
      }
    });

    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <h3>{contact.email}</h3>
      <form>
        <input
          name="fName"
          onChange={handleOnChange}
          placeholder="First Name"
          value={contact.fName}
        />
        <input
          name="lName"
          onChange={handleOnChange}
          placeholder="Last Name"
          value={contact.lName}
        />
        <input
          name="email"
          onChange={handleOnChange}
          placeholder="Email Address"
          value={contact.email}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
