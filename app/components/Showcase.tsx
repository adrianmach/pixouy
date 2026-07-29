"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "../page.module.css";

const TILE_COUNT = 10;
const INTERVAL_MS = 6000;

function orderedTiles() {
  const tiles: string[] = [];
  for (let n = 1; n <= TILE_COUNT; n++) {
    tiles.push(`/assets/t${String(n).padStart(2, "0")}.jpg`);
  }
  return tiles;
}

function shuffle(tiles: string[]) {
  const shuffled = tiles.slice();
  for (let n = shuffled.length - 1; n > 0; n--) {
    const j = Math.floor(Math.random() * (n + 1));
    [shuffled[n], shuffled[j]] = [shuffled[j], shuffled[n]];
  }
  return shuffled;
}

export default function Showcase() {
  const [tiles, setTiles] = useState(orderedTiles);
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Shuffle only after mount: randomizing during render would produce a
    // server/client markup mismatch since SSR has no randomness source.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTiles((t) => shuffle(t));
  }, []);

  useEffect(() => {
    const reduceMotion =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const id = window.setInterval(() => {
      setActive((v) => (v + 1) % tiles.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [tiles.length]);

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
      <div className={styles.showcaseSlides} aria-hidden="true">
        {tiles.map((src, i) => (
          <div
            key={src}
            className={`${styles.showcaseSlide} ${i === active ? styles.showcaseSlideActive : ""}`}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
      </div>
      <div className={styles.showcaseOverlay} aria-hidden="true" />
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
