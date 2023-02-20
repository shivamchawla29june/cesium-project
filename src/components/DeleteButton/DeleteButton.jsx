import React, { useState } from "react";
import "./DeleteButton.scss";

const DeleteButton = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Form submitted`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <button className="button-delete" type="submit">
        Delete
      </button>
    </form>
  );
};

export default DeleteButton;
