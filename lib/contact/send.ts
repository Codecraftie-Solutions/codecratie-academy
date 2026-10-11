import nodemailer from "nodemailer";
import { ACADEMY_EMAIL } from "@/lib/config";
import { topicLabel } from "./topics";
import type { Message } from "./schema";

export class EmailNotConfiguredError extends Error {}

/**
 * Sends a message from the contact form to the Academy inbox through SMTP.
 * Needs SMTP_HOST and SMTP_FROM (plus SMTP_USER and SMTP_PASS for most servers).
 * CONTACT_EMAIL chooses the inbox; it defaults to the Academy's address.
 */
export async function sendMessage(d: Message): Promise<void> {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM, SMTP_SECURE, CONTACT_EMAIL } = process.env;
  if (!SMTP_HOST || !SMTP_FROM) throw new EmailNotConfiguredError();
  const transport = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT || 587),
    secure: SMTP_SECURE === "true",
    auth: SMTP_USER ? { user: SMTP_USER, pass: SMTP_PASS } : undefined,
  });
  const topic = topicLabel(d.topic) ?? d.topic;
  await transport.sendMail({
    from: SMTP_FROM,
    to: CONTACT_EMAIL || ACADEMY_EMAIL,
    replyTo: `${d.name} <${d.email}>`,
    subject: `[Academy] ${topic}: ${d.name}`,
    text: [`Name: ${d.name}`, `Email: ${d.email}`, `Phone: ${d.phone || "-"}`, `Topic: ${topic}`, "", d.message].join("\n"),
  });
}
