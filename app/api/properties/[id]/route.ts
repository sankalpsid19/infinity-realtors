import { NextResponse } from "next/server";
import { properties } from "@/lib/data";

export async function GET(req: Request, props: { params: Promise<{ id: string }> }) {
  const resolvedParams = await props.params;
  const property = properties.find((p) => p.id === resolvedParams.id);
  
  if (!property) {
    return NextResponse.json({ error: "Property not found" }, { status: 404 });
  }
  
  return NextResponse.json({ property });
}

export async function PUT(req: Request, props: { params: Promise<{ id: string }> }) {
  const resolvedParams = await props.params;
  const body = await req.json();
  return NextResponse.json({ status: "updated", id: resolvedParams.id, data: body });
}

export async function DELETE(req: Request, props: { params: Promise<{ id: string }> }) {
  const resolvedParams = await props.params;
  return NextResponse.json({ status: "deleted", id: resolvedParams.id });
}
