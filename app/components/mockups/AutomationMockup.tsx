import Counter from "../Counter";
import styles from "../Mockups.module.css";
import { IconBag, IconBolt, IconCard, IconChat } from "./Icons";

export default function AutomationMockup() {
  return (
    <div className={`${styles.mockup} ${styles.flowMockup}`}>
      <div className={styles.appHeader}>
        <span className={styles.appTitle}>
          <IconBolt /> Automatizaciones
        </span>
        <span className={styles.appNewBtn}>+ Nuevo</span>
      </div>
      <div className={styles.flowCanvas}>
        <div className={styles.flowNode}>
          <span className={`${styles.nodeIcon} ${styles.nodeIconOrder}`} aria-hidden="true">
            <IconBag />
          </span>
          <span className={styles.nodeText}>
            <span className={styles.nodeTitle}>Nueva venta</span>
            <span className={styles.nodeSub}>Disparador</span>
          </span>
        </div>
        <span className={styles.flowConnector} aria-hidden="true" />
        <div className={styles.flowNode}>
          <span className={`${styles.nodeIcon} ${styles.nodeIconPay}`} aria-hidden="true">
            <IconCard />
          </span>
          <span className={styles.nodeText}>
            <span className={styles.nodeTitle}>Cobrar con MercadoPago</span>
            <span className={styles.nodeSub}>
              <span className={styles.statusDot} /> Activo
            </span>
          </span>
        </div>
        <span className={styles.flowConnector} aria-hidden="true" />
        <div className={styles.flowNode}>
          <span className={`${styles.nodeIcon} ${styles.nodeIconChat}`} aria-hidden="true">
            <IconChat />
          </span>
          <span className={styles.nodeText}>
            <span className={styles.nodeTitle}>Avisar por WhatsApp</span>
            <span className={styles.nodeSub}>
              <span className={styles.statusDot} /> Activo
            </span>
          </span>
        </div>
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
