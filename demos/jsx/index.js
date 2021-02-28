import React from "react";
import ReactDOM from "react-dom";
import CollapseList from "./collapse-list.js";

const healthyInstructions = [
  "brush Teeth",
  "Start your day with a glass of water(or lemon water)",
  "Exercise",
  "Eat a good breakfast",
  "Stay hydrated and have a fruit/snack",
  "Eat a healthy Lunch",
  "Take break for 10 minute afternoon walk",
  "Have short Dinner",
  "Head to bed early",
  "Have 6 to 10 hour of relaxed sleep"
];

ReactDOM.render(
  <CollapseList
    classes="ml-4 mt-4"
    heading="Instructions"
    listItems={healthyInstructions}
    listName="healthy-steps"
  />,
  document.getElementById("main")
);