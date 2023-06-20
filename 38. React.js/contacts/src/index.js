import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import * as contacts from "./contacts";

ReactDOM.render(
    <App contacts={contacts.contacts} />
    , document.getElementById("root")
);
