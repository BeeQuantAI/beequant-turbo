import React from "react";

export function Loading({ redirectFrom }: { redirectFrom?: string }) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white bg-opacity-75 dark:bg-black dark:bg-opacity-75">
      {redirectFrom === "login-callback" && (
        <p className={`mb-4 text-center text-lg text-black dark:text-white`}>
          Taking you to the dashboard...
        </p>
      )}
      <div
        className="inline-block h-16 w-16 animate-spin rounded-full border-8 border-solid border-blue-500 border-t-transparent"
        role="status"
      ></div>
    </div>
  );
}
