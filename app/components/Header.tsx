"use client";

import { useEffect, useRef, useState } from "react";
import styles from "../page.module.css";

const LINKS = [
  { href: "#servicios", label: "Servicios" },
  { href: "#trabajos", label: "Proyectos" },
  { href: "#proceso", label: "Proceso" },
  { href: "#precios", label: "Precios" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const close = () => {
      document.body.style.overflow = previousOverflow;
      setMenuOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
        toggleRef.current?.focus();
      }
      if (event.key === "Tab") {
        const elements = Array.from(
          headerRef.current?.querySelectorAll<HTMLElement>("a, button") ?? [],
        ).filter((el) => el.getClientRects().length > 0);
        const first = elements[0],
          last = elements[elements.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
    };
    const media = window.matchMedia("(min-width: 761px)");
    const onResize = () => {
      if (media.matches) close();
    };
    document.addEventListener("keydown", onKey);
    media.addEventListener("change", onResize);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
      media.removeEventListener("change", onResize);
    };
  }, [menuOpen]);

  const closeMenu = () => {
    document.body.style.overflow = "";
    setMenuOpen(false);
  };

  return (
    <header
      ref={headerRef}
      className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}
    >
      <a
        href="#top"
        className={styles.brand}
        onClick={closeMenu}
        aria-label="PIXO, inicio"
      >
        <span className={styles.logo}>PIXO</span>
        <span className={styles.brandCaption}>
          Creative digital studio
          <br />
          Montevideo, Uruguay
        </span>
      </a>
      <nav className={styles.nav} aria-label="Navegación principal">
        {LINKS.map((link) => (
          <a key={link.href} href={link.href} className={styles.navLink}>
            {link.label}
          </a>
        ))}
      </nav>
      <a href="https://wa.me/59898955038" className={styles.navCta}>
        Hablemos <span aria-hidden="true">↗</span>
      </a>
      <button
        ref={toggleRef}
        type="button"
        className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ""}`}
        aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
        onClick={() => setMenuOpen((value) => !value)}
      >
        <span />
        <span />
      </button>
      <nav
        id="mobile-menu"
        aria-label="Navegación móvil"
        inert={!menuOpen}
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}
      >
        {LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={styles.mobileMenuLink}
            onClick={closeMenu}
          >
            {link.label}
          </a>
        ))}
        <a
          href="https://wa.me/59898955038"
          className={styles.mobileMenuCta}
          onClick={closeMenu}
        >
          Hablemos ↗
        </a>
      </nav>
    </header>
  );
}
