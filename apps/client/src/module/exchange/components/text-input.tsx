import clsx from "clsx";

type Props = {
  name: string;
  id: string;
  type?: "text";
  value: string;
  onChange: (value: string) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function TextInput({
  name,
  id,
  type,
  value,
  onChange,
  ...props
}: Props) {
  return (
    <div
      className={clsx(
        "dark:text-primary-200 mt-5 flex flex-col gap-1",
        props.className,
      )}
    >
      <label htmlFor={id} className="max-w-24">
        {name}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={name}
        className="dark:border-primary-600 w-full border bg-transparent p-2 outline-none"
      />
    </div>
  );
}
