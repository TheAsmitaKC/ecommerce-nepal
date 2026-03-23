import { NextRequest, NextResponse } from "next/server";
import { verifyRefreshToken, findUserById, generateAccessToken, generateRefreshToken } from "@/lib/auth";
import { setTokenCookies } from "@/lib/cookies";

export async function POST(request: NextRequest) {
  const refreshToken = request.cookies.get("refresh_token")?.value;

  if (!refreshToken) {
    return NextResponse.json(
      { error: "Refresh token missing" },
      { status: 401 }
    );
  }

  try {
    const payload = verifyRefreshToken(refreshToken);
    const user = findUserById(payload.id);

    if (!user) {
      return NextResponse.json(
        { error: "User not found" },
        { status: 401 }
      );
    }

    const newAccessToken = generateAccessToken(user);
    const newRefreshToken = generateRefreshToken(user);

    const response = NextResponse.json({
      accessToken: newAccessToken,
      user: { id: user.id, email: user.email, name: user.name },
    });

    return setTokenCookies(response, newAccessToken, newRefreshToken);
  } catch {
    return NextResponse.json(
      { error: "Invalid or expired refresh token" },
      { status: 401 }
    );
  }
}
