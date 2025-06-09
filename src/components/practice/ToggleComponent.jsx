import { useEffect, useState } from "react";

export default function ToggleComponent() {

  const [state, setState] = useState(true);

  const toggle = () => {
    setState(state => !state);
  };

  useEffect(() => {
    if(!state){
        console.log("Toggle is OFF!");
        // return;
    }else{
        console.log("Toggle is ON!");
        // return;
    }
  }, [state]);

  return (
    <div>
      <button onClick={toggle}>{state ? "ON" : "OFF"}</button>
    </div>
  );
}