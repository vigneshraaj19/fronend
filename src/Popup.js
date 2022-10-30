import React from "react";
import "./popup.css";
import Segment from "./Segment";

function Popup(props) {
  // var close=()=>{
  //     props.setTrigger(false)
  // }

  return  (
    <div className="popup">
      <div className="popup-inner">
        <div className="topbar">Saving Segment</div>
        <div className="textbox">
          <div>Enter the Name of the Segment</div>
          <input placeholder="Name of the Segment" />
          <div>
            To save your segment ,you need to addthe schemas to build the query
          </div>
          <Segment />
        </div>

        <div className="footer">
          <button>save the segment</button>
          <button className="close-btm" onClick={props.setTrigger}>
            cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
