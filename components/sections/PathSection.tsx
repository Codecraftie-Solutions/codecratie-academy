"use client";
import { useEffect, useRef, useState } from "react";

const steps = [
  { t: "Foundations & Git", w: "Weeks 1–2", c: "var(--accent-warm)" },
  { t: "JavaScript & Web", w: "Weeks 3–4", c: "var(--dark)" },
  { t: "APIs & React", w: "Weeks 5–6", c: "var(--dark)" },
  { t: "AI-Assisted Engineering", w: "Week 7", c: "var(--accent)" },
  { t: "Capstone & Career Prep", w: "Week 8", c: "var(--ok)" },
];

// Each card draws a "snake" stroke (viewBox: tile is 0..100, connector stubs reach -17.5 and 117.5)
const FIRST = "M93 32V21Q93 7 79 7H21Q7 7 7 21V79Q7 93 21 93H79Q93 93 93 79V60Q93 50 103 50H117.5";
const IN_TOP = "M-17.5 50H-3Q7 50 7 40V21Q7 7 21 7H79Q93 7 93 21V32";
const OUT_BOTTOM = "M7 62V79Q7 93 21 93H79Q93 93 93 79V60Q93 50 103 50H117.5";
const END_BOTTOM = "M7 62V79Q7 93 21 93H79Q93 93 93 79V62";

const star = Array.from({ length: 28 }, (_, i) => {
  const a = (Math.PI * 2 * i) / 28 - Math.PI / 2, r = i % 2 ? 38 : 50;
  return `${(50 + r * Math.cos(a)).toFixed(1)},${(50 + r * Math.sin(a)).toFixed(1)}`;
}).join(" ");

const T0 = 1.0, STEP = 0.55;
const tv = (n: number) => ({ ["--t" as string]: n });

export default function PathSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) { setSeen(true); return; }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setSeen(true); io.disconnect(); }
    }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const last = steps.length - 1;
  return (
    <section className="section path" id="path">
      <div className="container">
        <h2 className="center">Career pathway</h2>
        <p className="lede center">Each stage builds on the last, from how computers work to a project you can demonstrate.</p>
      </div>
      <div className="pw-wrap" ref={ref}>
        <div className={`pw${seen ? " in" : ""}`}>
          <div className="pw-start">
            <div className="pw-node" style={tv(0)}>Apply online</div>
            <i className="pw-link" style={tv(0.2)} />
            <div className="pw-node" style={tv(0.3)}>Submit proof of payment</div>
          </div>

          <svg className="pw-fan" viewBox="0 0 60 20" preserveAspectRatio="none" aria-hidden="true" style={tv(0.6)}>
            <line x1="0" y1="10" x2="52" y2="10" className="pw-fan-line" strokeWidth="2" strokeDasharray="3 3" vectorEffect="non-scaling-stroke" />
            <path d="M50 4L60 10L50 16Z" className="pw-fan-head" />
          </svg>

          <div className="pw-path">
            <div className="pw-title">
              <h3>Software Engineering &amp; AI Foundations</h3>
              <p>8 weeks, live online, with JavaScript, React and AI-assisted practice</p>
            </div>
            <ol className="pw-row">
              {steps.map((s, i) => {
                const t = T0 + i * STEP;
                return (
                  <li key={s.t} style={{ ["--c" as string]: s.c, ...tv(t) }}>
                    <div className="pw-cell">
                      <span className="pw-tile"><span className="pw-text"><b>{s.t}</b><small>{s.w}</small></span></span>
                      <svg viewBox="-17.5 0 135 100" aria-hidden="true">
                        {i === 0 ? (
                          <path d={FIRST} pathLength={1} />
                        ) : (
                          <>
                            <path d={IN_TOP} pathLength={1} />
                            <path d={i === last ? END_BOTTOM : OUT_BOTTOM} pathLength={1} />
                          </>
                        )}
                      </svg>
                      {i === last && <i className="pw-arrow" style={tv(t + 0.45)} />}
                    </div>
                  </li>
                );
              })}
              <li className="pw-star" style={tv(T0 + steps.length * STEP + 0.1)} aria-label="Capstone project">
                <svg viewBox="0 0 100 100" aria-hidden="true"><polygon points={star} /></svg>
                <span>Capstone project</span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
