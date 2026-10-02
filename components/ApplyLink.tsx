import type { CSSProperties, ReactNode } from "react";
import { APPLY_URL, APPLY_IS_EXTERNAL } from "@/lib/config";

type Props = { className?: string; style?: CSSProperties; onClick?: () => void; children: ReactNode };

export default function ApplyLink({ className, style, onClick, children }: Props) {
  return (
    <a
      href={APPLY_URL}
      className={className}
      style={style}
      onClick={onClick}
      {...(APPLY_IS_EXTERNAL ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
