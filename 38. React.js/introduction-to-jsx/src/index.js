import React from "react";
import ReactDom from "react-dom";

ReactDom.render(
  <div>
    <h1>Hello World!</h1>
    <p>
      This is paragraph, you can write anything what you want here, just do it,
      find the pathway which you need and take it easy.
    </p>
  </div>,
  document.getElementById("root")
);

var h1 = document.createElement("h1");
h1.innerHTML = "Hello World again!";
document.getElementById("root").appendChild(h1);
/*
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
*/
