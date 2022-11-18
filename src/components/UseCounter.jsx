import { useState } from "react";

function useCounter(initialCount = 0, value) {
  const [count, setCount] = useState(initialCount);

  const increase = () => {
    if (count >= 20) {
      return alert("Sorry, reached the maximum number");
    }
    setCount(count + value);
  };
  const decrease = () => {
    if (count > 0) {
      setCount(count - value);
    } else if (count === 0) {
      alert("Sorry, reached the minimum number");
    }
  };
  const result = () => {
    setCount(initialCount);
  };
  return [count, increase, decrease, result];
}

export default useCounter;
