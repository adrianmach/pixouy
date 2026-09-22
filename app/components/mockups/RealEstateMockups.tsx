"use client";

import { useEffect, useState } from "react";
import styles from "../Mockups.module.css";
import { prefersReducedMotion, useInView } from "../useInView";
import {
  IconChat,
  IconImagePlaceholder,
  IconLock,
  IconMapPin,
  IconSparkle,
} from "./Icons";

/* ===================== PASO 01 — fotos + campos mínimos ===================== */
export function PropertyPhotosMockup() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`${styles.mockup} ${styles.photosMockup} ${inView ? styles.inView : ""}`}
    >
      <div className={styles.appHeader}>
        <span className={styles.appTitle}>
          <IconImagePlaceholder size={13} /> Nueva propiedad
        </span>
      </div>
      <div className={styles.photoStrip}>
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className={styles.photoStripTile} style={{ transitionDelay: `${i * 90}ms` }}>
            <IconImagePlaceholder size={13} />
          </div>
        ))}
      </div>
      <div className={styles.photoFields} style={{ transitionDelay: "620ms" }}>
        <div className={styles.opChips}>
          <span className={`${styles.opChip} ${styles.opChipActive}`}>Alquiler</span>
          <span className={styles.opChip}>Venta</span>
          <span className={styles.opChip}>Temporal</span>
        </div>
        <div className={styles.fieldRow}>
          <div className={styles.fieldMini}>
            <span className={styles.fieldMiniLabel}>Zona</span>
            <span className={styles.fieldMiniValue}>Pocitos</span>
          </div>
          <div className={styles.fieldMini}>
            <span className={styles.fieldMiniLabel}>Precio</span>
            <span className={styles.fieldMiniValue}>USD 850</span>
          </div>
        </div>
      </div>
      <div className={styles.uploadBar}>
        <span className={styles.uploadBtn}>Subir fotos</span>
        <span className={styles.uploadCount}>6 fotos</span>
      </div>
    </div>
  );
}

/* ===================== PASO 02 — descripción escrita ===================== */
const VOICE_TEXT =
  "Muy luminoso, cocina equipada, garaje, a una cuadra de la rambla. Ideal para pareja.";

export function PropertyVoiceMockup() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const [typed, setTyped] = useState("");

  useEffect(() => {
    if (!inView) return;

    if (prefersReducedMotion()) {
      const id = setTimeout(() => setTyped(VOICE_TEXT), 0);
      return () => clearTimeout(id);
    }

    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setTyped(VOICE_TEXT.slice(0, i));
      if (i >= VOICE_TEXT.length) clearInterval(id);
    }, 28);
    return () => clearInterval(id);
  }, [inView]);

  return (
    <div ref={ref} className={`${styles.mockup} ${styles.voiceMockup}`}>
      <div className={styles.appHeader}>
        <span className={styles.appTitle}>Describí la propiedad</span>
      </div>
      <div className={styles.voiceBox}>
        <p className={styles.voiceText}>
          {typed}
          <span className={styles.voiceCursor} aria-hidden="true" />
        </p>
      </div>
    </div>
  );
}

/* ===================== PASO 03 — ficha generada ===================== */
export function PropertyAIMockup() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`${styles.mockup} ${styles.fichaMockup} ${inView ? styles.inView : ""}`}
    >
      <span className={styles.fichaAiLabel} style={{ transitionDelay: "0ms" }}>
        <IconSparkle size={10} /> Generado con IA
      </span>
      <h3 className={styles.fichaTitle} style={{ transitionDelay: "120ms" }}>
        Luminoso 2 dormitorios en Pocitos con garaje
      </h3>
      <div className={styles.fichaChips} style={{ transitionDelay: "260ms" }}>
        {["2 dorm", "1 baño", "Garaje", "Cocina equipada", "65m²"].map((c) => (
          <span key={c} className={styles.fichaChip}>
            {c}
          </span>
        ))}
      </div>
      <div className={styles.fichaDesc} style={{ transitionDelay: "400ms" }}>
        <span className={styles.fichaLine} style={{ width: "100%" }} />
        <span className={styles.fichaLine} style={{ width: "92%" }} />
        <span className={styles.fichaLine} style={{ width: "68%" }} />
      </div>
      <div className={styles.fichaFooter} style={{ transitionDelay: "540ms" }}>
        <span className={styles.fichaPrice}>USD 850 /mes</span>
        <span className={styles.fichaLocation}>
          <IconMapPin size={11} /> Pocitos, Montevideo
        </span>
      </div>
    </div>
  );
}

/* ===================== PASO 04 — publicar ===================== */
export function PropertyPublishMockup() {
  const { ref, inView } = useInView<HTMLDivElement>();
  const [published, setPublished] = useState(false);

  useEffect(() => {
    if (!inView) return;

    const id = setTimeout(() => setPublished(true), prefersReducedMotion() ? 0 : 1400);
    return () => clearTimeout(id);
  }, [inView]);

  return (
    <div
      ref={ref}
      className={`${styles.mockup} ${styles.publishMockup} ${inView ? styles.inView : ""}`}
    >
      <div className={styles.publishImg}>
        <IconImagePlaceholder size={26} />
        <div className={styles.publishLangs}>
          {["ES", "EN", "RU"].map((l) => (
            <span key={l} className={styles.publishLang}>
              {l}
            </span>
          ))}
        </div>
      </div>
      <div className={styles.publishBody}>
        <span className={styles.publishTitle}>Luminoso 2 dorm. en Pocitos</span>
        <span className={styles.publishMeta}>
          <IconMapPin size={10} /> Pocitos · 2 dorm · Garaje
        </span>
        <div className={styles.publishRow}>
          <span className={styles.publishPrice}>USD 850 /mes</span>
          <span className={`${styles.publishBtn} ${published ? styles.publishBtnDone : ""}`}>
            {published ? "✓ Publicada" : "Publicar"}
          </span>
        </div>
      </div>
    </div>
  );
}

/* ===================== PLATAFORMA COMPLETA — mockup del sitio ===================== */
const SITE_PROPERTIES = [
  { name: "2 dorm. Pocitos", price: "USD 850", imgClass: styles.sitePropImg1 },
  { name: "Casa 3 dorm. Carrasco", price: "USD 1.450", imgClass: styles.sitePropImg2 },
  { name: "Studio Ciudad Vieja", price: "USD 520", imgClass: styles.sitePropImg3 },
];

export function RealEstateSiteMockup() {
  return (
    <div className={`${styles.mockup} ${styles.siteMockup}`}>
      <div className={styles.browserBar}>
        <span className={`${styles.dot} ${styles.dotRed}`} />
        <span className={`${styles.dot} ${styles.dotYellow}`} />
        <span className={`${styles.dot} ${styles.dotGreen}`} />
        <span className={styles.urlBar}>
          <IconLock /> inmo-intel.vercel.app
        </span>
      </div>
      <div className={styles.siteNav}>
        <span className={styles.siteLogo}>INMO</span>
        <span className={styles.siteNavLinks}>
          <span>Propiedades</span>
          <span>Mapa</span>
          <span>Contacto</span>
        </span>
      </div>
      <div className={styles.sitePropGrid}>
        {SITE_PROPERTIES.map((p) => (
          <div key={p.name} className={styles.sitePropCard}>
            <div className={`${styles.sitePropImg} ${p.imgClass}`}>
              <IconImagePlaceholder size={16} />
            </div>
            <span className={styles.sitePropName}>{p.name}</span>
            <span className={styles.sitePropPrice}>{p.price}</span>
          </div>
        ))}
      </div>
      <div className={styles.siteMapStrip}>
        <span className={styles.siteMapLabel}>Mapa interactivo</span>
        <span className={styles.siteMapPin} style={{ left: "18%" }} />
        <span className={styles.siteMapPin} style={{ left: "46%" }} />
        <span className={styles.siteMapPin} style={{ left: "74%" }} />
      </div>
      <span className={styles.siteChatBubble} aria-hidden="true">
        <IconChat size={14} />
      </span>
    </div>
  );
}
