"use client";
import { Button } from "@src/module/common";
import { exchangeRoutes } from "@src/module/exchange";
import { useRouter } from "next/navigation";
import React from "react";
export default function Page() {
  const router = useRouter();
  return (
    <div className="flex">
      <div className="flex flex-1 justify-between">
        <h1 className="text-xl">Exchange Management</h1>
        <Button
          variant="outline"
          onClick={() => router.push(exchangeRoutes.createExchange.Path)}
        >
          Connect Exchange
        </Button>
      </div>
    </div>
  );
}
