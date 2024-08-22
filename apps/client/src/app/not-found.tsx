"use client";

import Link from "next/link";
import { Button } from "@src/module/common";

export default function NotFound404() {
  return (
    <div className="flex h-screen overflow-auto bg-[url('/image/bg_404.png')] bg-cover bg-center bg-no-repeat text-center">
      <div className="m-auto p-[0.625rem]">
        <img
          src="/image/404.png"
          alt="404"
          className="w-full max-w-[31.25rem]"
        />
        <h3 className="mb-5 mt-[5.625rem] text-[1.1875rem] text-white">
          Ooops! The page you are looking for could not be found
        </h3>
        <Link href="/login">
          <Button variant="default">Back Home</Button>
        </Link>
      </div>
    </div>
  );
}
