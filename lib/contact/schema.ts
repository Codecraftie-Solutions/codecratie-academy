import { topicLabel } from "./topics";

export type Message = { name: string; email: string; phone: string; topic: string; message: string };
export type MessageErrors = Partial<Record<keyof Message, string>>;

// eslint-disable-next-line no-control-regex
const CONTROL = /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g;
const text = (v: unknown) => (typeof v === "string" ? v.replace(CONTROL, "").trim() : "");
const line = (v: unknown) => text(v).replace(/[\r\n]+/g, " ");
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE = /^[+\d\s().-]{7,20}$/;

/** Shared by the form and the server, so both give the same messages. */
export function validateMessage(input: unknown): { ok: true; data: Message } | { ok: false; errors: MessageErrors } {
  const r = (input && typeof input === "object" ? input : {}) as Record<string, unknown>;
  const d: Message = {
    name: line(r.name),
    email: line(r.email).toLowerCase(),
    phone: line(r.phone),
    topic: line(r.topic),
    message: text(r.message),
  };
  const e: MessageErrors = {};
  if (d.name.length < 2) e.name = "Enter your name.";
  else if (d.name.length > 100) e.name = "Keep your name under 100 characters.";
  if (!EMAIL.test(d.email) || d.email.length > 254) e.email = "Enter a valid email address, like name@example.com.";
  if (d.phone && !PHONE.test(d.phone)) e.phone = "Use digits, spaces and + only, or leave this blank.";
  if (!topicLabel(d.topic)) e.topic = "Choose what your message is about.";
  if (d.message.length < 5) e.message = "Write a short message.";
  else if (d.message.length > 3000) e.message = "Keep your message under 3000 characters.";
  return Object.keys(e).length ? { ok: false, errors: e } : { ok: true, data: d };
}
