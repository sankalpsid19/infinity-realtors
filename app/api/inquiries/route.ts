import { NextResponse } from "next/server";
import { inquiries } from "@/lib/data";

export async function GET() {
  return NextResponse.json({ inquiries });
}

export async function POST(req: Request) {
  const body = await req.json();
  const newInquiry = {
    ...body,
    id: `inq-${inquiries.length + 1}`,
    status: 'new',
    createdAt: new Date().toISOString()
  };
  return NextResponse.json({ status: "received", data: newInquiry }, { status: 201 });
}
