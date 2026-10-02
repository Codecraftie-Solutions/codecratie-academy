import Link from "next/link";
import RevealWrapper from "@/components/RevealWrapper";
import ApplyLink from "@/components/ApplyLink";

const curriculumDetails = [
  {
    week: "Week 1–2",
    title: "Computer & Internet Foundations + Programming Fundamentals",
    desc: "How machines work, how the internet moves data, and your first programs: variables, logic, functions, and problem decomposition.",
  },
  {
    week: "Week 3",
    title: "Git & Version Control",
    desc: "Branches, commits, pull requests, and common collaboration workflows.",
  },
  {
    week: "Week 4",
    title: "JavaScript & Web Development",
    desc: "The language of the web, DOM manipulation, and building responsive, accessible interfaces with HTML and CSS.",
  },
  {
    week: "Week 5",
    title: "APIs & Engineering Workflow",
    desc: "Connect to services, read documentation, handle errors, and work through a development workflow.",
  },
  {
    week: "Week 6",
    title: "React",
    desc: "Component-based architecture, state management, and building interactive modern interfaces.",
  },
  {
    week: "Week 7",
    title: "AI-Assisted Engineering + Capstone Build",
    desc: "Use AI tools to accelerate development while reviewing, testing, and verifying every output. Begin your capstone.",
  },
  {
    week: "Week 8",
    title: "Capstone Polish, Demo & Career Prep",
    desc: "Finish your project, present it, and prepare your portfolio and interview narrative.",
  },
];

export default function ProgramPage() {
  return (
    <>
      <section
        className="section"
        style={{ paddingTop: "calc(var(--nav-h) + var(--s-9))" }}
      >
        <div className="container">
          <RevealWrapper>
            <div className="section-head">
              
              <h1 style={{ fontSize: "var(--fs-h2)" }}>
                Software Engineering & AI Foundations
              </h1>
              <p className="lede">
                An 8-week live online program for complete beginners who want to
                understand technology, build real software, and learn to work
                effectively with AI.
              </p>
            </div>
          </RevealWrapper>

          <div className="grid-2" style={{ marginBottom: "var(--s-8)" }}>
            <RevealWrapper>
              <div className="card">
                <h3>Who it&apos;s for</h3>
                <ul
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "0.9rem",
                    lineHeight: 1.8,
                    paddingLeft: 18,
                  }}
                >
                  <li>Complete beginners with zero coding experience</li>
                  <li>University students and recent graduates</li>
                  <li>Career switchers exploring technology</li>
                  <li>Young professionals wanting practical skills</li>
                  <li>Anyone interested in AI and modern software</li>
                </ul>
              </div>
            </RevealWrapper>
            <RevealWrapper>
              <div className="card">
                <h3>Who it&apos;s not for</h3>
                <ul
                  style={{
                    color: "var(--text-muted)",
                    fontSize: "0.9rem",
                    lineHeight: 1.8,
                    paddingLeft: 18,
                  }}
                >
                  <li>People seeking a certificate without doing the work</li>
                  <li>Anyone expecting a guaranteed job offer</li>
                  <li>Those looking for &ldquo;get rich in tech&rdquo; shortcuts</li>
                  <li>Experienced developers (this is a foundations program)</li>
                </ul>
              </div>
            </RevealWrapper>
          </div>

          <RevealWrapper>
            <h2 style={{ marginBottom: "var(--s-5)" }}>Weekly structure</h2>
          </RevealWrapper>
          <div style={{ display: "grid", gap: "var(--s-4)" }}>
            {curriculumDetails.map((item) => (
              <RevealWrapper key={item.week}>
                <div className="card program-week">
                  <span
                    className="mono"
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--accent-text)",
                      marginTop: 4,
                    }}
                  >
                    {item.week}
                  </span>
                  <div>
                    <strong style={{ display: "block", marginBottom: 6 }}>
                      {item.title}
                    </strong>
                    <p style={{ margin: 0 }}>{item.desc}</p>
                  </div>
                </div>
              </RevealWrapper>
            ))}
          </div>

          <div style={{ marginTop: "var(--s-8)", textAlign: "center" }}>
            <RevealWrapper>
              <h2 style={{ maxWidth: "24ch", margin: "0 auto var(--s-4)" }}>
                Founding cohort details
              </h2>
              <ApplyLink
                className="btn btn-primary"
                style={{ fontSize: "1rem", padding: "16px 34px" }}
              >
                Apply now
              </ApplyLink>
            </RevealWrapper>
          </div>
        </div>
      </section>
    </>
  );
}
