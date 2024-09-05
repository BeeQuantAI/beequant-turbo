import clsx from "clsx";
import type { IconBaseProps } from "react-icons";
import {
  AiOutlineClose,
  AiOutlineLoading,
  AiOutlineMenu,
} from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { FaKey } from "react-icons/fa";
import { FaEarthAsia, FaMobileScreenButton } from "react-icons/fa6";
import {
  GoCodespaces,
  GoEye,
  GoEyeClosed,
  GoHome,
  GoMoon,
  GoSun,
} from "react-icons/go";
import {
  IoDiamondOutline,
  IoLogOutOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";

import {
  MdCheck,
  MdInsertChart,
  MdModeNight,
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
  MdSunny,
} from "react-icons/md";
import { PiPlaceholder } from "react-icons/pi";
import { twMerge } from "tailwind-merge";

const genericIcons = {
  "arrow-down": MdOutlineKeyboardArrowDown,
  "arrow-up": MdOutlineKeyboardArrowUp,
  close: AiOutlineClose,
  placeholder: PiPlaceholder,
  check: MdCheck,
  dayTime: MdSunny,
  nightTime: MdModeNight,
  mobile: FaMobileScreenButton,
  email: MdOutlineMail,
  setting: IoSettingsOutline,
  loading: AiOutlineLoading,
};

const authIcons = {
  person: BsPerson,
  key: FaKey,
  "eye-open": GoEye,
  "eye-closed": GoEyeClosed,
};

const themeIcons = {
  light: GoSun,
  dark: GoMoon,
  system: GoCodespaces,
};

const dashboardIcons = {
  menu: AiOutlineMenu,
  home: GoHome,
  bots: MdInsertChart,
  crypto: FaEarthAsia,
  theme: IoDiamondOutline,
  account: BsPerson,
  exit: IoLogOutOutline,
};

const icons = {
  ...genericIcons,
  ...authIcons,
  ...themeIcons,
  ...dashboardIcons,
};

export type Icons = keyof typeof icons;
export type IconProps = {
  icon: Icons;
} & IconBaseProps;
export function Icon({ icon, ...props }: IconProps) {
  const I = icons[icon];
  return <I {...props} />;
}

export type LinearIcons =
  | "menu"
  | "home"
  | "chart-bars"
  | "earth"
  | "diamond"
  | "user"
  | "briefcase"
  | "cog"
  | "exit"
  | "chevron-right"
  | "chevron-down";
type LinearIconProps = { icon: LinearIcons; className?: string };
export function LinearIcon({ icon, className }: LinearIconProps) {
  return (
    <span
      className={twMerge(
        clsx(`lnr lnr-${icon} text-primary-200 text-base`, className),
      )}
    />
  );
}
