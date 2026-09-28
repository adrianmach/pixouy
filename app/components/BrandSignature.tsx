import styles from "../digital.module.css";

type BrandStop = "hero" | "projects" | "services" | "contact";

/** The same typographic P as the wordmark, with four reserved landing places. */
export default function BrandSignature({ stop }: { stop: BrandStop }) {
  return (
    <div
      className={`${styles.signature} ${styles[`signature_${stop}`]}`}
      data-brand-stop={stop}
      aria-hidden="true"
    >
      <span className={styles.signatureRail} />
      <span className={styles.signatureDock}>
        <span className={styles.signatureMark} data-brand-mark="">P</span>
      </span>
    </div>
  );
}
