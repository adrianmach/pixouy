import Image from "next/image";
import LaptopStage from "./LaptopStage";
import s from "../experience.module.css";

const wa = "https://wa.me/59898955038";
const projects = [
  { name: "Benji$", image: "benjis", category: "ECOMMERCE · DESARROLLO WEB", description: "Ecommerce desarrollado a medida con catálogo de productos, experiencia mobile-first y panel administrativo.", href: "https://benjis-production.up.railway.app/", tags: "Catálogo · Pedidos · Administración", demo: false },
  { name: "Joyería Central", image: "joyeria-central", category: "ECOMMERCE · DESARROLLO WEB", description: "Rediseño y desarrollo de una experiencia digital para una joyería con trayectoria, con catálogo de productos, categorías, servicios y contacto directo.", href: "https://www.joyeriacentraluy.com/", tags: "Catálogo · Categorías · Servicios", demo: false },
  { name: "Hecho en Casa", image: "hecho-en-casa", category: "WEB · CATÁLOGO · UX", description: "Sitio web para una marca de pastelería artesanal, pensado para mostrar productos, recibir consultas y convertir visitas en pedidos.", href: "https://www.hechoencasauy.com/", tags: "Productos · Consultas · Pedidos", demo: false },
  { name: "Plataforma inmobiliaria con IA", image: "niko", category: "PIXO LAB · DEMO · IA", description: "Una demo creada por PIXO para explorar cómo una inmobiliaria puede combinar web, administración y automatización con inteligencia artificial.", href: "https://inmo-intel.vercel.app/", tags: "Propiedades · Contenido con IA · Buscador · Mapa · Administración", demo: true },
];
const steps = [
  ["01", "FORMULARIO", "Una persona envía información desde tu web.", "Una consulta, un pedido o una solicitud"],
  ["02", "PROCESAR INFORMACIÓN", "El flujo valida los datos y los organiza según tus reglas.", "Comprobar campos → Ordenar información"],
  ["03", "IA", "Interpreta, clasifica o genera contenido cuando aporta valor.", "Aplicar tus criterios → Preparar un resultado"],
  ["04", "ACCIÓN AUTOMÁTICA", "La información llega a la herramienta que necesitás.", "Enviar un email, guardar datos o actualizar un sistema"],
];
const actions = ["Enviar email", "Guardar datos", "Generar contenido", "Responder consultas", "Notificar", "Clasificar información", "Actualizar un sistema"];
const services = [
  ["01 / DISEÑO + CÓDIGO", "PÁGINAS WEB", "Diseño y desarrollo sitios modernos, rápidos y hechos a medida para representar mejor tu negocio y convertir visitas en oportunidades.", "QUIERO UNA WEB", "↗"],
  ["02 / DE LA VIDRIERA AL CHECKOUT", "ECOMMERCE", "Tiendas online con catálogo, pagos, administración e integraciones pensadas para vender.", "VER ECOMMERCE", "↗"],
  ["03 / TU NUEVA FORMA DE TRABAJAR", "AUTOMATIZACIONES + IA", "Automatizo tareas, conecto herramientas y creo procesos inteligentes para ahorrar trabajo manual.", "QUIERO AUTOMATIZAR", "✳"],
  ["04 / DE LA IDEA AL CÓDIGO", "DESARROLLO A MEDIDA", "Plataformas, paneles, APIs e integraciones para proyectos que necesitan algo más que una página web.", "CONTAME TU IDEA", "⌘"],
];

export default function Experience() {
  return <div className={s.experience}>
    <section id="top" className={s.hero} data-scene="hero">
      <div className={s.meta}><span><i /> ESTUDIO DIGITAL INDEPENDIENTE / URUGUAY</span><span>DISEÑO QUE SE VE. TECNOLOGÍA QUE SE SIENTE.</span></div>
      <div className={s.heroGrid}>
        <div className={s.heroCopy}>
          <h1><span><b>DISEÑO</b></span><span><b>PÁGINAS WEB.</b></span><span className={s.aiLine}><b>AUTOMATIZO</b></span><span className={s.aiLine}><b>NEGOCIOS CON IA.</b></span></h1>
          <p>Diseño y desarrollo páginas web, ecommerce y automatizaciones con IA para negocios que quieren vender mejor, ahorrar tiempo y crecer con tecnología.</p>
          <div className={s.actions}><a className={s.button} href={wa}>QUIERO MI WEB <span>↗</span></a><a className={s.link} href="#trabajos">VER PROYECTOS ↘</a></div>
        </div>
        <div className={s.visual} data-hero-visual><LaptopStage /><span className={s.visualStamp}>BUILT TO<br />DO MORE.</span></div>
      </div>
      <div className={s.heroFoot}><span>DISEÑO + DESARROLLO + IA. DESDE URUGUAY.</span><a href="#trabajos">BAJÁ. ESTO RECIÉN EMPIEZA. ↓</a></div>
      <span className={s.fallingP} data-falling-p aria-hidden="true">P</span>
    </section>

    <section id="trabajos" className={s.work} data-scene="work">
      <div className={s.workHeading}><p className={s.label}>01 / HECHO POR PIXO</p><h2 data-mask>NO HAGO<br />LA MISMA WEB<br /><span>DOS VECES.</span></h2><p>Cada negocio necesita algo distinto. Estos son algunos proyectos que diseñé y desarrollé desde PIXO.</p></div>
      <div className={s.gallery} data-gallery><div className={s.gallerySticky}><div className={s.galleryTop}><span>TRABAJOS SELECCIONADOS / 2026</span><span>EXPLORÁ →</span></div><div className={s.track} data-track>
        {projects.map((p, i) => <article className={s.project} key={p.name}><a href={p.href} target="_blank" rel="noopener noreferrer" aria-label={`Ver ${p.name} (abre en otra pestaña)`}>
          <div className={s.projectPicture} data-project-image><div className={s.browser}><span>● ● ●</span><span>{p.name.toLowerCase()} / {p.demo ? "demo de PIXO" : "proyecto real"}</span><span>↗</span></div><Image src={`/assets/projects/${p.image}.webp`} alt={`Captura real del proyecto ${p.name}`} width={1440} height={1000} sizes="(max-width: 900px) 92vw, 72vw" />{p.demo && <span className={s.demoBadge}>PIXO LAB / DEMO</span>}<span className={s.view} aria-hidden="true">VER<br />↗</span></div>
          <div className={s.projectInfo}><div><span className={s.label}>{p.category}</span><h3>{p.name}<span>↗</span></h3></div><div><p>{p.description}</p><small>{p.tags}</small><span className={s.projectCta}>{p.demo ? "VER DEMO" : "VER PROYECTO"} ↗</span></div><span className={s.projectNumber}>0{i + 1}</span></div>
        </a></article>)}
      </div></div></div>
      <a className={s.portfolio} href="/portfolio-adrian-machin.pdf" target="_blank" rel="noopener noreferrer">EL PORTFOLIO COMPLETO <span>PDF ↗</span></a>
    </section>

    <section className={s.processing} aria-label="De una web a un sistema conectado" data-processing><div><span>DE UNA WEB QUE IMPACTA</span><span>A UN NEGOCIO QUE AVANZA ↘</span></div><p aria-hidden="true"><b data-processing-p>P</b>IXO<span>®</span></p><div><span>DISEÑO × TECNOLOGÍA</span><span>PROCESSING THE NEXT MOVE…</span></div></section>

    <section id="automatizaciones" className={s.automation} data-automation>
      <div className={s.automationIntro}><p className={s.label}>02 / TECNOLOGÍA CON UN PROPÓSITO</p><h2 data-mask>TU WEB<br />TAMBIÉN PUEDE<br /><span>TRABAJAR POR VOS.</span></h2><div className={s.automationCopy}><h3>AUTOMATIZACIONES<br />+ IA.</h3><p>No todo tiene que hacerse a mano. Puedo conectar tu web con herramientas externas, automatizar tareas repetitivas y aplicar inteligencia artificial donde realmente tenga sentido.</p></div></div>
      <div className={s.flowHeading}><span>UN FORMULARIO. MUCHAS POSIBILIDADES.</span><span>DEMO ILUSTRATIVA / SEGUÍ BAJANDO ↓</span></div>
      <ol className={s.flow}>{steps.map(([num, title, desc, sample]) => <li key={num} data-flow-node><div className={s.flowRail} aria-hidden="true"><span>{num}</span><svg viewBox="0 0 2 100" preserveAspectRatio="none"><path d="M1 0V100" pathLength="1" /></svg></div><div className={s.flowCard}><span className={s.flowStatus}>PASO {num} <i /></span><h3>{title}</h3><p>{desc}</p><code>{sample}</code></div></li>)}</ol>
      <div className={s.flowDone} data-flow-done>✓ AUTOMATIZADO <span>Vos seguís con lo importante.</span></div>
      <div className={s.possibleActions}><p className={s.label}>POSIBLES ACCIONES / SEGÚN LO QUE NECESITE TU NEGOCIO</p><ul>{actions.map(action => <li key={action}>{action}</li>)}</ul></div><p className={s.automationQuote}>Si lo hacés todos los días de la misma forma, <em>probablemente podamos automatizarlo.</em></p><a className={s.button} href={`${wa}?text=Quiero%20automatizar%20un%20proceso`}>QUIERO AUTOMATIZAR <span>↗</span></a>
    </section>

    <div className={s.impact} data-impact><span className={s.impactP} data-impact-p aria-hidden="true">P</span><p>HAGO<br /><b>QUE PASE.</b></p><span className={s.label}>MENOS VUELTAS. MÁS POSIBILIDADES. ↘</span></div>
    <section id="servicios" className={s.services}><div className={s.servicesHeading}><p className={s.label}>03 / ELEGÍ TU PRÓXIMO PASO</p><h2 data-mask>BUEN DISEÑO.<br />MUCHO MÁS<br /><span>POR DENTRO.</span></h2></div><div className={s.serviceGrid}>{services.map(([label, title, desc, cta, icon], i) => <article key={title} className={`${s.service} ${s[`service${i}`]}`} data-service><a href={i === 1 ? "#trabajos" : `${wa}?text=${encodeURIComponent(`Me interesa: ${title}`)}`}><span className={s.label}>{label}</span><span className={s.serviceIcon} aria-hidden="true">{icon}</span><h3>{title}</h3><p>{desc}</p><span className={s.serviceCta}>{cta} <span>↗</span></span></a></article>)}</div></section>
    <div className={s.marquee} aria-label="Web, IA, ecommerce, automatización, desarrollo"><div aria-hidden="true">{[0, 1].map(i => <span key={i}>WEB · IA · ECOMMERCE · AUTOMATIZACIÓN · DESARROLLO ·&nbsp;</span>)}</div><div aria-hidden="true">{[0, 1].map(i => <span key={i}>HECHO A MEDIDA. HECHO EN PIXO. IDEAS QUE SE CONVIERTEN EN ALGO REAL. &nbsp;</span>)}</div></div>
  </div>;
}
