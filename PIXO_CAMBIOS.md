# Cambios para la landing de Pixo

Abrí el proyecto Next.js y aplicá TODOS estos cambios. Después verificá cada punto en el browser (desktop y mobile 375px). Si algo falla, corregilo. No pares hasta que todo funcione.

---

## 1. HERO — Layout horizontal full width

El hero debe ocupar 100vh y el contenido debe ir de IZQUIERDA A DERECHA (no centrado vertical):
- Lado izquierdo (50%): el texto (label, headline, subtítulo, botón)
- Lado derecho (50%): un espacio para las formas decorativas / blobs o una imagen
- El contenido de texto debe estar alineado a la izquierda, verticalmente centrado
- En mobile: stacked (texto arriba, decoración abajo o solo texto)

## 2. ELIMINAR textos del hero

Buscar y ELIMINAR completamente:
- "Mover el cursor" — borrar el texto y el elemento que lo contiene
- "fig 01" — borrar el texto y el elemento que lo contiene
- Cualquier otro texto decorativo que no sea parte del contenido real (label, headline, subtítulo, botón)

## 3. MOBILE RESPONSIVE COMPLETO

Revisar TODA la página en 375px. Arreglar:

### Hamburger menu
Agregar un botón hamburger que aparece en mobile (< 768px):
- 3 líneas de 2px, color #111, con transición a X al abrir
- Al hacer click: mostrar menú fullscreen con fondo del color del sitio
- Links centrados, font-size 24px, weight 500
- Al tocar un link: cerrar menú + smooth scroll
- aria-expanded para accesibilidad
- Ocultar los nav-links en mobile, mostrar hamburger
- En desktop: ocultar hamburger, mostrar nav-links

### Responsive general
- Hero: 1 columna en mobile, texto centrado o alineado izquierda
- Servicios: 1 columna, imagen encima del texto
- Números: grid 2x2
- Cards: 1 columna
- CTA: padding reducido
- Footer: stacked centrado
- Tipografía: reducir hero a clamp(2.2rem, 6vw, 4.5rem)
- Sin overflow horizontal en ningún ancho

## 4. EFECTOS Y TRANSICIONES (restaurar TODO)

### Scroll Reveal
Cada sección, título, card, imagen y bloque de texto debe animarse al entrar al viewport:
```css
.reveal {
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 600ms ease-out, transform 600ms ease-out;
}
.reveal.visible {
  opacity: 1;
  transform: none;
}
```
Con delays escalonados entre hermanos (100ms, 200ms, 300ms).
Implementar con IntersectionObserver (threshold 0.1).

### Navbar scroll
Al scrollear > 40px:
- background con blur (backdrop-filter blur 20px)
- box-shadow sutil
- transición 250ms ease-out

### Counter animation
Los números (50+, 30+, 24/7, 99%) cuentan desde 0 al valor final:
- Duración 1500ms
- Easing cubic (ease-out)
- Disparar con IntersectionObserver al entrar al viewport

### Hover en cards
- transform: translateY(-2px)
- border-color cambia al color primario
- box-shadow sutil
- transición 200ms ease-out

### Hover en botones
- transform: translateY(-1px)
- cambio de color de fondo
- transición 200ms ease-out

### Hero parallax fade
Al scrollear, el contenido del hero baja su opacidad suavemente (de 1 a 0.3).

### Smooth scroll
Todos los links href="#seccion" hacen scroll suave.

### Blob floating animation
Los blobs decorativos flotan con animación sutil:
```css
@keyframes blobFloat {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(8px, -12px); }
}
```
Duración 8-12s, ease-in-out, infinite. Cada blob con delay distinto.

### Image reveal
Las imágenes hacen fade-in al entrar al viewport (opacity 0 → 1, translateY 16px → 0).

### prefers-reduced-motion
```css
@media (prefers-reduced-motion: reduce) {
  .reveal, [class*="reveal"] { opacity: 1; transform: none; transition: none; }
  * { animation-duration: 0.01ms !important; }
}
```

## 5. IMÁGENES

Agregar imágenes reales en la sección de servicios. Usar estas URLs de Unsplash con tono acorde al diseño (suave, luz difusa, tech):

```
Servicio 1 (Páginas Web): https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80
Servicio 2 (Automatizaciones): https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&q=80
Servicio 3 (Bots): https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80
```

Las imágenes deben tener:
- border-radius: 16px
- filter: brightness(0.95) saturate(0.85) — tono suave, no crudo
- aspect-ratio: 4/3
- object-fit: cover
- Animación reveal al entrar al viewport
- En mobile: width 100%, margin-bottom 24px

---

## CHECKLIST (verificar TODO antes de terminar)
1. Hero: contenido de izquierda a derecha, full width
2. "Mover el cursor" eliminado completamente
3. "fig 01" eliminado completamente
4. Mobile 375px: sin overflow horizontal
5. Hamburger menu funciona (abre, cierra, links hacen scroll)
6. Scroll reveal funciona en TODAS las secciones
7. Navbar cambia al scrollear
8. Counter animation funciona
9. Hover en cards funciona
10. Smooth scroll funciona
11. Blobs tienen animación de float
12. Imágenes de servicios cargan y se ven
13. prefers-reduced-motion respetado
14. Todo se ve bien en 375px, 768px y 1440px
