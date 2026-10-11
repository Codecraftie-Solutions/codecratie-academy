import Link from "next/link";
import ApplyLink from "@/components/ApplyLink";
import { Wordmark } from "@/components/Mark";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="wordmark" aria-label="Code-Craftie Academy, home">
              <Wordmark />
            </Link>
            <p>
              The training arm of{" "}
              <a href="https://codecraftie.com" style={{ textDecoration: "underline" }}>
                Code-Craftie Solutions
              </a>
              , a software studio in Lagos.
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
                <Link href="/about">About the Academy</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <a href="https://codecraftie.com">Code-Craftie Solutions</a>
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
          <span>© 2026 Code-Craftie Solutions. A business name registered with the Corporate Affairs Commission, Nigeria, BN 8701900.</span>

        </div>
      </div>
    </footer>
  );
}
