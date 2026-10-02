import RevealWrapper from "@/components/RevealWrapper";
export default function AIPhilosophySection() {
  return (
    <section className="section ai-section">
      <div className="container">
        <h2>AI-assisted engineering</h2>
        <RevealWrapper>
          <div className="split-card">
            <div className="split-art" aria-hidden="true">&lt;/&gt;</div>
            <div className="split-text">
              <h3>You remain responsible for the code.</h3>
              <p>Use AI to explore approaches and draft a solution. Then read the changes, check assumptions, and test behavior, including failure cases. Debugging and security review are part of that work.</p>
              <p>A working result is only part of the task. You also need to explain why the solution works and where it might fail.</p>
              <p>In the capstone, a small working application you fully understand beats a sophisticated AI-generated one you cannot explain.</p>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
