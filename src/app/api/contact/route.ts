import { NextResponse } from "next/server";

type ContactPayload = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

function readString(v: unknown): string {
  return typeof v === "string" ? v.trim() : "";
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  const scriptUrl = process.env.APPS_SCRIPT_WEBAPP_URL;
  const secret = process.env.FORM_SUBMIT_SECRET;

  if (!scriptUrl?.trim() || !secret?.trim()) {
    return NextResponse.json(
      { ok: false, error: "Contact endpoint is not configured." },
      { status: 503 },
    );
  }

  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Expected JSON body." },
      { status: 400 },
    );
  }

  if (!json || typeof json !== "object") {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body." },
      { status: 400 },
    );
  }

  const body = json as Record<string, unknown>;
  const payload: ContactPayload = {
    firstName: readString(body.firstName),
    lastName: readString(body.lastName),
    email: readString(body.email),
    message: readString(body.message),
  };

  if (
    !payload.firstName ||
    !payload.lastName ||
    !payload.email ||
    !payload.message
  ) {
    return NextResponse.json(
      { ok: false, error: "Please fill in all fields." },
      { status: 400 },
    );
  }

  if (!isValidEmail(payload.email)) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  try {
    const upstream = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...payload, secret }),
    });

    const raw = await upstream.text();

    if (!upstream.ok) {
      console.error("Google Sheets webhook failed:", raw);
      return NextResponse.json(
        {
          ok: false,
          error: "Could not save your request. Please try again or email us.",
        },
        { status: 502 },
      );
    }

    let parsed: { ok?: boolean; error?: string } | null = null;
    try {
      parsed = JSON.parse(raw) as { ok?: boolean; error?: string };
    } catch {
      // Apps Script may return non-JSON on some failures
    }

    if (parsed && parsed.ok === false) {
      return NextResponse.json(
        {
          ok: false,
          error: parsed.error || "Request rejected.",
        },
        { status: upstream.status >= 400 ? upstream.status : 400 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        ok: false,
        error: "Could not save your request. Please try again or email us.",
      },
      { status: 502 },
    );
  }
}
