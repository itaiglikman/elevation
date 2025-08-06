import { useState } from "react";
import "./Like.css";

export function Like() {
  const [count, setCount] = useState<number>(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className="Like">
      <button onClick={handleClick}>{count}</button>
    </div>
  );
}
