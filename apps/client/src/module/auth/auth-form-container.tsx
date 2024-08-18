type Props = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  error?: string;
  children: React.ReactNode;
};
export function AuthFormContainer(props: Props) {
  return (
    <form
      className="dark:bg-primary-900 bg-primary-50 flex w-[520px] max-w-[520px] flex-col gap-5 px-[60px] py-[50px] transition-colors duration-300"
      onSubmit={props.onSubmit}
    >
      <div className="border-accent-400 flex flex-col border-l-4 px-2.5">
        <span className="text-2xl">Welcome to</span>
        <span className="text-2xl font-bold tracking-wide">
          {"BeeQuant "}
          <span className="text-accent-400">AI</span>
        </span>
        <span className="text-primary-300 text-sm">
          Trading smart, trading with BeeQuant AI
        </span>
      </div>

      {props.error && (
        <span className="bg-error-300 text-error-900 text-error rounded-md px-5 py-3 text-sm">
          {props.error}
        </span>
      )}

      {props.children}
    </form>
  );
}
