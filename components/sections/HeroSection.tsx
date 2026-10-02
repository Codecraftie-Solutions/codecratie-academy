import Link from "next/link";
import ApplyLink from "@/components/ApplyLink";
import ReviewDemo from "@/components/ReviewDemo";

const facts = [
  { label: "Live online", d: '<rect x="6" y="10" width="36" height="24" rx="4"/><path d="M2 40h44"/>' },
  { label: "8 weeks", d: '<rect x="8" y="10" width="32" height="30" rx="5"/><path d="M8 20h32M16 6v8M32 6v8"/>' },
  { label: "2 live sessions per week", d: '<circle cx="24" cy="24" r="17"/><path d="M24 14v11l7 5"/>' },
  { label: "Capstone project", d: '<rect x="9" y="6" width="30" height="36" rx="5"/><path d="M16 17l3 3 5-6M16 31h16"/>' },
];

export default function HeroSection() {
  return (
    <section className="hero" id="top">
      <div className="container">
        <h1>Learn to Think.<br />Learn to Build.</h1>
        <p className="lede">Software Engineering &amp; AI Foundations is an 8-week live online program for beginners. Study programming fundamentals, build a project, and learn to check the code you write with AI.</p>
        <ul className="hero-facts">
          {facts.map((f) => (
            <li key={f.label}>
              <svg viewBox="0 0 48 48" width="56" height="56" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" dangerouslySetInnerHTML={{ __html: f.d }} />
              <span>{f.label}</span>
            </li>
          ))}
        </ul>
        <div className="hero-actions">
          <ApplyLink className="btn btn-primary">Apply now</ApplyLink>
          <Link href="/program" className="btn btn-ghost">Explore the program</Link>
        </div>
        <div className="hero-stage"><ReviewDemo /></div>
      </div>
    </section>
  );
}
