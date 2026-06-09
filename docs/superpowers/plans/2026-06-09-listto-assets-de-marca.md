# Listto — Producción de assets de marca — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Producir todos los assets de la identidad Listto (logo SVG, ícono, favicon, exports PNG, plantillas de redes, design tokens CSS y brand guide en PDF) a partir del spec de marca.

**Architecture:** Una fuente de verdad en SVG vectorial + tokens CSS. El wordmark se outlinea con la tipografía real (Nunito) usando `opentype.js` para que el SVG no dependa de fuentes instaladas. Los rasterizados (favicon, íconos, foto de perfil) se generan desde los SVG con `sharp`. El brand guide se renderiza HTML→PDF con Chrome headless. Todo vive en `brand/`.

**Tech Stack:** SVG, CSS custom properties, Node 22, `opentype.js`, `sharp`, `png-to-ico`, Google Chrome headless. Sin frameworks.

**Referencia de spec:** `docs/superpowers/specs/2026-06-09-listto-identidad-marca-design.md`

**Valores de marca (fuente de verdad):**
- Coral `#FF6B4A` · Ámbar `#FFB23E` · Tinta `#2B2622` · Crema `#FFF7F0`
- Neutros: Blanco `#FFFFFF` · Crema2 `#F2ECE6` · Borde `#D8D0C8` · Gris `#8C837B` · Tinta `#2B2622`
- Semánticos: Éxito `#2FA36B` · Aviso `#E8A33D` · Error `#D6453D`
- Tipografía: Nunito (títulos 700/800/900) + Inter (texto 400/500/600)

---

## File Structure

```
brand/
  README.md                      # índice de assets y cómo regenerarlos
  _fonts/Nunito-ExtraBold.ttf    # insumo (no se commitea binario pesado: ver Task 1)
  tokens/listto-tokens.css       # custom properties: colores + tipografía
  logo/
    listto-icon.svg              # ícono burbuja coral + check (hand-authored, exacto)
    listto-wordmark.svg          # wordmark outlineado, letras tinta + check coral
    listto-wordmark-coral.svg    # variante sobre coral (check blanco)
    listto-wordmark-ink.svg      # variante sobre tinta (check ámbar)
  favicon/
    favicon.ico                  # 16/32/48 multi
    favicon-32.png  favicon-16.png  apple-touch-icon.png (180)
    icon-192.png  icon-512.png   # PWA/app
  social/
    profile-512.png              # foto de perfil (ícono)
    post-1080.html               # plantilla post 1080x1080
    story-1080x1920.html         # plantilla historia
  guide/
    brand-guide.html             # documento imprimible
    brand-guide.pdf              # render final
scripts/
  build-wordmark.mjs             # genera los 3 wordmark SVG
  build-raster.mjs               # genera favicon + íconos + profile PNG
  build-guide-pdf.mjs            # HTML -> PDF con Chrome headless
```

Branch de trabajo: `feat/listto-brand-assets` (no commitear en `main`; el hook lo bloquea).

---

### Task 0: Scaffolding y branch

**Files:**
- Create: `brand/.gitkeep`, dirs del árbol de arriba

- [ ] **Step 1: Crear branch**

```bash
cd /home/alejandro-leone/Projects/comercial
git switch -c feat/listto-brand-assets
```

- [ ] **Step 2: Crear estructura de carpetas**

```bash
mkdir -p brand/_fonts brand/tokens brand/logo brand/favicon brand/social brand/guide scripts
```

- [ ] **Step 3: Ignorar insumos pesados/temporales**

Agregar a `.gitignore` (al final):

```
brand/_fonts/
node_modules/
package-lock.json
```

- [ ] **Step 4: Commit**

```bash
git add .gitignore
git commit -m "chore(brand): scaffolding de assets Listto"
```

---

### Task 1: Design tokens CSS (fuente de verdad)

**Files:**
- Create: `brand/tokens/listto-tokens.css`

- [ ] **Step 1: Escribir el archivo de tokens**

```css
/* Listto — design tokens. Fuente de verdad de color y tipografía. */
:root {
  /* Marca */
  --listto-coral: #FF6B4A;
  --listto-amber: #FFB23E;
  --listto-ink:   #2B2622;
  --listto-cream: #FFF7F0;

  /* Neutros */
  --listto-white:   #FFFFFF;
  --listto-cream-2: #F2ECE6;
  --listto-border:  #D8D0C8;
  --listto-gray:    #8C837B;

  /* Semánticos */
  --listto-success: #2FA36B;
  --listto-warning: #E8A33D;
  --listto-error:   #D6453D;

  /* Tipografía */
  --listto-font-display: 'Nunito', system-ui, sans-serif;
  --listto-font-body: 'Inter', system-ui, sans-serif;

  /* Escala (px) */
  --listto-size-display: 46px;
  --listto-size-h1: 30px;
  --listto-size-h2: 21px;
  --listto-size-body: 15px;
  --listto-size-caption: 12px;

  /* Pesos */
  --listto-weight-display: 900;
  --listto-weight-h1: 800;
  --listto-weight-h2: 700;
  --listto-weight-body: 400;
  --listto-weight-emphasis: 600;

  /* Radios / botones */
  --listto-radius-btn: 11px;
  --listto-radius-card: 16px;
}
```

- [ ] **Step 2: Verificar que el CSS parsea**

Run: `npx --yes csstree-validator brand/tokens/listto-tokens.css`
Expected: sin errores (salida vacía o "No errors").

- [ ] **Step 3: Commit**

```bash
git add brand/tokens/listto-tokens.css
git commit -m "feat(brand): design tokens CSS"
```

---

### Task 2: Ícono SVG (burbuja coral + check)

El ícono es geometría pura → se escribe a mano, exacto y sin dependencia de fuentes.
ViewBox 512. Cuadrado redondeado (radius ≈24% = 123) coral, check blanco centrado.

**Files:**
- Create: `brand/logo/listto-icon.svg`

- [ ] **Step 1: Escribir el SVG**

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512" role="img" aria-label="Listto">
  <rect width="512" height="512" rx="123" fill="#FF6B4A"/>
  <path d="M150 270 L226 346 L372 168" fill="none" stroke="#FFFFFF"
        stroke-width="48" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
```

- [ ] **Step 2: Verificar render y dimensiones**

```bash
npx --yes sharp-cli --input brand/logo/listto-icon.svg --output /tmp/icon-check.png resize 512 512
npx --yes sharp-cli --input /tmp/icon-check.png metadata
```
Expected: metadata reporta `width: 512, height: 512, channels: 4`. Abrir `/tmp/icon-check.png` y confirmar burbuja coral con check blanco centrado.

- [ ] **Step 3: Commit**

```bash
git add brand/logo/listto-icon.svg
git commit -m "feat(brand): icono Listto (burbuja coral + check)"
```

---

### Task 3: Generar el wordmark outlineado (3 variantes)

El wordmark = `lis` + check (en lugar de `tt`) + `o`, en Nunito ExtraBold, convertido a
paths con `opentype.js` para no depender de la fuente. El check es un path vectorial
posicionado entre `lis` y `o`.

**Files:**
- Create: `scripts/build-wordmark.mjs`
- Output: `brand/logo/listto-wordmark.svg`, `listto-wordmark-coral.svg`, `listto-wordmark-ink.svg`

- [ ] **Step 1: Descargar Nunito ExtraBold (insumo, no se commitea)**

```bash
curl -L -o brand/_fonts/Nunito-ExtraBold.ttf \
  "https://github.com/googlefonts/nunito/raw/main/fonts/ttf/Nunito-ExtraBold.ttf"
ls -la brand/_fonts/Nunito-ExtraBold.ttf   # debe pesar >100KB
```
Expected: archivo presente, tamaño >100KB. Si el repo movió la ruta, bajar de
https://fonts.google.com/specimen/Nunito (peso 800) y colocar el TTF con ese nombre.

- [ ] **Step 2: Escribir el script generador**

```js
// scripts/build-wordmark.mjs
import opentype from 'opentype.js';
import { writeFileSync } from 'node:fs';

const FONT_PATH = 'brand/_fonts/Nunito-ExtraBold.ttf';
const FS = 200;              // tamaño de fuente (px) = alto de referencia
const PAD = 40;              // padding del viewBox
const GAP = 18;              // separación letra<->check
const CHK_W = 150;           // ancho que ocupa el check (~ las dos "t")
const CHK_STROKE = 34;       // grosor del trazo del check
const BASELINE = PAD + FS;   // y de la baseline

const INK = '#2B2622';
const CORAL = '#FF6B4A';
const AMBER = '#FFB23E';
const WHITE = '#FFFFFF';
const CREAM = '#FFF7F0';

const font = await opentype.loadSync
  ? opentype.loadSync(FONT_PATH)
  : await opentype.load(FONT_PATH);

const lisW = font.getAdvanceWidth('lis', FS);
const lisPath = font.getPath('lis', PAD, BASELINE, FS).toPathData(2);

const oX = PAD + lisW + GAP + CHK_W + GAP;
const oPath = font.getPath('o', oX, BASELINE, FS).toPathData(2);
const oW = font.getAdvanceWidth('o', FS);

// Check: caja [chkX .. chkX+CHK_W], alineado al alto de la "x-height/cap".
// Vértice del check cae cerca de la baseline; brazo derecho sube al tope.
const chkX = PAD + lisW + GAP;
const top = BASELINE - FS * 0.78;   // tope del trazo ascendente
const valleyX = chkX + CHK_W * 0.42;
const valleyY = BASELINE - FS * 0.10;
const startX = chkX + CHK_W * 0.02;
const startY = BASELINE - FS * 0.45;
const endX = chkX + CHK_W * 0.98;
const checkD = `M${startX.toFixed(1)} ${startY.toFixed(1)} L${valleyX.toFixed(1)} ${valleyY.toFixed(1)} L${endX.toFixed(1)} ${top.toFixed(1)}`;

const totalW = oX + oW + PAD;
const totalH = BASELINE + PAD;

function svg({ letterFill, checkColor, bg }) {
  const bgRect = bg ? `\n  <rect width="${totalW.toFixed(1)}" height="${totalH.toFixed(1)}" fill="${bg}"/>` : '';
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${totalW.toFixed(1)} ${totalH.toFixed(1)}" width="${totalW.toFixed(0)}" height="${totalH.toFixed(0)}" role="img" aria-label="Listto">${bgRect}
  <path d="${lisPath}" fill="${letterFill}"/>
  <path d="${oPath}" fill="${letterFill}"/>
  <path d="${checkD}" fill="none" stroke="${checkColor}" stroke-width="${CHK_STROKE}" stroke-linecap="round" stroke-linejoin="round"/>
</svg>\n`;
}

writeFileSync('brand/logo/listto-wordmark.svg',       svg({ letterFill: INK,   checkColor: CORAL, bg: null }));
writeFileSync('brand/logo/listto-wordmark-coral.svg', svg({ letterFill: WHITE, checkColor: WHITE, bg: CORAL }));
writeFileSync('brand/logo/listto-wordmark-ink.svg',   svg({ letterFill: CREAM, checkColor: AMBER, bg: INK }));
console.log('wordmark SVGs escritos:', totalW.toFixed(0), 'x', totalH.toFixed(0));
```

- [ ] **Step 3: Instalar opentype.js y correr**

```bash
npm init -y >/dev/null 2>&1
npm install opentype.js@1
node scripts/build-wordmark.mjs
```
Expected: imprime `wordmark SVGs escritos: <W> x <H>` y crea los 3 archivos en `brand/logo/`.

- [ ] **Step 4: Verificar render visual**

```bash
npx --yes sharp-cli --input brand/logo/listto-wordmark.svg --output /tmp/wm.png resize 800
```
Expected: abrir `/tmp/wm.png`. Debe leerse "listto" con el check coral ocupando las dos "t".
Si el check queda desalineado, ajustar las constantes `GAP`, `CHK_W`, `top`, `valleyY`,
`startY` en el script y re-correr Step 3. Iterar hasta que el check se lea como las "tt".

- [ ] **Step 5: Commit**

```bash
git add scripts/build-wordmark.mjs brand/logo/listto-wordmark*.svg package.json
git commit -m "feat(brand): wordmark Listto outlineado (3 variantes)"
```

---

### Task 4: Favicon + set de íconos + foto de perfil

Rasteriza desde `listto-icon.svg` a los tamaños necesarios y arma el `.ico`.

**Files:**
- Create: `scripts/build-raster.mjs`
- Output: `brand/favicon/*.png`, `brand/favicon/favicon.ico`, `brand/social/profile-512.png`

- [ ] **Step 1: Escribir el script**

```js
// scripts/build-raster.mjs
import sharp from 'sharp';
import pngToIco from 'png-to-ico';
import { writeFileSync } from 'node:fs';

const SRC = 'brand/logo/listto-icon.svg';

const targets = [
  ['brand/favicon/favicon-16.png', 16],
  ['brand/favicon/favicon-32.png', 32],
  ['brand/favicon/favicon-48.png', 48],
  ['brand/favicon/apple-touch-icon.png', 180],
  ['brand/favicon/icon-192.png', 192],
  ['brand/favicon/icon-512.png', 512],
  ['brand/social/profile-512.png', 512],
];

for (const [out, size] of targets) {
  await sharp(SRC, { density: 384 }).resize(size, size).png().toFile(out);
  console.log('ok', out, size);
}

const ico = await pngToIco([
  'brand/favicon/favicon-16.png',
  'brand/favicon/favicon-32.png',
  'brand/favicon/favicon-48.png',
]);
writeFileSync('brand/favicon/favicon.ico', ico);
console.log('ok brand/favicon/favicon.ico');
```

- [ ] **Step 2: Instalar deps y correr**

```bash
npm install sharp png-to-ico
node scripts/build-raster.mjs
```
Expected: imprime una línea `ok ...` por cada archivo + `favicon.ico`.

- [ ] **Step 3: Verificar tamaños**

```bash
npx --yes sharp-cli --input brand/favicon/icon-512.png metadata
npx --yes sharp-cli --input brand/social/profile-512.png metadata
```
Expected: ambos `width: 512, height: 512`. Abrir `profile-512.png`: burbuja coral con check, sin bordes cortados.

- [ ] **Step 4: Commit**

```bash
git add scripts/build-raster.mjs brand/favicon brand/social/profile-512.png package.json
git commit -m "feat(brand): favicon, set de iconos y foto de perfil"
```

---

### Task 5: Plantillas de redes (post + historia)

HTML autocontenido (carga Nunito/Inter de Google Fonts) que el equipo edita y exporta.

**Files:**
- Create: `brand/social/post-1080.html`, `brand/social/story-1080x1920.html`

- [ ] **Step 1: Escribir plantilla de post (1080x1080)**

```html
<!doctype html><html lang="es"><head><meta charset="utf-8">
<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@700;800;900&family=Inter:wght@400;600&display=swap');
html,body{margin:0}
.post{width:1080px;height:1080px;background:#FFF7F0;box-sizing:border-box;padding:90px;
  display:flex;flex-direction:column;justify-content:space-between;font-family:'Inter'}
.eyebrow{color:#FF6B4A;font-weight:600;font-size:30px;letter-spacing:.04em;text-transform:uppercase}
.title{font-family:'Nunito';font-weight:900;font-size:96px;line-height:1.05;color:#2B2622;margin:24px 0 0}
.foot{display:flex;align-items:center;gap:20px}
.icon{width:84px;height:84px;border-radius:21px;background:#FF6B4A;display:flex;align-items:center;justify-content:center}
.brand{font-family:'Nunito';font-weight:800;font-size:40px;color:#2B2622}
</style></head><body>
<div class="post">
  <div>
    <div class="eyebrow">Ecommerce llave en mano</div>
    <div class="title">Tu negocio online, listo y andando.</div>
  </div>
  <div class="foot">
    <div class="icon"><svg width="50" height="44" viewBox="0 0 64 56"><path d="M8 30 L24 46 L56 10" fill="none" stroke="#fff" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
    <div class="brand">listto.ar</div>
  </div>
</div></body></html>
```

- [ ] **Step 2: Escribir plantilla de historia (1080x1920)**

```html
<!doctype html><html lang="es"><head><meta charset="utf-8">
<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@700;800;900&family=Inter:wght@400;600&display=swap');
html,body{margin:0}
.story{width:1080px;height:1920px;background:#2B2622;box-sizing:border-box;padding:110px 90px;
  display:flex;flex-direction:column;justify-content:space-between;font-family:'Inter'}
.eyebrow{color:#FFB23E;font-weight:600;font-size:34px;letter-spacing:.04em;text-transform:uppercase}
.title{font-family:'Nunito';font-weight:900;font-size:120px;line-height:1.04;color:#FFF7F0;margin:30px 0 0}
.sub{color:#D8D0C8;font-size:40px;line-height:1.4;margin-top:40px;max-width:760px}
.cta{align-self:flex-start;background:#FF6B4A;color:#fff;font-weight:600;font-size:40px;
  padding:30px 56px;border-radius:18px}
</style></head><body>
<div class="story">
  <div>
    <div class="eyebrow">Hecho por vos</div>
    <div class="title">Vendé sin complicarte.</div>
    <div class="sub">Armamos tu tienda, gestionamos tus pedidos y tus redes. Vos vendés.</div>
  </div>
  <div class="cta">Escribinos → listto.ar</div>
</div></body></html>
```

- [ ] **Step 3: Verificar render**

Run: `google-chrome --headless --screenshot=/tmp/post.png --window-size=1080,1080 --hide-scrollbars brand/social/post-1080.html`
Expected: `/tmp/post.png` muestra fondo crema, título Nunito, ícono coral + `listto.ar`. Repetir mental para la historia abriéndola en el navegador.

- [ ] **Step 4: Commit**

```bash
git add brand/social/post-1080.html brand/social/story-1080x1920.html
git commit -m "feat(brand): plantillas de redes (post e historia)"
```

---

### Task 6: Brand guide HTML → PDF

Documento de 1-2 páginas para el equipo. Reusa el sistema de marca ya diseñado.

**Files:**
- Create: `brand/guide/brand-guide.html`, `scripts/build-guide-pdf.mjs`
- Output: `brand/guide/brand-guide.pdf`

- [ ] **Step 1: Escribir el HTML del guide**

Copiar el contenido visual ya validado en
`.superpowers/brainstorm/533729-1781024370/content/brand-system.html` a
`brand/guide/brand-guide.html`, envolviéndolo en un documento completo:
agregar `<!doctype html><html><head><meta charset="utf-8"><title>Listto — Brand Guide</title></head><body style="max-width:900px;margin:0 auto;padding:40px;">` antes del `<style>` y `</body></html>` al final. Mantener el `<style>` con los `@import` de fuentes y todo el markup `.bs`.

- [ ] **Step 2: Escribir el script de PDF**

```js
// scripts/build-guide-pdf.mjs
import { execFileSync } from 'node:child_process';
import { resolve } from 'node:path';

const html = resolve('brand/guide/brand-guide.html');
execFileSync('google-chrome', [
  '--headless',
  '--no-pdf-header-footer',
  '--print-to-pdf=brand/guide/brand-guide.pdf',
  `file://${html}`,
], { stdio: 'inherit' });
console.log('PDF generado: brand/guide/brand-guide.pdf');
```

- [ ] **Step 3: Generar el PDF**

```bash
node scripts/build-guide-pdf.mjs
ls -la brand/guide/brand-guide.pdf
```
Expected: archivo PDF presente, >20KB. Abrirlo y confirmar que muestra logo, paleta con hex, tipografía y botones legibles.

- [ ] **Step 4: Commit**

```bash
git add brand/guide/brand-guide.html scripts/build-guide-pdf.mjs brand/guide/brand-guide.pdf
git commit -m "feat(brand): brand guide HTML + PDF"
```

---

### Task 7: README de brand/ y cierre

**Files:**
- Create: `brand/README.md`

- [ ] **Step 1: Escribir el README**

```markdown
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
```

- [ ] **Step 2: Verificar el árbol final**

```bash
find brand -type f | sort
```
Expected: tokens, 4 SVGs de logo, favicon (.ico + 6 png), social (profile + 2 html), guide (html + pdf), README.

- [ ] **Step 3: Commit**

```bash
git add brand/README.md
git commit -m "docs(brand): README de assets Listto"
```

---

### Manual (no automatizable)

- [ ] **Registrar dominios** `listto.ar` y `listto.com.ar` en **nic.ar** (verificar disponibilidad real; el chequeo del spec fue por DNS, no autoritativo). Esto requiere cuenta y pago — lo hace el usuario.

---

## Self-Review

**Cobertura del spec:**
- §5 Logo (wordmark doble-t=✓ + ícono) → Task 2 (ícono) + Task 3 (wordmark 3 variantes). ✓
- §6 Paleta → Task 1 (tokens) cubre principal + neutros + semánticos. ✓
- §7 Tipografía → Task 1 (tokens) define familias/escala/pesos; Task 3 usa Nunito real. ✓
- §8 Botones → representados en el brand guide (Task 6). ✓
- §10 Aplicaciones (landing/redes) → Task 5 (redes) + guide. ✓
- §11 Entregables: logo SVG (T3), favicon/ícono (T2/T4), set redes (T4/T5), brand guide PDF (T6), tokens CSS (T1), registro dominio (Manual). ✓ Todos cubiertos.

**Placeholders:** sin TBD/TODO; todos los scripts y archivos llevan contenido completo. ✓

**Consistencia de tipos/nombres:** rutas de archivo idénticas entre File Structure, tasks y README (`listto-wordmark.svg`, `listto-icon.svg`, `listto-tokens.css`, `build-wordmark.mjs`, `build-raster.mjs`, `build-guide-pdf.mjs`). Colores idénticos al spec en tokens, ícono y wordmark. ✓

**Riesgo conocido:** el posicionamiento del check en el wordmark (Task 3) puede requerir 1-2 iteraciones de ajuste de constantes; está previsto en el Step 4 de esa task.
```
