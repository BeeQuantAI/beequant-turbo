import React from "react";

type Props = {
  children: React.ReactNode;
};
export function Button({ children }: Props) {
  return (
    <div className="ui-border ui-border-purple-500 ui-rounded-md ui-px-3 ui-py-2">
      {children} wqeqweq
    </div>
  );
}
