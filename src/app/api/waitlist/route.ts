import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 },
      );
    }

    const apiKey = process.env.BEEHIIV_API_KEY;
    const publicationId = process.env.BEEHIIV_PUBLICATION_ID;

    if (!apiKey || !publicationId) {
      console.error("Missing BEEHIIV_API_KEY or BEEHIIV_PUBLICATION_ID");
      return NextResponse.json(
        { error: "Server configuration error." },
        { status: 500 },
      );
    }

    const res = await fetch(
      `https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          email,
          utm_source: "waitlist-orchestrate",
        }),
      },
    );

    if (res.ok) {
      return NextResponse.json({ success: true }, { status: 201 });
    }

    if (res.status === 429) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 },
      );
    }

    const errorBody = await res.text();
    console.error(`Beehiiv API error ${res.status}:`, errorBody);

    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: res.status >= 500 ? 502 : 400 },
    );
  } catch (err) {
    console.error("Waitlist route error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
