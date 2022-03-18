import { useState } from "react";
// import './App.css';
function Random() {
  const [count, setCount] = useState(1);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count === 0) {
      return;
    }
    setCount(count - 1);
  };
  return (
    <div className="Random">
      <h1>Counter Random</h1>
      <div className="flex">
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
      <div className="Random">
        <h2 title="Display">{count}</h2>
      </div>
    </div>
  );
}
export default Random;
