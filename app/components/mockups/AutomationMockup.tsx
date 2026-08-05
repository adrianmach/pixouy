import Counter from "../Counter";
import styles from "../Mockups.module.css";

const Arrow = () => (
  <svg className={styles.flowArrow} viewBox="0 0 34 12" aria-hidden="true">
    <path d="M0 6 H28 M22 1 L28 6 L22 11" />
  </svg>
);

export default function AutomationMockup() {
  return (
    <div className={`${styles.mockup} ${styles.flowMockup}`}>
      <div className={styles.flowRow}>
        <span className={styles.flowBox}>Nuevo pedido</span>
        <Arrow />
        <span className={styles.flowBox}>MercadoPago</span>
      </div>
      <div className={styles.flowRow}>
        <span className={styles.flowBox}>WhatsApp</span>
        <Arrow />
        <span className={styles.flowBox}>Email</span>
      </div>
      <div className={styles.metricsRow}>
        <div className={styles.metricCard}>
          <span className={styles.metricValue}>
            <Counter value="1.2k" />
          </span>
          <span className={styles.metricLabel}>Sincronizados</span>
        </div>
        <div className={styles.metricCard}>
          <span className={styles.metricValue}>
            <Counter value="847" />
          </span>
          <span className={styles.metricLabel}>Emails enviados</span>
        </div>
      </div>
    </div>
  );
}
