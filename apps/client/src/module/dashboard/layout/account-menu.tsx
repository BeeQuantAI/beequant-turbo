"use client";
import { useToggle } from "@src/utils";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { logout } from "../../auth";
import { useUser } from "../../auth/user-store";
import { LinearIcon, LinearIcons } from "../../common";
import { DashboardRoute } from "../route";

export function AccountMenu() {
  const user = useUser((s) => s.user);
  const router = useRouter();
  const [showDropdown, toggelShowDropdown] = useToggle(false);

  const handleLogout = () => logout();

  return (
    <div className="h-inherit relative ml-auto mr-[30px]">
      <button
        className={clsx(
          "dark:hover:bg-primary-700 hover:bg-accent-50 flex h-full items-center px-[15px] py-3 transition-colors duration-300",
          showDropdown && "dark:bg-primary-700 bg-accent-50",
        )}
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
            <span className="dark:text-primary-100 text-primary-700 ml-[10px] mr-[8px] text-[13px]">
              {user?.displayName}
            </span>

            <svg
              className="h-[18px]"
              width="24"
              height="24"
              fill="#bbbbc2"
              viewBox="0 0 24 24"
            >
              <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"></path>
            </svg>
          </>
        )}
        {!user && "Loading..."}
      </button>

      <menu
        className={clsx(
          "bg-primary-50 dark:bg-primary-900 absolute right-0 top-full z-[101] grid w-[210px] shadow-[0_2px_15px_0_rgba(0,0,0,0.05)] transition-[grid-template-rows_padding] duration-300",
          showDropdown ? "grid-rows-[1fr] py-[15px]" : "grid-rows-[0fr] py-0",
        )}
      >
        <div className="overflow-hidden">
          <MenuItem
            icon="user"
            label="Profile"
            onClick={() => router.push(DashboardRoute.Profile.Path)}
          />
          <MenuItem
            icon="briefcase"
            label="Wallet"
            onClick={() => console.log("haha")}
          />

          <div className="bg-primary-200 dark:bg-primary-700 my-[15px] h-px transition-colors duration-300"></div>

          <MenuItem
            icon="cog"
            label="Settings"
            onClick={() => console.log("haha")}
          />
          <MenuItem icon="exit" label="Log Out" onClick={handleLogout} />
        </div>
      </menu>

      {showDropdown && (
        <div
          className="fixed left-0 top-0 z-[100] h-screen w-screen cursor-pointer"
          onClick={() => toggelShowDropdown()}
        />
      )}
    </div>
  );
}

export type MenuItemProps = {
  icon: LinearIcons;
  label: string;
  onClick: () => void;
};
function MenuItem(props: MenuItemProps) {
  return (
    <button
      className={clsx(
        "group/button text-primary-600 relative flex h-8 w-full gap-[10px] px-[20px] py-[9px] text-left text-sm transition-colors duration-300",
        "bg-primary-50 dark:bg-primary-900 dark:hover:bg-primary-700 hover:bg-accent-50",
        "hover:before:bg-accent-900 before:absolute before:inset-y-0 before:left-0 before:w-0.5 before:bg-transparent before:transition-colors before:duration-300",
      )}
      onClick={props.onClick}
    >
      <LinearIcon
        icon={props.icon}
        className="text-primary-100 dark:text-primary-700"
      />
      <span className="dark:text-primary-100 overflow-hidden text-[14px] leading-[16px] transition-[width] group-data-[status=collapsed]/container:w-0 group-data-[status=expanded]/container:w-full">
        {props.label}
      </span>
    </button>
  );
}
