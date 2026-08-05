"use client";

import { useEffect, useRef } from "react";
import styles from "../page.module.css";

const SHOWCASE_IMAGES = [
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&q=80",
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&q=80",
  "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=1200&q=80",
  "https://images.unsplash.com/photo-1550439062-609e1531270e?w=1200&q=80",
];

export default function Showcase() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const canHover =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!canHover) return;

    const cursor = document.createElement("div");
    cursor.style.cssText =
      "position:fixed;top:0;left:0;width:40px;height:40px;border-radius:50%;background:#fff;" +
      "pointer-events:none;z-index:9999;mix-blend-mode:difference;" +
      "transition:transform 150ms ease-out,opacity 150ms;opacity:0;" +
      "transform:translate(-50%,-50%) scale(0.5);";
    document.body.appendChild(cursor);

    const onMove = (e: MouseEvent) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };
    const onEnter = () => {
      cursor.style.opacity = "1";
      cursor.style.transform = "translate(-50%,-50%) scale(1)";
      section.style.cursor = "none";
    };
    const onLeave = () => {
      cursor.style.opacity = "0";
      cursor.style.transform = "translate(-50%,-50%) scale(0.5)";
      section.style.cursor = "auto";
    };

    document.addEventListener("mousemove", onMove);
    section.addEventListener("mouseenter", onEnter);
    section.addEventListener("mouseleave", onLeave);

    return () => {
      document.removeEventListener("mousemove", onMove);
      section.removeEventListener("mouseenter", onEnter);
      section.removeEventListener("mouseleave", onLeave);
      cursor.remove();
    };
  }, []);

  return (
    <section id="trabajos" ref={sectionRef} className={styles.showcaseSection}>
      <div className={styles.showcaseBg} aria-hidden="true">
        {SHOWCASE_IMAGES.map((src, i) => (
          <div
            key={src}
            className={styles.showcaseBgImg}
            style={{
              backgroundImage: `url(${src})`,
              animationDelay: `${i * 4.5}s`,
            }}
          />
        ))}
      </div>
      <h2 className={styles.showcaseLogo}>Pixo Design</h2>
    </section>
  );
}
