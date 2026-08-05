import styles from "../Mockups.module.css";

export default function WebMockup() {
  return (
    <div className={`${styles.mockup} ${styles.webMockup}`}>
      <div className={styles.browserBar}>
        <span className={`${styles.dot} ${styles.dotActive}`} />
        <span className={styles.dot} />
        <span className={styles.dot} />
      </div>
      <div className={styles.browserBody}>
        <div className={styles.miniBar} />
        <div className={styles.miniTitle} />
        <div className={styles.miniSub} />
        <div className={styles.miniButtons}>
          <div className={styles.miniBtnFilled} />
          <div className={styles.miniBtnOutline} />
        </div>
        <div className={styles.miniGrid}>
          <div className={styles.miniBlock} />
          <div className={styles.miniBlock} />
          <div className={styles.miniBlock} />
        </div>
        <span className={styles.ghostCursor} aria-hidden="true" />
      </div>
    </div>
  );
}
