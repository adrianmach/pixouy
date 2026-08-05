"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";
import styles from "../page.module.css";

export default function Parallax({
  id,
  image,
  children,
}: {
  id: string;
  image: string;
  children?: ReactNode;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const imgWrap = imgRef.current;
    if (!section || !imgWrap) return;

    const reduceMotion =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    let ticking = false;
    const update = () => {
      ticking = false;
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      if (rect.bottom > 0 && rect.top < vh) {
        imgWrap.style.transform = `translateY(${rect.top * 0.3}px)`;
      }
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <section id={id} ref={sectionRef} className={styles.parallaxSection}>
      <div ref={imgRef} className={styles.parallaxImgWrap}>
        {/* eslint-disable-next-line @next/next/no-img-element -- oversized image driven manually by scroll transform, next/image's layout wrapper fights the technique */}
        <img src={image} alt="" className={styles.parallaxImg} />
      </div>
      <div className={styles.parallaxOverlay} aria-hidden="true" />
      {children && <div className={styles.parallaxContent}>{children}</div>}
    </section>
  );
}
