import { useState } from "react";

export default function useList(initialValue = []) {
  const [value, setValue] = useState(initialValue);

  const push = (element) => {
    setValue((currentValue) => [...currentValue, element]);
  };

  const remove = (idx) => {
    setValue((currentValue) => {
      return currentValue.filter((_, id) => idx !== id);
    });
  };

  const isEmpty = () => value.length === 0;

  const clear = () => {
    setValue([]);
  };

  const sort = () => {
    setValue((currentValue) => {
      return currentValue.sort((a, b) => a - b);
    });
  };

  const invert = () => {
    setValue((currentValue) => currentValue.reverse());
  };

  return {
    value,
    push,
    remove,
    isEmpty,
    clear,
    sort,
    invert,
  };
}
