"use client";

import { useEffect, useState } from "react";
import styles from "../page.module.css";
import { IconDownload } from "./mockups/Icons";

const LINKS = [
  { href: "#servicios", label: "servicios" },
  { href: "#precios", label: "precios" },
  { href: "#proceso", label: "proceso" },
  { href: "#faq", label: "faq" },
];

const PORTFOLIO_HREF = "/portfolio-adrian-machin.pdf";

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

  const closeMenu = () => {
    // Clear the scroll-lock synchronously, in the same click handler that
    // triggers the anchor's native jump — the menuOpen useEffect cleanup
    // runs too late (after paint), so the jump would fire while body is
    // still non-scrollable and silently land at the top.
    document.body.style.overflow = "";
    setMenuOpen(false);
  };

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
        <a
          href={PORTFOLIO_HREF}
          target="_blank"
          rel="noopener noreferrer"
          download
          className={`${styles.navLink} ${styles.navLinkWithIcon}`}
          aria-label="Descargar portfolio técnico de Adrian Machin en PDF (se abre en una nueva pestaña)"
        >
          <IconDownload size={13} />
          portfolio técnico
        </a>
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
            onClick={closeMenu}
          >
            {l.label}
          </a>
        ))}
        <a
          href={PORTFOLIO_HREF}
          target="_blank"
          rel="noopener noreferrer"
          download
          className={`${styles.mobileMenuLink} ${styles.mobileMenuLinkWithIcon}`}
          aria-label="Descargar portfolio técnico de Adrian Machin en PDF (se abre en una nueva pestaña)"
          onClick={closeMenu}
        >
          <IconDownload size={22} />
          portfolio
        </a>
        <a
          href="https://wa.me/59898955038"
          className={styles.mobileMenuCta}
          onClick={closeMenu}
        >
          CONTACTAR ↗
        </a>
      </div>
    </header>
  );
}
