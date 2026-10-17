import type { Metadata } from "next";
import RevealWrapper from "@/components/RevealWrapper";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  alternates: { canonical: "/contact" },
  title: "Contact | Code-Craftie Academy",
  description: "Send Code-Craftie Academy a message about the programme, payment, future cohorts or partnerships.",
};

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ topic?: string }> }) {
  const { topic } = await searchParams;
  return (
    <section className="section" style={{ paddingTop: "calc(var(--nav-h) + var(--s-9))" }}>
      <div className="container" style={{ maxWidth: 760 }}>
        <RevealWrapper>
          <h1 style={{ fontSize: "var(--fs-h2)", marginBottom: "var(--s-4)" }}>Send us a message</h1>
          <p className="lede" style={{ marginBottom: "var(--s-7)" }}>
            Questions about the programme, payment, future cohorts or a partnership. We reply by email, usually within
            two working days.
          </p>
        </RevealWrapper>
        <ContactForm topic={topic} />
      </div>
    </section>
  );
}
