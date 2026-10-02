// Where the "Apply" buttons go. Set NEXT_PUBLIC_APPLY_URL to your Airtable form's share link
// (see .env.example). Until it is set, buttons fall back to emailing the academy so nothing breaks.
const FALLBACK = "mailto:academy@codecraftie.com?subject=Founding%20Cohort%20Application";
export const APPLY_URL = process.env.NEXT_PUBLIC_APPLY_URL?.trim() || FALLBACK;
export const APPLY_IS_EXTERNAL = APPLY_URL.startsWith("http");
