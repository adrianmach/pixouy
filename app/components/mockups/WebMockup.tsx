import styles from "../Mockups.module.css";
import { IconArrowRight, IconLock } from "./Icons";

const BAR_HEIGHTS = ["38%", "58%", "44%", "76%", "62%", "90%"];

export default function WebMockup() {
  return (
    <div className={`${styles.mockup} ${styles.webMockup}`}>
      <div className={styles.browserBar}>
        <span className={`${styles.dot} ${styles.dotRed}`} />
        <span className={`${styles.dot} ${styles.dotYellow}`} />
        <span className={`${styles.dot} ${styles.dotGreen}`} />
        <span className={styles.urlBar}>
          <IconLock /> pixo.studio
        </span>
      </div>
      <div className={styles.pageNav}>
        <span className={styles.pageLogo}>Acme</span>
        <span className={styles.pageNavLinks}>
          <span>Inicio</span>
          <span>Producto</span>
          <span>Precios</span>
        </span>
        <span className={styles.pageNavCta}>Empezar</span>
      </div>
      <div className={styles.heroArea}>
        <span className={styles.heroEyebrow}>NUEVO · V2.0</span>
        <span className={styles.heroHeading}>
          Vendé más,
          <br />
          trabajá menos.
        </span>
        <span className={styles.heroSub}>Todo tu negocio en un solo lugar.</span>
        <span className={styles.heroBtns}>
          <span className={styles.btnFilled}>
            Empezar gratis <IconArrowRight />
          </span>
          <span className={styles.btnOutline}>Ver demo</span>
        </span>
      </div>
      <div className={styles.chartArea}>
        <div className={styles.chartHead}>
          <span className={styles.chartLabel}>Ventas · últimos 6 meses</span>
          <span className={styles.chartTrend}>+24%</span>
        </div>
        <div className={styles.chartBars}>
          {BAR_HEIGHTS.map((h, i) => (
            <span key={i} className={styles.chartBar} style={{ height: h }} />
          ))}
        </div>
      </div>
      <span className={styles.ghostCursor} aria-hidden="true" />
    </div>
  );
}
