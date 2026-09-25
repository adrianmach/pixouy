import Image from "next/image";
import Header from "./components/Header";
import Reveal from "./components/Reveal";
import FAQAccordion from "./components/FAQAccordion";
import styles from "./page.module.css";

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

const WHATSAPP = "https://wa.me/59898955038";
const PROJECTS = [
  {
    name: "Benji$",
    category: "Ecommerce · Moda independiente",
    image: "benjis",
    href: "https://benjis-production.up.railway.app/",
    description:
      "Una tienda con identidad propia. Catálogo, piezas únicas, pedidos personalizados y gestión en un mismo lugar.",
  },
  {
    name: "Inmobiliaria",
    category: "Plataforma inmobiliaria · IA",
    image: "niko",
    href: "https://inmo-intel.vercel.app/",
    description:
      "Propiedades, búsqueda y mapa. Una plataforma con inteligencia artificial que simplifica el trabajo de todos los días.",
  },
  {
    name: "Branda",
    category: "Software · Dirección creativa con IA",
    image: "branda",
    href: "https://branda-production-9d47.up.railway.app/",
    description:
      "Del brief a la campaña. Una plataforma para crear contenido sin perder la identidad de cada marca.",
    status: "En desarrollo",
  },
];
const SERVICES = [
  {
    title: "Webs",
    label: "Una primera impresión que queda.",
    description:
      "Diseño y desarrollo a medida. Sitios rápidos, claros y pensados para que tu marca se encuentre con su público.",
    image: "/assets/studio.webp",
    alt: "Espacio de trabajo luminoso con líneas arquitectónicas",
    detail: "Diseño web · Desarrollo · SEO",
  },
  {
    title: "Ecommerce",
    label: "Tu marca, abierta al mundo.",
    description:
      "Tiendas que dan ganas de recorrer. Catálogo, pagos, envíos y un panel para manejar tu negocio.",
    image: "/assets/projects/fluz.webp",
    alt: "Sitio real de Fluz Concept, joyería contemporánea",
    detail: "Tiendas online · Pagos · Gestión",
  },
  {
    title: "Automatizaciones",
    label: "Menos tareas. Más tiempo.",
    description:
      "Conectamos tus herramientas para que pedidos, mensajes y reportes sigan su curso sin hacerlo todo a mano.",
    image: "/assets/objects.webp",
    alt: "Composición de objetos y formas arquitectónicas",
    detail: "Integraciones · APIs · Procesos",
  },
  {
    title: "Plataformas con IA",
    label: "Ideas que se vuelven herramientas.",
    description:
      "Productos digitales para problemas concretos. Desde una plataforma inmobiliaria hasta software para tu operación.",
    image: "/assets/projects/branda.webp",
    alt: "Dirección visual del proyecto Branda",
    detail: "Software a medida · IA aplicada",
  },
];
const WHY = [
  ["Código tuyo, sin ataduras", "El código y los accesos quedan a tu nombre."],
  ["Acompañamiento real", "Estamos antes, durante y después del lanzamiento."],
  [
    "Diseño a medida",
    "Cada proyecto se diseña pensando en tu marca y tus objetivos.",
  ],
  [
    "Resultados que impulsan tu negocio",
    "Lo que hacemos no solo tiene que verse bien. Tiene que funcionar.",
  ],
];
const PROCESS = [
  [
    "Consulta",
    "Nos contás tu idea. Escuchamos, preguntamos y entendemos lo que tu negocio necesita.",
  ],
  [
    "Propuesta",
    "Definimos alcance, tiempos y un precio claro. Sabés qué vamos a hacer desde el principio.",
  ],
  [
    "Diseño + desarrollo",
    "Damos forma a la idea y la construimos. Compartimos avances y ajustamos con vos.",
  ],
  [
    "Lanzamiento",
    "Publicamos, probamos y te acompañamos. El proyecto sale al mundo; seguimos cerca.",
  ],
];

function Arrow() {
  return (
    <span className={styles.arrow} aria-hidden="true">
      ↗
    </span>
  );
}
function Asterisk({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M47 4L52 94M7 28L91 70M9 76L87 21"
        stroke="currentColor"
        strokeWidth="12"
        strokeLinecap="square"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <div className={styles.page}>
      <a href="#contenido" className={styles.skipLink}>
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido">
        <section id="top" className={styles.hero}>
          <div className={styles.heroMeta}>
            <span>Estudio creativo independiente</span>
            <span>
              Montevideo, Uruguay <span className={styles.dot} />
            </span>
          </div>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <h1 className={styles.headline}>
                <span>Diseño, desarrollo</span>
                <span>y experiencias</span>
                <span>digitales con</span>
                <em>dirección creativa.</em>
              </h1>
              <p className={styles.heroDescription}>
                Creamos páginas web, ecommerce, automatizaciones y productos
                digitales para marcas que quieren crecer.
              </p>
              <div className={styles.heroActions}>
                <a className={styles.button} href="#trabajos">
                  Ver proyectos <Arrow />
                </a>
                <a className={styles.textLink} href={WHATSAPP}>
                  Contactar <Arrow />
                </a>
              </div>
            </div>
            <div className={styles.collage}>
              <div className={styles.colorPaper} />
              <figure className={styles.heroPhoto}>
                <Image
                  src="/assets/montevideo.webp"
                  alt="Palacio Salvo y arquitectura del centro de Montevideo"
                  fill
                  sizes="(max-width: 600px) 70vw, (max-width: 1000px) 43vw, 30vw"
                  preload
                />
                <figcaption>Una mirada desde el sur.</figcaption>
              </figure>
              <div className={styles.collageCutout}>
                <Image
                  src="/assets/studio.webp"
                  alt=""
                  fill
                  sizes="(max-width: 600px) 32vw, 16vw"
                />
              </div>
              <Asterisk className={styles.heroAsterisk} />
              <div className={styles.collageNote}>
                Marcas más humanas
                <br />
                en un mundo
                <br />
                <em>más digital.</em>
              </div>
              <span className={styles.handwritten}>
                ideas que toman forma ↗
              </span>
              <span className={styles.collageCaption}>
                Ideas / Sitios / Automatizaciones / Resultados
              </span>
            </div>
          </div>
          <div className={styles.heroBottom}>
            <p>
              Estrategia, diseño y tecnología
              <br />
              para un impacto real en tu negocio.
            </p>
            <span>Desde Montevideo para Uruguay y LATAM.</span>
            <a href="#trabajos" aria-label="Explorar proyectos">
              ↓
            </a>
          </div>
        </section>

        <section id="trabajos" className={styles.work}>
          <div className={styles.container}>
            <div className={styles.sectionTop}>
              <span className={styles.eyebrow}>Proyectos seleccionados</span>
              <span className={styles.eyebrow}>
                Diseñados acá. Vividos allá afuera.
              </span>
            </div>
            <div className={styles.workLayout}>
              <div className={styles.workIntro}>
                <h2>
                  El trabajo
                  <br />
                  <em>habla.</em>
                </h2>
                <p>
                  Trabajamos con marcas y negocios para crear experiencias
                  digitales que se ven bien, funcionan y generan resultados.
                </p>
                <a
                  className={styles.textLink}
                  href="/portfolio-adrian-machin.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver todos los proyectos <Arrow />
                </a>
                <span className={styles.smallNote}>
                  Portfolio completo · PDF
                </span>
                <Asterisk className={styles.workAsterisk} />
              </div>
              <div className={styles.projects}>
                {PROJECTS.map((project) => (
                  <Reveal
                    key={project.name}
                    as="article"
                    className={styles.project}
                  >
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Ver proyecto ${project.name} (abre en otra pestaña)`}
                    >
                      <div
                        className={`${styles.projectImage} ${styles[project.image]}`}
                      >
                        <Image
                          src={`/assets/projects/${project.image}.webp`}
                          alt={`Captura real del sitio de ${project.name}`}
                          width={1440}
                          height={1000}
                          sizes="(max-width: 760px) 90vw, 65vw"
                        />
                        <span className={styles.projectView}>
                          Ver proyecto <Arrow />
                        </span>
                      </div>
                      <div className={styles.projectInfo}>
                        <div>
                          <span className={styles.eyebrow}>
                            {project.category}
                          </span>
                          <h3>{project.name}</h3>
                        </div>
                        <Arrow />
                      </div>
                      <p>{project.description}</p>
                      {project.status && (
                        <span className={styles.projectStatus}>
                          {project.status}
                        </span>
                      )}
                    </a>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="servicios" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionTop}>
              <span className={styles.eyebrow}>Lo que hacemos</span>
              <span className={styles.eyebrow}>
                Criterio creativo. Soluciones concretas.
              </span>
            </div>
            <Reveal className={styles.sectionHeading}>
              <h2>
                Diseño que se ve.
                <br />
                <em>Tecnología que funciona.</em>
              </h2>
              <p>
                De la primera idea a la última línea de código. Pensamos,
                diseñamos y construimos lo que tu negocio necesita.
              </p>
            </Reveal>
            <div className={styles.services}>
              {SERVICES.map((service) => (
                <Reveal
                  key={service.title}
                  as="article"
                  className={styles.service}
                >
                  <a
                    href={WHATSAPP}
                    aria-label={`Consultar por ${service.title}`}
                  >
                    <div className={styles.serviceImage}>
                      <Image
                        src={service.image}
                        alt={service.alt}
                        fill
                        sizes="(max-width: 600px) 90vw, 42vw"
                      />
                    </div>
                    <div className={styles.serviceTitle}>
                      <h3>{service.title}</h3>
                      <Arrow />
                    </div>
                  </a>
                  <h4>{service.label}</h4>
                  <p>{service.description}</p>
                  <span className={styles.serviceDetail}>{service.detail}</span>
                </Reveal>
              ))}
            </div>
            <div className={styles.inmoNote}>
              <div>
                <span className={styles.eyebrow}>Para inmobiliarias</span>
                <h3>
                  Menos carga de datos.
                  <br />
                  <em>Más tiempo para tus clientes.</em>
                </h3>
              </div>
              <div>
                <p>
                  Fotos, datos esenciales y una descripción. La IA arma la ficha
                  para que revises y publiques. Con mapa, bot multi-idioma y
                  administración de propiedades.
                </p>
                <a className={styles.textLink} href={WHATSAPP}>
                  Quiero mi plataforma <Arrow />
                </a>
                <span className={styles.smallNote}>
                  Desde USD 400 · Demo disponible
                </span>
              </div>
            </div>
          </div>
        </section>

        <section id="porque" className={styles.why}>
          <div className={styles.container}>
            <div className={styles.whyGrid}>
              <div className={styles.whyVisual}>
                <span className={styles.eyebrow}>Por qué PIXO</span>
                <div className={styles.whyPhoto}>
                  <Image
                    src="/assets/montevideo.webp"
                    alt="Una mirada a Montevideo, la ciudad desde donde trabaja PIXO"
                    fill
                    sizes="(max-width: 760px) 85vw, 35vw"
                  />
                </div>
                <span className={styles.whyHandwriting}>
                  Montevideo → LATAM
                </span>
                <p>
                  Ideas reales.
                  <br />
                  Resultados concretos.
                </p>
              </div>
              <div className={styles.whyContent}>
                <Reveal as="h2">
                  Un estudio chico.
                  <br />
                  <em>Una mirada propia.</em>
                </Reveal>
                <p className={styles.whyLead}>
                  Nos involucramos en lo que hacemos. Hablás con quienes
                  piensan, diseñan y construyen tu proyecto.
                </p>
                <div>
                  {WHY.map(([title, description]) => (
                    <Reveal key={title} className={styles.reason}>
                      <h3>{title}</h3>
                      <p>{description}</p>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="proceso" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionTop}>
              <span className={styles.eyebrow}>Cómo trabajamos</span>
              <span className={styles.eyebrow}>Conversar. Crear. Lanzar.</span>
            </div>
            <Reveal className={styles.sectionHeading}>
              <h2>
                Las buenas ideas
                <br />
                <em>se construyen juntos.</em>
              </h2>
              <p>
                Un proceso claro, con espacio para probar, conversar y tomar
                buenas decisiones.
              </p>
            </Reveal>
            <div className={styles.process}>
              {PROCESS.map(([title, description]) => (
                <Reveal key={title} className={styles.processStep}>
                  <span aria-hidden="true">↗</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="precios" className={styles.pricing}>
          <div className={styles.container}>
            <div className={styles.sectionTop}>
              <span className={styles.eyebrow}>Inversión</span>
              <span className={styles.eyebrow}>
                Alcances claros. Precios honestos.
              </span>
            </div>
            <Reveal className={styles.sectionHeading}>
              <h2>
                Un punto
                <br />
                <em>de partida.</em>
              </h2>
              <p>
                Estos son nuestros precios de referencia. Cada proyecto tiene su
                contexto y lo cotizamos según tus necesidades.
              </p>
            </Reveal>
            <div>
              {PRICING.map((plan) => (
                <Reveal key={plan.name} className={styles.priceRow}>
                  <div>
                    <h3>{plan.name}</h3>
                    <p>{plan.desc}</p>
                  </div>
                  <div>
                    <span className={styles.price}>{plan.price}</span>
                    <details className={styles.priceDetails}>
                      <summary>
                        Qué incluye <span aria-hidden="true">+</span>
                      </summary>
                      <ul>
                        {plan.features.map((feature) => (
                          <li key={feature}>{feature}</li>
                        ))}
                      </ul>
                    </details>
                  </div>
                  <a className={styles.textLink} href={plan.cta.href}>
                    {plan.cta.label} <Arrow />
                  </a>
                </Reveal>
              ))}
            </div>
            <p className={styles.pricingNote}>
              Todos los precios en USD. Aceptamos transferencia, MercadoPago y
              crypto. Facturación disponible.
            </p>
          </div>
        </section>

        <section id="faq" className={styles.section}>
          <div className={`${styles.container} ${styles.faqLayout}`}>
            <div>
              <span className={styles.eyebrow}>Preguntas frecuentes</span>
              <h2>
                Antes de
                <br />
                <em>empezar.</em>
              </h2>
              <p>Las dudas también son parte del proceso.</p>
            </div>
            <FAQAccordion items={FAQ} />
          </div>
        </section>

        <section id="contacto" className={styles.contact}>
          <div className={styles.container}>
            <div className={styles.sectionTop}>
              <span className={styles.eyebrow}>¿Tenés una idea?</span>
              <span className={styles.eyebrow}>Hagámosla realidad.</span>
            </div>
            <Reveal as="h2">
              Hagamos algo
              <br />
              que valga la pena
              <br />
              <em>mirar.</em>
              <Asterisk className={styles.contactAsterisk} />
            </Reveal>
            <div className={styles.contactBottom}>
              <a href={WHATSAPP} className={styles.contactCta}>
                Hablemos <Arrow />
              </a>
              <p>
                Contanos qué tenés en mente.
                <br />
                La primera conversación es el comienzo.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerTop}>
            <p>
              Creative digital studio
              <br />
              <span>Montevideo, Uruguay.</span>
            </p>
            <nav aria-label="Navegación del pie">
              <a href="#servicios">Servicios</a>
              <a href="#trabajos">Proyectos</a>
              <a href="#precios">Precios</a>
              <a href="#contacto">Contacto</a>
            </nav>
            <div>
              <a
                href="https://instagram.com/pixodesign.uy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram <Arrow />
              </a>
              <a href="mailto:adrianmachinrodriguez@gmail.com">
                Email <Arrow />
              </a>
              <a href={WHATSAPP}>
                WhatsApp <Arrow />
              </a>
            </div>
          </div>
          <a
            href="#top"
            className={styles.footerLogo}
            aria-label="PIXO, volver al inicio"
          >
            PIXO<span>®</span>
          </a>
          <div className={styles.footerBottom}>
            <span>© 2026 PIXO</span>
            <span>Diseño + tecnología + dirección creativa.</span>
            <a href="/portfolio-adrian-machin.pdf" download>
              Descargar portfolio técnico <Arrow />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
