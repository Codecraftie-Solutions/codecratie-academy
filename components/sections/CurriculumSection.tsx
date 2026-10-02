import RevealWrapper from "@/components/RevealWrapper";

const modules = [
  { num: "01", title: "Computer & Internet Foundations", desc: "How machines, networks, and the web work, and the mental models that support the rest of the course." },
  { num: "02", title: "Programming Fundamentals", desc: "Variables, logic, functions, and problem decomposition." },
  { num: "03", title: "Git & Version Control", desc: "Branches, commits, pull requests, and collaboration on GitHub." },
  { num: "04", title: "JavaScript", desc: "The language of the web, from a first script to structured application logic." },
  { num: "05", title: "Web Development", desc: "HTML, CSS, and modern layouts. Build interfaces that are fast, responsive, and accessible." },
  { num: "06", title: "APIs & Engineering Workflow", desc: "Connect to services, read documentation, handle errors, and follow a development workflow." },
  { num: "07", title: "React", desc: "Create interactive interfaces with components and state." },
  { num: "08", title: "AI-Assisted Software Engineering", desc: "Use AI to move faster while learning to review, test, debug, secure, and verify everything it produces." },
  { num: "09", title: "Capstone Project", desc: "Design, develop, and present an application, with code review and iteration along the way." },
  { num: "10", title: "Career & Professional Development", desc: "Your portfolio, your project story, and how to talk about your work with confidence." },
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
              The modules progress from computing fundamentals to a deployed,
              AI-assisted capstone project.
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
