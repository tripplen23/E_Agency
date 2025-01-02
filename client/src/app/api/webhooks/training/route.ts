import { NextResponse } from "next/server";

export async function POST(req: Request) {
  console.log("Webhook received!");

  try {
    const body = await req.json();
    console.log("Webhook payload: ", body);
    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.log("Webhook processing error: ", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
