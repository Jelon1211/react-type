import { useState } from "react";

const Count = ({ initCount }: any) => {
  const [count, setCount] = useState(initCount);

  const increment = () => {
    setCount((currCount: number) => currCount + 1);
  };

  const decrement = () => {
    setCount((currCount: number) => currCount - 1);
  };
  // comment 4
  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Count;
