import { useState, useEffect } from "react";

export default function StopWatch() {
  const [time, setTime] = useState(0);
  const [isOn, setState] = useState(false);

  const start = () => {
    console.log("start!!!");
    setState((isOn) => !isOn);
  };

  const stop = () => {
    console.log("stop!!");
    setState((isOn) => !isOn);
  };

  const reset = () => {
    console.log("reset!!");
    setTime(0);
    setState((isOn) => false);
  };

  useEffect(() => {
    let timeoutId;
    if (isOn) {
      timeoutId = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(timeoutId);
  }, [isOn]);

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <div>
        <h1>{time}</h1>
        <button onClick={start}>start</button>
        <button onClick={stop}>stop</button>
        <button onClick={reset}>reset</button>
      </div>
    </div>
  );
}
