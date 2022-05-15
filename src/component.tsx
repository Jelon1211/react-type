import { useState } from "react";

export default function Count({ initCount }: any) {
  const [count, setCount] = useState(initCount);

  const increment = () => {
    setCount((currCount: number) => currCount + 1);
  };

  const decrement = () => {
    setCount((currCount: number) => currCount - 1);
  };

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}
