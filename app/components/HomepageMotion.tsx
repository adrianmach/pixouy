"use client";

import { useEffect, useRef, type ReactNode } from "react";
import styles from "../digital.module.css";
import { useBrandJourney } from "./useBrandJourney";
import { useExperienceMotion } from "./useExperienceMotion";

// One observer for the page, and event-driven frames for the hero only.
// Server-rendered content remains visible when JavaScript is unavailable.
export default function HomepageMotion({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLElement>(null);
  useBrandJourney(ref);
  useExperienceMotion(ref);

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

  return <main id="contenido" ref={ref} className={styles.main}>{children}</main>;
}
