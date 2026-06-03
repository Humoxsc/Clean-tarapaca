# Clean Tarapacá J&E — Sitio Web

Página web corporativa premium para **Clean Tarapacá J&E**, empresa de limpieza profesional de la Región de Tarapacá (Iquique, Alto Hospicio, Pozo Almonte y comunas cercanas).

## ✨ Características

- **Diseño premium 2026** con glassmorphism sutil y animaciones suaves.
- **Tailwind CSS** (vía CDN, listo para usar sin build).
- **Mobile First** y totalmente responsive.
- **Optimizada para SEO**: meta tags, Open Graph, Twitter Cards y datos estructurados (JSON-LD `CleaningService`).
- **Optimizada para conversión**: múltiples CTAs, botón flotante de WhatsApp y formulario que genera el mensaje directo a WhatsApp.

## 🧩 Secciones

1. **Hero** — Título principal, subtítulo y CTAs (Cotización / WhatsApp).
2. **Quiénes Somos** — Texto corporativo + Misión, Visión y Valores.
3. **¿Por qué elegirnos?** — Tarjetas con diferenciadores.
4. **Servicios** — Hogares, Oficinas, Condominios, Comercial, Alfombras/Tapices, Post Construcción y Sanitización.
5. **Proceso de Trabajo** — Línea de tiempo de 4 pasos.
6. **Galería** — Slider interactivo "Antes / Después" + grilla con hover.
7. **Testimonios** — 6 reseñas con calificación.
8. **Cobertura** — Comunas de la Región de Tarapacá.
9. **FAQ** — 8 preguntas frecuentes (acordeón).
10. **CTA Final + Formulario** de cotización.
11. **Footer** — Logo, servicios, contacto y redes.

## 🚀 Uso

Abre `index.html` en cualquier navegador. No requiere instalación ni dependencias.

```bash
# Opción simple: doble clic en index.html
# O con un servidor local:
python3 -m http.server 8080
# luego abre http://localhost:8080
```

## ✏️ Personalización pendiente

Reemplaza los datos de ejemplo por los reales:

- **Teléfono / WhatsApp:** busca y reemplaza `56900000000` y `+56 9 0000 0000`.
- **Correo:** `contacto@cleantarapaca.cl`.
- **Instagram:** ya enlazado a `https://www.instagram.com/cleantarapaca_jye`.
- **Dominio canónico:** `https://www.cleantarapaca.cl/` en las meta tags.
- **Imágenes:** sube tus fotos a la carpeta `imagenes/` con los nombres indicados en `imagenes/LEEME.txt` (hero.jpg, antes.jpg, despues.jpg, galeria-1..4.jpg, cobertura.jpg). Aparecen automáticamente; mientras no existan, se muestra un degradado de respaldo.

## 🌐 Publicación (GitHub Pages)

Repositorio → **Settings → Pages → Build and deployment → Source: "Deploy from a branch"** → Branch: `main` / `(root)` → **Save**.
La web queda publicada en: `https://humoxsc.github.io/Clean-tarapaca/`

## 🎨 Paleta corporativa

- Azul oscuro `#0B2545` (navy)
- Verde `#16a34a` (brand green)
- Blanco `#ffffff`
