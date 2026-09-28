import Image from "next/image";
import Header from "./components/Header";
import Reveal from "./components/Reveal";
import HomepageMotion from "./components/HomepageMotion";
import BrandSignature from "./components/BrandSignature";
import FAQAccordion from "./components/FAQAccordion";
import Experience from "./components/Experience";
import experience from "./experience.module.css";
import digital from "./digital.module.css";
import styles from "./page.module.css";

const PRICING = [
  {
    name: "Landing Page",
    price: "desde USD 180",
    desc: "Tu negocio bien presentado, con un recorrido claro hasta la consulta.",
    features: [
      "Diseño a medida",
      "Responsive",
      "Formulario de contacto",
      "SEO básico",
      "Hosting configurado",
      "Entrega en 5-7 días",
    ],
    cta: { label: "QUIERO MI WEB", href: "https://wa.me/59898955038" },
    variant: "outline",
  },
  {
    name: "Tienda Online",
    price: "desde USD 400",
    desc: "Del primer producto al pago: una tienda lista para recibir pedidos.",
    features: [
      "Todo lo de Landing",
      "Catálogo de productos",
      "Carrito y checkout",
      "Pasarela de pagos (MercadoPago/Stripe)",
      "Gestión de stock",
      "Panel de administración",
      "Cálculo de envíos",
    ],
    cta: { label: "QUIERO MI TIENDA", href: "https://wa.me/59898955038" },
    variant: "filled",
    featured: true,
    badge: "MÁS ELEGIDO",
  },
  {
    name: "Desarrollo a Medida",
    price: "Cotización personalizada",
    desc: "Automatizaciones con IA e integraciones para las tareas que hoy te quitan tiempo.",
    features: [
      "Sistemas web complejos",
      "Automatizaciones",
      "Integraciones con APIs",
      "Dashboards",
      "IA aplicada",
      "Soporte dedicado",
    ],
    cta: { label: "HABLEMOS DEL PROCESO", href: "https://wa.me/59898955038" },
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
  ["Hablás con quien lo hace", "Diseñamos, programamos y respondemos tus preguntas. Sin pasar de equipo en equipo."],
  [
    "Primero, entender tu negocio",
    "Definimos qué tiene que resolver la web o el proceso antes de elegir la tecnología.",
  ],
  [
    "Cada decisión tiene una función",
    "Una consulta más fácil. Un pedido mejor organizado. Una tarea menos para tu equipo.",
  ],
];
const PROCESS = [
  [
    "Consulta",
    "Nos mostrás qué vendés, cómo trabajás y dónde se tranca el día. De ahí sale el punto de partida.",
  ],
  [
    "Propuesta",
    "Definimos alcance, tiempos y un precio claro. Sabés qué vamos a hacer desde el principio.",
  ],
  [
    "Diseño + desarrollo",
    "Diseñamos la web o el flujo, lo construimos y lo probamos con vos. Ves avances, no una sorpresa al final.",
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
        <Experience />

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
                DISEÑO QUE CONECTA.
                <br />
                <span className={digital.blue}>TECNOLOGÍA QUE SIMPLIFICA.</span>
              </Reveal>
              <p className={digital.aboutLead}>
                Somos PIXO, un estudio digital en Montevideo. Juntamos estrategia,
                diseño y desarrollo para crear páginas web y automatizaciones con IA.
                Vos conocés tu negocio. Nosotros te ayudamos a llevarlo a una web,
                una tienda o un proceso que funcione mejor.
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
                Una web nueva o una tarea que querés automatizar:
                empezamos por entender qué necesitás resolver.
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
                  HABLEMOS
                  <br />
                  DE NÚMEROS<span className={digital.blue}>.</span>
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
                  <span className={digital.dot} /> Notas de PIXO
                </p>
                <h2>
                  DECISIONES CHICAS.
                  <br />
                  MEJORES PROYECTOS<span className={digital.blue}>.</span>
                </h2>
              </div>
              <p>
                Qué tener claro antes de hacer tu web,
                abrir una tienda o automatizar una tarea.
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
              <p>Plazos, pagos y qué pasa después de publicar. Sin vueltas.</p>
            </div>
            <FAQAccordion items={FAQ} />
          </div>
        </section>

        <section id="contacto" className={`${digital.contact} ${experience.contact}`}>
          <div className={digital.container}>
            <BrandSignature stop="contact" />
            <div className={digital.contactTop}>
              <span className={digital.eyebrow}>
                Una web nueva. Una tarea menos. Empecemos.
              </span>
              <span aria-hidden="true">UY → LATAM</span>
            </div>
            <Reveal as="h2">
              TU NEGOCIO
              <br />
              PUEDE VERSE
              <br />
              <span>MUCHO MEJOR.</span>
            </Reveal>
            <div className={digital.contactBottom}>
              <a href={WHATSAPP} className={digital.contactCta}>
                HABLEMOS <ForwardArrow />
              </a>
              <p>
                Y trabajar mucho mejor también.
                <br />
                Contanos qué querés construir o qué proceso querés dejar de hacer a mano.
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
