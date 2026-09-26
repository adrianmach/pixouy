import Image from "next/image";
import Header from "./components/Header";
import Reveal from "./components/Reveal";
import HomepageMotion from "./components/HomepageMotion";
import FAQAccordion from "./components/FAQAccordion";
import LaptopStage from "./components/LaptopStage";
import ServiceSymbol, { type ServiceKind } from "./components/ServiceSymbol";
import digital from "./digital.module.css";
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
    title: "Web Design",
    kind: "web",
    description:
      "Sitios con identidad. Diseño y desarrollo a medida para que tu marca se vea bien y funcione mejor.",
    detail: "Diseño · Desarrollo · SEO",
  },
  {
    title: "Ecommerce",
    kind: "shop",
    description:
      "Tu próxima venta empieza con una buena experiencia. Tiendas con catálogo, pagos y gestión simple.",
    detail: "Tiendas · Pagos · Gestión",
  },
  {
    title: "Automatizaciones",
    kind: "automation",
    description:
      "Menos tareas repetidas. Conectamos tus herramientas para que pedidos, mensajes y reportes fluyan.",
    detail: "Procesos · APIs · Integraciones",
  },
  {
    title: "Desarrollo + IA",
    kind: "ai",
    description:
      "Inteligencia artificial con un propósito. Creamos plataformas y herramientas para problemas reales.",
    detail: "Software · Plataformas · IA",
  },
] satisfies {
  title: string;
  kind: ServiceKind;
  description: string;
  detail: string;
}[];

const NOTES = [
  {
    category: "Web · Planificación",
    title: "Antes de diseñar, hacete estas preguntas.",
    intro: "Una web empieza con una idea clara de lo que tiene que resolver.",
    paragraphs: [
      "¿Quién va a entrar a tu sitio y qué necesita encontrar? Empezá por esa persona: qué dudas tiene, qué información busca y qué acción querés que pueda completar.",
      "Reuní los textos, las fotos y la información de tu negocio. No hace falta tener todo perfecto, pero sí saber qué querés contar y qué te diferencia.",
      "Elegí una prioridad para el lanzamiento: recibir consultas, mostrar tu trabajo o vender. Ese objetivo ayuda a decidir qué construir primero y qué puede esperar.",
    ],
  },
  {
    category: "Ecommerce · Experiencia",
    title: "Una tienda es mucho más que un catálogo.",
    intro:
      "Comprar debería ser fácil, desde el primer producto hasta la entrega.",
    paragraphs: [
      "Mostrá el producto con fotos claras, medidas y una descripción útil. Lo que una persona preguntaría en tu local también necesita encontrarlo en tu tienda.",
      "Explicá cómo se paga, cuánto cuesta el envío y cuándo llega el pedido. Esa información tiene que estar disponible antes del último paso.",
      "Probá el recorrido completo desde tu celular. Buscar, elegir una variante, agregar al carrito y consultar una duda son parte del diseño, tanto como la portada.",
    ],
  },
  {
    category: "Automatización · Negocios",
    title: "¿Qué tarea podrías dejar de repetir?",
    intro:
      "El mejor punto de partida suele estar en tu rutina de todos los días.",
    paragraphs: [
      "Anotá las tareas que hacés una y otra vez: copiar pedidos, enviar avisos, actualizar una planilla. Buscá una que tenga pasos claros y se repita con frecuencia.",
      "Antes de conectar herramientas, definí de dónde salen los datos, a dónde van y qué debería pasar si falta información. Automatizar también implica pensar las excepciones.",
      "Empezá con un flujo pequeño y revisá su resultado. Conservá una forma de intervenir cuando haga falta; la herramienta tiene que ayudarte a trabajar mejor.",
    ],
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
function ForwardArrow() {
  return (
    <span className={digital.arrow} aria-hidden="true">
      →
    </span>
  );
}

export default function Home() {
  return (
    <div className={styles.page}>
      <a href="#contenido" className={styles.skipLink}>
        Saltar al contenido
      </a>
      <Header />
      <HomepageMotion>
        <section id="top" className={digital.hero}>
          <div className={digital.container}>
            <div className={digital.heroGrid}>
              <div className={digital.heroCopy}>
                <p className={digital.eyebrow}>
                  <span className={digital.dot} /> Estudio digital en Uruguay
                </p>
                <h1 className={digital.headline}>
                  <span>IDEAS</span>
                  <span>QUE</span>
                  <span>
                    FUNCIONAN<span className={digital.underscore}>_</span>
                  </span>
                </h1>
                <p className={digital.heroDescription}>
                  Diseñamos y desarrollamos sitios web, ecommerce,
                  automatizaciones e integraciones con IA para marcas que
                  quieren ir más lejos.
                </p>
                <a href={WHATSAPP} className={digital.button}>
                  Hablemos de tu proyecto <ForwardArrow />
                </a>
                <p className={digital.heroProof}>
                  <span aria-hidden="true">↳</span> Diseño propio. Código tuyo.
                  Trato directo.
                </p>
              </div>
              <LaptopStage />
            </div>
            <div className={digital.heroBottom}>
              <span>De Montevideo al mundo.</span>
              <span>34°54′ S · 56°11′ O</span>
              <a href="#trabajos">
                Explorá lo que hacemos <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
        </section>

        <section id="trabajos" className={digital.work}>
          <div className={digital.container}>
            <div className={digital.sectionBar}>
              <h2 className={digital.eyebrow}>
                <span className={digital.dot} /> Proyectos destacados
              </h2>
              <a
                className={digital.textLink}
                href="/portfolio-adrian-machin.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver todos los proyectos <ForwardArrow />
                <span className={digital.pdfLabel}>PDF</span>
              </a>
            </div>
            <div className={digital.projects}>
              {PROJECTS.map((project, index) => (
                <Reveal
                  as="article"
                  key={project.name}
                  className={digital.project}
                  delay={index * 100}
                >
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Ver proyecto ${project.name} (abre en otra pestaña)`}
                  >
                    <div
                      className={`${digital.projectImage} ${digital[project.image]}`}
                    >
                      <Image
                        src={`/assets/projects/${project.image}.webp`}
                        alt={`Captura real del sitio de ${project.name}`}
                        width={1440}
                        height={1000}
                        sizes="(max-width: 700px) 90vw, 30vw"
                      />
                      <span className={digital.projectView} aria-hidden="true">
                        Ver proyecto →
                      </span>
                    </div>
                    <div className={digital.projectCategory}>
                      {project.category}
                    </div>
                    <div className={digital.projectTitle}>
                      <h3>{project.name}</h3>
                      <ForwardArrow />
                    </div>
                    <p>{project.description}</p>
                    {project.status && (
                      <span className={digital.projectStatus}>
                        {project.status}
                      </span>
                    )}
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="servicios" className={digital.servicesSection}>
          <div className={digital.container}>
            <div className={digital.sectionHeading}>
              <div>
                <p className={digital.eyebrow}>
                  <span className={digital.dot} /> Lo que hacemos
                </p>
                <h2>
                  NUESTROS
                  <br />
                  SERVICIOS<span className={digital.blue}>.</span>
                </h2>
              </div>
              <p className={digital.sectionAside}>
                Soluciones para
                <br />
                un mundo real <span aria-hidden="true">↗</span>
              </p>
            </div>
            <div className={digital.services}>
              {SERVICES.map((service, index) => (
                <Reveal
                  as="article"
                  key={service.title}
                  className={`${digital.service} ${digital[service.kind]}`}
                  delay={index * 100}
                >
                  <a
                    href={WHATSAPP}
                    aria-label={`Consultar por ${service.title}`}
                  >
                    <div className={digital.serviceIcon}>
                      <ServiceSymbol kind={service.kind} />
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <div className={digital.serviceBottom}>
                      <span>{service.detail}</span>
                      <span className={digital.circleArrow} aria-hidden="true">
                        ↗
                      </span>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
            <div className={digital.inmoNote}>
              <div>
                <span className={digital.eyebrow}>
                  También para inmobiliarias
                </span>
                <h3>
                  Menos carga de datos.
                  <br />
                  Más tiempo para tus clientes.
                </h3>
              </div>
              <div>
                <p>
                  Fotos, datos esenciales y una descripción. La IA arma la ficha
                  para que revises y publiques. Con mapa, bot multi-idioma y
                  administración de propiedades.
                </p>
                <a className={digital.textLink} href={WHATSAPP}>
                  Quiero mi plataforma <ForwardArrow />
                </a>
                <span className={digital.smallNote}>
                  Desde USD 400 · Demo disponible
                </span>
              </div>
            </div>
          </div>
        </section>

        <section id="porque" className={digital.about}>
          <div className={`${digital.container} ${digital.aboutGrid}`}>
            <div className={digital.aboutVisual}>
              <Image
                src="/assets/montevideo.webp"
                alt="Palacio Salvo, Montevideo: la ciudad desde donde trabaja PIXO"
                fill
                sizes="(max-width: 700px) 90vw, 38vw"
              />
              <span className={digital.aboutLocation}>
                UY
                <br />
                <span aria-hidden="true">↗</span>
                <small>MONTEVIDEO / LATAM</small>
              </span>
            </div>
            <div className={digital.aboutContent}>
              <p className={digital.eyebrow}>
                <span className={digital.dot} /> Somos PIXO
              </p>
              <Reveal as="h2">
                Un estudio chico.
                <br />
                <span className={digital.blue}>Ideas que van lejos.</span>
              </Reveal>
              <p className={digital.aboutLead}>
                Diseño, código y una conversación directa. Hablás con quienes
                piensan y construyen tu proyecto, desde la primera idea hasta el
                lanzamiento.
              </p>
              <div className={digital.reasons}>
                {WHY.map(([title, description]) => (
                  <div key={title} className={digital.reason}>
                    <span aria-hidden="true">↗</span>
                    <div>
                      <h3>{title}</h3>
                      <p>{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="proceso" className={digital.section}>
          <div className={digital.container}>
            <div className={digital.sectionHeading}>
              <div>
                <p className={digital.eyebrow}>
                  <span className={digital.dot} /> Así trabajamos
                </p>
                <h2>
                  DEL “TENGO UNA IDEA”
                  <br />
                  AL “YA ESTÁ ONLINE”.
                </h2>
              </div>
              <p>
                Un proceso claro.
                <br />
                Vos sos parte en cada paso.
              </p>
            </div>
            <div className={digital.process}>
              {PROCESS.map(([title, description], index) => (
                <Reveal className={digital.processStep} key={title} delay={index * 80}>
                  <span className={digital.stepMarker} aria-hidden="true">
                    ↗
                  </span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="precios" className={digital.pricing}>
          <div className={digital.container}>
            <div className={digital.sectionHeading}>
              <div>
                <p className={digital.eyebrow}>
                  <span className={digital.dot} /> Inversión
                </p>
                <h2>
                  UN BUEN PUNTO
                  <br />
                  DE PARTIDA<span className={digital.blue}>.</span>
                </h2>
              </div>
              <p>
                Precios de referencia, sin letra chica.
                <br />
                Cada proyecto se cotiza según su alcance.
              </p>
            </div>
            <div>
              {PRICING.map((plan) => (
                <div key={plan.name} className={digital.priceRow}>
                  <div>
                    <h3>{plan.name}</h3>
                    <p>{plan.desc}</p>
                  </div>
                  <div>
                    <span className={digital.price}>{plan.price}</span>
                    <details className={digital.priceDetails}>
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
                  <a className={digital.textLink} href={plan.cta.href}>
                    {plan.cta.label} <ForwardArrow />
                  </a>
                </div>
              ))}
            </div>
            <p className={digital.pricingNote}>
              Todos los precios en USD. Aceptamos transferencia, MercadoPago y
              crypto. Facturación disponible.
            </p>
          </div>
        </section>

        <section id="blog" className={digital.section}>
          <div className={digital.container}>
            <div className={digital.sectionHeading}>
              <div>
                <p className={digital.eyebrow}>
                  <span className={digital.dot} /> Blog · Ideas útiles
                </p>
                <h2>
                  ANTES DEL
                  <br />
                  PRÓXIMO CLIC<span className={digital.blue}>.</span>
                </h2>
              </div>
              <p>
                Notas cortas para pensar
                <br />
                tu próximo proyecto digital.
              </p>
            </div>
            <div className={digital.notes}>
              {NOTES.map((note) => (
                <article className={digital.note} key={note.title}>
                  <span className={digital.eyebrow}>{note.category}</span>
                  <h3>{note.title}</h3>
                  <p>{note.intro}</p>
                  <details>
                    <summary>
                      Leer nota <span aria-hidden="true">+</span>
                    </summary>
                    <div>
                      {note.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </details>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className={digital.faqSection}>
          <div className={`${digital.container} ${digital.faqLayout}`}>
            <div>
              <p className={digital.eyebrow}>
                <span className={digital.dot} /> Preguntas frecuentes
              </p>
              <h2>
                TODO CLARO
                <br />
                DESDE EL INICIO.
              </h2>
              <p>Las dudas también son parte del proceso.</p>
            </div>
            <FAQAccordion items={FAQ} />
          </div>
        </section>

        <section id="contacto" className={digital.contact}>
          <div className={digital.container}>
            <div className={digital.contactTop}>
              <span className={digital.eyebrow}>
                Tu próximo proyecto empieza acá
              </span>
              <span aria-hidden="true">UY → LATAM</span>
            </div>
            <Reveal as="h2">
              ¿TENÉS UNA IDEA?
              <br />
              HAGAMOS QUE
              <br />
              <span>FUNCIONE.</span>
            </Reveal>
            <div className={digital.contactBottom}>
              <a href={WHATSAPP} className={digital.contactCta}>
                Hablemos de tu proyecto <ForwardArrow />
              </a>
              <p>
                Contanos qué tenés en mente.
                <br />
                Nosotros te ayudamos a darle forma.
              </p>
            </div>
          </div>
        </section>
      </HomepageMotion>
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
