import RevealWrapper from "@/components/RevealWrapper";
import ApplyLink from "@/components/ApplyLink";
import { PAYMENT, HAS_PAYMENT_DETAILS, PAY_LINKS, HAS_PAY_LINKS, ACCOUNT_HOLDER_NOTE } from "@/lib/payment";
import { tiers } from "@/lib/offers";

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
              <h3>2. {HAS_PAY_LINKS ? "Pay online or by transfer" : "Pay by bank transfer"}</h3>
              {HAS_PAY_LINKS && (
                <>
                  <p>Pay securely by card, bank transfer or USSD through Paystack. You get a receipt by email straight away.</p>
                  <ul className="pay-links">
                    {tiers.filter((t) => PAY_LINKS[t.name]).map((t) => (
                      <li key={t.name}>
                        <a className="btn btn-primary btn-sm" href={PAY_LINKS[t.name]} target="_blank" rel="noopener noreferrer">
                          Pay {t.price}: {t.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </>
              )}
              {HAS_PAYMENT_DETAILS ? (
                <>
                  <p>{HAS_PAY_LINKS ? "Or transfer" : "Transfer"} the fee for your option to this account, and use your full name as the payment reference.</p>
                  <ul className="pay-details">
                    <li><span>Bank</span> {PAYMENT.bankName}</li>
                    <li><span>Account name</span> {PAYMENT.accountName}</li>
                    <li><span>Account number</span> {PAYMENT.accountNumber}</li>
                  </ul>
                  <p className="pay-note">{ACCOUNT_HOLDER_NOTE}</p>
                </>
              ) : HAS_PAY_LINKS ? null : (
                <p>Transfer the fee for your option to the account shown on the application form, and use your full name as the payment reference.</p>
              )}
            </div>
            <div className="card">
              <h3>3. Upload your proof of payment</h3>
              <p>Attach your Paystack receipt or a screenshot of your transfer on the same form, then submit. We confirm your payment and email you.</p>
            </div>
          </div>
          <div className="hero-actions" style={{ marginTop: "var(--s-6)" }}>
            <ApplyLink className="btn btn-primary">Apply now</ApplyLink>
          </div>
          <p className="detail-note center">{HAS_PAY_LINKS ? "Only pay through the Paystack links or the account shown on this site or on the official application form." : "Only pay into the account shown on this site or on the official application form."}</p>
        </RevealWrapper>
      </div>
    </section>
  );
}
