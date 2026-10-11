import { NextResponse } from "next/server";
import { validateMessage } from "@/lib/contact/schema";
import { EmailNotConfiguredError, sendMessage } from "@/lib/contact/send";

export const runtime = "nodejs";

// A few messages a minute per address is plenty for people and too few for bots.
const recent = new Map<string, number[]>();
function tooMany(ip: string) {
  const now = Date.now();
  const hits = (recent.get(ip) ?? []).filter((t) => now - t < 10 * 60_000);
  hits.push(now);
  recent.set(ip, hits);
  return hits.length > 5;
}

export async function POST(req: Request) {
  if (Number(req.headers.get("content-length") ?? 0) > 20_000)
    return NextResponse.json({ ok: false, message: "Your message is too long." }, { status: 413 });
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Something went wrong. Please try again." }, { status: 400 });
  }
  // Hidden field only bots fill in: pretend it worked.
  if (body.website) return NextResponse.json({ ok: true });

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (tooMany(ip))
    return NextResponse.json({ ok: false, message: "Too many messages from your connection. Try again in a few minutes." }, { status: 429 });

  const result = validateMessage(body);
  if (!result.ok) return NextResponse.json({ ok: false, errors: result.errors }, { status: 422 });

  try {
    await sendMessage(result.data);
    return NextResponse.json({ ok: true });
  } catch (err) {
    if (err instanceof EmailNotConfiguredError)
      return NextResponse.json({ ok: false, message: "Messages can't be sent right now. Please try again later." }, { status: 503 });
    console.error("contact: delivery failed");
    return NextResponse.json({ ok: false, message: "Your message wasn't sent. Please try again." }, { status: 500 });
  }
}
