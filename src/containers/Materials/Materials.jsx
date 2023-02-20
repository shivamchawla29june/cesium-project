import React, { useEffect, useState } from "react";
import MaterialList from "../materialList/MaterialList";
import SingleMaterial from "../singleMaterial/SingleMaterial";
import FetchingData from "../../components/FetchingData";
import axios from "axios";
import "./Materials.scss";

const Materials = () => {
  const baseURL =
    "https://cesium-material-project-default-rtdb.firebaseio.com/";
  const [result, setResult] = useState([]);
  const [selected, setSelected] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [fetchDataFromDB, setFetchDataFromDB] = useState(true);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    if (fetchDataFromDB) {
      FetchingData.get("./materialDate.json").then((response) => {
        const fetchedData = [];
        let increment = 0;
        for (const key in response.data) {
          fetchedData.push({
            ...response.data[key],
            id: increment,
            newEntry: false,
            keyValue: key,
          });
          increment += 1;
        }
        setResult(fetchedData);
        setSelected(false);
        setSelectedIndex(-1);
        setFetchDataFromDB(false);
      });
    }
    // console.log(result);
  }, [fetchDataFromDB]);

  useEffect(() => {
    let costValues = 0;
    for (const oneMaterial of result) {
      costValues += oneMaterial.volume * oneMaterial.cost;
    }
    setTotalCost(costValues);
  }, [result, fetchDataFromDB]);

  const addMaterialEntry = () => {
    const data = {
      name: "New Material",
      volume: 0,
      cost: 0,
      color: "",
      date: "",
      newEntry: true,
      keyValue: -1,
      id: result.length,
    };
    result.push(data);
    setSelected(true);
    setSelectedIndex(data.id);
  };

  const deleteMaterialEntry = async () => {
    const id = result[selectedIndex].keyValue;
    try {
      axios.delete(`${baseURL}/materialDate/${id}.json`).then((response) => {
        setFetchDataFromDB(true);
      });
    } catch (err) {
      console.log(err);
    }
  };

  const selectedEntry = (indexValue) => {
    setSelected(true);
    setSelectedIndex(indexValue);
  };

  const changeFetchDBStateStore = () => {
    setFetchDataFromDB(true);
    setSelected(false);
    setSelectedIndex(-1);
  };

  return (
    <div className="materials-main">
      <h1 className="heading">Materials</h1>
      <div className="buttons-main">
        <button
          className="button-add"
          value="submit"
          type="submit"
          onClick={addMaterialEntry}
        >
          Add
        </button>
        <button
          className={`button-delete ${
            !selected || result[selectedIndex].newEntry ? "disabled-button" : ""
          }`}
          value="delete"
          type="submit"
          disabled={!selected || result[selectedIndex].newEntry}
          onClick={deleteMaterialEntry}
        >
          Delete
        </button>
      </div>
      <div className="material-data">
        <MaterialList
          materials={result}
          selectedParameter={selectedIndex}
          selectClickHandler={selectedEntry}
        />
        <SingleMaterial
          selectedParameter={selected}
          selectedData={selected ? result[selectedIndex] : null}
          changeFetchDBState={changeFetchDBStateStore}
        />
      </div>
      <div className="total-cost">
        {result.length > 0 ? <h2>{totalCost}</h2> : <h2>0.00</h2>}
      </div>
    </div>
  );
};

export default Materials;
