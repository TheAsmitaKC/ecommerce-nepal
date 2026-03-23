import { NextRequest, NextResponse } from "next/server";
import { createUser, findUserByEmail, generateAccessToken, generateRefreshToken } from "@/lib/auth";
import { setTokenCookies } from "@/lib/cookies";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { email, name, password } = body;

  if (!email || !name || !password) {
    return NextResponse.json(
      { error: "Email, name, and password are required" },
      { status: 400 }
    );
  }

  const existing = await findUserByEmail(email);
  if (existing) {
    return NextResponse.json(
      { error: "User with this email already exists" },
      { status: 409 }
    );
  }

  const user = await createUser(email, name, password);
  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);

  const response = NextResponse.json(
    {
      accessToken,
      user: { id: user.id, email: user.email, name: user.name },
    },
    { status: 201 }
  );

  return setTokenCookies(response, accessToken, refreshToken);
}
