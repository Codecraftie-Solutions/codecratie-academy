import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import RevealWrapper from "@/components/RevealWrapper";
import ApplyLink from "@/components/ApplyLink";

const curriculumDetails = [
  {
    week: "Month 1 · Weeks 1–4",
    title: "HTML & CSS, then the Gate",
    desc: "Tools and the web, semantic HTML, CSS colour and layout, responsive design with Flexbox and Grid. Month 1 ends with the HTML/CSS Gate: you build and explain a responsive site before any JavaScript.",
  },
  {
    week: "Month 2 · Weeks 5–8",
    title: "JavaScript, Git & GitHub",
    desc: "Variables, logic, functions and the DOM to make your pages interactive. Git and GitHub from Week 6, when submissions move to GitHub. Week 8 is a checkpoint project.",
  },
  {
    week: "Month 3 · Weeks 9–12",
    title: "APIs & UI/UX",
    desc: "Fetch live data, handle errors and build forms that send data. Then UI/UX: hierarchy, accessibility and Figma basics, with a redesign project.",
  },
  {
    week: "Month 4 · Weeks 13–16",
    title: "React & React Native",
    desc: "React components, props and state, then a React app. Mobile with React Native and Expo, ending in a working app that uses an API.",
  },
  {
    week: "Month 5 · Weeks 17–20",
    title: "Security & AI-Assisted Engineering",
    desc: "OWASP Top 10, authentication and secrets, then secure your own project. Use AI tools while reviewing, testing and verifying every output. Career Launch starts in Week 20.",
  },
  {
    week: "Month 6 · Weeks 21–24",
    title: "Capstone & Career",
    desc: "Plan, build and present your capstone project. Prepare your CV, LinkedIn, GitHub portfolio and your job or freelance search.",
  },
];

export const metadata = pageMetadata('Software Engineering & AI Foundations Program', 'Explore our beginner program: HTML and CSS, JavaScript, Git, APIs, UI/UX, React Native, security, AI-assisted engineering and a capstone project over six months.', '/program');

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
                A live online program for complete beginners. Start with the 8-week Foundation, or stay six months to master HTML, CSS, JavaScript, APIs, UI/UX, React Native, security and AI-assisted engineering.
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
                  <li>Complete beginners, including people new to computers</li>
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
                      color: "var(--accent-deep)",
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
