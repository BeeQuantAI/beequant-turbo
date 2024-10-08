import clsx from "clsx";
import type { IconBaseProps } from "react-icons";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { FaKey } from "react-icons/fa";
import { FaEarthAsia } from "react-icons/fa6";
import { GoEye, GoEyeClosed, GoHome } from "react-icons/go";
import { IoDiamondOutline, IoLogOutOutline } from "react-icons/io5";
import { FaMobileScreenButton } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { BsPinAngle } from "react-icons/bs";
import { TbRefresh } from "react-icons/tb";

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
};

const authIcons = {
  person: BsPerson,
  key: FaKey,
  "eye-open": GoEye,
  "eye-closed": GoEyeClosed,
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

const exchangeIcons = {
  pin: BsPinAngle,
};

const cryptoIcons = {
  refresh: TbRefresh,
};

const icons = {
  ...genericIcons,
  ...authIcons,
  ...dashboardIcons,
  ...exchangeIcons,
  ...cryptoIcons,
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
