import React from "react";
import SingleMaterial from "../containers/singleMaterial/SingleMaterial";
import Buttons from "../containers/Buttons/Buttons";
import Materials from "../containers/Materials/Materials";

const HOC = () => {
  return (
    <div className="hoc-main">
      <Materials />
    </div>
  );
};

export default HOC;
