# Listto — Assets de marca

Identidad: ver `docs/superpowers/specs/2026-06-09-listto-identidad-marca-design.md`.

## Contenido
- `tokens/listto-tokens.css` — colores y tipografía (fuente de verdad).
- `logo/` — wordmark (3 variantes) + ícono, en SVG.
- `favicon/` — favicon.ico + PNGs (16→512) + apple-touch-icon.
- `social/` — foto de perfil + plantillas de post e historia.
- `guide/` — brand guide (HTML + PDF).

## Regenerar
Requiere Node 22 y Google Chrome.

    npm install
    node scripts/build-wordmark.mjs     # logo wordmark
    node scripts/build-raster.mjs       # favicon + iconos + perfil
    node scripts/build-guide-pdf.mjs    # PDF del guide

El TTF de Nunito (`_fonts/`) es insumo y no se versiona; bajarlo desde
Google Fonts (peso 800) antes de correr build-wordmark.

## Dominio
`listto.ar` (registrar/confirmar en nic.ar) + respaldo `listto.com.ar`.
