"use client";

import { useEffect, useRef } from "react";
import Reveal from "./Reveal";
import styles from "../page.module.css";

const PARALLAX_IMAGE =
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80";

export default function Parallax() {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const img = imgRef.current;
    if (!section || !img) return;

    // Desktop keeps the CSS position:sticky <img> as-is — it already works there.
    if (window.innerWidth >= 768) return;

    // iOS (and several mobile browsers) don't keep position:sticky pinned
    // inside an overflow:hidden ancestor reliably. A position:fixed layer
    // would need a transform on the clipping ancestor to be contained to
    // this section — but that transform makes the fixed element relative to
    // THAT ancestor instead of the viewport, cancelling the pin effect. So
    // fake it manually instead: switch the image to position:absolute,
    // sized to one viewport height, and drive its offset from scroll so it
    // stays visually anchored to the viewport while the (overflow:hidden)
    // section clips it to its own box.
    img.style.position = "absolute";
    img.style.top = "0";
    img.style.height = "100vh";
    img.style.willChange = "transform";

    let ticking = false;
    const update = () => {
      ticking = false;
      const rect = section.getBoundingClientRect();
      img.style.transform = `translateY(${-rect.top}px)`;
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
    <section id="tecnologia" ref={sectionRef} className={styles.parallaxSection}>
      <div className={styles.parallaxBg}>
        {/* eslint-disable-next-line @next/next/no-img-element -- necesita <img> nativo para el efecto sticky/parallax */}
        <img ref={imgRef} src={PARALLAX_IMAGE} alt="" className={styles.parallaxImg} />
      </div>
      <div className={styles.parallaxOverlay} aria-hidden="true" />
      <div className={styles.parallaxContent}>
        <Reveal as="p" className={styles.parallaxLabel}>
          TECNOLOGÍA · DISEÑO · INNOVACIÓN
        </Reveal>
      </div>
    </section>
  );
}
