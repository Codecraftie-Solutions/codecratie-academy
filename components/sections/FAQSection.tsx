"use client";

import { useState } from "react";
import RevealWrapper from "@/components/RevealWrapper";

const faqs = [
  {
    q: "Do I need any coding experience?",
    a: "None. The program assumes zero experience and starts with how computers and the internet work. If you can use a computer, you can start here.",
  },
  {
    q: "Will I be a software engineer after 8 weeks?",
    a: "No. Eight weeks is enough to establish a foundation, practise with development tools and AI, and complete a capstone project. Becoming a software engineer takes continued study and project work after the program.",
  },
  {
    q: "How much time does the program take each week?",
    a: "Two live sessions per week, plus about 3–5 hours of independent work outside the sessions. Each week includes a focused assignment, a practical exercise, and a reflection or check-in.",
  },
  {
    q: "How is AI used in the curriculum?",
    a: "AI tools are used to draft and explore possible solutions. Every module also requires you to review, test, debug, secure, and verify the output.",
  },
  {
    q: "What does the program cost?",
    a: "There are three options: Foundation at ₦80,000, Career Launch at ₦150,000, and 1:1 Pro at ₦300,000. The Program details section shows what each includes. You choose your option and upload your proof of payment on the application form.",
  },
  {
    q: "How do I pay?",
    a: "Pay by bank transfer to the account shown in the How to apply and pay section and on the application form. Then upload a screenshot or PDF of your receipt on the form so we can confirm your payment.",
  },
  {
    q: "Who is this program not for?",
    a: "It is not for anyone looking for a certificate without doing the work, a guaranteed job, or a quick route to income. The program requires regular practice, project work, and revision.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      className="section band-white"
      id="faq"
    >
      <div className="container" style={{ maxWidth: 760 }}>
        <RevealWrapper>
          <div className="section-head">
            <h2>Frequently asked questions</h2>
          </div>
        </RevealWrapper>
        {faqs.map((faq, i) => (
          <RevealWrapper key={i}>
            <div className={`faq-item${openIndex === i ? " open" : ""}`}>
              <button
                className="faq-q"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
              >
                {faq.q}
                <span className="chev">▾</span>
              </button>
              <div
                id={`faq-answer-${i}`}
                className="faq-a"
              >
                <div className="faq-a-inner"><p>{faq.a}</p></div>
              </div>
            </div>
          </RevealWrapper>
        ))}
      </div>
    </section>
  );
}
