import React, { ReactPropTypes, useState } from "react";

export default function Count({ initialCount }: any) {
  const [count, setCount] = useState(initialCount);

  const increment = () => {
    setCount((currCount: number) => currCount + 1);
    setCount((currCount: number) => currCount + 1);
  };

  const decrement = () => {
    setCount((currCount: number) => currCount - 1);
    setCount((currCount: number) => currCount - 1);
    console.log(count);
    console.log(setCount);
  };

  console.log(typeof initialCount);

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
}
