export function FormHeader() {
  return (
    <div className="border-primary-400 flex flex-col border-l-4 px-3 dark:text-neutral-200">
      <span className="text-2xl">Welcome to</span>
      <span className="text-2xl font-bold tracking-wide">
        {"BeeQuant "}
        <span className="text-primary-400">AI</span>
      </span>
      <span className="text-xs font-light text-neutral-700 dark:text-neutral-400">
        Trading smart, trading with BeeQuant AI
      </span>
    </div>
  );
}
