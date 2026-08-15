import Header from "./components/Header";
import Showcase from "./components/Showcase";
import HeroFade from "./components/HeroFade";
import Reveal from "./components/Reveal";
import Counter from "./components/Counter";
import Parallax from "./components/Parallax";
import FAQAccordion from "./components/FAQAccordion";
import WebMockup from "./components/mockups/WebMockup";
import AutomationMockup from "./components/mockups/AutomationMockup";
import StoreMockup from "./components/mockups/StoreMockup";
import {
  IconCheck,
  IconClock,
  IconCode,
  IconHeadset,
  IconTarget,
} from "./components/mockups/Icons";
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

const TECH_STACK = [
  "Next.js",
  "React",
  "Shopify",
  "WordPress",
  "MercadoPago",
  "Stripe",
  "Vercel",
];

const PRICING = [
  {
    name: "Landing Page",
    price: "desde USD 180",
    desc: "Una página profesional para presentar tu negocio o producto.",
    features: [
      "Diseño a medida",
      "Responsive",
      "Formulario de contacto",
      "SEO básico",
      "Hosting configurado",
      "Entrega en 5-7 días",
    ],
    cta: { label: "COTIZAR", href: "https://wa.me/59898955038" },
    variant: "outline",
  },
  {
    name: "Tienda Online",
    price: "desde USD 400",
    desc: "Tienda completa lista para vender online 24/7.",
    features: [
      "Todo lo de Landing",
      "Catálogo de productos",
      "Carrito y checkout",
      "Pasarela de pagos (MercadoPago/Stripe)",
      "Gestión de stock",
      "Panel de administración",
      "Cálculo de envíos",
    ],
    cta: { label: "COTIZAR", href: "https://wa.me/59898955038" },
    variant: "filled",
    featured: true,
    badge: "MÁS ELEGIDO",
  },
  {
    name: "Desarrollo a Medida",
    price: "Cotización personalizada",
    desc: "Software, automatizaciones e integraciones específicas para tu operación.",
    features: [
      "Sistemas web complejos",
      "Automatizaciones",
      "Integraciones con APIs",
      "Dashboards",
      "IA aplicada",
      "Soporte dedicado",
    ],
    cta: { label: "AGENDAR LLAMADA", href: "https://wa.me/59898955038" },
    variant: "outlineTeal",
  },
];

const PROCESO = [
  {
    num: "01",
    title: "Consulta",
    desc: "Nos contás qué necesitás. Analizamos tu negocio y objetivos.",
  },
  {
    num: "02",
    title: "Propuesta",
    desc: "Te enviamos una propuesta con alcance, plazos y precio cerrado.",
  },
  {
    num: "03",
    title: "Desarrollo",
    desc: "Construimos tu proyecto con actualizaciones constantes. Vos ves el avance.",
  },
  {
    num: "04",
    title: "Entrega + Soporte",
    desc: "Lanzamos tu proyecto y te acompañamos después. No desaparecemos.",
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
    Icon: IconTarget,
  },
  {
    title: "Entrega rápida",
    desc: "Tu web lista en días, no meses. Procesos ágiles sin perder calidad.",
    Icon: IconClock,
  },
  {
    title: "Soporte continuo",
    desc: "No te dejamos solo después del lanzamiento.",
    Icon: IconHeadset,
  },
  {
    title: "Código propio",
    desc: "El código y los accesos quedan a tu nombre. Sin dependencias ni ataduras.",
    Icon: IconCode,
  },
];

const FAQ = [
  {
    q: "¿Cuánto tarda un proyecto?",
    a: "Una landing entre 5 y 7 días. Un ecommerce entre 2 y 3 semanas. Proyectos a medida según alcance. Siempre con plazos claros desde el inicio.",
  },
  {
    q: "¿El código queda a mi nombre?",
    a: "Sí. Al finalizar, el código y todos los accesos son tuyos. Sin dependencias ni ataduras.",
  },
  {
    q: "¿Ofrecen soporte después de la entrega?",
    a: "Sí. Incluimos un período de soporte post-lanzamiento y ofrecemos planes de mantenimiento mensual opcionales.",
  },
  {
    q: "¿Cómo son los pagos?",
    a: "Trabajamos con un adelanto del 50% para comenzar y el resto contra entrega. Aceptamos transferencia, MercadoPago y crypto.",
  },
  {
    q: "¿Trabajan con clientes fuera de Uruguay?",
    a: "Sí. Trabajamos con clientes de toda LATAM de forma 100% remota. Los precios están en USD.",
  },
  {
    q: "¿Qué pasa si necesito cambios durante el proyecto?",
    a: "Está contemplado. Trabajamos con revisiones incluidas en cada etapa para que el resultado sea exactamente lo que necesitás.",
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
              Creamos páginas web, tiendas online y automatizaciones para
              hacer crecer tu negocio. Desde Montevideo, para toda LATAM.
            </Reveal>
            <Reveal delay={70} className={styles.heroActions}>
              <a href="#precios" className={styles.ctaFilled}>
                VER PRECIOS ↓
              </a>
              <a
                href="https://wa.me/59898955038"
                className={styles.ctaOutlineTeal}
              >
                CONTACTAR
              </a>
            </Reveal>
            <Reveal delay={120} className={styles.heroBadges}>
              <span className={styles.heroBadge}>
                <IconCheck size={12} /> Entrega en días
              </span>
              <span className={styles.heroBadge}>
                <IconCheck size={12} /> Soporte incluido
              </span>
              <span className={styles.heroBadge}>
                <IconCheck size={12} /> Código propio
              </span>
            </Reveal>
          </HeroFade>
        </div>
      </section>

      <section className={styles.trustBar}>
        <div className={styles.trustBarInner}>
          <span className={styles.trustLabel}>Tecnologías que usamos</span>
          <div className={styles.trustLogos}>
            {TECH_STACK.map((t) => (
              <span key={t} className={styles.trustLogo}>
                {t}
              </span>
            ))}
          </div>
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
          <Reveal as="span" className={`${styles.tag} ${styles.tagCentered}`}>
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

      <section id="precios" className={`${styles.section} ${styles.pricingSection}`}>
        <div className={styles.container}>
          <Reveal as="span" className={`${styles.tag} ${styles.tagCentered}`}>
            [ precios ]
          </Reveal>
          <Reveal as="h2" className={`${styles.sectionTitle} ${styles.sectionTitleCentered}`}>
            Planes claros, sin sorpresas.
          </Reveal>
          <Reveal as="p" className={`${styles.sectionSubtitle} ${styles.sectionSubtitleCentered}`}>
            Precios de referencia. Cada proyecto se cotiza según tus necesidades.
          </Reveal>
          <div className={styles.pricingGrid}>
            {PRICING.map((p, i) => (
              <Reveal
                as="div"
                key={p.name}
                delay={i * 80}
                className={`${styles.pricingCard} ${p.featured ? styles.pricingCardFeatured : ""}`}
              >
                {p.badge && <span className={styles.pricingBadge}>{p.badge}</span>}
                <span className={styles.pricingName}>{p.name}</span>
                <span className={styles.pricingPrice}>{p.price}</span>
                <p className={styles.pricingDesc}>{p.desc}</p>
                <div className={styles.pricingFeatures}>
                  {p.features.map((f) => (
                    <span key={f} className={styles.pricingFeature}>
                      <IconCheck size={13} />
                      {f}
                    </span>
                  ))}
                </div>
                <a
                  href={p.cta.href}
                  className={
                    p.variant === "filled"
                      ? styles.ctaFilled
                      : p.variant === "outlineTeal"
                        ? styles.ctaOutlineTeal
                        : styles.ctaOutline
                  }
                >
                  {p.cta.label}
                </a>
              </Reveal>
            ))}
          </div>
          <p className={styles.pricingNote}>
            Todos los precios en USD. Aceptamos transferencia, MercadoPago y crypto. Facturación disponible.
          </p>
        </div>
      </section>

      <section id="proceso" className={`${styles.section} ${styles.processSection}`}>
        <div className={styles.container}>
          <Reveal as="span" className={`${styles.tag} ${styles.tagCentered} ${styles.tagOnDark}`}>
            [ cómo trabajamos ]
          </Reveal>
          <Reveal as="h2" className={`${styles.sectionTitle} ${styles.sectionTitleCentered} ${styles.sectionTitleOnDark}`}>
            Un proceso claro, de principio a fin.
          </Reveal>
          <div className={styles.processGrid}>
            <span className={styles.processLine} aria-hidden="true" />
            {PROCESO.map((step, i) => (
              <Reveal as="div" key={step.num} delay={i * 90} className={styles.processStep}>
                <span className={styles.processNum}>{step.num}</span>
                <h3 className={styles.processTitle}>{step.title}</h3>
                <p className={styles.processDesc}>{step.desc}</p>
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
          <Reveal as="span" className={`${styles.tag} ${styles.tagCentered}`}>
            [ por qué pixo ]
          </Reveal>
          <div className={styles.whyGrid}>
            {PORQUE.map((p, i) => (
              <Reveal as="div" key={p.title} delay={i * 70} className={styles.whyCard}>
                <span
                  className={`${styles.whyIcon} ${i % 2 === 0 ? styles.whyIconOrange : styles.whyIconTeal}`}
                >
                  <p.Icon size={20} />
                </span>
                <h3 className={styles.whyTitle}>{p.title}</h3>
                <p className={styles.whyDesc}>{p.desc}</p>
              </Reveal>
            ))}
          </div>
          <div className={styles.porqueDivider} />
          <div className={styles.numbersGrid}>
            {NUMEROS.map((n, i) => (
              <Reveal as="div" key={n.label} delay={i * 70} className={styles.numberCard}>
                <span
                  className={`${styles.numberValue} ${i % 2 === 1 ? styles.numberValueTeal : ""}`}
                >
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

      <section id="faq" className={`${styles.section} ${styles.faqSection}`}>
        <div className={styles.container}>
          <Reveal as="span" className={`${styles.tag} ${styles.tagCentered}`}>
            [ preguntas frecuentes ]
          </Reveal>
          <Reveal as="h2" className={`${styles.sectionTitle} ${styles.sectionTitleCentered}`}>
            Todo lo que necesitás saber.
          </Reveal>
          <Reveal className={styles.faqWrap}>
            <FAQAccordion items={FAQ} />
          </Reveal>
        </div>
      </section>

      <section id="contacto" className={styles.contactSection}>
        <div className={styles.container}>
          <Reveal as="span" className={styles.tag}>
            [ contacto ]
          </Reveal>
          <Reveal as="h2" className={styles.contactTitle}>
            tu próximo proyecto digital, a un mensaje.
          </Reveal>
          <Reveal as="p" className={styles.contactSubtitle}>
            Contanos tu idea y te armamos una propuesta sin compromiso.
          </Reveal>
          <div className={styles.contactLinks}>
            <Reveal delay={0}>
              <a href="https://wa.me/59898955038" className={styles.ctaFilledLight}>
                CONTACTAR POR WHATSAPP ↗
              </a>
            </Reveal>
          </div>
          <div className={styles.contactMeta}>
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
        <div className={styles.footerInner}>
          <div className={styles.footerCol}>
            <span className={styles.footerName}>PIXO</span>
            <p className={styles.footerDesc}>
              Desarrollo web, ecommerce y automatización.
            </p>
            <span className={styles.footerLoc}>Montevideo, Uruguay</span>
          </div>
          <div className={styles.footerCol}>
            <span className={styles.footerColTitle}>Navegación</span>
            <a href="#servicios" className={styles.footerLink}>
              Servicios
            </a>
            <a href="#precios" className={styles.footerLink}>
              Precios
            </a>
            <a href="#proceso" className={styles.footerLink}>
              Proceso
            </a>
            <a href="#faq" className={styles.footerLink}>
              FAQ
            </a>
          </div>
          <div className={styles.footerCol}>
            <span className={styles.footerColTitle}>Contacto</span>
            <a href="https://wa.me/59898955038" className={styles.footerLink}>
              WhatsApp
            </a>
            <a href="mailto:adrianmachinrodriguez@gmail.com" className={styles.footerLink}>
              Email
            </a>
            <a href="https://instagram.com/pixodesign.uy" className={styles.footerLink}>
              Instagram
            </a>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <span className={styles.footerCopy}>© 2026 Pixo · Hecho en Montevideo</span>
          <span className={styles.footerCode}>PIXO_DSN_2026</span>
        </div>
      </footer>
    </div>
  );
}
