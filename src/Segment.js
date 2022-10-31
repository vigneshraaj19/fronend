import React from "react";
import "./segment.css";
import { options } from "./Data.js";
import { useState, useEffect } from "react";
import Popup from "./Popup";


function Segment() {
 
  const [dataoptions, setdataoptions] = useState(options);
  const [selectedoption, setselectedoption] = useState([]);
  const [Unselectedoption, setUnselectedoption] = useState([]);
  const [value, setValue] = useState("");
  const [data, setdata] = useState([]);

  const clearState = () => {
    setdata([]);
  };

  console.log(dataoptions);

  var onselect = (e) => {
    setValue(e.target.value);
    console.log("dataoptions--->", dataoptions);
    console.log(
      "addselection--->",
      e.target.value,
      e.target.selectedIndex - 1,
      dataoptions[e.target.selectedIndex]
    );
    e.preventDefault();
    setdata((pre) => [...pre, dataoptions[e.target.selectedIndex - 1]]);
  };

  useEffect(() => {
    if (Unselectedoption.length === 0) {
      console.log("Unselected option");
      setUnselectedoption(dataoptions);
    }
  }, []);

  const addselection = (e) => {
    if (data.length > 0) {
      setselectedoption((selectedoption) => [...selectedoption, data[0]]);
      var filteredArray = Unselectedoption.filter((e) => e.id !== data[0].id);
      console.log("filtered arrat------->", filteredArray);
      setUnselectedoption(filteredArray);
      setdataoptions(filteredArray);
      setdata([]);
    } else {
      clearState();
    }
  };

  var selectvalue = (e) => {
    e.preventDefault();
  
  };

  console.log("unselectedoption", Unselectedoption);
  console.log("selectedoption", selectedoption);

  return (
    <div className="dropdown">
         
      {selectedoption.length > 0 && (
        <div className="blue-box">
          {selectedoption.map((options, index) => {
            return (
              <select onChange={selectvalue} value={options.Value}>
                <option value={options.Value} >
                  {options.Label}
                </option>
                {Unselectedoption.map((options, index) => (
                  <option
                    key={index}
                    value={options.Value}
                    disabled={options.isSelected}
                  >
                    {options.Label}
                  </option>
                ))}
              </select>
            );
          })}
        </div>
      )}
      <select className="select" onChange={onselect} value={value}>
        <option value="">Add schema to segment</option>
        {Unselectedoption.map((options, index) => (
          <option
            key={index}
            value={options.Value}
            disabled={options.isSelected}
          >
            {options.Label}
          </option>
        ))}
      </select>
    
      <button type="submit" onClick={addselection} className="button-style">
        + Add new schema
      </button>
     
    </div>
  );
}

export default Segment;
