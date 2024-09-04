"use client";

import { Button } from "@src/module/common";
import { ForwardedRef, forwardRef, use, useEffect, useState } from "react";

type ModalProps = {
  message: string;
  buttonLabel: string;
  onClick: () => void;
} & React.HTMLAttributes<HTMLDialogElement>;

export const Modal = forwardRef(function Modal(
  { message, buttonLabel, onClick }: ModalProps,
  ref: ForwardedRef<HTMLDialogElement>,
) {
  return (
    <dialog
      ref={ref}
      className="dark:bg-primary-600 bg-primary-100 fixed z-20 min-w-[500px] rounded-lg px-5 pb-5 pt-[50px] shadow-[0px_0px_0px_999px_rgba(0,0,0,0.5)]"
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
