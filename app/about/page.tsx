import { pageMetadata } from "@/lib/seo";
import RevealWrapper from "@/components/RevealWrapper";

export const metadata = pageMetadata('About CodeCraftie Academy', 'Learn about CodeCraftie Academy and our practical approach to teaching software engineering, problem solving, and working effectively with AI.', '/about');

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
            Code-Craftie Academy is the training arm of{" "}
            <a href="https://codecraftie.com" style={{ textDecoration: "underline" }}>
              Code-Craftie Solutions
            </a>
            , a software studio in Lagos that builds and runs production software
            for businesses. We teach beginners how software is designed, tested and
            maintained, the way we build it ourselves.
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
              Software Engineering &amp; AI Foundations is our first programme.
              Next, we plan to add more advanced tracks and technology education
              for ages 7–18. Throughout, students learn from engineers who build
              and run real products, such as CatalogFlow.
            </p>
          </div>
        </RevealWrapper>

      </div>
    </section>
  );
}
