import type { ElementType, ReactNode, CSSProperties } from "react";
import styles from "../page.module.css";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  className?: string;
};

// Content stays readable without JavaScript. Supported browsers animate on entry.
export default function Reveal({
  children,
  as: As = "div",
  delay = 0,
  className = "",
}: RevealProps) {
  return (
    <As
      className={`${styles.reveal} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </As>
  );
}
