import RevealWrapper from "@/components/RevealWrapper";

const modules = [
  { num: "01", title: "Computer & Internet Foundations", desc: "How machines, networks, and the web work, and the mental models that support the rest of the course." },
  { num: "02", title: "HTML", desc: "Structure content with semantic, accessible HTML, written from a blank file." },
  { num: "03", title: "CSS & Responsive Design", desc: "Colour, type, the box model, and layouts with Flexbox and Grid that work on every screen." },
  { num: "04", title: "The HTML/CSS Gate", desc: "Before any JavaScript, you build a responsive website on your own and explain every line of it." },
  { num: "05", title: "Git & Version Control", desc: "Commits, branches, pull requests, and code review on GitHub. Your website goes live." },
  { num: "06", title: "JavaScript", desc: "Variables, logic, functions, and the DOM, used to make your own pages interactive." },
  { num: "07", title: "APIs & Engineering Workflow", desc: "Connect to services, read documentation, handle errors, and follow a development workflow." },
  { num: "08", title: "AI-Assisted Software Engineering", desc: "Use AI to move faster while learning to review, test, debug, secure, and verify everything it produces. Plus a first look at React." },
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
              The modules progress from how the web works, through HTML, CSS
              and JavaScript, to a deployed, AI-assisted capstone project.
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
