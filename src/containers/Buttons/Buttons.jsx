import React, { useState } from "react";
import AddButton from "../../components/AddButton/AddButton";
import DeleteButton from "../../components/DeleteButton/DeleteButton";

import "./Buttons.scss";

const Buttons = () => {
  return (
    <div className="buttons-main">
      <AddButton />
      <DeleteButton />
    </div>
  );
};

export default Buttons;
