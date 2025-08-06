import { useState } from "react";
import "./greeter.css";

export function Greeter() {

    const [name,setName]= useState('');

    console.log(name);

  return (
    <div className="greeter">
      <h2>hello</h2>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
    </div>
  );
}
