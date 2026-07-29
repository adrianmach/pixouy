"use client";

import { useEffect, useRef, useState } from "react";

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

export default function Counter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const startedRef = useRef(false);
  const [display, setDisplay] = useState(() => value.replace(/\d/g, "0"));

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = [...value.matchAll(/\d+/g)].map((m) => ({
      target: parseInt(m[0], 10),
      index: m.index ?? 0,
      length: m[0].length,
    }));

    const render = (progress: number) => {
      let out = value;
      for (let i = targets.length - 1; i >= 0; i--) {
        const t = targets[i];
        const current = Math.round(t.target * progress);
        out = out.slice(0, t.index) + String(current) + out.slice(t.index + t.length);
      }
      setDisplay(out);
    };

    const reduceMotion =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const run = () => {
      if (startedRef.current) return;
      startedRef.current = true;

      if (reduceMotion) {
        render(1);
        return;
      }

      const duration = 1500;
      const start = performance.now();
      const step = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        render(easeOutCubic(progress));
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    if (!("IntersectionObserver" in window)) {
      run();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) run();
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return <span ref={ref}>{display}</span>;
}
