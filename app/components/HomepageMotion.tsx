"use client";

import { useEffect, useRef, type ReactNode } from "react";
import styles from "../digital.module.css";

// One observer for the page, and event-driven frames for the hero only.
// Server-rendered content remains visible when JavaScript is unavailable.
export default function HomepageMotion({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const main = ref.current;
    if (!main) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const groups: [string, number, number][] = [
      [`.${styles.sectionBar} > *`, 80, 0],
      [`.${styles.sectionHeading} .${styles.eyebrow}`, 0, 0],
      [`.${styles.sectionHeading} h2`, 0, 80],
      [`.${styles.sectionHeading} > p`, 0, 140],
      [`.${styles.aboutContent} > .${styles.eyebrow}`, 0, 0],
      [`.${styles.aboutLead}`, 0, 140],
      [`.${styles.reasons} > *`, 80, 0],
      [`.${styles.inmoNote} > *`, 100, 0],
      [`.${styles.priceRow}`, 100, 0],
      [`.${styles.note}`, 100, 0],
      [`.${styles.faqLayout} > div:first-child > *`, 80, 0],
      [`.${styles.faqItem}`, 60, 0],
      [`.${styles.contactTop}`, 0, 0],
      [`.${styles.contactBottom}`, 0, 140],
    ];
    groups.forEach(([selector, stagger, delay]) => {
      main.querySelectorAll<HTMLElement>(selector).forEach((el, index) => {
        el.dataset.reveal = "";
        el.style.setProperty("--reveal-delay", `${Math.min(index, 3) * stagger + delay}ms`);
      });
    });
    const elements = main.querySelectorAll<HTMLElement>("[data-reveal]");
    const show = (el: HTMLElement) => { el.dataset.revealState = "visible"; };
    const observer = "IntersectionObserver" in window
      ? new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            show(entry.target as HTMLElement);
            observer?.unobserve(entry.target);
          });
        }, { threshold: 0, rootMargin: "0px 0px -24px 0px" })
      : null;

    elements.forEach((el) => {
      if (reduced.matches || !observer || el.getBoundingClientRect().bottom < 0) {
        show(el);
      } else {
        el.dataset.revealState = "pending";
        observer.observe(el);
      }
    });
    const onPreference = () => {
      if (!reduced.matches) return;
      observer?.disconnect();
      elements.forEach(show);
    };
    reduced.addEventListener("change", onPreference);
    return () => {
      observer?.disconnect();
      reduced.removeEventListener("change", onPreference);
      elements.forEach(show);
    };
  }, []);

  useEffect(() => {
    const hero = ref.current?.querySelector<HTMLElement>(`.${styles.hero}`);
    if (!hero) return;
    const laptop = hero.querySelector<HTMLElement>(`.${styles.laptop}`);
    const concrete = hero.querySelector<HTMLElement>(`.${styles.concreteBlock}`);
    const copy = hero.querySelector<HTMLElement>(`.${styles.heroCopy}`);
    const colors = Array.from(hero.querySelectorAll<HTMLElement>(
      `.${styles.limeBlock}, .${styles.blueSquare}, .${styles.orangeMark}`,
    ));
    const layers = [laptop, concrete, copy, ...colors];
    const desktop = window.matchMedia("(min-width: 901px) and (hover: hover) and (pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let teardown = () => {};
    const configure = () => {
      teardown();
      if (!desktop.matches || reduced.matches || !("IntersectionObserver" in window)) return;
      let frame = 0;
      let visible = false;
      let x = 0, y = 0, targetX = 0, targetY = 0;
      let previousProgress = -1;
      let rect = hero.getBoundingClientRect();
      let geometryChanged = false;
      let progress = Math.min(Math.max(window.scrollY / 500, 0), 1);
      const active = () => visible && !document.hidden;
      const draw = () => {
        frame = 0;
        if (!active()) return;
        if (geometryChanged) {
          rect = hero.getBoundingClientRect();
          geometryChanged = false;
        }
        x += (targetX - x) * 0.12;
        y += (targetY - y) * 0.12;
        // Keep changing values on their own layers, not inherited by the hero.
        laptop?.style.setProperty("--pointer-x", `${x.toFixed(2)}px`);
        laptop?.style.setProperty("--pointer-y", `${y.toFixed(2)}px`);
        concrete?.style.setProperty("--pointer-x", `${x.toFixed(2)}px`);
        colors.forEach((el) => el.style.setProperty("--pointer-x", `${x.toFixed(2)}px`));
        if (progress !== previousProgress) {
          laptop?.style.setProperty("--laptop-scroll", `${progress * 30}px`);
          concrete?.style.setProperty("--concrete-scroll", `${progress * 12}px`);
          colors.forEach((el) => el.style.setProperty("--color-scroll", `${progress * -20}px`));
          copy?.style.setProperty("--text-scroll", `${progress * 8}px`);
          previousProgress = progress;
        }
        if (Math.abs(targetX - x) + Math.abs(targetY - y) > 0.02) schedule();
      };
      const schedule = () => {
        if (!frame && active()) frame = requestAnimationFrame(draw);
      };
      const onMove = (event: PointerEvent) => {
        if (event.pointerType !== "mouse") return;
        targetX = Math.max(-4, Math.min(4, ((event.clientX - rect.left) / rect.width - 0.5) * 8));
        targetY = Math.max(-3, Math.min(3, ((event.clientY - rect.top) / rect.height - 0.5) * 6));
        schedule();
      };
      const onLeave = () => { targetX = 0; targetY = 0; schedule(); };
      const onScroll = () => {
        geometryChanged = true;
        progress = Math.min(Math.max(window.scrollY / 500, 0), 1);
        schedule();
      };
      const onVisibility = () => {
        hero.dataset.motionActive = String(active());
        if (!active()) { cancelAnimationFrame(frame); frame = 0; }
        else schedule();
      };
      const observer = new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting;
        onVisibility();
      });
      observer.observe(hero);
      hero.addEventListener("pointermove", onMove, { passive: true });
      hero.addEventListener("pointerleave", onLeave);
      window.addEventListener("scroll", onScroll, { passive: true });
      window.addEventListener("resize", onScroll, { passive: true });
      document.addEventListener("visibilitychange", onVisibility);
      teardown = () => {
        cancelAnimationFrame(frame);
        observer.disconnect();
        hero.dataset.motionActive = "false";
        hero.removeEventListener("pointermove", onMove);
        hero.removeEventListener("pointerleave", onLeave);
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onScroll);
        document.removeEventListener("visibilitychange", onVisibility);
        layers.forEach((el) => {
          ["--pointer-x", "--pointer-y", "--laptop-scroll", "--concrete-scroll", "--color-scroll", "--text-scroll"].forEach((name) => el?.style.removeProperty(name));
        });
      };
    };
    configure();
    desktop.addEventListener("change", configure);
    reduced.addEventListener("change", configure);
    return () => {
      teardown();
      desktop.removeEventListener("change", configure);
      reduced.removeEventListener("change", configure);
    };
  }, []);

  return <main id="contenido" ref={ref} className={styles.main}>{children}</main>;
}
