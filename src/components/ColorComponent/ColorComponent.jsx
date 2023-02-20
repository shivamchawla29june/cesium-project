import React from "react";
import "./ColorComponent.scss";

const NumberComponent = (props) => {
  return (
    <>
      <div className="color-main">
        <input className="color-input" type="color" value="#17171B" />
      </div>
    </>
  );
};

export default NumberComponent;
