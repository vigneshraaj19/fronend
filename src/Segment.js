import React from "react";
import "./segment.css";
import { options } from "./Data.js";
import { useState } from 'react'

function Segment() {
    const [dataoptions,setdataoptions]=useState(options)
    // const [selectedoption,setselectedoption]=useState([]);
    const[ showdropdown,setshowdropdown]=useState(false);
    const [current, setCurrent] = useState(options[0].Value)

    var selectedoption=[]

    var onselect=(e)=>{

        selectedoption.push(dataoptions[e.target.selectedIndex])
        // let options=dataoptions;
        // let optionData=[];
        // dataoptions[e.target.selectedIndex].map((item)=>{
        //     optionData=[
        //         ...optionData,{
        //             label:item.Label,
        //             value:item.Value,
        //             isSelected:item.isSelected,
        //         }
        //     ]
        // })
        // options=optionData;
        // setselectedoption(options);
        console.log("INselectedoption",selectedoption)
    }
    console.log("OUTselectedoption",selectedoption)

   const addselection=()=>{

   }
  return (
    <div className="dropdown">
    
     {
        showdropdown && selectedoption &&  <div className="blue-box">
       
        </div>
     }
      <select value={current} onChange={onselect}>


        {dataoptions.map((options) => (
          <option value={options.Value} disabled={options.isSelected}>{options.Label}</option>
        ))}

      </select>
      <button className="button-style">+ Add new schema</button>
    </div>
  );
}

export default Segment;
