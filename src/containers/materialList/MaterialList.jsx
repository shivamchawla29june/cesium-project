import React from "react";
import "./MaterialList.scss";

const MaterialList = (props) => {
  const materialsData = props.materials;
  const row = [];
  // for (const oneMaterial of materialsData) {
  //   console.log(oneMaterial);
  // }
  if (materialsData.length > 0) {
    for (const oneMaterial of materialsData) {
      const oneMaterialColor = oneMaterial.color;
      // console.log(oneMaterialColor.toString());
      row.push(
        <div
          className={`yes-materials ${
            oneMaterial.id === props.selectedParameter ? "active" : ""
          }`}
          key={oneMaterial.id}
          onClick={() => props.selectClickHandler(oneMaterial.id)}
        >
          <p>{oneMaterial.name}</p>
          <div
            className="color-div"
            style={{ backgroundColor: { oneMaterialColor } }}
          ></div>
          <p>{oneMaterial.volume} m3</p>
        </div>
      );
    }
  }
  return (
    <div className="materialList-main">
      {materialsData.length > 0 ? (
        <div className="materialList-entries">{row}</div>
      ) : (
        <div className="no-materials">No materials</div>
      )}
    </div>
  );
};

export default MaterialList;
