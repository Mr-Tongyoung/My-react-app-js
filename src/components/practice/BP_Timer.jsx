import { useState, useEffect } from "react";

export default function Timer() {
  const [time, setTime] = useState(0);

  const inputNumber = () => {
    const inputElement = document.getElementById("numberInput1");
    let inputValue = inputElement.value.trim();
    setTime(Number(inputValue));
  }

  useEffect(() => {
    if (time === 0) return;

    let timeoutId = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime > 1) {
          return prevTime - 1;
        } else {
          clearInterval(timeoutId);
          alert("종료!!");
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(timeoutId);
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <div>
        <input type="number" id="numberInput1" />
        <button onClick={inputNumber}>입력</button>
        <h1>{time}</h1>
      </div>
    </div>
  );
}
