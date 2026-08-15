# PIXO — Remodelación profesional completa

Rediseñá TODA la web de Pixo para máxima profesionalidad y seriedad. Mantené parte de la estética actual (crema editorial, tipografía Archivo, naranja) pero elevala a nivel agencia seria. Agregá secciones nuevas: precios, proceso de trabajo, FAQ. Ejecutá TODO sin preguntar nada. Verificá en browser desktop y mobile, corregí lo que falle, pusheá a git. No pares hasta terminar.

---

## OBJETIVO

Que Pixo se vea como una agencia de desarrollo seria y establecida — no un freelancer, no un estudio genérico. Referencias: Linear, Vercel, Stripe, Framer. Que transmita confianza técnica, precios claros, proceso profesional. Que un cliente empresa entre y piense "estos son serios, saben lo que hacen, y sé cuánto cuesta."

---

## PALETA (naranja + teal profundo corporativo)

```css
:root {
  /* Neutros crema */
  --bg: #F5F1EA;           /* crema principal */
  --bg-alt: #EFEAE0;       /* crema alterno */
  --surface: #FFFFFF;      /* blanco para cards */
  --ink: #1A1613;          /* casi negro cálido */
  --ink-soft: #6B6155;     /* texto secundario */
  --ink-faint: #A89E90;    /* labels, captions */
  --line: #DDD5C8;         /* líneas, bordes */

  /* Naranja de marca (acento cálido, CTAs) */
  --orange: #FF5C1A;
  --orange-deep: #E64200;
  --orange-soft: #FFE8DC;

  /* Teal profundo (color corporativo, secciones serias, acento frío) */
  --teal: #0E4F4A;         /* teal profundo principal */
  --teal-mid: #157A72;     /* teal medio */
  --teal-soft: #DCEEEB;    /* teal claro para fondos de tags/highlights */
  --teal-dark: #0A2E2B;    /* teal muy oscuro para bloques de contraste */

  /* Casi negro para bloques dark */
  --dark: #16110D;
}
```

Distribución: crema domina (60%), tinta (25%), naranja (8% — CTAs y acentos cálidos), teal (7% — elementos corporativos, algunos fondos de sección, badges de confianza). El naranja y el teal se complementan: naranja para acción/energía, teal para confianza/estabilidad. Usar teal en: bloques de proceso, badges de "garantía", números de stats alternados, algunos fondos de sección oscuros (teal-dark en vez de negro puro para dar carácter).

---

## TIPOGRAFÍA

```html
<link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800;900&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```

- **Archivo 800-900** — hero, títulos de sección, números, precios grandes
- **Inter 400-600** — body, descripciones, tags, UI, features

Escala:
```
Hero:      clamp(2.5rem, 6.5vw, 6rem)   Archivo 900, line-height 0.92, letter-spacing -0.03em
Sección:   clamp(2rem, 5vw, 4rem)       Archivo 800, letter-spacing -0.02em
Título card: 1.5rem                      Archivo 700
Precio:    clamp(2.5rem, 5vw, 4rem)      Archivo 900
Subtítulo: clamp(1.05rem, 2vw, 1.35rem) Inter 400, --ink-soft
Body:      16px  Inter 400, line-height 1.65
Label:     13px  Inter 600, uppercase, letter-spacing 0.14em
Tag:       12px  Inter 500, uppercase
```

CRÍTICO: El hero debe entrar COMPLETO en el viewport (100vh) sin cortarse. Todo el contenido visible sin scroll: label + headline + subtítulo + botones. Verificar en 1440x768 y 375px.

---

## SISTEMA DE ALINEACIÓN

Definí un sistema coherente y aplicalo en TODA la web. Container con max-width 1200px, centrado, padding lateral 24px (desktop) / 20px (mobile). Los labels de sección, títulos y contenido alineados de forma consistente. Nada de un texto centrado y otro a la izquierda sin razón. Que se vea sistemático.

---

## ESTRUCTURA COMPLETA (secciones en orden)

### 1. NAVBAR
- Transparente sobre crema → al scroll: --bg con blur, línea inferior sutil
- Logo "PIXO" Archivo 900
- Links: Servicios · Precios · Proceso · FAQ (Inter 500, --ink-soft, hover naranja + underline animado)
- Botón "CONTACTAR" naranja a la derecha
- Mobile: hamburger → menú fullscreen crema con links grandes (Archivo, 36px)

### 2. HERO
- Fondo --bg. 100vh, contenido centrado vertical, TODO visible sin cortarse.
- Label: "// desarrollo web · ecommerce · automatización · ia"
- Headline (Archivo 900): "sistemas digitales diseñados con **precisión**." — "precisión" en naranja
- Subtítulo CLARO: "Creamos páginas web, tiendas online y automatizaciones para hacer crecer tu negocio. Desde Montevideo, para toda LATAM."
- 2 botones: "VER PRECIOS ↓" (naranja) + "CONTACTAR" (outline teal)
- Badges de confianza debajo (fila pequeña): "✓ Entrega en días" · "✓ Soporte incluido" · "✓ Código propio" — en teal, pequeños
- Elemento gráfico de fondo sutil (número o forma, opacity muy baja)
- Reveal animation al cargar

### 3. BARRA DE CONFIANZA / LOGOS (nueva)
- Franja delgada bajo el hero
- Texto pequeño centrado: "Tecnologías que usamos" o "Trabajamos con"
- Fila de nombres de tecnologías en gris (como si fueran logos): Next.js · React · Shopify · WordPress · MercadoPago · Stripe · Vercel
- Da sensación de stack técnico serio
- Fondo --bg-alt

### 4. SERVICIOS (con mockups CSS)
- Label "[ lo que construimos ]" + línea-acento naranja
- 3 servicios, layout editorial 2 columnas (contenido + mockup CSS)
- Número gigante (01/02/03) Archivo 900, naranja opacity 0.15
- Mantener los mockups CSS de producto (editor/navegador, flujo de automatización, tienda) que ya existen — mejorarlos si es necesario
- Servicio 03 destacado con border-left naranja
- Reveal entrada y salida

Contenido:
- 01 Páginas Web — "Sitios rápidos y a medida. Diseño, código y despliegue. Construidos para convertir visitantes en clientes." — Tags: Next.js · SEO · Mobile first · Carga rápida
- 02 Automatizaciones — "Conectamos tus herramientas. Pedidos, pagos, mensajes y reportes que se ejecutan solos, 24/7." — Tags: APIs · Webhooks · IA · Notificaciones
- 03 Tiendas Online — "Tu negocio abierto 24/7. Catálogo, carrito, pagos y envíos. Mientras dormís, tu tienda vende." — Tags: Shopify · WooCommerce · MercadoPago · Stock · Envíos

### 5. PRECIOS (nueva — CENTRAL)
- Fondo --bg
- Label "[ precios ]" + título "Planes claros, sin sorpresas."
- Subtítulo: "Precios de referencia. Cada proyecto se cotiza según tus necesidades."
- 3 cards de precio en grid (1 col mobile):

  **CARD 1 — Landing Page**
  - Nombre: "Landing Page"
  - Precio: "desde USD 180"
  - Descripción: "Una página profesional para presentar tu negocio o producto."
  - Features (con check naranja): Diseño a medida · Responsive · Formulario de contacto · SEO básico · Hosting configurado · Entrega en 5-7 días
  - Botón: "COTIZAR" (outline)

  **CARD 2 — Ecommerce (DESTACADA, borde naranja + badge "Más elegido")**
  - Nombre: "Tienda Online"
  - Precio: "desde USD 400"
  - Descripción: "Tienda completa lista para vender online 24/7."
  - Features: Todo lo de Landing + Catálogo de productos · Carrito y checkout · Pasarela de pagos (MercadoPago/Stripe) · Gestión de stock · Panel de administración · Cálculo de envíos
  - Botón: "COTIZAR" (primary naranja)
  - Badge arriba: "MÁS ELEGIDO" en naranja

  **CARD 3 — A Medida**
  - Nombre: "Desarrollo a Medida"
  - Precio: "Cotización personalizada"
  - Descripción: "Software, automatizaciones e integraciones específicas para tu operación."
  - Features: Sistemas web complejos · Automatizaciones · Integraciones con APIs · Dashboards · IA aplicada · Soporte dedicado
  - Botón: "AGENDAR LLAMADA" (outline teal)

- Cards: fondo --surface, border, hover levanta con sombra. La destacada con border naranja 2px.
- Nota abajo: "Todos los precios en USD. Aceptamos transferencia, MercadoPago y crypto. Facturación disponible."

### 6. PROCESO (nueva)
- Fondo --teal-dark (bloque oscuro corporativo, contraste dramático) o --bg-alt
- Label "[ cómo trabajamos ]" (naranja sobre el fondo oscuro brilla)
- Título: "Un proceso claro, de principio a fin."
- 4 pasos numerados horizontales (verticales en mobile), conectados por una línea:

  **01 — Consulta**
  "Nos contás qué necesitás. Analizamos tu negocio y objetivos."

  **02 — Propuesta**
  "Te enviamos una propuesta con alcance, plazos y precio cerrado."

  **03 — Desarrollo**
  "Construimos tu proyecto con actualizaciones constantes. Vos ves el avance."

  **04 — Entrega + Soporte**
  "Lanzamos tu proyecto y te acompañamos después. No desaparecemos."

- Cada paso: número grande en naranja o teal-mid, título, descripción
- Si el fondo es teal-dark: textos claros, números naranja brillando
- Línea conectora entre pasos (naranja o teal-mid)
- Reveal escalonado

### 7. PARALLAX (imagen fija tech)
- Imagen fija con efecto parallax (técnica JS que funciona en mobile: imagen sobredimensionada con translateY)
- Usar: https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80
- Overlay teal oscuro (rgba del teal-dark) en vez de negro, para dar el color corporativo
- Texto centrado: "TECNOLOGÍA QUE FUNCIONA" o una frase de impacto (naranja, fuerte)

### 8. POR QUÉ PIXO + NÚMEROS
- Fondo --bg-alt
- Label "[ por qué pixo ]"
- 4 cards: Diseño a medida · Entrega rápida · Soporte continuo · Código propio (el cliente se queda con todo)
- Cards con hover, íconos alternando naranja y teal
- Abajo, separado por línea-acento: NÚMEROS que cuentan de 0 al valor
- +50 Proyectos · +30 Clientes · 24/7 Soporte · 99% Satisfacción
- Los números alternan color naranja/teal para dar riqueza cromática
- VERIFICAR que los contadores animen (valores finales +50, +30, 24/7, 99%)

### 9. FAQ (nueva)
- Fondo --bg
- Label "[ preguntas frecuentes ]"
- Título: "Todo lo que necesitás saber."
- Acordeón de preguntas (click para expandir, animación suave de altura):

  **¿Cuánto tarda un proyecto?**
  "Una landing entre 5 y 7 días. Un ecommerce entre 2 y 3 semanas. Proyectos a medida según alcance. Siempre con plazos claros desde el inicio."

  **¿El código queda a mi nombre?**
  "Sí. Al finalizar, el código y todos los accesos son tuyos. Sin dependencias ni ataduras."

  **¿Ofrecen soporte después de la entrega?**
  "Sí. Incluimos un período de soporte post-lanzamiento y ofrecemos planes de mantenimiento mensual opcionales."

  **¿Cómo son los pagos?**
  "Trabajamos con un adelanto del 50% para comenzar y el resto contra entrega. Aceptamos transferencia, MercadoPago y crypto."

  **¿Trabajan con clientes fuera de Uruguay?**
  "Sí. Trabajamos con clientes de toda LATAM de forma 100% remota. Los precios están en USD."

  **¿Qué pasa si necesito cambios durante el proyecto?**
  "Está contemplado. Trabajamos con revisiones incluidas en cada etapa para que el resultado sea exactamente lo que necesitás."

- Acordeón: fondo --surface, border sutil, ícono + o flecha que rota al abrir, transición de altura suave
- Solo una abierta a la vez (o permitir varias, a elección)

### 10. CTA FINAL
- Fondo --dark o --teal-dark (bloque de cierre potente)
- Headline GIGANTE: "Tu próximo proyecto digital, a un mensaje."
- Subtítulo: "Contanos tu idea y te armamos una propuesta sin compromiso."
- Botón primary naranja "CONTACTAR POR WHATSAPP ↗"
- Email + Instagram debajo
- Naranja brilla sobre el fondo oscuro

### 11. FOOTER
- Fondo --dark
- Columna 1: Logo PIXO + "Desarrollo web, ecommerce y automatización" + "Montevideo, Uruguay"
- Columna 2: Links (Servicios, Precios, Proceso, FAQ)
- Columna 3: Contacto (WhatsApp, Email, Instagram)
- Abajo: "© 2026 Pixo · Hecho en Montevideo" + "PIXO_DSN_2026" monospace
- Naranja en hovers

---

## ANIMACIONES
- Scroll reveal entrada y salida (fade + translateY, 700ms cubic-bezier, IntersectionObserver que agrega y quita .visible)
- Delays escalonados
- Mockups con float sutil y detalles animados internos
- Marquee naranja continuo (si se mantiene)
- Números que cuentan de 0 al valor (VERIFICAR)
- FAQ acordeón con transición de altura suave
- Proceso: pasos aparecen escalonados, línea conectora se dibuja
- Hover con carácter en botones, cards, precios
- Parallax de imagen fija funciona en desktop Y mobile
- prefers-reduced-motion: desactivar todo

---

## DATOS (mantener)
- WhatsApp: https://wa.me/59898955038
- Email: adrianmachinrodriguez@gmail.com
- Instagram: https://instagram.com/pixodesign.uy

---

## CHECKLIST
1. Hero entra COMPLETO en viewport, centrado, sin cortarse (desktop y mobile)
2. Paleta naranja + teal profundo, ambos usados con criterio (naranja=acción, teal=confianza)
3. Sección de PRECIOS con 3 cards (Landing desde USD180, Ecommerce desde USD400 destacada, A medida) + botones cotizar
4. Sección de PROCESO con 4 pasos numerados
5. Sección de FAQ con acordeón funcional
6. Barra de confianza con tecnologías
7. Badges de confianza en el hero
8. Mockups CSS de producto mantenidos y mejorados
9. Números que cuentan (verificar +50/+30/24-7/99%)
10. Parallax de imagen fija funciona en mobile
11. Scroll reveal entrada y salida
12. Alineación consistente y sistemática en toda la web
13. Mobile responsive perfecto, hamburger, sin overflow, sin cortes
14. Todo se ve serio, profesional, nivel agencia establecida
15. Tags y stack técnicos visibles (prueba de que programan)
16. Pusheado a git
