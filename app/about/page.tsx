import RevealWrapper from "@/components/RevealWrapper";

export default function AboutPage() {
  return (
    <section
      className="section"
      style={{ paddingTop: "calc(var(--nav-h) + var(--s-9))" }}
    >
      <div className="container" style={{ maxWidth: 720 }}>
        <RevealWrapper>
          
          <h1 style={{ fontSize: "var(--fs-h2)", marginBottom: "var(--s-5)" }}>
            Learn to Think. Learn to Build.
          </h1>
          <p className="lede" style={{ marginBottom: "var(--s-5)" }}>
            CodeCraftie Solutions is a technology and education company. We
            started with education to give beginners a stronger understanding of
            how software is designed, tested, and maintained.
          </p>
        </RevealWrapper>

        <RevealWrapper>
          <div style={{ marginBottom: "var(--s-7)" }}>
            <h3>Our philosophy</h3>
            <p style={{ color: "var(--text-muted)", lineHeight: 1.8 }}>
              Technology education is flooded with shortcuts, hype, and promises
              that don&apos;t hold up. We take a different approach: rigorous
              fundamentals, honest communication about what AI can and cannot do,
              and project work that students can explain and maintain.
            </p>
          </div>
        </RevealWrapper>

        <RevealWrapper>
          <div style={{ marginBottom: "var(--s-7)" }}>
            <h3>Where we&apos;re headed</h3>
            <p style={{ color: "var(--text-muted)", lineHeight: 1.8 }}>
              CodeCraftie Academy is our first product, but not our last. Over
              time, CodeCraftie Solutions will expand into software products, AI
              solutions, and additional education programs, including technology
              education for ages 7–18. This website is the foundation for that
              future.
            </p>
          </div>
        </RevealWrapper>

      </div>
    </section>
  );
}
