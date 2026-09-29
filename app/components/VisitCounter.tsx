"use client";

import { useEffect, useState } from "react";
import styles from "../page.module.css";

// Share one request per page load, including React effect remounts.
let visitRequest: Promise<number | null> | undefined;

function recordVisit() {
  if (!visitRequest) {
    visitRequest = fetch("/api/visits", {
      method: "POST",
      cache: "no-store",
      credentials: "omit",
      referrerPolicy: "no-referrer",
      signal: AbortSignal.timeout(10000),
    })
      .then(async (response) => {
        if (!response.ok) return null;
        const data: { value?: unknown } = await response.json();
        return typeof data.value === "number" && Number.isSafeInteger(data.value) && data.value >= 0
          ? data.value
          : null;
      })
      .catch(() => null);
  }
  return visitRequest;
}

export default function VisitCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    let active = true;
    void recordVisit().then((value) => {
      if (active) setCount(value);
    });
    return () => { active = false; };
  }, []);

  return (
    <div className={styles.visitCounter}>
      {count !== null && (
        <output aria-label="Total de visitas">
          {count.toLocaleString("es-UY")}
        </output>
      )}
    </div>
  );
}
