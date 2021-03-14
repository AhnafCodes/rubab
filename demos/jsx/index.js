import React from "react";
import ReactDOM from "react-dom";
import CollapseList from "./collapse-list.js";

const { healthyInstructions } = window?.rubab?.demos;

ReactDOM.render(
  <CollapseList
    classes="ml-4 mt-4"
    heading="Instructions"
    listItems={healthyInstructions}
    listName="healthy-steps"
  />,
  document.getElementById("main")
);