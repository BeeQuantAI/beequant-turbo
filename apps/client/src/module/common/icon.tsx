import type { IconBaseProps } from "react-icons";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { FaKey } from "react-icons/fa";
import { FaEarthAsia } from "react-icons/fa6";
import { GoEye, GoEyeClosed, GoHome } from "react-icons/go";
import { IoDiamondOutline, IoLogOutOutline } from "react-icons/io5";
import {
  MdCheck,
  MdInsertChart,
  MdModeNight,
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
  MdSunny,
} from "react-icons/md";
import { PiPlaceholder } from "react-icons/pi";

const genericIcons = {
  "arrow-down": MdOutlineKeyboardArrowDown,
  "arrow-up": MdOutlineKeyboardArrowUp,
  close: AiOutlineClose,
  placholder: PiPlaceholder,
  check: MdCheck,
  dayTime: MdSunny,
  nightTime: MdModeNight,
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

const icons = {
  ...genericIcons,
  ...authIcons,
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
