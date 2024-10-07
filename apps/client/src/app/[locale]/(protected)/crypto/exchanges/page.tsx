"use client";
import { CryptoRoutes, TopThreeLists } from "@src/module/crypto";

export default function Page() {
  return (
    <div className="flex justify-between">
      <div className="flex w-full flex-1 justify-between">
        <TopThreeLists />
      </div>
    </div>
  );
}
