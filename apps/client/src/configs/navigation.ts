import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { locales } from "./configs";

export const { Link, redirect, usePathname, useRouter } =
  createSharedPathnamesNavigation({ locales });
