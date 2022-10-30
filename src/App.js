import "./App.css";
import Popup from "./Popup";
import { useState } from "react";

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
          buttonPopup?<Popup trigger={buttonPopup} setTrigger={() => openmodel()} />:null
        }
      </div>
    </div>
  );
}

export default App;
