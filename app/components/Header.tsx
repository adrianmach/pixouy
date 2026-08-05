"use client";

import { useEffect, useState } from "react";
import styles from "../page.module.css";

const LINKS = [
  { href: "#servicios", label: "servicios" },
  { href: "#trabajos", label: "trabajos" },
  { href: "#porque", label: "por qué pixo" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}
    >
      <a href="#top" className={styles.logo}>
        PIXO
      </a>
      <nav className={styles.nav}>
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} className={styles.navLink}>
            {l.label}
          </a>
        ))}
      </nav>
      <a href="https://wa.me/59898955038" className={styles.navCta}>
        CONTACTAR
      </a>
      <button
        type="button"
        className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ""}`}
        aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
        onClick={() => setMenuOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>
      <div
        id="mobile-menu"
        className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}
      >
        {LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className={styles.mobileMenuLink}
            onClick={() => setMenuOpen(false)}
          >
            {l.label}
          </a>
        ))}
        <a
          href="https://wa.me/59898955038"
          className={styles.mobileMenuCta}
          onClick={() => setMenuOpen(false)}
        >
          CONTACTAR ↗
        </a>
      </div>
    </header>
  );
}
