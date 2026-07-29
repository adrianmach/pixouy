"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "../page.module.css";

const INTERVAL_MS = 6000;

const IMAGES = [
  "https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&q=80",
  "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=1200&q=80",
  "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
];

export default function Showcase() {
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const reduceMotion =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const id = window.setInterval(() => {
      setActive((v) => (v + 1) % IMAGES.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, []);

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
    <section id="showcase" ref={sectionRef} className={styles.showcaseSection}>
      <div className={styles.showcaseImages} aria-hidden="true">
        {IMAGES.map((src, i) => (
          // eslint-disable-next-line @next/next/no-img-element -- necesita <img> nativo para el crossfade por opacidad
          <img
            key={src}
            src={src}
            alt=""
            className={`${styles.showcaseSlide} ${i === active ? styles.showcaseSlideActive : ""}`}
          />
        ))}
      </div>
      <Image
        src="/assets/pixo-logo-transparent.png"
        alt="Pixo Design"
        width={1660}
        height={948}
        className={styles.showcaseLogo}
        sizes="(max-width: 900px) 70vw, 640px"
      />
    </section>
  );
}
