// The Academy's email address. Override with NEXT_PUBLIC_ACADEMY_EMAIL if it changes.
export const ACADEMY_EMAIL = process.env.NEXT_PUBLIC_ACADEMY_EMAIL?.trim() || "academy@codecraftie.com";

// Where the "Apply" buttons go. Set NEXT_PUBLIC_APPLY_URL to your Airtable form's share link
// (see .env.example). Until it is set, buttons fall back to emailing the academy so nothing breaks.
const FALLBACK = "/contact?topic=question";
export const APPLY_URL = process.env.NEXT_PUBLIC_APPLY_URL?.trim() || FALLBACK;
export const APPLY_IS_EXTERNAL = APPLY_URL.startsWith("http");
