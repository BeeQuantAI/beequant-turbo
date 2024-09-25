"use client";
import { useEffect } from "react";
import { useRouter } from "@src/configs/navigation";
import { useState } from "react";
import { usePathname } from "@src/configs/navigation";
import { Loading } from "../common/loading-animation";

type Props = {
  children: React.ReactNode;
};

export function AuthProvider({ children }: Props) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const user = sessionStorage.getItem("user-storage");
    if (pathname === "/" && !user) {
      router.push("/login");
    } else {
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return children;
}
