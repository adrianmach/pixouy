"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "../page.module.css";

const SHOWCASE_IMAGES = [
  "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1200&q=80",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
  "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=80",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
];

export default function Showcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const layer = trailRef.current;
    if (!section || !layer) return;

    const tiles: string[] = [...SHOWCASE_IMAGES];
    for (let n = tiles.length - 1; n > 0; n--) {
      const j = Math.floor(Math.random() * (n + 1));
      [tiles[n], tiles[j]] = [tiles[j], tiles[n]];
    }

    tiles.forEach((src) => {
      const im = new window.Image();
      im.src = src;
    });

    let last: { x: number; y: number } | null = null;
    let i = 0;

    const spawn = (clientX: number, clientY: number) => {
      const r = section.getBoundingClientRect();
      const x = clientX - r.left;
      const y = clientY - r.top;
      if (last && Math.hypot(x - last.x, y - last.y) < 90) return;
      last = { x, y };
      const tile = tiles[i++ % tiles.length];
      const el = document.createElement("div");
      el.style.cssText =
        "position:absolute;width:clamp(130px,16vw,240px);aspect-ratio:3/4;left:0;top:0;border:1px solid rgba(237,237,233,0.16);border-radius:16px;overflow:hidden;background:#0E0B09 center/cover no-repeat url('" +
        tile +
        "');filter:brightness(0.85) saturate(0.9);will-change:transform,opacity;";
      el.style.transform =
        "translate(" +
        x +
        "px," +
        y +
        "px) translate(-50%,-50%) scale(0.4) rotate(" +
        (Math.random() * 14 - 7) +
        "deg)";
      layer.appendChild(el);
      el.animate(
        [
          { transform: el.style.transform, opacity: 0 },
          {
            transform:
              "translate(" + x + "px," + y + "px) translate(-50%,-50%) scale(1) rotate(0deg)",
            opacity: 1,
            offset: 0.25,
          },
          {
            transform:
              "translate(" + x + "px," + (y - 24) + "px) translate(-50%,-50%) scale(1.02)",
            opacity: 1,
            offset: 0.7,
          },
          {
            transform:
              "translate(" + x + "px," + (y - 60) + "px) translate(-50%,-50%) scale(0.9)",
            opacity: 0,
          },
        ],
        { duration: 1300, easing: "cubic-bezier(0.22,1,0.36,1)" }
      ).onfinish = () => el.remove();
      if (layer.childElementCount > 12) layer.firstElementChild?.remove();
    };

    const onMove = (e: MouseEvent) => spawn(e.clientX, e.clientY);
    const onTouch = (e: TouchEvent) => {
      const t = e.touches[0];
      if (t) spawn(t.clientX, t.clientY);
    };

    section.addEventListener("mousemove", onMove);
    section.addEventListener("touchmove", onTouch, { passive: true });
    return () => {
      section.removeEventListener("mousemove", onMove);
      section.removeEventListener("touchmove", onTouch);
    };
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
      <div ref={trailRef} className={styles.trailLayer} aria-hidden="true" />
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
