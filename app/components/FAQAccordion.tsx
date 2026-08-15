"use client";

import { useState } from "react";
import styles from "../page.module.css";
import { IconPlus } from "./mockups/Icons";

type FAQItem = { q: string; a: string };

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={styles.faqList}>
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div
            key={item.q}
            className={`${styles.faqItem} ${open ? styles.faqItemOpen : ""}`}
          >
            <button
              type="button"
              className={styles.faqQuestion}
              aria-expanded={open}
              aria-controls={`faq-answer-${i}`}
              onClick={() => setOpenIndex(open ? null : i)}
            >
              <span>{item.q}</span>
              <span className={styles.faqIcon} aria-hidden="true">
                <IconPlus />
              </span>
            </button>
            <div className={styles.faqAnswerWrap} id={`faq-answer-${i}`}>
              <div className={styles.faqAnswerInner}>
                <p className={styles.faqAnswer}>{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
