"use client";
import { useEffect } from "react";
import { useRouter } from "@src/configs/navigation";
import { useTheme } from "@src/module/system/theme-switcher";
import { useState } from "react";
import { usePathname } from "@src/configs/navigation";

type Props = {
  children: React.ReactNode;
};

export function AuthProvider({ children }: Props) {
  const router = useRouter();
  const { theme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const user = sessionStorage.getItem("user-storage");
    if (pathname === "/" && !user) {
      router.push("/login");
    } else {
      setIsLoading(false);
    }
  }, [pathname, router]);

  const backgroundColor = theme === "dark" ? "bg-black" : "bg-white";

  if (isLoading) {
    return (
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center ${backgroundColor} bg-opacity-50`}
      >
        <div
          className="inline-block h-16 w-16 animate-spin rounded-full border-8 border-solid border-blue-500 border-t-transparent"
          role="status"
        ></div>
      </div>
    );
  }

  return children;
}
