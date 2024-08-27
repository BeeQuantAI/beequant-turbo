"use server";
import { defaultLocale } from "../configs/configs";
import { cookies } from "next/headers";

export async function getNextLocale() {
  const cookieStore = cookies();
  const result = await cookieStore.get("NEXT_LOCALE")?.value;
  if (!result) {
    return defaultLocale;
  }
  return result;
}
