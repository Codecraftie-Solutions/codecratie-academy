import RevealWrapper from "@/components/RevealWrapper";

export default function ContactPage() {
  return (
    <section
      className="section"
      style={{ paddingTop: "calc(var(--nav-h) + var(--s-9))" }}
    >
      <div className="container" style={{ maxWidth: 640 }}>
        <RevealWrapper>
          
          <h1 style={{ fontSize: "var(--fs-h2)", marginBottom: "var(--s-5)" }}>
            Get in touch
          </h1>
          <p className="lede" style={{ marginBottom: "var(--s-6)" }}>
            Questions about the program, partnerships, or future cohorts? We&apos;d
            Email the relevant address below.
          </p>
        </RevealWrapper>

        <RevealWrapper>
          <div className="card" style={{ marginBottom: "var(--s-4)" }}>
            <h3>Academy inquiries</h3>
            <p style={{ marginBottom: "var(--s-3)" }}>
              Applications, curriculum questions, and cohort updates:
            </p>
            <a
              href="mailto:academy@codecraftie.com"
              className="btn btn-primary btn-sm"
            >
              academy@codecraftie.com
            </a>
          </div>
        </RevealWrapper>

        <RevealWrapper>
          <div className="card" style={{ marginBottom: "var(--s-4)" }}>
            <h3>General inquiries</h3>
            <p style={{ marginBottom: "var(--s-3)" }}>
              Partnerships, press, and company questions:
            </p>
            <a
              href="mailto:hello@codecraftie.com"
              className="btn btn-ghost btn-sm"
            >
              hello@codecraftie.com
            </a>
          </div>
        </RevealWrapper>

      </div>
    </section>
  );
}
