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
          "group/button relative flex h-9 w-full items-center gap-2 border-l-2 px-4 py-2 text-left text-sm transition-colors duration-300",
          "hover:border-accent-500 dark:bg-primary-900 dark:hover:bg-primary-700 bg-primary-50 hover:bg-accent-50 border-transparent",
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
            "group-hover/button:bg-accent-50 group-hover/button:dark:bg-primary-700 dark:bg-primary-700",
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
    return <div className="bg-primary-400 my-3 h-px"></div>;
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
    <div className="group/accordion">
      <button
        className={clsx(
          "relative flex h-9 w-full items-center gap-2 border-l-2 px-4 py-2 text-left text-sm transition-colors duration-300",
          "group-hover/accordion:border-accent-500 dark:bg-primary-900 group-hover/accordion:dark:bg-primary-700 bg-primary-50 group-hover/accordion:bg-accent-50 border-transparent",
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
            "group-hover/accordion:dark:text-primary-50 text-transparent group-hover/accordion:text-neutral-950",
            "bg-primary-50 group-hover/accordion:bg-accent-50 dark:bg-primary-700 group-hover/accordion:dark:bg-primary-700",
          )}
        >
          {props.label}
        </span>
      </button>

      <div
        className={clsx(
          "group-data-[status=collapsed]/container:absolute group-data-[status=collapsed]/container:left-full group-data-[status=collapsed]/container:w-48",
          "dark:bg-primary-900 bg-primary-100 grid transition-[grid-template-rows_padding] duration-300",
          "group-data-hover/accordion:py-2 grid-rows-[0fr] py-0 group-hover/accordion:grid-rows-[1fr]",
        )}
      >
        <ul className="dark:bg-primary-700 bg-accent-50 overflow-hidden py-0 transition-[padding] duration-300 group-hover/accordion:py-2">
          {props.options.map((o, i) => (
            <li key={o.label + i}>
              <button
                onClick={o.onClick}
                className={clsx(
                  "h-9 w-full border-l-2 px-4 py-2 text-left text-sm transition-colors duration-300",
                  "hover:border-accent-500 dark:bg-primary-700 dark:hover:bg-primary-900 bg-accent-50 hover:bg-primary-50 border-transparent",
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
