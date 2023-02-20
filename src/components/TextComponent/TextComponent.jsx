import React, { useState } from "react";
import "./TextComponent.scss";

const TextComponent = (props) => {
  const defaultName = "";
  const [name, setName] = useState(defaultName);

  const handleChange = (event) => {
    setName(event.target.value);
  };
  return {
    name,
    render: (
      <div className="text-main">
        <label> {props.name} </label>
        <input type="text" value={name} onChange={handleChange} />
      </div>
    ),
  };
};

export default TextComponent;
