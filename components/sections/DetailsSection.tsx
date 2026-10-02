import RevealWrapper from "@/components/RevealWrapper";
import { tiers } from "@/lib/offers";

export default function DetailsSection() {
  return (
    <section className="section band-white" id="details">
      <div className="container">
        <RevealWrapper>
          <div className="section-head">
            <h2>Program details</h2>
            <p className="lede">8 weeks, 16 live sessions, online, for complete beginners. Choose the level of support that fits you.</p>
          </div>
        </RevealWrapper>
        <RevealWrapper delay={120}>
          <div className="grid-3">
            {tiers.map((t) => (
              <div className={`card tier${t.featured ? " featured" : ""}`} key={t.name}>
                <h3>{t.name}</h3>
                <p className="price">{t.price}</p>
                <p className="tier-pos">{t.positioning}</p>
                {t.lead && <p className="tier-lead">{t.lead}</p>}
                <ul>
                  {t.items.map((i) => <li key={i}>{i}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <div className="grid-2" style={{ marginTop: "var(--s-5)" }}>
            <div className="card">
              <h3>Your time</h3>
              <p>Two live sessions a week, plus about 3–5 hours of independent work outside the sessions. Each week includes a focused assignment and a reflection or check-in.</p>
            </div>
            <div className="card">
              <h3>A weekly readiness check</h3>
              <p>Each week your instructor reviews your work and gives you an honest status: ready to advance, needs reinforcement with targeted practice, or not ready, which means revisiting the prerequisites first.</p>
            </div>
          </div>
          <p className="detail-note">We do not promise jobs, clients, or income. We commit to training, reviews, feedback, practical deliverables, support, and accountability. You choose your option and upload your proof of payment on the application form.</p>
        </RevealWrapper>
      </div>
    </section>
  );
}
