import Image from "next/image";
import styles from "../digital.module.css";

/** A lightweight device composition displaying an actual PIXO project. */
export default function LaptopStage() {
  return (
    <figure
      className={styles.stage}
      aria-label="Diseño y tecnología: el ecommerce de Benji$ en una laptop"
    >
      <div className={styles.architecture} aria-hidden="true">
        <Image
          src="/assets/studio.webp"
          alt=""
          fill
          sizes="(max-width: 700px) 56vw, (max-width: 900px) 350px, 28vw"
        />
      </div>
      <div className={styles.concreteBlock} aria-hidden="true" />
      <div className={styles.limeBlock} aria-hidden="true" />
      <div className={styles.blueSquare} aria-hidden="true" />
      <div className={styles.orangeMark} aria-hidden="true">
        ↗
      </div>
      <div className={styles.laptop}>
        <div className={styles.screen}>
          <span className={styles.camera} aria-hidden="true" />
          <Image
            src="/assets/projects/benjis.webp"
            alt="Web de Benji$, ecommerce desarrollado por PIXO"
            width={1440}
            height={1000}
            sizes="(max-width: 700px) 83vw, (max-width: 900px) 480px, 46vw"
            preload
          />
        </div>
        <div className={styles.keyboard} aria-hidden="true">
          <span />
        </div>
      </div>
      <span className={styles.stageLabel} aria-hidden="true">
        DISEÑO + TECNOLOGÍA
      </span>
      <figcaption>
        <span>Proyecto real. Benji$.</span>
        <span>Hecho por PIXO ↗</span>
      </figcaption>
    </figure>
  );
}
