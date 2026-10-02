import RevealWrapper from "@/components/RevealWrapper";

const beliefs = [
  { t: "Understanding over memorization", d: "We teach mental models, not syntax alone, so you can reason through problems you have not seen before." },
  { t: "Building over consuming", d: "You learn by creating and practising, not only by watching." },
  { t: "Practice over promises", d: "We make no unrealistic career claims. You get structured practice and honest feedback." },
  { t: "Honest progress", d: "We tell you where you actually are and what comes next." },
];

export default function PrinciplesSection() {
  return (
    <section className="section band-navy" id="principles">
      <div className="container">
        <RevealWrapper>
          <h2 className="center">What we believe</h2>
        </RevealWrapper>
        <RevealWrapper delay={120}>
          <div className="grid-2" style={{ marginTop: "var(--s-7)" }}>
            {beliefs.map((b) => (
              <div className="belief" key={b.t}>
                <h3>{b.t}</h3>
                <p>{b.d}</p>
              </div>
            ))}
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
