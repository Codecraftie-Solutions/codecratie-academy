"use client";
import { useEffect, useState } from "react";

const steps = ["Draft", "Review", "Revise", "Verify"];

export default function ReviewDemo() {
  const [stage, setStage] = useState(0);
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) { setStage(3); return; }
    const t = [900, 2400, 4300].map((ms, i) => setTimeout(() => setStage(i + 1), ms));
    return () => t.forEach(clearTimeout);
  }, []);
  return (
    <figure className={`review-example demo stage-${stage}`} aria-label="Illustrative code review">
      <figcaption>
        <span>Code review</span><span>Illustrative example</span>
      </figcaption>
      <ol className="demo-steps" aria-label="Review progress">
        {steps.map((s, i) => <li key={s} className={i <= stage ? "on" : ""}>{s}</li>)}
      </ol>
      <div className="example-body">
        <p className="example-task">Loading projects from an API</p>
        <pre className="code-draft"><code>{`const response = await fetch(url);
return response.json();`}</code></pre>
        <div className="example-question reveal-stage s1">
          <strong>What if the request fails?</strong>
          <p>An AI-generated draft may leave out error handling. Check the response before reading the data.</p>
        </div>
        <pre className="example-revision reveal-stage s2"><code>{`if (!response.ok) {
  throw new Error("Request failed");
}
return response.json();`}</code></pre>
        <p className="example-check reveal-stage s3">
          <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path className="tick" d="M3 8.5l3.2 3L13 4.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" pathLength="1"/></svg>
          <span><strong>Verify the change</strong> Test a successful response and a server error. Check how the interface handles each.</span>
        </p>
      </div>
    </figure>
  );
}
