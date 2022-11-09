import { useState } from "react";

export default function useCounter(initialValue = 0, min, max) {
  const [counter, setCounter] = useState(initialValue);
  const increment = (value = 1) => {
    setCounter((currentValue) => {
      if (max) {
        if (currentValue + value <= max) return currentValue + value;
        return currentValue;
      } else {
        return currentValue + value;
      }
    });
  };
  const decrement = (value = 1) => {
    setCounter((currentValue) => {
      if (min) {
        if (currentValue - value >= min) return currentValue - value;
        return currentValue;
      } else {
        return currentValue - value;
      }
    });
  };

  const reset = () => {
    setCounter(initialValue);
  };

  return {
    counter,
    increment,
    decrement,
    reset,
  };
}
