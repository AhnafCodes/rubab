import React, { useState } from "react";

const CollapseList = ({ classes, heading, listItems, listName }) => {
  const [expanded, setExpanded] = useState(true);
  return (
    <div className={classes}>
      <h1>
        <button
          className="font-semibold focus:underline hover:underline text-blue-600 inline-block"
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          aria-control={listName}
        >
          {heading}

          <span
            className="ml-1 text-sm inline-block"
            style={expanded ? { transform: "rotate(90deg)" } : null}
          >
            &#x27A7;
          </span>
        </button>
      </h1>

      <ul className={`ml-4 mt-2 ${expanded ? "" : "hidden"}`} id={listName}>
        {listItems.map((item, index) => (
          <li key={`${listName}-item-${index}`}>
            <span>{index + 1}. {item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CollapseList;