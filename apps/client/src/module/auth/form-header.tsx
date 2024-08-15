export function FormHeader() {
  return (
    <div className="border-accent-400 dark:text-primary-50 flex flex-col border-l-4 px-3">
      <span className="text-2xl">Welcome to</span>
      <span className="text-2xl font-bold tracking-wide">
        {"BeeQuant "}
        <span className="text-accent-400">AI</span>
      </span>
      <span className="dark:text-primary-50 text-primary-900 text-xs font-light">
        Trading smart, trading with BeeQuant AI
      </span>
    </div>
  );
}
