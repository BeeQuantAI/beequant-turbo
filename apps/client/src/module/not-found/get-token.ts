"use server";
import { cookies } from "next/headers";

const getToken = async () => {
  return cookies().get("token")?.value;
};

export default getToken;
