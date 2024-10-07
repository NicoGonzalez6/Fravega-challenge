import { useEffect, useState } from "react";

export const useDebounce = ({ delay = 500, value }: { delay?: number; value: string }) => {
  const [debouncedValue, setDebouncedValue] = useState<string>("");

  useEffect(() => {
    const debounceTime = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(debounceTime);
    };
  }, [delay, value]);

  return debouncedValue;
};
