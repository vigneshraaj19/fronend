import React from "react";
import "./segment.css";
import { options } from "./Data.js";
import { useState, useEffect } from "react";
import "./popup.css";

function Segment(props) {
  const [dataoptions, setdataoptions] = useState(options);
  const [selectedoption, setselectedoption] = useState([]);
  const [Unselectedoption, setUnselectedoption] = useState([]);
  const [value, setValue] = useState("");
  const [data, setdata] = useState([]);
  const [segment, setSegment] = useState("");
  const [form, setform] = useState({});

  const handleChange = (e) => {
    e.preventDefault();
    setSegment(e.target.value);
  };

  const handleSubmit = () => {
    if (segment.length != 0 && selectedoption.length != 0) {
      const nextFormState = {
        Segment_name: segment,
        Schema: [],
      };
      setform(nextFormState);
      console.log(segment, selectedoption);
      console.log(form);
    } else {
      alert("Enter the segment name and select the option");
    }
  };

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
    <div className="popup">
      <div className="popup-inner">
        <h4 className="topbar">Saving Segment</h4>
        <div className="textbox">
          <div className="textbox">Enter the Name of the Segment</div>
          <input
            className="textbox"
            placeholder="Name of the Segment"
            required
            value={segment}
            onChange={handleChange}
          />
          <div className="textboxs">
            To save your segment ,you need to addthe schemas to build the query
          </div>
          <div className="dropdown">
            {selectedoption.length > 0 && (
              <div className="blue-box">
                {selectedoption.map((options, index) => {
                  return (
                    <select onChange={selectvalue} value={options.Value}>
                      <option value={options.Value}>{options.Label}</option>
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

            <button
              type="submit"
              onClick={addselection}
              className="button-style"
            >
              + Add new schema
            </button>
          </div>
        </div>
        <div className="footer">
          <button type="submit" onClick={handleSubmit} className="close-btm">
            save the segment
          </button>

          <button className="cancel-btm" onClick={props.setTrigger}>
            cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Segment;
