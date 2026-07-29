"use client";

import { useEffect, useRef } from "react";
import type { ElementType, ReactNode } from "react";
import styles from "../page.module.css";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  className?: string;
};

export default function Reveal({ children, as: As = "div", delay = 0, className = "" }: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      el.classList.add(styles.visible);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        const r = entry.target.getBoundingClientRect();
        const vh = window.innerHeight || document.documentElement.clientHeight;
        if (r.top < vh * 0.96 && r.bottom > vh * 0.02) {
          el.classList.add(styles.visible);
        } else {
          el.classList.remove(styles.visible);
        }
      },
      { threshold: [0, 0.14, 0.5] }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <As
      ref={ref}
      className={`${styles.reveal} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </As>
  );
}
