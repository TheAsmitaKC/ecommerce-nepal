import { NextResponse } from "next/server";
import { clearTokenCookies } from "@/lib/cookies";

export async function POST() {
  const response = NextResponse.json({ message: "Logged out" });
  return clearTokenCookies(response);
}
