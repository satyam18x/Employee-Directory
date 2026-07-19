import React from "react";
import { useState, useEffect } from "react";

function App() {

  const [seconds, setSeconds] = useState(0);
  const [isRunning, SetisRunning] = useState(false);
  

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000)
    }

    return () => clearInterval(interval);

  }, [isRunning]);

  

  return (
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <h1>Timer App</h1>
      <h1>Count : {seconds}</h1>
      <div style={{ display: "flex", gap: "15px" }}>

        <button style={{ background: "black", color: "white", padding: "10px", width: "60px" }}
          onClick={() => { SetisRunning(true) }}>Start</button>

        <button style={{ background: "black", color: "white", padding: "10px", width: "60px" }}
          onClick={() => { SetisRunning(false) }}>Stop</button>

        <button style={{ background: "black", color: "white", padding: "10px", width: "60px" }}
          onClick={() => {
            SetisRunning(false)
            setSeconds(0);
          }}>Reset</button>

      </div> 
             { isRunning && <h1>Timer is Active</h1>}
      
            
    </div>
  );

}

export default App;