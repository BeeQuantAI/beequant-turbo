import React from "react";

interface ProgressBarProps {
  progress: number;
  color?: string;
}

export function ProgressBar({
  progress,
  color = "bg-accent-400",
}: ProgressBarProps) {
  const getBarClass = (stage: number) => {
    return progress === stage ? color : "dark:bg-primary-700 bg-primary-200";
  };

  return (
    <div className="mb-14 flex w-full justify-between">
      <div className={`h-4 w-1/3 rounded-full ${getBarClass(1)}`}></div>
      <div className={`h-4 w-1/3 rounded-full ${getBarClass(2)}`}></div>
      <div className={`h-4 w-1/3 rounded-full ${getBarClass(3)}`}></div>
    </div>
  );
}
