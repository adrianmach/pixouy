"use client";

import { useEffect, type RefObject } from "react";

// Only visible stops participate. No permanent frame loop, React updates or
// fixed overlay; every P stays inside a reserved part of its section.
export function useBrandJourney(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const stops = Array.from(ref.current?.querySelectorAll<HTMLElement>("[data-brand-stop]") ?? []);
    if (!stops.length || !("IntersectionObserver" in window)) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktop = window.matchMedia("(min-width: 901px) and (pointer: fine)");
    let dispose = () => {};
    const configure = () => {
      dispose();
      stops.forEach((stop) => {
        stop.removeAttribute("data-brand-ready");
        stop.removeAttribute("data-brand-seen");
        stop.querySelector<HTMLElement>("[data-brand-mark]")?.style.removeProperty("transform");
      });
      if (reduced.matches) return;
      let frame = 0;
      const visible = new Set<HTMLElement>();
      const draw = () => {
        frame = 0;
        if (document.hidden) return;
        // Read all geometry before writing transforms.
        const positions = Array.from(visible, (stop) => ({ stop, rect: stop.getBoundingClientRect() }));
        positions.forEach(({ stop, rect }) => {
          const mark = stop.querySelector<HTMLElement>("[data-brand-mark]");
          if (!mark) return;
          const kind = stop.dataset.brandStop;
          const progress = Math.min(1, Math.max(0, (window.innerHeight * 0.9 - rect.top) / (window.innerHeight * 0.48)));
          const remaining = Math.pow(1 - progress, 3);
          const x = kind === "services" ? 80 * remaining : kind === "projects" ? -24 * remaining : 0;
          const y = kind === "hero" ? Math.min(window.scrollY / 500, 1) * 24 : -42 * remaining;
          const rotate = kind === "hero" ? Math.min(window.scrollY / 500, 1) * 12 : (kind === "services" ? 16 : -18) * remaining;
          mark.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0) rotate(${rotate.toFixed(2)}deg)`;
          stop.dataset.brandSeen = "true";
        });
      };
      const schedule = () => {
        if (!frame && visible.size && !document.hidden) frame = requestAnimationFrame(draw);
      };
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const stop = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            visible.add(stop);
            if (!desktop.matches) {
              stop.dataset.brandSeen = "true";
              observer.unobserve(stop);
              visible.delete(stop);
            }
          } else {
            visible.delete(stop);
          }
        });
        if (desktop.matches) schedule();
      }, { rootMargin: "0px 0px 80px 0px" });
      stops.forEach((stop) => {
        stop.dataset.brandReady = "true";
        observer.observe(stop);
      });
      const onVisibility = () => {
        if (document.hidden) { cancelAnimationFrame(frame); frame = 0; }
        else schedule();
      };
      if (desktop.matches) {
        window.addEventListener("scroll", schedule, { passive: true });
        window.addEventListener("resize", schedule, { passive: true });
        document.addEventListener("visibilitychange", onVisibility);
      }
      dispose = () => {
        cancelAnimationFrame(frame);
        observer.disconnect();
        window.removeEventListener("scroll", schedule);
        window.removeEventListener("resize", schedule);
        document.removeEventListener("visibilitychange", onVisibility);
      };
    };
    configure();
    reduced.addEventListener("change", configure);
    desktop.addEventListener("change", configure);
    return () => {
      dispose();
      reduced.removeEventListener("change", configure);
      desktop.removeEventListener("change", configure);
    };
  }, [ref]);
}
