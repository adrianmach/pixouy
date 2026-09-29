"use client";

import { useEffect, type RefObject } from "react";

const clamp = (n: number) => Math.min(1, Math.max(0, n));

/** Event-driven animation frames: no React renders on scroll or pointer movement. */
export function useExperienceMotion(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    const desktop = matchMedia("(min-width: 901px)");
    const pointer = matchMedia("(hover: hover) and (pointer: fine)");
    let dispose = () => {};
    const configure = () => {
      dispose();
      if (reduced.matches) return;
      const hero = root.querySelector<HTMLElement>("[data-scene=hero]")!;
      const work = root.querySelector<HTMLElement>("[data-scene=work]")!;
      const p = root.querySelector<HTMLElement>("[data-falling-p]")!;
      const gallery = root.querySelector<HTMLElement>("[data-gallery]")!;
      const track = root.querySelector<HTMLElement>("[data-track]")!;
      const processing = root.querySelector<HTMLElement>("[data-processing]")!;
      const processingP = root.querySelector<HTMLElement>("[data-processing-p]")!;
      const impact = root.querySelector<HTMLElement>("[data-impact]")!;
      const impactP = root.querySelector<HTMLElement>("[data-impact-p]")!;
      const nodes = Array.from(root.querySelectorAll<HTMLElement>("[data-flow-node]"));
      const done = root.querySelector<HTMLElement>("[data-flow-done]")!;
      const masks = Array.from(root.querySelectorAll<HTMLElement>("[data-mask], [data-project-image], [data-service]"));
      const pictures = Array.from(root.querySelectorAll<HTMLElement>("[data-project-image]"));
      const visual = root.querySelector<HTMLElement>("[data-hero-visual]")!;
      const laptop = visual.querySelector<HTMLElement>("[data-laptop]");
      const layers = Array.from(visual.querySelectorAll<HTMLElement>("figure > div"));
      if (desktop.matches) gallery.dataset.horizontal = "";
      let frame = 0;
      let pointerX = 0, pointerY = 0;
      let cursor: { el: HTMLElement; x: number; y: number } | null = null;
      const visible = new Set<Element>();
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) visible.add(entry.target);
          else visible.delete(entry.target);
          if (entry.isIntersecting && masks.includes(entry.target as HTMLElement)) {
            entry.target.removeAttribute("data-pending");
            observer.unobserve(entry.target);
          }
        });
        schedule();
      }, { rootMargin: "100px" });
      masks.forEach(el => {
        if (el.getBoundingClientRect().top > innerHeight) el.dataset.pending = "";
      });
      [hero, work, gallery, processing, impact, ...nodes, ...masks].forEach(el => observer.observe(el));
      const draw = () => {
        frame = 0;
        if (document.hidden) return;
        // All geometry is read together, before any style writes.
        const h = innerHeight;
        const hr = hero.getBoundingClientRect();
        const wr = work.getBoundingClientRect();
        const gr = gallery.getBoundingClientRect();
        const pr = processing.getBoundingClientRect();
        const ir = impact.getBoundingClientRect();
        const nr = nodes.map(el => el.getBoundingClientRect());
        const distance = track.scrollWidth - gallery.clientWidth + innerWidth * .08;
        if (visible.has(hero) || visible.has(work)) {
          const fall = clamp((h * .9 - hr.bottom) / (h * .65));
          const settle = fall < .8 ? (fall / .8) ** 2 : 1 - Math.sin((fall - .8) / .2 * Math.PI) * .07;
          p.style.transform = `translate3d(0,${settle * (desktop.matches ? 250 : 110)}px,0) rotate(${Math.sin(fall * Math.PI * 2) * 8}deg)`;
          const transition = clamp((h - wr.top) / (h * .55));
          work.style.backgroundColor = `rgb(${Math.round(244 - transition * 235)} ${Math.round(241 - transition * 232)} ${Math.round(233 - transition * 224)})`;
        }
        if (desktop.matches && visible.has(gallery)) {
          const progress = clamp((85 - gr.top) / (gr.height - h));
          track.style.transform = `translate3d(${-progress * Math.max(0, distance)}px,0,0)`;
        }
        if (visible.has(processing)) {
          const progress = clamp((h - pr.top) / (h + pr.height));
          // Keep the movement inside the wordmark's reserved space at every screen size.
          processingP.style.transform = `translateY(${Math.sin(progress * Math.PI) * -.045}em) rotate(${Math.sin(progress * Math.PI * 2) * 3}deg)`;
        }
        nr.forEach((rect, i) => {
          const progress = clamp((h * .83 - rect.top) / (rect.height * .8));
          nodes[i].style.setProperty("--flow-offset", String(1 - progress));
          nodes[i].style.setProperty("--node-opacity", String(.4 + progress * .6));
          nodes[i].style.setProperty("--node-scale", String(.95 + progress * .05));
          nodes[i].dataset.active = String(progress > .3);
          if (i === nodes.length - 1) done.style.setProperty("--done-opacity", String(progress > .85 ? 1 : .25));
        });
        if (visible.has(impact)) {
          const progress = clamp((h * .95 - ir.top) / (h * .5));
          const bounce = progress < .8 ? (progress / .8) ** 2 : 1 - Math.sin((progress - .8) / .2 * Math.PI) * .08;
          impactP.style.transform = `translateY(${(bounce - 1) * (desktop.matches ? 250 : 100)}px) rotate(${Math.sin(progress * Math.PI * 2) * 8}deg)`;
          const color = clamp((progress - .6) / .4);
          impact.style.backgroundColor = `rgb(${Math.round(16 + 185 * color)} ${Math.round(17 + 238 * color)} ${Math.round(16 + 8 * color)})`;
          impact.style.color = color > .5 ? "#090909" : "#f4f1e9";
        }
        if (pointer.matches && desktop.matches && visible.has(hero)) {
          layers.forEach((el, i) => {
            const strength = el === laptop ? 5 : i < 2 ? 8 : 12;
            el.style.translate = `${pointerX * strength}px ${pointerY * strength}px`;
          });
        }
        if (cursor) {
          cursor.el.style.setProperty("--cursor-x", `${cursor.x}px`);
          cursor.el.style.setProperty("--cursor-y", `${cursor.y}px`);
        }
      };
      function schedule() { if (!frame && !document.hidden) frame = requestAnimationFrame(draw); }
      const move = (event: PointerEvent) => {
        if (!pointer.matches || !desktop.matches || event.pointerType !== "mouse") return;
        const rect = visual.getBoundingClientRect();
        pointerX = Math.max(-1, Math.min(1, (event.clientX - rect.left) / rect.width * 2 - 1));
        pointerY = Math.max(-1, Math.min(1, (event.clientY - rect.top) / rect.height * 2 - 1));
        schedule();
      };
      const leave = () => { pointerX = 0; pointerY = 0; schedule(); };
      const projectMove = (event: PointerEvent) => {
        if (!pointer.matches) return;
        const el = event.currentTarget as HTMLElement;
        const rect = el.getBoundingClientRect();
        cursor = { el, x: event.clientX - rect.left, y: event.clientY - rect.top };
        schedule();
      };
      // Keyboard navigation reveals a focused project within the sticky sequence.
      const focus = (event: FocusEvent) => {
        if (!desktop.matches || !(event.target instanceof HTMLElement)) return;
        const index = Array.from(track.children).findIndex(el => el.contains(event.target as Node));
        if (index < 0) return;
        const rect = gallery.getBoundingClientRect();
        window.scrollTo({ top: scrollY + rect.top - 85 + index / (track.children.length - 1) * (rect.height - innerHeight), behavior: "instant" });
      };
      window.addEventListener("scroll", schedule, { passive: true });
      window.addEventListener("resize", schedule, { passive: true });
      document.addEventListener("visibilitychange", schedule);
      hero.addEventListener("pointermove", move, { passive: true });
      hero.addEventListener("pointerleave", leave);
      pictures.forEach(el => el.addEventListener("pointermove", projectMove, { passive: true }));
      track.addEventListener("focusin", focus);
      schedule();
      dispose = () => {
        cancelAnimationFrame(frame);
        observer.disconnect();
        window.removeEventListener("scroll", schedule);
        window.removeEventListener("resize", schedule);
        document.removeEventListener("visibilitychange", schedule);
        hero.removeEventListener("pointermove", move);
        hero.removeEventListener("pointerleave", leave);
        pictures.forEach(el => el.removeEventListener("pointermove", projectMove));
        track.removeEventListener("focusin", focus);
        delete gallery.dataset.horizontal;
        masks.forEach(el => el.removeAttribute("data-pending"));
        [p, work, track, processingP, impact, impactP, done, ...nodes].forEach(el => el.removeAttribute("style"));
        layers.forEach(el => el.style.removeProperty("translate"));
      };
    };
    configure();
    reduced.addEventListener("change", configure);
    desktop.addEventListener("change", configure);
    return () => { dispose(); reduced.removeEventListener("change", configure); desktop.removeEventListener("change", configure); };
  }, [ref]);
}
