import React, { useState } from "react";
import "./AddButton.scss";

const AddButton = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Form submitted`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <button className="button-add" type="submit">
        Add
      </button>
    </form>
  );
};

export default AddButton;
