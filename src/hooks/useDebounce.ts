import { useEffect, useState } from "react";

export const useDebounce = ({ delay = 500, value }: { delay?: number; value: string }) => {
  const [debouncedValue, setDeboundedValue] = useState<string>("");

  useEffect(() => {
    const debounceTime = setTimeout(() => {
      setDeboundedValue(value);
    }, delay);
    return () => {
      clearTimeout(debounceTime);
    };
  }, [delay, value]);

  return debouncedValue;
};
