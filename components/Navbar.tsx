"use client";
import { useState } from "react";
import Link from "next/link";
import ApplyLink from "@/components/ApplyLink";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="nav">
      <div className="nav-inner">
        <Link href="/" className="wordmark" onClick={close}><span className="mark">&lt;/&gt;</span>CodeCraftie</Link>
        <nav id="primary-navigation" className={`nav-links${open ? " open" : ""}`}>
          <Link href="/program" onClick={close}>Program</Link>
          <Link href="/#curriculum" onClick={close}>Curriculum</Link>
          <Link href="/about" onClick={close}>About</Link>
          <Link href="/contact" onClick={close}>Contact</Link>
          <Link href="/#faq" onClick={close}>FAQ</Link>
        </nav>
        <div className="nav-cta">
          <ApplyLink className="btn btn-primary btn-sm">Apply now</ApplyLink>
          <button className="nav-toggle" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(!open)}>
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
