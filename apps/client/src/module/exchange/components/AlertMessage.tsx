"use client";

import { Button, Icon } from "@src/module/common";
import clsx from "clsx";
import { ForwardedRef, forwardRef } from "react";

type AlertMessageProps = {
  title: string;
  message: string;
  cancelHandler: () => void;
  submitHandler: () => void;
  confirmText?: string;
  cancelText?: string;
} & React.HTMLAttributes<HTMLDialogElement>;

export const AlertMessage = forwardRef(function Modal(
  {
    title,
    message,
    cancelHandler,
    submitHandler,
    confirmText,
    cancelText,
  }: AlertMessageProps,
  ref: ForwardedRef<HTMLDialogElement>,
) {
  return (
    <dialog
      ref={ref}
      className={clsx(
        "dark:bg-primary-600 bg-primary-100 fixed z-50",
        "min-w-[500px] rounded-lg px-8 py-[50px] shadow-[0px_0px_0px_999px_rgba(0,0,0,0.5)]",
      )}
    >
      <div className="flex flex-col items-center gap-5">
        <Icon icon="pin" className="text-accent-300 text-xl" />
        <h1 className="text-primary-600 text-lg font-bold">{title}</h1>
        <h3 className="text-primary-600 text-md">{message}</h3>
        <div className="flex w-full justify-center gap-5">
          <Button className="px-[43px]" type="submit" onClick={submitHandler}>
            {confirmText}
          </Button>
          <Button
            variant="secondary"
            size="small"
            onClick={cancelHandler}
            className="px-[43px]"
          >
            {cancelText}
          </Button>
        </div>
      </div>
    </dialog>
  );
});
