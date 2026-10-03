import RevealWrapper from "@/components/RevealWrapper";
import ApplyLink from "@/components/ApplyLink";
import { PAYMENT, HAS_PAYMENT_DETAILS } from "@/lib/payment";

export default function HowToApplySection() {
  return (
    <section className="section band-mint" id="how-to-apply">
      <div className="container">
        <RevealWrapper>
          <div className="section-head">
            <h2>How to apply and pay</h2>
            <p className="lede">Three steps. Your place is confirmed once we have checked your payment.</p>
          </div>
        </RevealWrapper>
        <RevealWrapper delay={120}>
          <div className="grid-3">
            <div className="card">
              <h3>1. Fill in the application form</h3>
              <p>Tell us about yourself and choose Foundation, Career Launch or 1:1 Pro.</p>
            </div>
            <div className="card">
              <h3>2. Pay by bank transfer</h3>
              {HAS_PAYMENT_DETAILS ? (
                <>
                  <p>Transfer the fee for your option to this account, and use your full name as the payment reference.</p>
                  <ul className="pay-details">
                    <li><span>Bank</span> {PAYMENT.bankName}</li>
                    <li><span>Account name</span> {PAYMENT.accountName}</li>
                    <li><span>Account number</span> {PAYMENT.accountNumber}</li>
                  </ul>
                </>
              ) : (
                <p>Transfer the fee for your option to the account shown on the application form, and use your full name as the payment reference.</p>
              )}
            </div>
            <div className="card">
              <h3>3. Upload your proof of payment</h3>
              <p>Attach a screenshot or PDF of your transfer receipt on the same form, then submit. We confirm your payment and email you.</p>
            </div>
          </div>
          <div className="hero-actions" style={{ marginTop: "var(--s-6)" }}>
            <ApplyLink className="btn btn-primary">Apply now</ApplyLink>
          </div>
          <p className="detail-note center">Only pay into the account shown on this site or on the official application form.</p>
        </RevealWrapper>
      </div>
    </section>
  );
}
