import * as RadioGroup from "@radix-ui/react-radio-group";
import clsx from "clsx";

type Platform = { key: string; label: string };

type Props = {
  platforms: Platform[];
  selectedValue: string;
  onValueChange: (value: string) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function Radio({
  platforms,
  selectedValue,
  onValueChange,
  ...props
}: Props) {
  return (
    <div className={clsx("flex items-center", props.className)}>
      <RadioGroup.Root
        aria-label="View density"
        value={selectedValue}
        onValueChange={(value) => onValueChange(value)}
      >
        {platforms.map(({ key, label }) => (
          <div
            key={key}
            className={clsx("flex items-center space-x-2", props.className)}
          >
            <RadioGroup.Item
              id={key}
              className="shadow-accent-400 focus:shadow-accent-600 h-5 w-5 cursor-pointer rounded-full bg-transparent shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_1px]"
              value={key}
            >
              <RadioGroup.Indicator className="after:bg-accent-600 relative flex h-full w-full items-center justify-center after:block after:h-[6px] after:w-[6px] after:rounded-[50%] after:content-['']" />
            </RadioGroup.Item>
            <label
              className="dark:text-primary-50 cursor-pointer text-lg"
              htmlFor={key}
            >
              {label}
            </label>
          </div>
        ))}
      </RadioGroup.Root>
    </div>
  );
}
