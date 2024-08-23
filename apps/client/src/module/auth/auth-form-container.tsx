type Props = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  error?: string;
  children: React.ReactNode;
};
export function AuthFormContainer(props: Props) {
  return (
    <form
      className="dark:bg-primary-900 bg-primary-50 flex w-full max-w-[520px] flex-col gap-5 px-[60px] py-[50px] transition-colors duration-300 max-sm:px-[30px] max-sm:py-[35px] lg:my-5 lg:mt-10 lg:min-w-[1000px] lg:px-[80px] lg:py-[70px]"
      onSubmit={props.onSubmit}
    >
      <div className="border-accent-400 mb-3 flex flex-col border-l-4 px-2.5">
        <span className="text-2xl max-sm:text-xl">Welcome to</span>
        <span className="tracking-widemax-sm:text-xl text-2xl font-bold max-sm:text-xl">
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
