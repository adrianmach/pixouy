import type { ElementType, ReactNode, CSSProperties } from "react";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  className?: string;
};

// HomepageMotion progressively enhances these server-rendered elements.
export default function Reveal({
  children,
  as: As = "div",
  delay = 0,
  className = "",
}: RevealProps) {
  return (
    <As
      className={className}
      data-reveal=""
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </As>
  );
}
