"use client";
import { Icon } from "@src/module/common";

export type SubmenuItem = {
  path: string;
  icon: any; // Change this to typeof Squares2X2Icon | typeof InboxArrowDownIcon | ...
  pageName: string;
  pageTitle: string;
};
export type SidebarMenuObj = {
  path: string;
  icon: JSX.Element; // Change this to typeof Squares2X2Icon | typeof InboxArrowDownIcon | ...
  pageName: string;
  pageTitle: string;
  submenu?: SubmenuItem[];
};

const iconClasses = `h-6 w-6`;
const submenuIconClasses = `h-5 w-5`;
export const routes: SidebarMenuObj[] = [
  {
    path: "/dashboard",
    icon: <Icon icon="key" className={iconClasses} />,
    pageName: "Dashboard",
    pageTitle: "Dashboard",
  },
  {
    path: "/dashboard/leads",
    icon: <Icon icon="key" className={iconClasses} />,
    pageName: "Leads",
    pageTitle: "Leads",
  },
  {
    path: "/dashboard/settings",
    icon: <Icon icon="key" className={`${iconClasses} inline`} />,
    pageName: "Settings",
    pageTitle: "",
    submenu: [
      {
        path: "/dashboard/settings/billing",
        icon: <Icon icon="key" className={submenuIconClasses} />,
        pageName: "Billing",
        pageTitle: "Bills",
      },
      {
        path: "/dashboard/settings/team",
        icon: <Icon icon="key" className={submenuIconClasses} />,
        pageName: "Team",
        pageTitle: "Team",
      },
    ],
  },
  {
    path: "/dashboard/leads",
    icon: <Icon icon="key" className={iconClasses} />,
    pageName: "Leads",
    pageTitle: "Leads",
  },
  {
    path: "/dashboard/leads",
    icon: <Icon icon="key" className={iconClasses} />,
    pageName: "Leads",
    pageTitle: "Leads",
  },
];
