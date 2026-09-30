import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const { name, phone, carModel } = data;
    if (!name || !phone || !carModel) {
      return NextResponse.json({ error: "Name, phone, and car model are required" }, { status: 400 });
    }

    // In production, you would:
    // 1. Save to database (e.g., MongoDB, Supabase, etc.)
    // 2. Send email notification via SendGrid / Nodemailer
    // 3. Trigger WhatsApp notification via Twilio / Vonage API
    // 4. Add to CRM / newsletter list if opted in

    console.log("📋 New Quote Request:", data);

    return NextResponse.json({
      success: true,
      message: "Quote request received! We'll contact you shortly via WhatsApp.",
      data: {
        referenceId: `PC-${Date.now()}`,
        estimatedResponse: "30 minutes",
      },
    });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
