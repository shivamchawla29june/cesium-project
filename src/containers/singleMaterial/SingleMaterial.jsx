import React, { useState, useEffect } from "react";
import FetchingData from "../../components/FetchingData";
import "./SingleMaterial.scss";

const SingleMaterial = (props) => {
  const [name, setName] = useState("");
  const [date, setDate] = useState();
  const [volume, setVolume] = useState();
  const [color, setColor] = useState();
  const [cost, setCost] = useState();
  const [isNewEntry, setIsNewEntry] = useState(true);

  const singleMaterial = props.selectedData;
  const selectedParameter = props.selectedParameter;

  useEffect(() => {
    if (selectedParameter) {
      setName(singleMaterial.name);
      setDate(singleMaterial.date);
      setVolume(singleMaterial.volume);
      setCost(singleMaterial.cost);
      setIsNewEntry(singleMaterial.newEntry);
    }
  }, [singleMaterial, selectedParameter]);

  // console.log(isNewEntry);

  // console.log(singleMaterial, color);

  const createNewEntry = (e) => {
    e.preventDefault();

    const data = {
      name: name,
      volume: volume,
      color: color,
      cost: cost,
      date: date,
    };

    if (isNewEntry) {
      FetchingData.post("./materialDate.json", data).then((response) => {
        props.changeFetchDBState();
        console.log(`Entry created`);
      });
    }
  };
  console.log(color);

  return (
    <div className="singleMaterial-main">
      {selectedParameter ? (
        <div>
          <div className="text-main">
            <label> Name </label>
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>

          <div className="date-main">
            <label> Date </label>
            <input
              type="date"
              value={date}
              onChange={(event) => setDate(event.target.value)}
            />
          </div>

          <div className="color-main">
            <label> Color </label>
            <input
              type="color"
              value={color}
              onChange={(event) => setColor(event.target.value)}
            />
          </div>

          <div className="number-main">
            <label> Volume </label>
            <input
              type="number"
              step="10000"
              min="0"
              value={volume}
              onChange={(event) => setVolume(event.target.value)}
            />
          </div>

          <div className="number-main">
            <label> Cost</label>
            <input
              type="number"
              step="0.10"
              min="0"
              value={cost}
              onChange={(event) => setCost(event.target.value)}
            />
          </div>
          {isNewEntry ? (
            <button
              className="button-add"
              type="submit"
              disabled={!isNewEntry}
              onClick={createNewEntry}
            >
              Submit
            </button>
          ) : null}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default SingleMaterial;
