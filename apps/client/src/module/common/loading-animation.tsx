import React from "react";

export function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-75 dark:bg-black dark:bg-opacity-75">
      <div
        className="inline-block h-16 w-16 animate-spin rounded-full border-8 border-solid border-blue-500 border-t-transparent"
        role="status"
      ></div>
    </div>
  );
}
