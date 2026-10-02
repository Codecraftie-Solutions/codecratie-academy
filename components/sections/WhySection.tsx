import RevealWrapper from "@/components/RevealWrapper";
export default function WhySection() {
  return (
    <section className="section band-navy" id="why">
      <div className="container narrow center">
        <RevealWrapper>
          <h2>Understanding comes before tools</h2>
          <p>It is possible to follow a tutorial and still be unsure what to do when the code breaks. CodeCraftie starts with the fundamentals so you can reason through a problem, explain your decisions, and revise your work.</p>
          <p>The program is for beginners, including university students, career switchers, and professionals exploring software development. Expect regular practice and project work. Eight weeks provides a foundation; developing proficiency takes continued work.</p>
        </RevealWrapper>
      </div>
    </section>
  );
}
