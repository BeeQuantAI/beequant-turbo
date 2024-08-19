"use client";
import { useState } from "react";

export function useToggle(defaultValue = false) {
  const [value, setValue] = useState(defaultValue);
  const toggleValue = (val?: boolean) =>
    setValue((prev) => (val !== undefined ? val : !prev));

  return [value, toggleValue] as const;
}
