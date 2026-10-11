/** The Code-Craftie mark, shared with codecraftie.com. The hyphen takes the Academy's jade. */
export default function Mark({ size = 34 }: { size?: number }) {
  return (
    <svg className="mark" width={size} height={size} viewBox="0 0 64 64" aria-hidden="true" focusable="false">
      <path d="M42.6 18.1A20 20 0 1 0 42.6 45.9" fill="none" stroke="currentColor" strokeWidth="11" />
      <rect className="mark-dash" x="45" y="27" width="16" height="10" />
    </svg>
  );
}

export function Wordmark() {
  return (
    <>
      <Mark />
      <span>
        <b>Code-Craftie</b>
        <small>Academy</small>
      </span>
    </>
  );
}
