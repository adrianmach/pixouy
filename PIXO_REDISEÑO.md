# PIXO — Rediseño completo (Light Editorial + Audaz + Producto Técnico)

Rediseñá TODA la web. Mantené el copy base, el naranja de marca, el logo y los datos de contacto. Cambiá el sistema visual completo. Ejecutá TODO sin preguntar nada. Verificá en browser desktop y mobile, corregí lo que falle, y pusheá a git. No pares hasta terminar.

---

## CONCEPTO CLAVE

Pixo es una empresa que DESARROLLA software (webs, ecommerce, automatizaciones, IA), no un estudio de diseño gráfico. La web debe transmitir capacidad técnica + diseño espectacular. Referencias: Apple + Linear + Framer + Vercel. Que en 5 segundos se entienda "creamos páginas web, ecommerce, automatizaciones e IA para hacer crecer negocios."

CRÍTICO: NO usar imágenes de arquitectura/lifestyle/stock genérico. Mostrar PRODUCTO: mockups de interfaces (tiendas, dashboards, editores) hechos con HTML/CSS puro. Esto prueba que programan.

---

## PALETA

```css
:root {
  --bg: #F5F1EA;           /* crema principal */
  --bg-alt: #EFEAE0;       /* crema alterno */
  --surface: #FFFFFF;      /* blanco para cards */
  --ink: #1A1613;          /* casi negro cálido */
  --ink-soft: #6B6155;     /* texto secundario */
  --ink-faint: #A89E90;    /* labels, captions */
  --line: #DDD5C8;         /* líneas, bordes */
  --orange: #FF5C1A;       /* naranja principal */
  --orange-deep: #E64200;  /* naranja hover */
  --orange-soft: #FFE8DC;  /* naranja claro (tags) */
  --dark: #16110D;         /* casi negro (bloques contraste) */
}
```

Distribución: 70% crema, 20% tinta, 10% naranja. Naranja en: botones, palabra del headline, números, líneas de acento, mockups, hovers.

---

## TIPOGRAFÍA

```html
<link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;800;900&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```

- **Archivo 900** — hero, títulos de sección, números gigantes
- **Inter 400-600** — body, descripciones, tags, UI

Escala:
```
Hero:      clamp(3.5rem, 9vw, 8rem)   Archivo 900, line-height 0.95, letter-spacing -0.04em
Sección:   clamp(2.5rem, 6vw, 5rem)   Archivo 900, letter-spacing -0.03em
Título svc: clamp(1.8rem, 3vw, 2.5rem) Archivo 800
Subtítulo: clamp(1.1rem, 2vw, 1.4rem) Inter 400, color --ink-soft
Body:      17px  Inter 400, line-height 1.6
Label:     13px  Inter 600, uppercase, letter-spacing 0.14em, color --orange
Tag:       12px  Inter 500, uppercase
Números:   clamp(2.5rem, 5vw, 4rem) Archivo 900, color --orange
```

---

## ANIMACIONES (esto es central — movimiento con personalidad)

### 1. Scroll reveal — entrada
Cada bloque entra con fade + translateY al aparecer:
```css
.reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 800ms cubic-bezier(0.16,1,0.3,1), transform 800ms cubic-bezier(0.16,1,0.3,1);
}
.reveal.visible { opacity: 1; transform: none; }
```
Delays escalonados (100ms, 200ms, 300ms) entre elementos hermanos.
Implementar con IntersectionObserver, threshold 0.15.

### 2. Scroll reveal — SALIDA (entrada Y salida)
Los elementos también se atenúan al SALIR del viewport (scrolleando hacia arriba). Usar IntersectionObserver que agrega Y quita la clase .visible:
```javascript
const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
    else e.target.classList.remove('visible'); // salida
  });
}, { threshold: 0.15, rootMargin: '-50px 0px' });
```

### 3. Imágenes fijas al scrollear (parallax fixed)
Agregar 2 secciones de "imagen fija" (background-attachment fixed effect) que quedan quietas mientras el contenido pasa. Como NO funciona en iOS con CSS, usar la técnica de imagen sobredimensionada con translateY por JS:

```html
<section class="parallax-section" style="position:relative;height:80vh;overflow:hidden">
  <div class="parallax-img" style="position:absolute;top:-20%;left:0;width:100%;height:140%;will-change:transform">
    <img src="URL" style="width:100%;height:100%;object-fit:cover;filter:brightness(0.4) saturate(1.1)" />
  </div>
  <div style="position:absolute;inset:0;background:linear-gradient(to bottom,rgba(22,17,13,0.3),rgba(22,17,13,0.6))"></div>
  <div class="parallax-content" style="position:relative;z-index:2;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:0 24px">
    <!-- contenido -->
  </div>
</section>
```

```javascript
const pImgs = document.querySelectorAll('.parallax-img');
window.addEventListener('scroll', () => {
  pImgs.forEach(img => {
    const rect = img.parentElement.getBoundingClientRect();
    if (rect.bottom > 0 && rect.top < window.innerHeight) {
      img.style.transform = 'translateY(' + (rect.top * 0.3) + 'px)';
    }
  });
}, { passive: true });
```

Usar estas 2 imágenes tech para las secciones fijas:
- Imagen 1 (después de servicios): https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80 (circuitos/hardware)
- Imagen 2 (antes del CTA): https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=1920&q=80 (código en pantalla)

### 4. Mockups que flotan
Los mockups de producto tienen animación de float sutil:
```css
@keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
.mockup { animation: float 6s ease-in-out infinite; }
```

### 5. Mockups animados internamente
- Tienda: el número del carrito sube (1→2→3) en loop, los precios naranja parpadean sutil
- Automatización: las flechas del flujo se dibujan/pulsan, los contadores (1.2k, 847) cuentan
- Web: cursor fantasma que se mueve, componentes que aparecen en secuencia

### 6. Números gigantes que cuentan
Los números de "por qué pixo" (+50, +30, 24/7, 99%) cuentan desde 0 al entrar al viewport. IntersectionObserver + requestAnimationFrame, easing cubic, 1800ms. VERIFICAR que funcione — valores finales +50, +30, 24/7, 99%.

### 7. Marquee continuo
La cinta naranja se mueve horizontal infinito.

### 8. Hover con carácter
Botones suben con sombra naranja, cards levantan con sombra cálida, mockups reaccionan al mouse.

### prefers-reduced-motion: desactivar TODO.

---

## MOCKUPS DE PRODUCTO (HTML/CSS puro — reemplazan las fotos de servicios)

### Servicio 01 — Páginas Web: Editor / navegador
Mockup de un navegador oscuro (fondo #16110D) con barra de tabs (3 dots, uno naranja), y dentro una landing en miniatura: barra naranja arriba, título, botones (uno naranja relleno, uno outline), grid de 3 bloques. Todo con divs y CSS.

### Servicio 02 — Automatizaciones: Constructor de flujos
Mockup de un dashboard claro (fondo blanco) mostrando un flujo: cajas conectadas con flechas naranjas ("Nuevo pedido → MercadoPago", "WhatsApp → Email"), y abajo 2-3 tarjetas de métricas con números ("1.2k Sincronizados", "847 Emails enviados").

### Servicio 03 — Tiendas Online: Tienda + checkout
Mockup de una tienda: header oscuro con "TIENDA" y carrito (🛒 3), grid de 3 productos (cada uno con imagen placeholder, nombre y precio naranja), y un botón "Finalizar compra" naranja. Se puede mostrar también un mini panel de admin.

Todos los mockups: border-radius 10px, sombra suave, animación float, y detalles animados internos.

---

## ESTRUCTURA Y SECCIONES

### NAVBAR
- Transparente sobre crema → al scroll: --bg con blur, línea inferior
- Logo "PIXO" Archivo 900
- Links: servicios · trabajos · por qué pixo (Inter 500, --ink-soft, hover naranja + underline animado)
- Botón "CONTACTAR" naranja a la derecha
- Mobile: hamburger → menú fullscreen crema con links GIGANTES (Archivo, 40px)

### HERO
- Fondo --bg. Altura ~100vh.
- Número gigante "01" o elemento gráfico naranja de fondo (opacity 0.06)
- Label: "// desarrollo web · ecommerce · automatización · ia"
- Headline GIGANTE (Archivo 900): "sistemas digitales diseñados con **precisión**." — "precisión" en naranja
- Subtítulo CLARO: "Creamos páginas web, tiendas online, automatizaciones e IA para hacer crecer tu negocio."
- 2 botones: "CONTACTAR ↗" (naranja) + "VER TRABAJOS" (outline)
- Reveal animation al cargar

### SHOWCASE "PIXO DESIGN" (bloque dark)
- Fondo --dark. Full width, 70vh.
- Logo "Pixo Design" naranja con glow
- Imágenes rotan detrás (fade lento 4-5s) — usar los mockups o imágenes tech
- Cursor bola blanca al hover
- Contraste dramático con el crema

### MARQUEE
- Cinta naranja (fondo --orange, texto --dark), Archivo 800, movimiento infinito
- "desarrollo web ✺ ecommerce ✺ automatización ✺ ia ✺ integraciones ✺ soporte"

### SERVICIOS
- Fondo --bg / --bg-alt alternado
- Label "[ lo que construimos ]" + línea-acento naranja
- 3 servicios, layout editorial 2 columnas (contenido + MOCKUP)
- Número gigante (01/02/03) Archivo 900, naranja opacity 0.18, como elemento gráfico
- Alternar lado del mockup (izq/der)
- Servicio 03 destacado: border-left naranja 3px + botón "QUIERO MI TIENDA"
- Reveal entrada Y salida

Contenido:
- 01 Páginas Web — "Sitios rápidos y a medida. Diseño, código y despliegue. Construidos para convertir visitantes en clientes." — Tags: Next.js · SEO · Mobile first · Carga rápida
- 02 Automatizaciones — "Conectamos tus herramientas. Pedidos, pagos, mensajes y reportes que se ejecutan solos, 24/7." — Tags: APIs · Webhooks · IA · Notificaciones
- 03 Tiendas Online — "Tu negocio abierto 24/7. Catálogo, carrito, pagos y envíos. Mientras dormís, tu tienda vende." — Tags: Shopify · WooCommerce · MercadoPago · Stock · Envíos — Botón "QUIERO MI TIENDA ↗"

### PARALLAX 1 (imagen fija tech — circuitos)
- Imagen fija con efecto parallax (técnica JS de arriba)
- Texto centrado: "TECNOLOGÍA QUE FUNCIONA" o "DESARROLLO · DISEÑO · RESULTADOS" (naranja, fuerte, con text-shadow)

### POR QUÉ PIXO + NÚMEROS
- Fondo --bg-alt
- Label "[ por qué pixo ]"
- 4 cards: Diseño a medida, Entrega rápida, Soporte continuo, SEO y conversión (mantener copy)
- Cards con hover naranja, íconos naranja
- Abajo, separado por línea-acento naranja: NÚMEROS GIGANTES que cuentan
- +50 Proyectos · +30 Clientes · 24/7 Soporte · 99% Satisfacción

### PARALLAX 2 (imagen fija tech — código)
- Segunda imagen fija antes del CTA
- Puede tener un texto o solo la imagen con overlay

### CTA (bloque dark o naranja)
- Fondo --dark o --orange
- Headline GIGANTE: "tu próximo proyecto digital, a un mensaje."
- Botón primary
- Email + Instagram

### FOOTER
- Fondo --dark
- Logo PIXO, "Montevideo, 2026", links, "PIXO_DSN_2026" monospace
- Naranja en hovers

---

## DATOS (mantener)
- WhatsApp: https://wa.me/59898955038
- Email: adrianmachinrodriguez@gmail.com
- Instagram: https://instagram.com/pixodesign.uy

---

## CHECKLIST
1. Fondo crema (#F5F1EA), NO blanco NI dark general
2. Archivo 900 GIGANTE en hero/títulos
3. Subtítulo hero explica el QUÉ (webs, ecommerce, automatización, IA)
4. Naranja golpea: botones, palabra headline, números, líneas, mockups
5. MOCKUPS de producto (editor, flujo, tienda) hechos con CSS — NO fotos de stock/arquitectura
6. Mockups tienen animación float + detalles animados internos
7. 2 secciones con imagen FIJA al scrollear (parallax) que funcionan en desktop Y mobile
8. Scroll reveal de ENTRADA y SALIDA
9. Números gigantes CUENTAN de 0 al valor (verificar +50/+30/24-7/99%)
10. Marquee naranja en movimiento
11. Bloque dark de contraste (showcase + CTA)
12. Servicio 03 destacado
13. Hover con carácter
14. Mobile responsive, hamburger con links gigantes, sin overflow
15. Tags técnicos (Next.js, APIs, MercadoPago)
16. Pusheado a git
