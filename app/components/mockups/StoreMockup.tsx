"use client";

import { useEffect, useState } from "react";
import styles from "../Mockups.module.css";

const PRODUCTS = [
  {
    name: "Zapatillas Urbanas",
    price: "$3.290",
    oldPrice: "$4.100",
    badge: "-20%",
    icon: "👟",
    rating: "★★★★☆",
  },
  {
    name: "Mochila Classic",
    price: "$2.450",
    icon: "🎒",
    rating: "★★★★★",
  },
  {
    name: "Auriculares Pro",
    price: "$1.890",
    icon: "🎧",
    rating: "★★★★☆",
  },
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
        <span className={styles.storeLogo}>STORE</span>
        <span className={styles.storeSearch}>🔍 Buscar productos...</span>
        <span className={styles.storeCart}>
          🛒 <span className={styles.storeCartCount}>{cart}</span>
        </span>
      </div>
      <div className={styles.storePromo}>🚚 Envío gratis en compras +$3.000</div>
      <div className={styles.productGrid}>
        {PRODUCTS.map((p) => (
          <div key={p.name} className={styles.productCard}>
            <div className={styles.productImg}>
              {p.badge && <span className={styles.productBadge}>{p.badge}</span>}
              <span aria-hidden="true">{p.icon}</span>
            </div>
            <span className={styles.productName}>{p.name}</span>
            <span className={styles.productRating} aria-hidden="true">
              {p.rating}
            </span>
            <span className={styles.productPriceRow}>
              <span className={styles.productPrice}>{p.price}</span>
              {p.oldPrice && <span className={styles.productPriceOld}>{p.oldPrice}</span>}
            </span>
          </div>
        ))}
      </div>
      <div className={styles.checkoutBar}>
        <span className={styles.checkoutInfo}>
          <span className={styles.checkoutCount}>3 productos</span>
          <span className={styles.checkoutTotal}>$7.630</span>
        </span>
        <span className={styles.checkoutBtn}>Finalizar compra</span>
      </div>
    </div>
  );
}
