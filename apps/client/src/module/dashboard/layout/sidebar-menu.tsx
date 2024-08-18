"use client";
import { LinearIcon, LinearIcons } from "@src/module/common";
import { useToggle } from "@src/utils";
import clsx from "clsx";

type Props = {
  menu: SidebarMenuItem[];
};
export function SidebarMenu({ menu }: Props) {
  return (
    <menu className="my-[15px]">
      {menu.map((item, index) => (
        <SidebarMenuItem key={index} {...item} />
      ))}
    </menu>
  );
}

export type SidebarMenuItem =
  | {
      type: "button";
      icon: LinearIcons;
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
          "group/button relative flex h-9 w-full px-5 py-[11px] text-left text-sm transition-colors duration-300",
          "dark:bg-primary-900 dark:hover:bg-primary-700 bg-primary-50 hover:bg-accent-50",
          "hover:before:bg-accent-500 before:absolute before:inset-y-0 before:left-0 before:w-0.5 before:bg-transparent before:transition-colors before:duration-300",
        )}
        onClick={props.onClick}
      >
        <LinearIcon icon={props.icon} />
        <span className="text-md ml-2.5 self-center overflow-hidden leading-[16px] transition-[width] group-data-[status=collapsed]/container:w-0 group-data-[status=expanded]/container:w-full">
          {props.label}
        </span>
        <span
          className={clsx(
            "group-data-[status=expanded]/container:hidden",
            "text-md absolute left-full top-0 h-9 overflow-hidden py-2 transition-[width_padding_color] duration-300",
            "w-0 group-hover/button:w-[220px] group-hover/button:px-4",
            "group-hover/button:dark:bg-primary-700 dark:bg-primary-900 group-hover/button:bg-accent-50",
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
    return (
      <div className="bg-primary-200 dark:bg-primary-700 my-[15px] h-px transition-colors duration-300"></div>
    );
  }

  return <></>;
}

type SidebarAccordionProps = {
  type: "accordion";
  icon: LinearIcons;
  label: string;
  options: {
    label: string;
    onClick: () => void;
  }[];
};
function SidebarAccordion(props: SidebarAccordionProps) {
  const [open, toggleOpen] = useToggle(false);

  return (
    <div className="group/accordion" data-open={open}>
      <button
        onClick={() => toggleOpen()}
        className={clsx(
          "relative flex h-9 w-full gap-2.5 px-5 py-[11px] text-left text-sm transition-colors duration-300",
          "dark:bg-primary-900 group-hover/accordion:dark:bg-primary-700 bg-primary-50 group-hover/accordion:bg-accent-50",
          "hover:before:bg-accent-500 before:absolute before:inset-y-0 before:left-0 before:w-0.5 before:bg-transparent before:transition-colors before:duration-300",
        )}
      >
        <LinearIcon icon={props.icon} />
        <span className="text-md overflow-hidden transition-[width] group-data-[status=collapsed]/container:w-0 group-data-[status=expanded]/container:w-full">
          {props.label}
        </span>
        <LinearIcon
          icon={open ? "chevron-down" : "chevron-right"}
          className="text-primary-600 self-center text-[10px] group-data-[status=collapsed]/container:hidden"
        />

        <span
          className={clsx(
            "group-data-[status=expanded]/container:hidden",
            "transition-cl text-md absolute left-full top-0 h-9 overflow-hidden py-2 transition-[width,padding,color,background-color] duration-300",
            "w-0 group-hover/accordion:w-[220px] group-hover/accordion:px-4",
            "group-hover/accordion:dark:text-primary-100 group-hover/accordion:text-primary-700 text-transparent",
            "bg-primary-50 dark:bg-primary-700 group-hover/accordion:dark:bg-primary-700 group-hover/accordion:bg-accent-50",
          )}
        >
          {props.label}
        </span>
      </button>

      <div
        className={clsx(
          "group-data-[status=collapsed]/container:hidden",
          "grid transition-[grid-template-rows] duration-300 group-data-[open=true]/accordion:-mt-px",
          "grid-rows-[0fr] group-data-[status=expanded]/container:group-data-[open=true]/accordion:grid-rows-[1fr]",
        )}
      >
        <ul
          className={clsx(
            "dark:bg-primary-700 bg-accent-50 overflow-hidden duration-300",
          )}
        >
          {props.options.map((o, i) => (
            <li key={o.label + i} className="first:mt-[15px] last:mb-[15px]">
              <button
                onClick={o.onClick}
                className={clsx(
                  "text-md relative h-9 w-full py-2 pl-[43px] pr-4 text-left transition-colors duration-300",
                  "dark:bg-primary-700 dark:hover:bg-primary-900 hover:bg-primary-50 bg-accent-50",
                  "hover:before:bg-accent-500 before:absolute before:inset-y-0 before:left-0 before:w-0.5 before:bg-transparent before:transition-colors before:duration-300",
                )}
              >
                {o.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div
        className={clsx(
          "group-data-[status=expanded]/container:hidden",
          "grid transition-[grid-template-rows] duration-300",
          "group-data-[status=collapsed]/container:absolute group-data-[status=collapsed]/container:left-full group-data-[status=collapsed]/container:w-[220px]",
          "grid-rows-[0fr] group-data-[status=collapsed]/container:group-hover/accordion:grid-rows-[1fr]",
        )}
      >
        <ul
          className={clsx(
            "dark:bg-primary-700 bg-accent-50 overflow-hidden duration-300",
          )}
        >
          {props.options.map((o, i) => (
            <li key={o.label + i} className="first:mt-[15px] last:mb-[15px]">
              <button
                onClick={o.onClick}
                className={clsx(
                  "text-md relative h-9 w-full px-4 py-2 text-left leading-[14px] transition-colors duration-300",
                  "dark:bg-primary-700 dark:hover:bg-primary-900 hover:bg-primary-50 bg-accent-50",
                  "hover:before:bg-accent-500 before:absolute before:inset-y-0 before:left-0 before:w-0.5 before:bg-transparent before:transition-colors before:duration-300",
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
