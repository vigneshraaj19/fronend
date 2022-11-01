import "./App.css";
import { useState } from "react";
import Segment from "./Segment";

function App() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const openmodel = () => {
    setButtonPopup(!buttonPopup);
  };
  return (
    <div>
      <div className="main">
        <button
          className="open-btm"
          onClick={() => {
            setButtonPopup(true);
          }}
        >
          Save Segment
        </button>
        {
          buttonPopup?<Segment trigger={buttonPopup} setTrigger={() => openmodel()} />:null
        }
      </div>
    </div>
  );
}

export default App;
