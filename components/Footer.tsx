import Link from "next/link";
import ApplyLink from "@/components/ApplyLink";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="wordmark">
              <span className="mark">&lt;/&gt;</span>CodeCraftie
            </Link>
            <p>
              A technology and education company. Learn. Build. Create.
              Academy program: Software Engineering & AI Foundations.
            </p>
          </div>
          <div>
            <h4>Academy</h4>
            <ul>
              <li>
                <Link href="/program">SE & AI Foundations</Link>
              </li>
              <li>
                <Link href="/#curriculum">Curriculum</Link>
              </li>
              <li>
                <Link href="/#faq">FAQ</Link>
              </li>
              <li>
                <ApplyLink>Apply now</ApplyLink>
              </li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li>
                <Link href="/about">About CodeCraftie</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Program inquiries</h4>
            <ul>
              <li>
                <a href="mailto:academy@codecraftie.com?subject=Keep%20me%20updated">
                  Future cohort updates
                </a>
              </li>
              <li>
                <a href="mailto:academy@codecraftie.com?subject=Youth%20programs">
                  Youth programs (ages 7–18): interest list
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 CodeCraftie Solutions. Learn. Build. Create.</span>

        </div>
      </div>
    </footer>
  );
}
