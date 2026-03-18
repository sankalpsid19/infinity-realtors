import { NextResponse } from "next/server";
import { properties } from "@/lib/data";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const typeParam = searchParams.get("type");
  const cityParam = searchParams.get("city");
  
  let filtered = properties;
  
  if (typeParam && typeParam !== "all") {
    filtered = filtered.filter((p) => p.type === typeParam);
  }
  
  if (cityParam && cityParam !== "all") {
    filtered = filtered.filter((p) => p.city === cityParam);
  }

  return NextResponse.json({ properties: filtered, count: filtered.length });
}

export async function POST(req: Request) {
  const body = await req.json();
  const newProperty = {
    ...body,
    id: `prop-${properties.length + 1}`,
    createdAt: new Date().toISOString()
  };
  return NextResponse.json({ status: "created", data: newProperty }, { status: 201 });
}
