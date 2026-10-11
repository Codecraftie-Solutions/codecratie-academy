// Bank details shown in the "How to apply and pay" section.
// Set these in .env.local and in your hosting provider's environment settings (see .env.example).
// If they are empty, the section tells visitors the details are on the application form.
export const PAYMENT = {
  bankName: process.env.NEXT_PUBLIC_BANK_NAME?.trim() ?? "",
  accountName: process.env.NEXT_PUBLIC_ACCOUNT_NAME?.trim() ?? "",
  accountNumber: process.env.NEXT_PUBLIC_ACCOUNT_NUMBER?.trim() ?? "",
};
export const HAS_PAYMENT_DETAILS = Boolean(PAYMENT.bankName && PAYMENT.accountName && PAYMENT.accountNumber);

// Optional: Paystack payment pages, one per option (Paystack > Payment Pages > copy link).
// When set, step 2 offers "Pay online" first and bank transfer as the alternative.
export const PAY_LINKS: Record<string, string> = {
  Foundation: process.env.NEXT_PUBLIC_PAY_FOUNDATION_URL?.trim() ?? "",
  "Career Launch": process.env.NEXT_PUBLIC_PAY_CAREER_LAUNCH_URL?.trim() ?? "",
  "1:1 Pro": process.env.NEXT_PUBLIC_PAY_PRO_URL?.trim() ?? "",
};
export const HAS_PAY_LINKS = Object.values(PAY_LINKS).some(Boolean);

// Who the bank account belongs to, said plainly so students know where their money goes.
export const ACCOUNT_HOLDER_NOTE =
  "The account is held by Ignatius Sani, founder of Code-Craftie Solutions (CAC BN 8701900), which runs the Academy.";
