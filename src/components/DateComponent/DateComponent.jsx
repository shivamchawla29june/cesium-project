import React, { useState } from "react";
import "./DateComponent.scss";

const NumberComponent = (props) => {
  const defaultDate = new Date();
  const [date, setDate] = useState(defaultDate.toISOString().substring(0, 10));

  const handleChange = (event) => {
    setDate(event.target.value);
  };
  return (
    <div className="date-main">
      <label> Date </label>
      <input type="date" value={date} onChange={handleChange} />
    </div>
  );
};

export default NumberComponent;
