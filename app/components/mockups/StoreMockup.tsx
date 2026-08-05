"use client";

import { useEffect, useState } from "react";
import styles from "../Mockups.module.css";

const PRODUCTS = [
  { name: "Producto A", price: "$1.290" },
  { name: "Producto B", price: "$2.450" },
  { name: "Producto C", price: "$890" },
];

export default function StoreMockup() {
  const [cart, setCart] = useState(1);

  useEffect(() => {
    const reduceMotion =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const id = setInterval(() => {
      setCart((c) => (c >= 3 ? 1 : c + 1));
    }, 1400);
    return () => clearInterval(id);
  }, []);

  return (
    <div className={`${styles.mockup} ${styles.storeMockup}`}>
      <div className={styles.storeHeader}>
        <span className={styles.storeLogo}>TIENDA</span>
        <span className={styles.storeCart}>
          🛒 <span className={styles.storeCartCount}>{cart}</span>
        </span>
      </div>
      <div className={styles.productGrid}>
        {PRODUCTS.map((p) => (
          <div key={p.name} className={styles.productCard}>
            <div className={styles.productImg} />
            <div className={styles.productName} />
            <span className={styles.productPrice}>{p.price}</span>
          </div>
        ))}
      </div>
      <div className={styles.checkoutBtn}>Finalizar compra</div>
    </div>
  );
}
