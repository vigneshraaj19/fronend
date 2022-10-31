import React from "react";
import "./segment.css";
import { options } from "./Data.js";
import { useState } from 'react'

function Segment() {

    const [dataoptions,setdataoptions]=useState(options);
    const[ showdropdown,setshowdropdown]=useState(true);
    const [selectedoption, setselectedoption] = useState([]);
    const [Unselectedoption, setUnselectedoption] = useState([]);
    const [data,setdata] = useState([]);


    const clearState = () => {
       
        setdata([])
    }
    var onselect=(e)=>{
        e.preventDefault();    
        setdata(dataoptions[e.target.selectedIndex])  
    }

    // console.log("selectedoption",selectedoption)

   const addselection=()=>{
    if(data!=[])
    {
    setselectedoption((selectedoption) => [
        ...selectedoption,
        data,
      ]);
    }else{
      clearState()
    }
      var result=dataoptions.filter(({ Value: id1 }) => !selectedoption.some(({ Value: id2 }) => id2 === id1));
      setUnselectedoption(result);
     
   }
   console.log("unselectedoption",Unselectedoption)
   console.log("selectedoption",selectedoption)
  
  return (
   
    <div  className="dropdown">
    
     {
        showdropdown && selectedoption &&  <div className="blue-box">
       
        </div>
     }
    
      <select  onChange={onselect}  >
      <option value="">Add schema to segment</option>

        {dataoptions.map((options) => (
          <option value={options.Value} disabled={options.isSelected}>{options.Label}</option>
        ))}

      </select>
      <button type="submit" onClick={addselection} className="button-style">+ Add new schema</button>
      
    </div>
   
  );
}

export default Segment;
