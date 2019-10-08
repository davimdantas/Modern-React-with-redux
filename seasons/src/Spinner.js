import "./Spinner.css";
import React from "react";

const Spinner = props => {
  return (
    <div className="loading ui  segment">
      <div className="ui  active dimmer">
        <div className="ui  text loader">{props.message}</div>
      </div>
      <p></p>
    </div>
  );
};

Spinner.defaultProps = {
  message: "Loading"
};

export default Spinner;
