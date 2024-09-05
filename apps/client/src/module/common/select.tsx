import { SelectHTMLAttributes } from "react";

type SelectProps = {
  label: string;
  options: { label: string; value: string }[];
} & SelectHTMLAttributes<HTMLSelectElement>;

export function Select({ label, options, ...props }: SelectProps) {
  return (
    <label className="grid grid-cols-[80px_1fr] items-center gap-x-[10px] space-y-1 sm:grid-cols-[120px_1fr] sm:gap-x-5">
      <span>{label}</span>
      <select
        className="focus:shadow-accent-400 dark:focus:shadow-accent-400 shadow-primary-100 dark:shadow-primary-600 shadow-inset flex-1 bg-transparent px-2 py-2 text-sm transition-[box-shadow] duration-300 placeholder:text-sm focus:outline-none"
        {...props}
      >
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
