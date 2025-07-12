import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1); // setCount((prev) => prev - 1); // alternatif
  };

  return (
    <div>
      <h2>Sayaç: {count}</h2>
      <button onClick={increment}>Arttır</button>
      <button onClick={decrement}>Azalt</button>
    </div>
  );
}

export default Counter;
