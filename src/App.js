import React, { useState } from "react";
import Promesas from "./Promesas"
import "./style.css";

export default function App() {
  const [ count, setCount ] = useState(0);
  const [ time, setTime ] = useState( new Date().toLocaleTimeString())
  const Contador =() =>{
    setCount(count +1);
    setTime(new Date().toLocaleTimeString())
  }
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Contador de click: {count}</p>
      <button onClick={()=>Contador()}>Click</button>
      <p>Hora: {time}</p>
      <hr/>
      <Promesas/>
    </div>
  );
}
