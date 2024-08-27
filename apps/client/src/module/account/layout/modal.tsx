import { Link } from "@src/configs/navigation";
import { Button } from "@src/module/common";
import { ForwardedRef, forwardRef } from "react";

type ModalProps = {
  message: string;
  buttonLabel: string;
  onClick: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Modal = forwardRef(function Modal(
  { message, buttonLabel, onClick }: ModalProps,
  ref: ForwardedRef<HTMLDialogElement>,
) {
  return (
    <dialog
      ref={ref}
      className="dark:bg-primary-600 z-10 min-w-[500px] rounded-lg px-5 pb-5 pt-[50px] open:backdrop:bg-black/50"
    >
      <div className="flex flex-col items-center gap-[50px]">
        <h1 className="text-primary-600 text-lg font-bold">{message}</h1>
        <div className="flex w-full justify-end">
          <Button variant="primary" size="small" onClick={onClick}>
            {buttonLabel}
          </Button>
        </div>
      </div>
    </dialog>
  );
});
