import Header from "./components/Header";
import Showcase from "./components/Showcase";
import HeroFade from "./components/HeroFade";
import Reveal from "./components/Reveal";
import Counter from "./components/Counter";
import Parallax from "./components/Parallax";
import WebMockup from "./components/mockups/WebMockup";
import AutomationMockup from "./components/mockups/AutomationMockup";
import StoreMockup from "./components/mockups/StoreMockup";
import styles from "./page.module.css";

const SERVICIOS = [
  {
    num: "01",
    title: "Páginas Web",
    desc: "Sitios rápidos y a medida. Diseño, código y despliegue. Construidos para convertir visitantes en clientes.",
    chips: ["Next.js", "SEO", "Mobile first", "Carga rápida"],
    Mockup: WebMockup,
  },
  {
    num: "02",
    title: "Automatizaciones",
    desc: "Conectamos tus herramientas. Pedidos, pagos, mensajes y reportes que se ejecutan solos, 24/7.",
    chips: ["APIs", "Webhooks", "IA", "Notificaciones"],
    Mockup: AutomationMockup,
  },
  {
    num: "03",
    title: "Tiendas Online",
    desc: "Tu negocio abierto 24/7. Catálogo, carrito, pagos y envíos. Mientras dormís, tu tienda vende.",
    chips: ["Shopify", "WooCommerce", "MercadoPago", "Stock", "Envíos"],
    Mockup: StoreMockup,
    featured: true,
    cta: { label: "QUIERO MI TIENDA ↗", href: "https://wa.me/59898955038" },
  },
];

const NUMEROS = [
  { value: "+50", label: "proyectos entregados" },
  { value: "+30", label: "clientes activos" },
  { value: "24/7", label: "soporte disponible" },
  { value: "99%", label: "clientes satisfechos" },
];

const PORQUE = [
  {
    title: "Diseño a medida",
    desc: "Cada sitio se diseña desde cero para tu marca y tu público.",
  },
  {
    title: "Entrega rápida",
    desc: "Tu web lista en días, no meses. Procesos ágiles sin perder calidad.",
  },
  {
    title: "Soporte continuo",
    desc: "No te dejamos solo después del lanzamiento.",
  },
  {
    title: "SEO y conversión",
    desc: "Optimizado para que Google te encuentre y tus visitantes conviertan.",
  },
];

const MARQUEE_ITEMS = [
  "desarrollo web",
  "ecommerce",
  "automatización",
  "ia",
  "integraciones",
  "soporte",
];

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />

      <section id="top" className={styles.heroSection}>
        <span className={styles.heroBigNum} aria-hidden="true">
          01
        </span>
        <div className={styles.container}>
          <HeroFade className={styles.heroContent}>
            <Reveal as="span" className={styles.eyebrow}>
              {"// desarrollo web · ecommerce · automatización · ia"}
            </Reveal>
            <Reveal as="h1" className={styles.h1}>
              sistemas digitales diseñados con{" "}
              <span className={styles.h1Accent}>precisión</span>.
            </Reveal>
            <Reveal as="p" className={styles.heroText}>
              Creamos páginas web, tiendas online, automatizaciones e IA para
              hacer crecer tu negocio.
            </Reveal>
            <Reveal delay={70} className={styles.heroActions}>
              <a href="https://wa.me/59898955038" className={styles.ctaFilled}>
                CONTACTAR ↗
              </a>
              <a href="#trabajos" className={styles.ctaOutline}>
                VER TRABAJOS
              </a>
            </Reveal>
          </HeroFade>
        </div>
      </section>

      <Showcase />

      <div className={styles.ticker} data-ticker="true" aria-hidden="true">
        <div className={styles.tickerTrack}>
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span className={styles.tickerItem} key={`${item}-${i}`}>
              {item} ✺
            </span>
          ))}
        </div>
      </div>

      <section id="servicios" className={`${styles.section} ${styles.serviciosSection}`}>
        <div className={styles.container}>
          <Reveal as="span" className={styles.tag}>
            [ lo que construimos ]
          </Reveal>
          <div className={styles.servicesGrid}>
            {SERVICIOS.map((s, i) => (
              <Reveal
                as="div"
                key={s.num}
                className={`${styles.serviceRow} ${s.featured ? styles.serviceRowFeatured : ""} ${i % 2 === 1 ? styles.serviceRowReverse : ""}`}
              >
                <div className={styles.serviceText}>
                  <span className={styles.serviceNum} aria-hidden="true">
                    {s.num}
                  </span>
                  <h2 className={styles.serviceTitle}>{s.title}</h2>
                  <p className={styles.serviceDesc}>{s.desc}</p>
                  <div className={styles.chips}>
                    {s.chips.map((chip) => (
                      <span key={chip} className={styles.chip}>
                        {chip}
                      </span>
                    ))}
                  </div>
                  {s.cta && (
                    <a href={s.cta.href} className={styles.serviceFeaturedCta}>
                      {s.cta.label}
                    </a>
                  )}
                </div>
                <div className={styles.serviceMedia}>
                  <s.Mockup />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Parallax id="parallax-tech" image="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80">
        <Reveal as="p" className={styles.parallaxLabel}>
          TECNOLOGÍA QUE FUNCIONA
        </Reveal>
      </Parallax>

      <section
        id="porque"
        className={`${styles.section} ${styles.sectionBordered} ${styles.porqueSection}`}
      >
        <div className={styles.container}>
          <Reveal as="span" className={styles.tag}>
            [ por qué pixo ]
          </Reveal>
          <div className={styles.whyGrid}>
            {PORQUE.map((p, i) => (
              <Reveal as="div" key={p.title} delay={i * 70} className={styles.whyCard}>
                <h3 className={styles.whyTitle}>{p.title}</h3>
                <p className={styles.whyDesc}>{p.desc}</p>
              </Reveal>
            ))}
          </div>
          <div className={styles.porqueDivider} />
          <div className={styles.numbersGrid}>
            {NUMEROS.map((n, i) => (
              <Reveal as="div" key={n.label} delay={i * 70} className={styles.numberCard}>
                <span className={styles.numberValue}>
                  <Counter value={n.value} />
                </span>
                <span className={styles.numberLabel}>{n.label}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Parallax id="parallax-code" image="https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=1920&q=80">
        <Reveal as="p" className={styles.parallaxLabel}>
          DESARROLLO · DISEÑO · RESULTADOS
        </Reveal>
      </Parallax>

      <section id="contacto" className={styles.contactSection}>
        <div className={styles.container}>
          <Reveal as="span" className={styles.tag}>
            [ contacto ]
          </Reveal>
          <Reveal as="h2" className={styles.contactTitle}>
            tu próximo proyecto digital, a un mensaje.
          </Reveal>
          <div className={styles.contactLinks}>
            <Reveal delay={0}>
              <a href="https://wa.me/59898955038" className={styles.ctaFilledLight}>
                CONTACTAR ↗
              </a>
            </Reveal>
            <Reveal delay={70}>
              <a href="mailto:adrianmachinrodriguez@gmail.com" className={styles.contactMail}>
                adrianmachinrodriguez@gmail.com
              </a>
            </Reveal>
            <Reveal delay={140}>
              <a href="https://instagram.com/pixodesign.uy" className={styles.contactMail}>
                @pixodesign.uy
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <span className={styles.footerBrand}>
          <span className={styles.footerName}>PIXO</span>
          <span className={styles.footerLoc}>Montevideo, 2026</span>
        </span>
        <span className={styles.footerLinks}>
          <a href="#servicios" className={styles.footerLink}>
            Servicios
          </a>
          <a href="#porque" className={styles.footerLink}>
            Nosotros
          </a>
          <a href="https://wa.me/59898955038" className={styles.footerLink}>
            WhatsApp
          </a>
          <a href="https://instagram.com/pixodesign.uy" className={styles.footerLink}>
            Instagram
          </a>
        </span>
        <span className={styles.footerCode}>PIXO_DSN_2026</span>
      </footer>
    </div>
  );
}
