import RevealWrapper from "@/components/RevealWrapper";
import ApplyLink from "@/components/ApplyLink";
export default function FinalCTASection() {
  return (
    <section className="section" id="apply">
      <div className="container">
        <RevealWrapper>
          <div className="cta-banner">
            <h2>Ready to take the next step?</h2>
            <p>Complete the application form, choose your option, and upload your proof of payment to apply for Software Engineering &amp; AI Foundations.</p>
            <div className="hero-actions">
              <ApplyLink className="btn btn-navy">Apply now</ApplyLink>
              <a href="/program" className="btn btn-navy">Explore the program</a>
            </div>
            <small>Opens the application form in a new tab. Questions? Email academy@codecraftie.com.</small>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
