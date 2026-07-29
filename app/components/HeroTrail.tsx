"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "../page.module.css";

const TILE_COUNT = 10;

export default function HeroTrail() {
  const heroRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const layer = trailRef.current;
    if (!hero || !layer) return;

    const tiles: string[] = [];
    for (let n = 1; n <= TILE_COUNT; n++) {
      tiles.push(`/assets/t${String(n).padStart(2, "0")}.jpg`);
    }
    for (let n = tiles.length - 1; n > 0; n--) {
      const j = Math.floor(Math.random() * (n + 1));
      [tiles[n], tiles[j]] = [tiles[j], tiles[n]];
    }

    // se precargan solo las primeras; el resto se carga a medida que aparecen
    tiles.slice(0, 4).forEach((src) => {
      const im = new window.Image();
      im.src = src;
    });
    let warm = 4;
    const warmTimer = window.setInterval(() => {
      if (warm >= tiles.length) {
        window.clearInterval(warmTimer);
        return;
      }
      const im = new window.Image();
      im.src = tiles[warm++];
    }, 500);

    let last: { x: number; y: number } | null = null;
    let i = 0;

    const spawn = (clientX: number, clientY: number) => {
      const r = hero.getBoundingClientRect();
      const x = clientX - r.left;
      const y = clientY - r.top;
      if (last && Math.hypot(x - last.x, y - last.y) < 90) return;
      last = { x, y };
      const tile = tiles[i++ % tiles.length];
      const el = document.createElement("div");
      el.style.cssText =
        "position:absolute;width:clamp(110px,13vw,190px);aspect-ratio:3/4;left:0;top:0;border:1px solid rgba(237,237,233,0.16);background:#0E0B09 center/cover no-repeat url('" +
        tile +
        "');will-change:transform,opacity;";
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

    hero.addEventListener("mousemove", onMove);
    hero.addEventListener("touchmove", onTouch, { passive: true });
    return () => {
      window.clearInterval(warmTimer);
      hero.removeEventListener("mousemove", onMove);
      hero.removeEventListener("touchmove", onTouch);
    };
  }, []);

  return (
    <div ref={heroRef} className={styles.heroBox}>
      <div className={styles.blobField} aria-hidden="true">
        <span className={`${styles.blob} ${styles.blob1}`} />
        <span className={`${styles.blob} ${styles.blob2}`} />
        <span className={`${styles.blob} ${styles.blob3}`} />
      </div>
      <Image
        src="/assets/pixo-logo-transparent.png"
        alt="Pixo Design"
        width={1660}
        height={948}
        priority
        className={styles.heroLogo}
        sizes="(max-width: 900px) 86vw, 640px"
      />
      <div ref={trailRef} className={styles.trailLayer} />
    </div>
  );
}
