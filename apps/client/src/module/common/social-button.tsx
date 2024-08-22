import { cva, type VariantProps } from "class-variance-authority";

export interface SocialButtonVariants
  extends VariantProps<typeof socialButtonVariants> {}
const socialButtonVariants = cva(
  "text-primary-50 relative size-[38px] overflow-hidden rounded transition-all duration-500 lg:size-24",
  {
    variants: {
      variant: {
        facebook: [
          "bg-[#4766a4]",
          "before:transition-width before:transition-height hover:before:h-btn-h-cover hover:before:w-btn-w-cover relative z-10 before:absolute before:left-0 before:top-0 before:z-0 before:h-0 before:w-0 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-white before:opacity-65 before:duration-500 before:ease-in-out hover:bg-[#787985] hover:text-[#787985] hover:before:-z-50",
        ],
        google: [
          "bg-[#c74d4d]",
          "before:transition-width before:transition-height hover:before:h-btn-h-cover hover:before:w-btn-w-cover relative z-10 before:absolute before:left-0 before:top-0 before:z-0 before:h-0 before:w-0 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-white before:opacity-65 before:duration-500 before:ease-in-out hover:bg-[#787985] hover:text-[#787985] hover:before:-z-50",
        ],
      },
    },
  },
);
const socialButtonSvgs = {
  google: (
    <svg
      className="size-5 lg:size-16"
      fill="currentColor"
      viewBox="0 0 24 24"
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <path d="M23,11H21V9H19V11H17V13H19V15H21V13H23M8,11V13.4H12C11.8,14.4 10.8,16.4 8,16.4C5.6,16.4 3.7,14.4 3.7,12C3.7,9.6 5.6,7.6 8,7.6C9.4,7.6 10.3,8.2 10.8,8.7L12.7,6.9C11.5,5.7 9.9,5 8,5C4.1,5 1,8.1 1,12C1,15.9 4.1,19 8,19C12,19 14.7,16.2 14.7,12.2C14.7,11.7 14.7,11.4 14.6,11H8Z" />
    </svg>
  ),
  facebook: (
    <svg
      className="size-5 lg:size-16"
      fill="currentColor"
      viewBox="0 0 24 24"
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
    </svg>
  ),
};

type Props = {
  social: keyof typeof socialButtonSvgs;
  handleThirdPartyLogin: () => void;
};
export function SocialButton({ social, handleThirdPartyLogin}: Props) {
  return (
    <button
      className={socialButtonVariants({
        variant: social,
      })}
      type="button"
      onClick={handleThirdPartyLogin}
    >
      {socialButtonSvgs[social]}
    </button>
  );
}
