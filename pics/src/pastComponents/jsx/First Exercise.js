//Import the React and ReactDOM libraries

import React from "react";
import ReactDOM from "react-dom";

//Others

function getButtonText() {
  return "click On Me 2!";
}

function getTime() {
  return new Date().toLocaleTimeString();
}

//Create a react Component
const App = () => {
  //   const buttonText = ["Click Me!", 1];
  const buttonText = { text: "Click Me 3" };

  return (
    <div>
      <label className="label" htmlFor="name">
        Enter name here:
      </label>
      <input type="text" id="name" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {buttonText.text}
        {/* {getButtonText()} */}
      </button>
      <h3>{getTime()}</h3>
    </div>
  );
};

// Take the React Component and show it on the screen

ReactDOM.render(<App />, document.querySelector("#root"));
