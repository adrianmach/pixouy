import Image from "next/image";
import LaptopStage from "./LaptopStage";
import s from "../experience.module.css";

const wa = "https://wa.me/59898955038";
const projects = [
  { name: "Benji$", image: "benjis", category: "ECOMMERCE / MODA INDEPENDIENTE", description: "Una tienda con identidad propia. Del descubrimiento al pedido, sin perder actitud.", href: "https://benjis-production.up.railway.app/", tags: "Catálogo · Pedidos · Gestión" },
  { name: "Inmobiliaria", image: "niko", category: "PLATAFORMA WEB / IA APLICADA", description: "Propiedades, mapa e inteligencia artificial. Todo conectado para simplificar el trabajo de cada día.", href: "https://inmo-intel.vercel.app/", tags: "IA · Mapas · Administración" },
  { name: "Branda", image: "branda", category: "SOFTWARE / EN DESARROLLO", description: "Del brief a la campaña. Dirección creativa con IA que conserva la identidad de cada marca.", href: "https://branda-production-9d47.up.railway.app/", tags: "IA generativa · Flujos de contenido" },
];
const steps = [
  ["01", "ENTRA UN LEAD", "Una persona consulta desde tu web.", "“Hola, quiero cotizar una tienda.”"],
  ["02", "IA INTERPRETA", "Identifica la intención y organiza los datos.", "Intención: ecommerce / Nueva consulta"],
  ["03", "CRM", "Crea la oportunidad para tu equipo.", "Contacto guardado → Ventas"],
  ["04", "WHATSAPP", "Prepara una respuesta con contexto.", "Respuesta según tus reglas y permisos"],
  ["05", "EMAIL", "Envía la información que necesita.", "Presentación + próximos pasos"],
  ["06", "SEGUIMIENTO", "Programa la próxima acción.", "Recordatorio para el equipo ✓"],
];
const services = [
  ["01 / DISEÑO + CÓDIGO", "PÁGINAS WEB", "Diseñamos y desarrollamos sitios rápidos, actuales y hechos a medida para representar mejor tu negocio y convertir visitas en oportunidades.", "QUIERO UNA WEB", "↗"],
  ["02 / DE LA VIDRIERA AL CHECKOUT", "ECOMMERCE", "Tiendas donde comprar es fácil. Conectamos catálogo, pagos y pedidos para que puedas ocuparte de vender.", "QUIERO MI TIENDA", "↗"],
  ["03 / TU NUEVA FORMA DE TRABAJAR", "AUTOMATIZACIONES CON IA", "Automatizamos tareas, conectamos herramientas y creamos flujos inteligentes para que tu negocio trabaje mejor sin sumar trabajo manual.", "QUIERO AUTOMATIZAR", "✳"],
  ["04 / SI LO IMAGINÁS, LO CONSTRUIMOS", "DESARROLLO A MEDIDA", "Sistemas, plataformas e integraciones que conectan tus datos, tus herramientas y tu equipo. Hechos para tu forma de trabajar.", "HABLEMOS DE TU IDEA", "⌘"],
];

export default function Experience() {
  return <div className={s.experience}>
    <section id="top" className={s.hero} data-scene="hero">
      <div className={s.meta}><span><i /> ESTUDIO DIGITAL / URUGUAY</span><span>DISEÑO QUE SE VE. TECNOLOGÍA QUE SE SIENTE.</span></div>
      <div className={s.heroGrid}>
        <div className={s.heroCopy}>
          <h1><span><b>DISEÑAMOS</b></span><span><b>PÁGINAS WEB.</b></span><span className={s.aiLine}><b>AUTOMATIZAMOS</b></span><span className={s.aiLine}><b>NEGOCIOS CON IA.</b></span></h1>
          <p>Diseño, desarrollo y automatizaciones inteligentes para negocios que quieren vender más, trabajar mejor y crecer con tecnología.</p>
          <div className={s.actions}><a className={s.button} href={wa}>QUIERO MI WEB <span>↗</span></a><a className={s.link} href="#trabajos">VER PROYECTOS ↘</a></div>
        </div>
        <div className={s.visual} data-hero-visual><LaptopStage /><span className={s.visualStamp}>BUILT TO<br />DO MORE.</span></div>
      </div>
      <div className={s.heroFoot}><span>ESTRATEGIA. DISEÑO. DESARROLLO. IA.</span><a href="#trabajos">BAJÁ. ESTO RECIÉN EMPIEZA. ↓</a></div>
      <span className={s.fallingP} data-falling-p aria-hidden="true">P</span>
    </section>

    <section id="trabajos" className={s.work} data-scene="work">
      <div className={s.workHeading}><p className={s.label}>01 / HECHO POR PIXO</p><h2 data-mask>PÁGINAS WEB<br />QUE HACEN MÁS<br /><span>QUE VERSE BIEN.</span></h2><p>Diseñamos y desarrollamos sitios rápidos, claros y pensados para convertir visitas en oportunidades.</p></div>
      <div className={s.gallery} data-gallery><div className={s.gallerySticky}><div className={s.galleryTop}><span>TRABAJOS SELECCIONADOS / 2026</span><span>EXPLORÁ →</span></div><div className={s.track} data-track>
        {projects.map((p, i) => <article className={s.project} key={p.name}><a href={p.href} target="_blank" rel="noopener noreferrer" aria-label={`Ver ${p.name} (abre en otra pestaña)`}>
          <div className={s.projectPicture} data-project-image><div className={s.browser}><span>● ● ●</span><span>{p.name.toLowerCase()} / proyecto real</span><span>↗</span></div><Image src={`/assets/projects/${p.image}.webp`} alt={`Captura real del proyecto ${p.name}`} width={1440} height={1000} sizes="(max-width: 900px) 92vw, 72vw" /><span className={s.view} aria-hidden="true">VER<br />↗</span></div>
          <div className={s.projectInfo}><div><span className={s.label}>{p.category}</span><h3>{p.name}<span>↗</span></h3></div><div><p>{p.description}</p><small>{p.tags}</small></div><span className={s.projectNumber}>0{i + 1}</span></div>
        </a></article>)}
      </div></div></div>
      <a className={s.portfolio} href="/portfolio-adrian-machin.pdf" target="_blank" rel="noopener noreferrer">EL PORTFOLIO COMPLETO <span>PDF ↗</span></a>
    </section>

    <section className={s.processing} aria-label="De una web a un sistema conectado" data-processing><div><span>DE UNA WEB QUE IMPACTA</span><span>A UN NEGOCIO QUE AVANZA ↘</span></div><p aria-hidden="true"><b data-processing-p>P</b>IXO<span>®</span></p><div><span>DISEÑO × TECNOLOGÍA</span><span>PROCESSING THE NEXT MOVE…</span></div></section>

    <section id="automatizaciones" className={s.automation} data-automation>
      <div className={s.automationIntro}><p className={s.label}>02 / TECNOLOGÍA CON UN PROPÓSITO</p><h2 data-mask>MENOS TAREAS.<br /><span>MÁS NEGOCIO.</span></h2><div className={s.automationCopy}><h3>AUTOMATIZACIONES<br />CON IA.</h3><p>Conectamos tus herramientas y automatizamos tareas repetitivas para que ventas, atención, contenido y operaciones trabajen de forma más inteligente.</p></div></div>
      <div className={s.flowHeading}><span>UNA CONSULTA. TODO UN SISTEMA EN MOVIMIENTO.</span><span>DEMO ILUSTRATIVA / SEGUÍ BAJANDO ↓</span></div>
      <ol className={s.flow}>{steps.map(([num, title, desc, sample]) => <li key={num} data-flow-node><div className={s.flowRail} aria-hidden="true"><span>{num}</span><svg viewBox="0 0 2 100" preserveAspectRatio="none"><path d="M1 0V100" pathLength="1" /></svg></div><div className={s.flowCard}><span className={s.flowStatus}>PASO {num} <i /></span><h3>{title}</h3><p>{desc}</p><code>{sample}</code></div></li>)}</ol>
      <div className={s.flowDone} data-flow-done>✓ AUTOMATIZADO <span>Tu equipo sigue con lo importante.</span></div>
      <p className={s.automationQuote}>La IA no debería<br />darte <em>más trabajo.</em></p><a className={s.button} href={`${wa}?text=Quiero%20automatizar%20un%20proceso`}>QUIERO AUTOMATIZAR <span>↗</span></a>
    </section>

    <div className={s.impact} data-impact><span className={s.impactP} data-impact-p aria-hidden="true">P</span><p>HACEMOS<br /><b>QUE PASE.</b></p><span className={s.label}>MENOS VUELTAS. MÁS POSIBILIDADES. ↘</span></div>
    <section id="servicios" className={s.services}><div className={s.servicesHeading}><p className={s.label}>03 / ELEGÍ TU PRÓXIMO PASO</p><h2 data-mask>BUEN DISEÑO.<br />MUCHO MÁS<br /><span>POR DENTRO.</span></h2></div><div className={s.serviceGrid}>{services.map(([label, title, desc, cta, icon], i) => <article key={title} className={`${s.service} ${s[`service${i}`]}`} data-service><a href={`${wa}?text=${encodeURIComponent(`Me interesa: ${title}`)}`}><span className={s.label}>{label}</span><span className={s.serviceIcon} aria-hidden="true">{icon}</span><h3>{title}</h3><p>{desc}</p><span className={s.serviceCta}>{cta} <span>↗</span></span></a></article>)}</div></section>
    <div className={s.marquee} aria-label="Web, IA, ecommerce, automatización, desarrollo"><div aria-hidden="true">{[0, 1].map(i => <span key={i}>WEB · IA · ECOMMERCE · AUTOMATIZACIÓN · DESARROLLO ·&nbsp;</span>)}</div><div aria-hidden="true">{[0, 1].map(i => <span key={i}>HECHO A MEDIDA. HECHO EN PIXO. IDEAS QUE SE CONVIERTEN EN ALGO REAL. &nbsp;</span>)}</div></div>
  </div>;
}
