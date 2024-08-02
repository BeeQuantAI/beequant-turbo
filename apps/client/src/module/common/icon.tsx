import type { IconBaseProps } from "react-icons";
import { GoEye, GoEyeClosed, GoKey, GoPerson } from "react-icons/go";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import {
  MdSunny,
  MdModeNight,
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
const icons = {
  person: GoPerson,
  key: GoKey,
  "eye-open": GoEye,
  "eye-closed": GoEyeClosed,
  menu: AiOutlineMenu,
  dayTime: MdSunny,
  nightTime: MdModeNight,
  "arrow-down": MdOutlineKeyboardArrowDown,
  "arrow-up": MdOutlineKeyboardArrowUp,
  close: AiOutlineClose,
};

export type Icons = keyof typeof icons;
export type IconProps = {
  icon: Icons;
} & IconBaseProps;
export function Icon({ icon, ...props }: IconProps) {
  const I = icons[icon];
  return <I {...props} />;
}
