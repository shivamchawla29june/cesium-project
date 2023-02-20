import React from "react";
import "./NumberComponent.scss";

const NumberComponent = (props) => {
  return (
    <div className="number-main">
      <label> {props.name} </label>
      <input type="number" step={props.step} />
    </div>
  );
};

export default NumberComponent;
