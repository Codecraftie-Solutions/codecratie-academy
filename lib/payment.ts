// Bank details shown in the "How to apply and pay" section.
// Set these in .env.local and in your hosting provider's environment settings (see .env.example).
// If they are empty, the section tells visitors the details are on the application form.
export const PAYMENT = {
  bankName: process.env.NEXT_PUBLIC_BANK_NAME?.trim() ?? "",
  accountName: process.env.NEXT_PUBLIC_ACCOUNT_NAME?.trim() ?? "",
  accountNumber: process.env.NEXT_PUBLIC_ACCOUNT_NUMBER?.trim() ?? "",
};
export const HAS_PAYMENT_DETAILS = Boolean(PAYMENT.bankName && PAYMENT.accountName && PAYMENT.accountNumber);
