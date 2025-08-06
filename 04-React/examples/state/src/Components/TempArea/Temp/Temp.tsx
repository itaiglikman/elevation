import { useState } from "react";
import "./Temp.css";
import { Hot } from "../Hot/Hot";
import { Cold } from "../Cold/Cold";

export function Temp() {
  const [isHot, setIsHot] = useState<Boolean>(true);

  function handleClick() {
    setIsHot(!isHot);
  }

  return (
    <div className="Temp">
      <button onClick={handleClick}>{isHot ? <Hot /> : <Cold />}</button>
    </div>
  );
}
