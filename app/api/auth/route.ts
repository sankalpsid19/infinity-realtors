import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  // Placeholder auth handler
  return NextResponse.json({ token: "sample-jwt-token", user: body.email });
}
