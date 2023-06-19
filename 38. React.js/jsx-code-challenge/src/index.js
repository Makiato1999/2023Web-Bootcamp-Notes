import React from "react";
import ReactDom from "react-dom";

const name = "Shawn Xie";
const research_field_1 = "Human-Robot Interaction";
const research_field_2 = "Human-Computer Interaction";
const program_1 = "Computing and Software, MEng";
const program_2 = "Computer Science, MASc";
const num = 3;
const image_link =
  "http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/back07.jpg";
const currentDate = new Date();
console.log(currentDate);
const year = currentDate.getFullYear();
const customStyle = {
  color: "orange",
  fontSize: "20px",
  border: "1px solid black"
};

ReactDom.render(
  <div>
    <h1>My favourite foods</h1>
    <ul style={customStyle}>
      <li>Mango...Mongo..MongoDB!</li>
      <li>Berry...BlackBerry!</li>
      <li>Apple...Exactly..Apple!</li>
    </ul>
    <p>There are {num} types of fruits here, are u sure about that?</p>
    <h3 className="heading" contentEditable="true" spellCheck="false">
      So let me ask u again, {name}, do u really wanna play a game with me?
    </h3>
    <p>
      My research direction is about {research_field_1} and {research_field_2}{" "}
    </p>
    <p style={{ color: "red" }}>
      I am going to transfer from {`${program_1} to ${program_2}`} since i would
      like to pursue a PHD in the future.
    </p>
    <img className="image" src={image_link}></img>
  </div>,
  document.getElementById("root")
);
