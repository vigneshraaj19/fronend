import React from "react";
import "./popup.css";
import Segment from "./Segment";
import { useState } from "react";



function Popup(props) {
   
    const [form, setform] = useState({});

    const onUpdateField = (e) => {
      e.preventDefault();
      const nextFormState = {
        ...form,
        Segment_name: e.target.value,
      

      };
      setform(nextFormState);
    
    }
   const handleSubmit=()=>{
    console.log(form)
   }

  return (
    <div className="popup">
      <div className="popup-inner">
        <h4 className="topbar">Saving Segment</h4>      
          <div className="textbox">
            <div className="textbox">Enter the Name of the Segment</div>
            <input className="textbox" placeholder="Name of the Segment" required value={form.name}
            onChange={onUpdateField} />
            <div className="textboxs">
              To save your segment ,you need to addthe schemas to build the
              query
            </div>
            <Segment />
          </div>
          <div className="footer">
            <button type="submit" onClick={handleSubmit} className="close-btm">save the segment</button>
            <button className="cancel-btm" onClick={props.setTrigger}>
              cancel
            </button>
          </div>
        </div>

     
    </div>
  );
}

export default Popup;
