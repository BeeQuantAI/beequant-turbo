"use client";
import { useToggle } from "@src/utils";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { logout } from "../../auth";
import { useUser } from "../../auth/user-store";
import { Icon, Icons } from "../../common";
import { DashboardRoute } from "../route";

export function AccountMenu() {
  const user = useUser((s) => s.user);
  const router = useRouter();
  const [showDropdown, toggelShowDropdown] = useToggle(false);

  const handleLogout = () => logout();

  return (
    <div className="h-inherit relative">
      <button
        className="h-inherit flex items-center gap-2 px-4 py-3 hover:bg-slate-700"
        onClick={() => toggelShowDropdown()}
      >
        {!!user && (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="h-inherit aspect-square rounded-full object-cover"
              src={user.avatar}
              alt={user.displayName + " avatar"}
            />
            <span>{user?.displayName}</span>

            <Icon icon="arrow-down" />
          </>
        )}
        {!user && "Loading..."}
      </button>

      <menu
        className={clsx(
          "absolute right-0 top-full grid w-60 bg-slate-900 transition-[grid-template-rows_padding] duration-300",
          showDropdown ? "grid-rows-[1fr] py-2" : "grid-rows-[0fr] py-0",
        )}
      >
        <div className="overflow-hidden">
          <MenuItem
            icon="person"
            label="Profile"
            onClick={() => router.push(DashboardRoute.Profile.Path)}
          />
          <MenuItem
            icon="placholder"
            label="Placholder"
            onClick={() => console.log("haha")}
          />
          <div className="my-2 h-px bg-slate-700" />
          <MenuItem
            icon="placholder"
            label="Placholder"
            onClick={() => console.log("haha")}
          />
          <MenuItem icon="exit" label="Logout" onClick={handleLogout} />
        </div>
      </menu>
    </div>
  );
}

export type MenuItemProps = {
  icon: Icons;
  label: string;
  onClick: () => void;
};
function MenuItem(props: MenuItemProps) {
  return (
    <button
      className={clsx(
        "group/button relative flex h-9 w-full items-center gap-2 border-l-4 px-4 py-2 text-left text-sm transition-colors duration-300",
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
    </button>
  );
}
