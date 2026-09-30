import { NextRequest, NextResponse } from "next/server";
import { generateBotReply } from "@/lib/chatEngine";

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    const reply = generateBotReply(message);

    return NextResponse.json({
      reply: reply.content,
      products: reply.products || [],
    });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
