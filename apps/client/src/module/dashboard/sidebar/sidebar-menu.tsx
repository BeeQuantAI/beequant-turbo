"use client";
import { Icon, Icons } from "@src/module/common";
import clsx from "clsx";

type Props = {
  menu: SidebarMenuItem[];
};
export function SidebarMenu({ menu }: Props) {
  return (
    <menu>
      {menu.map((item, index) => (
        <SidebarMenuItem key={index} {...item} />
      ))}
    </menu>
  );
}

export type SidebarMenuItem =
  | {
      type: "button";
      icon: Icons;
      label: string;
      onClick: () => void;
    }
  | SidebarAccordionProps
  | {
      type: "divider";
    };
function SidebarMenuItem(props: SidebarMenuItem) {
  if (props.type === "button") {
    return (
      <button
        className={clsx(
          "group/button relative my-2 flex h-9 w-full items-center gap-2 border-l-4 px-4 py-2 text-left text-sm transition-colors duration-300",
          "hover:border-primary-400 border-transparent bg-slate-50 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800",
        )}
        onClick={props.onClick}
      >
        <span>
          <Icon icon={props.icon} className="text-lg" />
        </span>
        <span className="overflow-hidden transition-[width] group-data-[status=collapsed]/container:w-0 group-data-[status=expanded]/container:w-full">
          {props.label}
        </span>

        <span
          className={clsx(
            "group-data-[status=expanded]/container:hidden",
            "absolute left-full h-9 overflow-hidden py-2 transition-[width_padding_color] duration-300",
            "w-0 group-hover/button:w-48 group-hover/button:px-6",
            "text-transparent group-hover/button:bg-slate-200 group-hover/button:text-neutral-950 group-hover/button:dark:bg-slate-800 group-hover/button:dark:text-slate-50",
          )}
        >
          {props.label}
        </span>
      </button>
    );
  }

  if (props.type === "accordion") {
    return <SidebarAccordion {...props} />;
  }

  if (props.type === "divider") {
    return <div className="h-px bg-slate-700"></div>;
  }

  return <></>;
}

type SidebarAccordionProps = {
  type: "accordion";
  icon: Icons;
  label: string;
  options: {
    label: string;
    onClick: () => void;
  }[];
};
function SidebarAccordion(props: SidebarAccordionProps) {
  return (
    <div className="group/accordion my-2">
      <button
        className={clsx(
          "relative flex h-9 w-full items-center gap-2 border-l-4 px-4 py-2 text-left text-sm transition-colors duration-300",
          "group-hover/accordion:border-primary-400 border-transparent bg-slate-50 group-hover/accordion:bg-slate-200 dark:bg-slate-900 group-hover/accordion:dark:bg-slate-800",
        )}
      >
        <span>
          <Icon icon={props.icon} className="text-lg" />
        </span>
        <span className="overflow-hidden transition-[width] group-data-[status=collapsed]/container:w-0 group-data-[status=expanded]/container:w-full">
          {props.label}
        </span>

        <span
          className={clsx(
            "group-data-[status=expanded]/container:hidden",
            "absolute left-full h-9 overflow-hidden py-2 transition-[width_padding_color_background-color] duration-300",
            "w-0 group-hover/accordion:w-48 group-hover/accordion:px-6",
            "text-transparent group-hover/accordion:text-neutral-950 group-hover/accordion:dark:text-slate-50",
            "bg-slate-50 group-hover/accordion:bg-slate-200 dark:bg-slate-800 group-hover/accordion:dark:bg-slate-800",
          )}
        >
          {props.label}
        </span>
      </button>

      <div
        className={clsx(
          "group-data-[status=collapsed]/container:absolute group-data-[status=collapsed]/container:left-full group-data-[status=collapsed]/container:w-48",
          "grid bg-slate-100 transition-[grid-template-rows_padding] duration-300 dark:bg-slate-800",
          "group-data-hover/accordion:py-2 grid-rows-[0fr] py-0 group-hover/accordion:grid-rows-[1fr]",
        )}
      >
        <ul className="overflow-hidden">
          {props.options.map((o, i) => (
            <li key={o.label + i}>
              <button
                onClick={o.onClick}
                className={clsx(
                  "h-9 w-full border-l-4 px-4 py-2 text-left text-sm transition-colors",
                  "hover:border-primary-400 border-transparent bg-slate-200 hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-900",
                )}
              >
                {o.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
