import Image from "next/image";
import Header from "./components/Header";
import Showcase from "./components/Showcase";
import HeroFade from "./components/HeroFade";
import Reveal from "./components/Reveal";
import Counter from "./components/Counter";
import styles from "./page.module.css";

const SERVICIOS = [
  {
    num: "01",
    title: "Páginas Web",
    desc: "Sitios diseñados desde cero. Responsive, optimizados, construidos para convertir.",
    chips: ["Diseño a medida", "SEO", "Mobile first", "Carga rápida"],
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80",
  },
  {
    num: "02",
    title: "Automatizaciones",
    desc: "Procesos conectados. Herramientas integradas. Tiempo recuperado.",
    chips: ["Flujos automáticos", "APIs", "Reportes", "Notificaciones"],
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&q=80",
  },
  {
    num: "03",
    title: "Bots Inteligentes",
    desc: "Atención continua. Respuestas automáticas. Disponibilidad total.",
    chips: ["WhatsApp Bot", "Chat web", "IA", "Seguimiento"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
  },
];

const ECOMMERCE = {
  title: "Tiendas online que venden.",
  desc: "Creamos tiendas digitales completas. Catálogo, carrito, pagos integrados, gestión de inventario y envíos. Tu negocio abierto 24/7.",
  chips: ["Shopify", "WooCommerce", "MercadoPago", "Pasarelas de pago", "Gestión de stock"],
  image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
};

const NUMEROS = [
  { value: "+50", label: "proyectos entregados" },
  { value: "+30", label: "clientes activos", accent: true },
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

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />

      <section id="top" className={styles.heroSection}>
        <div className={styles.blobField} aria-hidden="true">
          <span className={`${styles.blob} ${styles.blob1}`} />
          <span className={`${styles.blob} ${styles.blob2}`} />
          <span className={`${styles.blob} ${styles.blob3}`} />
        </div>
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className={styles.container}>
          <HeroFade className={styles.heroContent}>
            <Reveal as="span" className={styles.eyebrow}>
              {"// diseño web · automatización · bots"}
            </Reveal>
            <Reveal as="h1" className={styles.h1}>
              <span className={styles.h1Bold}>sistemas digitales</span>{" "}
              <span className={styles.h1Italic}>diseñados con</span>{" "}
              <span className={styles.h1Accent}>precisión</span>
              <span className={styles.h1Bold}>.</span>
            </Reveal>
            <Reveal as="p" className={styles.heroText}>
              Diseñamos productos digitales para negocios modernos.
            </Reveal>
            <Reveal delay={70}>
              <a href="https://wa.me/598955038" className={styles.ctaOutline}>
                CONTACTAR ↗
              </a>
            </Reveal>
          </HeroFade>
        </div>
      </section>

      <Showcase />

      <div className={styles.ticker} data-ticker="true">
        {["diseño web", "automatización", "bots inteligentes", "seo", "integraciones"].map(
          (item, i) => (
            <Reveal as="span" key={item} delay={i * 70}>
              {item} ✺
            </Reveal>
          )
        )}
        <Reveal as="span" delay={5 * 70}>
          soporte
        </Reveal>
      </div>

      <section id="servicios" className={`${styles.section} ${styles.serviciosSection}`}>
        <div className={styles.container}>
          <Reveal as="span" className={styles.tag}>
            [ LO QUE HACEMOS ]
          </Reveal>
          <div className={styles.servicesGrid}>
            {SERVICIOS.map((s, i) => (
              <Reveal as="div" key={s.num} delay={i * 70} className={styles.serviceRow}>
                <div className={styles.serviceText}>
                  <div className={styles.serviceHead}>
                    <span className={styles.serviceNum}>{s.num}</span>
                    <h2 className={styles.serviceTitle}>{s.title}</h2>
                  </div>
                  <div className={styles.serviceBody}>
                    <p className={styles.serviceDesc}>{s.desc}</p>
                    <div className={styles.chips}>
                      {s.chips.map((chip) => (
                        <span key={chip} className={styles.chip}>
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <Reveal delay={i * 70 + 70} className={styles.serviceMedia}>
                  <Image
                    src={s.image}
                    alt={s.title}
                    width={800}
                    height={600}
                    className={styles.serviceImg}
                    sizes="(max-width: 768px) 100vw, 380px"
                  />
                </Reveal>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="ecommerce" className={styles.ecommerceSection}>
        <div className={styles.container}>
          <Reveal as="span" className={styles.tag}>
            [ ECOMMERCE ]
          </Reveal>
          <div className={styles.ecommerceGrid}>
            <Reveal className={styles.ecommerceMedia}>
              <Image
                src={ECOMMERCE.image}
                alt="Ecommerce"
                width={800}
                height={600}
                className={styles.ecommerceImg}
                sizes="(max-width: 768px) 100vw, 480px"
              />
            </Reveal>
            <Reveal delay={70} className={styles.ecommerceText}>
              <h2 className={styles.ecommerceTitle}>{ECOMMERCE.title}</h2>
              <p className={styles.ecommerceDesc}>{ECOMMERCE.desc}</p>
              <div className={styles.chips}>
                {ECOMMERCE.chips.map((chip) => (
                  <span key={chip} className={styles.chip}>
                    {chip}
                  </span>
                ))}
              </div>
              <a href="https://wa.me/598955038" className={styles.ctaOutline}>
                VER MÁS ↗
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="tecnologia" className={styles.parallaxSection}>
        <div className={styles.parallaxBg}>
          {/* eslint-disable-next-line @next/next/no-img-element -- necesita <img> nativo para el efecto sticky/parallax */}
          <img
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1920&q=80"
            alt=""
            className={styles.parallaxImg}
          />
        </div>
        <div className={styles.parallaxOverlay} aria-hidden="true" />
        <div className={styles.parallaxContent}>
          <Reveal as="p" className={styles.parallaxLabel}>
            TECNOLOGÍA · DISEÑO · INNOVACIÓN
          </Reveal>
        </div>
      </section>

      <section
        id="porque"
        className={`${styles.section} ${styles.sectionBordered} ${styles.porqueSection}`}
      >
        <div className={styles.container}>
          <Reveal as="span" className={styles.tag}>
            [ POR QUÉ PIXO ]
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
                <span
                  className={`${styles.numberValue} ${n.accent ? styles.numberValueAccent : ""}`}
                >
                  <Counter value={n.value} />
                </span>
                <span className={styles.numberLabel}>{n.label}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className={styles.contactSection}>
        <div className={styles.container}>
          <Reveal as="span" className={styles.tag}>
            [ CONTACTO ]
          </Reveal>
          <Reveal as="h2" className={styles.contactTitle}>
            <span className={styles.h1Bold}>tu próximo proyecto digital</span>
            <span className={styles.h1Italic}>, a un mensaje.</span>
          </Reveal>
          <div className={styles.contactLinks}>
            <Reveal delay={0}>
              <a href="https://wa.me/598955038" className={styles.ctaFilled}>
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
          <a href="https://wa.me/598955038" className={styles.footerLink}>
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
