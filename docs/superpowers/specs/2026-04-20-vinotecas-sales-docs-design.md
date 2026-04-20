# Diseño — Documentación comercial Andes para Vinotecas

**Fecha:** 2026-04-20
**Autor:** Alejandro Leone
**Estado:** Propuesto

---

## 1. Contexto

Andes es una tienda online (eCommerce) comercializada por DantoFema. Existe un vertical especializado para **vinotecas** cuyo diferenciador central es un **catálogo maestro de 2000+ vinos precargados con imágenes profesionales**, todos deshabilitados al inicio. La vinoteca cliente habilita (uno a uno o bulk) los vinos que efectivamente vende.

### Antecedentes comerciales

- Prueba de mercado: 50 llamadas a vinotecas obtenidas desde Google Maps.
- Resultado: 20 no respondieron, 2 ventas cerradas, resto recibió demo pero sin cierre aún.
- Objeción más frecuente en rechazos: "ya tengo sitio" o "estoy armando uno".
- Canal de envío de demo: WhatsApp o email.

### Motivación

Incorporación de un vendedor nuevo. Se necesita documentación orientada a venta (no técnica) que le permita operar de punta a punta: prospección, demo, cierre, onboarding y post-venta.

### Producto — Andes para Vinotecas

- **Precio:** $75.000 setup único + $18.900/mes.
- **Cobro:** Mercado Pago (setup manual + suscripción mensual). Cancelación desde MP = baja del sitio.
- **Demo:** https://reservaurbana.dantofema.ar
- **Landing:** https://dantofema.ar/vinotecas
- **Tiempo de publicación:** 24h post-datos.
- **Incluye:** catálogo 2000+ vinos precargados con fotos, bulk habilitar/deshabilitar, dominio `.com.ar`, hosting, mantenimiento, soporte, indexación básica + meta tags.
- **No incluye:** pagos online (los pedidos terminan en WhatsApp), gestión de stock, envíos, integraciones contables/ERP. Disponibles por cotización aparte.

### Flujo de venta canónico

1. Vendedor extrae leads de Google Maps.
2. Llamada fría → speech corto → ofrece demo.
3. Envío de demo (WA o email).
4. Llamada de cierre → manejo de objeciones → propuesta → link Mercado Pago.
5. Cobro setup → vendedor cobra comisión **$50.000** al cobrarse el setup.
6. Onboarding: vendedor recolecta datos y configura.
7. Publicación en 24h → arranca suscripción mensual MP.
8. Post-venta: vendedor es primera línea (consultas, uso, solicitudes → crea ticket). Escala a Alejandro cuando excede su alcance.

---

## 2. Objetivo

Entregar un set de documentos de venta y operación para el vertical vinotecas que permita:

- Onboarding del vendedor nuevo sin supervisión constante.
- Consistencia de precio y mensaje entre todos los materiales.
- Frases listas para cada momento de la venta.
- Referencia rápida durante llamadas (FAQ, objeciones).

## 3. No-objetivos

- Documentación técnica del producto (cómo funciona por dentro).
- Material para el vertical Andes genérico (queda intacto).
- Automatización de prospección o CRM.
- Material gráfico / piezas de marketing.

---

## 4. Estructura de archivos

```
comercial/
├── ANDES_DOCUMENTATION.md               (intacto — Andes genérico)
├── speech-google-maps.md                (intacto — Andes genérico)
├── Speech Telefónico 1 – Vinotecas.md   (MOVIDO a vinotecas/speeches/ + reescrito)
├── Speech Telefónico – Segunda Llamada - Vinotecas  (MOVIDO + reescrito)
└── vinotecas/
    ├── README.md
    ├── playbook-vendedor.md
    ├── ficha-producto.md
    ├── faq.md
    ├── objeciones.md
    ├── proceso-interno.md
    └── speeches/
        ├── 01-llamada-fria.md
        ├── 02-envio-demo.md
        ├── 03-llamada-cierre.md
        └── 04-onboarding.md
```

Los dos speeches viejos de vinoteca se reubican dentro de `vinotecas/speeches/` **reescritos** con precio nuevo y el diferenciador de 2000 vinos. No quedan archivos sueltos con precio desactualizado.

---

## 5. Contenido por archivo

### 5.1 `vinotecas/README.md`
Índice corto. Una línea por archivo explicando qué es y cuándo usarlo. Orden de lectura sugerido para el vendedor nuevo.

### 5.2 `vinotecas/playbook-vendedor.md` (narrativo, ~2 páginas)
- Quiénes somos (DantoFema, Andes)
- Qué vendemos (Andes para Vinotecas — 1 párrafo)
- A quién (perfil ideal: vinoteca con venta por WA/IG, sin sitio propio o con sitio estancado)
- Por qué nos eligen: **2000 vinos precargados con foto · 24h publicación · sin cargar manualmente**
- Flujo de venta (pasos 1-8)
- Tu rol post-venta (primera línea, ticket, escalar)
- Cómo cobrás ($50.000 al cobrarse el setup)
- Qué NO prometer (pagos online, stock, envíos automáticos)
- A quién escalar (Alejandro + cuándo)

### 5.3 `vinotecas/ficha-producto.md` (1 pager, referencia rápida)
Tabla/lista con:
- Producto, precio, demo URL, landing URL
- Incluye (lista)
- No incluye (lista)
- Tiempo de publicación
- Forma de pago
- Cancelación

### 5.4 `vinotecas/faq.md` (9 preguntas reales)
Tono vendedor, respuestas textuales del dueño:

1. ¿Los 2000 vinos tienen precios cargados? — No, los carga el cliente (y puede modificarlos siempre).
2. ¿Puedo agregar vinos fuera del catálogo base? — Sí, sin costo.
3. ¿La plataforma cobra comisión por venta? — No. No son ventas, son pedidos que llegan al WhatsApp; dan flexibilidad de stock y fechas.
4. ¿Acepta pagos online? — El checkout termina en WhatsApp. El cliente coordina pago y entrega ahí. Integración con MP/tarjeta = cotización aparte.
5. ¿Dominio `.com.ar`? — Lo gestionamos nosotros, incluido en el mantenimiento.
6. ¿Puedo cancelar cuando quiera? — Sí, desde Mercado Pago. Al cancelar suscripción, se da de baja el sitio.
7. ¿Se integra con mi sistema de stock? — No hay módulo de stock. Integraciones con sistemas contables/ERP = cotización aparte.
8. ¿Envíos? — No hay envíos integrados. Se coordina por WhatsApp. Integración con Correo/Andreani/cadete = cotización aparte.
9. ¿Aparece en Google? — Indexación básica + meta tags incluidos.

### 5.5 `vinotecas/objeciones.md`
Rebates frase-a-frase:

- **"Ya tengo sitio"** → "¿Tiene los 2000 vinos cargados con foto profesional? ¿Cuánto te tomó cargarlo?" → comparar tiempo/resultado.
- **"Estoy armando uno"** → "¿Hace cuánto empezaste? La mayoría se estanca justo en la carga de productos. Eso nosotros lo tenemos resuelto."
- **"Es caro"** → desglose: setup único vs. tiempo/costo de cargar 2000 vinos manualmente con fotos.
- **"No tengo tiempo ahora"** → "Justamente por eso. Nosotros lo armamos en 24h, vos solo habilitás lo que vendés."
- **"¿Y si no funciona?"** → sin permanencia, cancelás desde Mercado Pago.
- **"Tengo que consultarlo"** → agendar fecha concreta de segunda llamada, no dejar abierto.
- **"Mandame info por WhatsApp"** → (es ok) enviar demo + landing + agendar llamada.

### 5.6 `vinotecas/speeches/01-llamada-fria.md`
Reescrito sobre base actual. Cambios:
- Precio nuevo ($75.000 / $18.900).
- **Gancho nuevo:** mención temprana de "tenemos más de 2000 vinos con fotos listos, solo habilitás los que vendés".
- Pregunta diagnóstica para calificar: ¿tenés sitio? ¿cómo mostrás el catálogo hoy?
- Cierre llamada 1: pedir número WhatsApp para mandar demo.

### 5.7 `vinotecas/speeches/02-envio-demo.md`
Dos plantillas cortas:
- **WhatsApp** (texto para copiar/pegar con link demo + landing).
- **Email** (asunto + cuerpo).
Ambos cierran con "te llamo el [día] a las [hora]".

### 5.8 `vinotecas/speeches/03-llamada-cierre.md`
Flujo: apertura cálida → ¿viste la demo? → pregunta de avance → manejo objeciones (ref `objeciones.md`) → propuesta concreta → pedir datos para link Mercado Pago → agendar onboarding.

### 5.9 `vinotecas/speeches/04-onboarding.md`
Post-pago de setup. Checklist datos a pedir:
- Nombre fantasía / razón social
- Logo (si tiene)
- Dirección del local
- Teléfono / WhatsApp destino de pedidos
- Horario de atención
- Zona de entrega / coordinación
- Paleta de color o preferencias de estilo
- Top 20-50 vinos a habilitar primero (para arrancar)

### 5.10 `vinotecas/proceso-interno.md` (solo vos + vendedor)
- Generación de link Mercado Pago (setup + suscripción)
- Confirmación de cobro → disparador de comisión vendedor
- Pago comisión: $50.000 al cobrarse el setup
- Template de ticket (cuando vendedor escala)
- Cuándo escalar a Alejandro (cambios de diseño, integraciones, problemas técnicos)
- Expectativa de tiempo de respuesta del vendedor al cliente

---

## 6. Principios de redacción

- Tono venta, no técnico. Evitar jerga ("SaaS", "panel admin", "SSL"). Usar: "la tienda", "cargar vinos", "el pedido te llega por WhatsApp".
- Español rioplatense, voseo ("tenés", "querés").
- Frases cortas, fragmentos aceptables.
- Precio consistente en todo el vertical: **$75.000 setup + $18.900/mes**.
- Diferenciador 2000 vinos mencionado en: playbook, ficha, speech 01, objeciones "es caro" y "ya tengo sitio".
- Sin promesas fuera de alcance. Respuesta estándar para pagos/stock/envíos: "cotización aparte".

---

## 7. Criterios de éxito

- Vendedor nuevo puede completar llamada 1 leyendo solo speech 01.
- Vendedor puede cerrar venta sin consultar a Alejandro durante la llamada (FAQ + objeciones resuelven in-situ).
- Precio y diferenciador aparecen idénticos en todos los materiales (verificable con grep).
- Los 4 speeches cubren los 4 momentos: frío, envío demo, cierre, onboarding.

## 8. Fuera de alcance (explícito)

- Automatización de emails / secuencias.
- CRM o tracking de leads.
- Material para redes sociales.
- Traducciones.
- Videos o piezas audiovisuales.
- Versiones para otros verticales (solo vinotecas en esta etapa).
