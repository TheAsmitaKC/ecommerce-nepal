import { NextRequest, NextResponse } from "next/server";
import { findUserByEmail, verifyPassword, generateAccessToken, generateRefreshToken } from "@/lib/auth";
import { setTokenCookies } from "@/lib/cookies";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { email, password } = body;

  if (!email || !password) {
    return NextResponse.json(
      { error: "Email and password are required" },
      { status: 400 }
    );
  }

  const user = await findUserByEmail(email);
  if (!user) {
    return NextResponse.json(
      { error: "Invalid email or password" },
      { status: 401 }
    );
  }

  const valid = await verifyPassword(password, user.password);
  if (!valid) {
    return NextResponse.json(
      { error: "Invalid email or password" },
      { status: 401 }
    );
  }

  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);

  const response = NextResponse.json({
    accessToken,
    user: { id: user.id, email: user.email, name: user.name },
  });

  return setTokenCookies(response, accessToken, refreshToken);
}
