"use client";

import { useState, type FormEvent } from "react";
import { topics } from "@/lib/contact/topics";
import { validateMessage, type MessageErrors } from "@/lib/contact/schema";

type Status = "idle" | "sending" | "sent" | "failed";

export default function ContactForm({ topic }: { topic?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<MessageErrors>({});
  const [problem, setProblem] = useState("");

  function show(e: MessageErrors) {
    setErrors(e);
    setStatus("idle");
    const first = Object.keys(e)[0];
    if (first) document.getElementById(`c-${first}`)?.focus();
  }

  async function onSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const raw = Object.fromEntries(new FormData(ev.currentTarget).entries());
    const check = validateMessage(raw);
    if (!check.ok) return show(check.errors);
    setErrors({});
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(raw) });
      const data = (await res.json().catch(() => null)) as { ok?: boolean; errors?: MessageErrors; message?: string } | null;
      if (res.ok && data?.ok) return setStatus("sent");
      if (data?.errors) return show(data.errors);
      setProblem(data?.message ?? "Your message wasn't sent. Please try again.");
      setStatus("failed");
    } catch {
      setProblem("Check your internet connection and try again.");
      setStatus("failed");
    }
  }

  if (status === "sent")
    return (
      <div className="form-done" role="status" tabIndex={-1} ref={(el) => el?.focus()}>
        <h3>Message sent.</h3>
        <p>Thanks for writing. We reply by email, usually within two working days.</p>
      </div>
    );

  const field = (id: keyof MessageErrors) => ({
    id: `c-${id}`,
    name: id,
    "aria-invalid": errors[id] ? true : undefined,
    "aria-describedby": errors[id] ? `c-${id}-err` : undefined,
  });
  const err = (id: keyof MessageErrors) =>
    errors[id] ? <p className="field-err" id={`c-${id}-err`}>{errors[id]}</p> : null;

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate aria-label="Send us a message">
      <div className="cf">
        <label htmlFor="c-name">Name</label>
        <input {...field("name")} autoComplete="name" required />
        {err("name")}
      </div>
      <div className="cf">
        <label htmlFor="c-email">Email</label>
        <input {...field("email")} type="email" autoComplete="email" required />
        {err("email")}
      </div>
      <div className="cf">
        <label htmlFor="c-phone">
          Phone or WhatsApp <small>(optional)</small>
        </label>
        <input {...field("phone")} type="tel" autoComplete="tel" />
        {err("phone")}
      </div>
      <div className="cf">
        <label htmlFor="c-topic">What is it about?</label>
        <select {...field("topic")} defaultValue={topics.some((t) => t.key === topic) ? topic : "question"}>
          {topics.map((t) => (
            <option key={t.key} value={t.key}>
              {t.label}
            </option>
          ))}
        </select>
        {err("topic")}
      </div>
      <div className="cf cf-wide">
        <label htmlFor="c-message">Message</label>
        <textarea {...field("message")} rows={6} required />
        {err("message")}
      </div>
      <div className="hp" aria-hidden="true">
        <label>
          Leave this empty
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <div className="cf-wide">
        <button className="btn btn-primary" type="submit" disabled={status === "sending"} aria-busy={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
        {status === "failed" && (
          <p className="form-fail" role="alert">
            {problem}
          </p>
        )}
      </div>
    </form>
  );
}
