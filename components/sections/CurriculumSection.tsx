import RevealWrapper from "@/components/RevealWrapper";

const modules = [
  { num: "01", title: "Month 1: HTML & CSS", desc: "Tools and HTML from a blank file, semantic and accessible markup, CSS, responsive layouts, and the HTML/CSS Gate before any JavaScript." },
  { num: "02", title: "Month 2: JavaScript & Git", desc: "Variables, logic, functions and the DOM, plus Git and GitHub. Your website goes live." },
  { num: "03", title: "Month 3: APIs & UI/UX", desc: "Connect to live data and handle errors. Then design thinking, accessibility and Figma basics, with a redesign project." },
  { num: "04", title: "Month 4: React & React Native", desc: "React components, state and multi-page apps, then mobile with React Native and Expo, ending in a working mobile app." },
  { num: "05", title: "Month 5: Security & AI Engineering", desc: "Web security fundamentals (OWASP Top 10, authentication, input validation), then AI-assisted engineering with review and testing." },
  { num: "06", title: "Month 6: Capstone & Career", desc: "Plan, build and present a capstone project, then prepare your CV, LinkedIn, portfolio and job or freelance search." },
];

export default function CurriculumSection() {
  return (
    <section
      className="section band-mint"
      id="curriculum"
    >
      <div className="container">
        <RevealWrapper>
          <div className="section-head">
            <h2>What you&apos;ll learn</h2>
            <p className="lede">
              Six monthly stages, each building on the last: HTML and CSS first,
              then JavaScript, APIs, mobile, security and a capstone project.
            </p>
          </div>
        </RevealWrapper>
        <RevealWrapper delay={120}>
        <ol className="curriculum-list">
          {modules.map((m) => (
            <li key={m.num}>
                <span className="num">{m.num}</span>
                <div><h3>{m.title}</h3>
                <p>{m.desc}</p></div>
            </li>
          ))}
        </ol>
        </RevealWrapper>
      </div>
    </section>
  );
}
