export function SkeletonCard() {
  return (
    <div className="dark:bg-primary-900 bg-primary-50 shadow-settingPage dark:shadow-settingPage flex w-full animate-pulse flex-col rounded-lg p-5">
      <div className="mb-4 h-8 w-1/3 rounded-full bg-gray-200 dark:bg-gray-700"></div>
      <div className="flex flex-col gap-5">
        <div className="h-4 max-w-[70%] rounded-full bg-gray-200 dark:bg-gray-700"></div>
        <div className="h-4 max-w-[60%] rounded-full bg-gray-200 dark:bg-gray-700"></div>
        <div className="h-4 max-w-[75%] rounded-full bg-gray-200 dark:bg-gray-700"></div>
        <div className="h-4 max-w-[50%] rounded-full bg-gray-200 dark:bg-gray-700"></div>
        <div className="h-4 max-w-[80%] rounded-full bg-gray-200 dark:bg-gray-700"></div>
      </div>
    </div>
  );
}
