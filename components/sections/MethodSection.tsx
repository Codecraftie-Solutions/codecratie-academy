"use client";
import { useState } from "react";

const steps = [
  { tab: "Explain", glyph: "?", title: "Start with the mental model", text: "Each concept begins with a plain-language mental model, so you understand why something works before you write code." },
  { tab: "Demonstrate", glyph: "▶", title: "Watch it built, live", text: "Your instructor builds a small example while thinking aloud, showing how an engineer approaches the problem." },
  { tab: "Practice", glyph: "{ }", title: "Build it yourself", text: "You build the concept on your own. Instructors ask questions before giving answers and never type your solution for you." },
  { tab: "Reflect", glyph: "↺", title: "Explain what you built", text: "Say what you built, what broke, and how you fixed it. Instructors review your work, and you revise it before moving on." },
];

export default function MethodSection() {
  const [i, setI] = useState(0);
  const s = steps[i];
  return (
    <section className="section band-navy" id="method">
      <div className="container">
        <h2 className="center">How the program works</h2>
        <p className="lede center on-navy">Learn. Build. Get feedback. Improve. Every concept follows the same four steps.</p>
        <div className="tabs">
          <div className="tab-list" role="tablist">
            {steps.map((t, n) => (
              <button key={t.tab} role="tab" aria-selected={n === i} aria-controls="method-panel" className={n === i ? "on" : ""} onClick={() => setI(n)}>{t.tab}</button>
            ))}
          </div>
          <div className="tab-panel" id="method-panel" role="tabpanel">
            <div className="tab-art" aria-hidden="true">{s.glyph}</div>
            <div><h3>{s.title}</h3><p>{s.text}</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}
