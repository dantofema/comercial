# Vinotecas Sales Docs Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Crear set de 10 documentos de venta (markdown, en español rioplatense) para vertical Andes Vinotecas y onboarding de vendedor nuevo.

**Architecture:** Carpeta `vinotecas/` con playbook narrativo + refs cortas (ficha, FAQ, objeciones, proceso interno) + 4 speeches numerados en subcarpeta. Los 2 speeches viejos de vinoteca en raíz se reemplazan por las versiones reescritas (con precio nuevo y diferenciador 2000 vinos) dentro de `vinotecas/speeches/`. Andes genérico queda intacto.

**Tech Stack:** Markdown plano. Sin build, sin tests automatizados. Verificación = lectura + grep de consistencia de precio.

**Nota sobre TDD:** Este plan produce prosa de venta, no código. No aplica ciclo red-green. Sustituido por: verificación de consistencia (grep de precio) + revisión manual al final de cada fase.

---

## Convenciones globales (aplican a TODOS los archivos)

- Español rioplatense, voseo (tenés, querés, mandás).
- Precio textual: **$75.000 setup + $18.900/mes**. Nunca otro.
- Demo: `https://reservaurbana.dantofema.ar`
- Landing: `https://dantofema.ar/vinotecas`
- WhatsApp negocio: `+54 911 6127-4482` (tomado de `ANDES_DOCUMENTATION.md`)
- Tono: venta, sin tecnicismos. Prohibido: "SaaS", "panel admin", "SSL", "CMS".
- Sin tablas Markdown (usar listas con `└─` o bullets simples) — regla CLAUDE.md global.
- Diferenciador 2000 vinos textual: "más de 2000 vinos precargados con fotos profesionales, todos deshabilitados. Habilitás solo los que vendés, uno por uno o en bulk".

---

## File Structure

```
comercial/
├── vinotecas/
│   ├── README.md                          [Task 1]
│   ├── ficha-producto.md                  [Task 2]
│   ├── faq.md                             [Task 3]
│   ├── objeciones.md                      [Task 4]
│   ├── playbook-vendedor.md               [Task 5]
│   ├── proceso-interno.md                 [Task 6]
│   └── speeches/
│       ├── 01-llamada-fria.md             [Task 7]
│       ├── 02-envio-demo.md               [Task 8]
│       ├── 03-llamada-cierre.md           [Task 9]
│       └── 04-onboarding.md               [Task 10]
├── Speech Telefónico 1 – Vinotecas.md     [ELIMINADO en Task 11]
└── Speech Telefónico – Segunda Llamada - Vinotecas  [ELIMINADO en Task 11]
```

Orden: refs cortas primero (ficha, FAQ, objeciones) → playbook que las consume → proceso interno → speeches que consumen todo → cleanup.

---

## Task 1: README índice

**Files:**
- Create: `vinotecas/README.md`

- [ ] **Step 1: Crear archivo con índice**

Contenido:

```markdown
# Andes para Vinotecas — Documentación comercial

Documentación orientada a venta del vertical vinotecas.

## Orden de lectura sugerido (vendedor nuevo)

1. `playbook-vendedor.md` — manual narrativo, leer 1 vez de punta a punta
2. `ficha-producto.md` — 1 pager de referencia rápida (precio, qué incluye)
3. `faq.md` — 9 preguntas reales con respuestas listas
4. `objeciones.md` — rebates frase por frase para llamada
5. `speeches/01-llamada-fria.md` — primer contacto telefónico
6. `speeches/02-envio-demo.md` — textos para WhatsApp y email
7. `speeches/03-llamada-cierre.md` — segunda llamada y cierre
8. `speeches/04-onboarding.md` — qué pedir al cliente después del pago
9. `proceso-interno.md` — cobros, comisión, escalamiento (vos + dueño)

## Links clave

- Demo vinoteca: https://reservaurbana.dantofema.ar
- Landing: https://dantofema.ar/vinotecas
- WhatsApp: +54 911 6127-4482

## Precio

- Setup único: $75.000
- Mensual: $18.900

Cobro 100% por Mercado Pago.
```

- [ ] **Step 2: Commit**

```bash
git add vinotecas/README.md
git commit -m "docs(vinotecas): add README índice"
```

---

## Task 2: Ficha de producto

**Files:**
- Create: `vinotecas/ficha-producto.md`

- [ ] **Step 1: Crear archivo**

Contenido:

```markdown
# Ficha de producto — Andes para Vinotecas

Referencia rápida. Tener abierto durante llamadas.

## Identificación

- Producto: Andes para Vinotecas
- Empresa: DantoFema
- Demo en vivo: https://reservaurbana.dantofema.ar
- Landing: https://dantofema.ar/vinotecas
- Contacto: +54 911 6127-4482 (WhatsApp)

## Precio

- Setup único: $75.000
- Mensual: $18.900
- Forma de pago: Mercado Pago (setup + suscripción)
- Sin permanencia mínima

## Qué incluye

└─ Más de 2000 vinos precargados con fotos profesionales (todos deshabilitados; la vinoteca habilita los que vende)
└─ Habilitar/deshabilitar vinos uno por uno o en bulk
└─ Agregar vinos fuera del catálogo base, sin costo
└─ Carrito de compras que termina en WhatsApp de la vinoteca
└─ Dominio .com.ar (gestión incluida en el mantenimiento)
└─ Hosting
└─ Mantenimiento
└─ Soporte
└─ Indexación básica en Google + meta tags
└─ Publicación en 24 horas

## Qué NO incluye (y respuesta estándar)

└─ Pagos online (MP/tarjeta en el checkout) → el pedido termina en WhatsApp, ahí se coordina pago
└─ Gestión de stock → no hay módulo de stock. Si lo necesita: cotización aparte
└─ Envíos (Correo, Andreani, cadete) → se coordina por WhatsApp. Integración: cotización aparte
└─ Integraciones con sistemas contables/ERP → cotización aparte

## Diferenciador central

Las vinotecas reciben **más de 2000 vinos ya cargados con foto profesional**. Arrancan el sitio con catálogo completo, no desde cero. Esto ahorra semanas de carga manual y fotografía.

## Cancelación

Desde Mercado Pago. Al cancelar la suscripción, se da de baja el sitio.
```

- [ ] **Step 2: Commit**

```bash
git add vinotecas/ficha-producto.md
git commit -m "docs(vinotecas): add ficha producto"
```

---

## Task 3: FAQ

**Files:**
- Create: `vinotecas/faq.md`

- [ ] **Step 1: Crear archivo**

Contenido:

```markdown
# Preguntas frecuentes — Vinotecas

Respuestas listas. Tono conversacional, voseo. No improvisar.

## 1. ¿Los 2000 vinos tienen precios cargados?

No. Los precios los carga la vinoteca. Los podés modificar siempre que quieras. Nosotros te damos la base con nombres, bodegas, varietales y fotos profesionales. Los precios son tuyos.

## 2. ¿Puedo agregar vinos que no están en el catálogo base?

Sí, sin costo. Agregás los que quieras desde el panel.

## 3. ¿Ustedes cobran comisión por venta?

No. Y algo importante: **no son ventas online, son pedidos**. El cliente arma el carrito y el pedido termina en tu WhatsApp. Ahí coordinás vos: stock, fecha de entrega, forma de pago. Eso te da flexibilidad: no estás obligado a tener todo el stock siempre disponible ni a cobrarle al cliente por algo que ya no tenés.

## 4. ¿Acepta pagos online (Mercado Pago, tarjeta)?

El checkout termina en WhatsApp. Ahí coordinás el pago como siempre. Si querés integrar pagos online de forma directa, lo hacemos aparte con una cotización según el trabajo.

## 5. ¿Tiene dominio propio .com.ar? ¿Quién lo paga?

Sí, tenés tu dominio .com.ar. La gestión está incluida en el mantenimiento mensual. No pagás nada aparte.

## 6. ¿Puedo cancelar cuando quiera?

Sí, sin permanencia. La suscripción la manejás vos desde Mercado Pago. Cuando cancelás la suscripción, se da de baja el sitio.

## 7. ¿Funciona con mi sistema de stock actual?

No hay módulo de stock integrado. Si necesitás integrar con un sistema (Tango, Contabilium, lo que sea), lo hacemos como desarrollo aparte con una cotización según el trabajo.

## 8. ¿Envíos? ¿Se integra con Correo Argentino, Andreani, cadete?

No por defecto. El cliente coordina entrega por WhatsApp. Si querés una integración con algún servicio de envíos, la cotizamos según el trabajo.

## 9. ¿Aparece en Google?

Sí. Indexación básica y meta tags vienen incluidos. El sitio queda preparado para que Google lo encuentre.
```

- [ ] **Step 2: Commit**

```bash
git add vinotecas/faq.md
git commit -m "docs(vinotecas): add FAQ"
```

---

## Task 4: Objeciones

**Files:**
- Create: `vinotecas/objeciones.md`

- [ ] **Step 1: Crear archivo**

Contenido:

```markdown
# Manejo de objeciones — Vinotecas

Frases de rebote listas. Usar durante llamada de cierre (`speeches/03-llamada-cierre.md`).

## "Ya tengo sitio"

Respuesta:

> "Buenísimo. Te hago una pregunta: ¿tenés los vinos cargados con foto profesional? ¿Cuántos vinos tenés cargados hoy?"

Objetivo: casi nadie tiene 2000 vinos con foto. Ahí mostrás el diferenciador.

> "Nosotros arrancás con más de 2000 vinos ya cargados con fotos. Habilitás en minutos los que vendés. Cargar eso manualmente lleva semanas."

## "Estoy armando uno"

Respuesta:

> "¿Hace cuánto empezaste? ¿En qué parte estás?"

Si lleva más de 1 mes:

> "Es lo que nos cuentan todos. La mayoría se estanca justo en la carga de productos, porque es tiempo que no tenés. Nosotros eso lo tenemos resuelto: arrancás con más de 2000 vinos precargados y en 24 horas tenés el sitio publicado."

## "Es caro"

Respuesta:

> "Te lo desgloso. El setup es único, $75.000, y ahí entra todo: diseño, configuración, los 2000 vinos con fotos cargados, dominio .com.ar, publicación en 24 horas. Cargar 2000 vinos manualmente con fotos lleva meses de trabajo. Después $18.900 por mes que incluye hosting, mantenimiento y soporte. Sin permanencia."

## "No tengo tiempo ahora"

Respuesta:

> "Justamente por eso te llamo. Nosotros armamos todo. En 24 horas tenés el sitio publicado con los vinos cargados. Vos solo habilitás los que vendés — eso son minutos, no horas."

## "¿Y si no funciona / no me sirve?"

Respuesta:

> "Cancelás cuando quieras desde Mercado Pago. Sin permanencia, sin letra chica. La suscripción la manejás vos."

## "Tengo que consultarlo con mi socio / mi señora"

Respuesta:

> "Perfecto, me parece bien. ¿Cuándo te llamo? ¿Mañana a la misma hora te queda bien?"

Regla: agendar día y hora concretos. Nunca dejar "te llamo cuando pueda".

## "Mandame info por WhatsApp"

Está bien. Enviar (ver `speeches/02-envio-demo.md`):

- Link demo
- Link landing
- Precio
- Agendar llamada en el mismo mensaje

## "Ahora no, llamame en un mes"

Respuesta:

> "Dale. ¿Te anoto para el [fecha exacta + 30 días]? Mientras tanto te paso la demo por WhatsApp para que la mires tranquilo cuando tengas un momento."
```

- [ ] **Step 2: Commit**

```bash
git add vinotecas/objeciones.md
git commit -m "docs(vinotecas): add manejo de objeciones"
```

---

## Task 5: Playbook vendedor

**Files:**
- Create: `vinotecas/playbook-vendedor.md`

- [ ] **Step 1: Crear archivo**

Contenido:

```markdown
# Playbook del vendedor — Andes para Vinotecas

Leer completo una vez antes de la primera llamada. Después consultás las referencias (`ficha-producto.md`, `faq.md`, `objeciones.md`) durante el día.

## 1. Quiénes somos

DantoFema. Desarrollamos y comercializamos **Andes**, una plataforma de tienda online. Tenemos un vertical especializado: **Andes para Vinotecas**.

## 2. Qué vendemos

Una tienda online profesional para vinotecas. No es una página institucional. Es un catálogo con carrito, donde los clientes eligen vinos y el pedido termina en el WhatsApp de la vinoteca.

La tienda arranca con **más de 2000 vinos precargados con fotos profesionales**, todos deshabilitados. La vinoteca habilita en bulk los que vende. Ese es el diferenciador central.

## 3. A quién vendemos

Perfil ideal:

└─ Vinotecas que venden por WhatsApp / Instagram / Facebook
└─ Sin sitio web propio, o con sitio propio estancado hace meses
└─ Dueño disponible para atender teléfono (no grandes cadenas)
└─ Zona AMBA o interior con envíos propios / cadete

Perfil a descartar rápido:

└─ Ya tiene sitio funcionando con catálogo cargado (raro, pero pasa)
└─ Solo venta mayorista B2B sin interés en retail
└─ No contesta después de 2 intentos en días distintos

## 4. Por qué nos eligen

Tres puntos, en este orden de importancia:

1. **2000 vinos precargados con fotos.** No tienen que cargar nada para arrancar.
2. **24 horas de publicación.** No meses.
3. **Pedido por WhatsApp.** No les cambia cómo trabajan hoy, solo ordena el frente.

## 5. Flujo de venta

1. Extraer leads de Google Maps (vinotecas por zona)
2. Llamada fría con `speeches/01-llamada-fria.md` — objetivo: conseguir WhatsApp y mandar demo
3. Enviar demo con `speeches/02-envio-demo.md` — agendar fecha de segunda llamada en el mismo mensaje
4. Llamada de cierre con `speeches/03-llamada-cierre.md` — usar `objeciones.md` ante rechazo
5. Acuerdo verbal → enviar link de Mercado Pago del setup ($75.000)
6. Cobro setup confirmado → onboarding con `speeches/04-onboarding.md`
7. Publicación en 24 horas → arranca suscripción mensual MP ($18.900)
8. Post-venta continua (ver sección 7)

## 6. Cómo cobrás vos

**Comisión: $50.000 por venta cerrada.**

Se paga cuando se cobra el setup del cliente (no cuando hay acuerdo verbal, no cuando arranca la suscripción mensual). Setup cobrado = comisión liquidada.

## 7. Tu rol post-venta

Sos el contacto único del cliente.

Qué tenés que hacer:

└─ Responder consultas de uso por WhatsApp
└─ Ayudar a cargar/habilitar vinos cuando el cliente necesite
└─ Tomar solicitudes (cambios, dudas, pedidos nuevos) y **crear la tarea** (ver `proceso-interno.md`)
└─ Mantener la relación: el cliente te llama a vos

Qué NO hacés:

└─ Cambios técnicos en el sitio (lo hace el dueño / dev)
└─ Cotizar integraciones (stock, envíos, pagos online) → pasás el pedido al dueño
└─ Prometer features que no están en `ficha-producto.md`

## 8. Qué NO prometer nunca

└─ Pagos online integrados (MP, tarjeta) en el checkout — NO los hay por defecto
└─ Módulo de stock — NO existe
└─ Integraciones con sistemas contables / ERP — NO por defecto
└─ Envíos automatizados — NO por defecto
└─ Fechas de publicación menores a 24 horas
└─ Descuentos sobre el precio sin consultar al dueño

Ante duda: "Eso lo consulto y te confirmo en el día." Mejor eso que prometer mal.

## 9. A quién escalás

Dueño: Alejandro. Lo escalás cuando:

└─ Pide cotización de integración (stock, envíos, pagos, ERP)
└─ Reporta un bug o error del sitio
└─ Pide descuento o condición especial de precio
└─ Cliente grande (cadena, franquicia) — prospecto distinto al perfil ideal
└─ Cualquier pedido fuera de `ficha-producto.md`
```

- [ ] **Step 2: Commit**

```bash
git add vinotecas/playbook-vendedor.md
git commit -m "docs(vinotecas): add playbook vendedor"
```

---

## Task 6: Proceso interno

**Files:**
- Create: `vinotecas/proceso-interno.md`

- [ ] **Step 1: Crear archivo**

Contenido:

```markdown
# Proceso interno — Vinotecas

Solo para vendedor y dueño. No se comparte con cliente.

## Cobros (Mercado Pago)

- Setup $75.000: link de pago único generado por el dueño. Vendedor lo pide al dueño tras acuerdo verbal con cliente.
- Mensualidad $18.900: link de suscripción MP, también generado por dueño. Se envía al cliente junto al setup o inmediatamente después del cobro.
- Cliente cancela su suscripción desde su cuenta Mercado Pago. Al cancelar, se da de baja el sitio.

## Comisión del vendedor

- Monto: $50.000 por venta cerrada.
- Disparador: **cobro del setup confirmado** en Mercado Pago.
- Vendedor avisa al dueño cuando cliente confirma transferencia, pero la comisión se liquida cuando el pago figura efectivamente en MP.

## Ticket de solicitud (cuando vendedor escala)

Formato mínimo para pasar solicitudes al dueño:

```
Cliente: [nombre vinoteca]
Teléfono: [WA]
Fecha: [dd/mm]
Tipo: [bug | cotización | cambio | otro]
Descripción: [qué pidió el cliente, literal]
Prioridad: [alta | media | baja]
```

Canal: WhatsApp directo al dueño.

## Cuándo escalar al dueño

Ver sección 9 del `playbook-vendedor.md`. Resumen:

└─ Cotizaciones (stock, envíos, pagos online, ERP)
└─ Bugs técnicos
└─ Pedidos de descuento
└─ Clientes grandes (cadena, franquicia)
└─ Cualquier cosa fuera de la ficha de producto

## SLA respuesta al cliente

- Consulta por WhatsApp en horario comercial: responder en el día.
- Consulta fuera de horario: responder a primera hora del día siguiente.
- Solicitud que requiere acción del dueño: crear ticket el mismo día y avisar al cliente que "lo estamos viendo, te confirmo".
```

- [ ] **Step 2: Commit**

```bash
git add vinotecas/proceso-interno.md
git commit -m "docs(vinotecas): add proceso interno"
```

---

## Task 7: Speech 01 — Llamada fría

**Files:**
- Create: `vinotecas/speeches/01-llamada-fria.md`

- [ ] **Step 1: Crear archivo**

Contenido:

```markdown
# Speech 01 — Llamada fría a vinoteca

Objetivo: generar interés, conseguir número de WhatsApp, mandar demo.

Duración ideal: 2-3 minutos.

---

## 1. Apertura

Hola, ¿qué tal?

¿Hablo con el dueño o el encargado de la vinoteca?

Mi nombre es [NOMBRE].

Estoy contactando algunas vinotecas de la zona que encontré en Google Maps.

¿Tenés un minuto para que te cuente?

---

## 2. Contexto y gancho (2000 vinos)

Nosotros ayudamos a vinotecas a ordenar su venta online con una tienda profesional.

No es una página institucional. Es un catálogo online con carrito. El cliente entra, ve los vinos con foto, arma su pedido, y el pedido te llega a tu WhatsApp.

Lo que tiene de particular nuestro servicio es que **arrancás con más de 2000 vinos ya cargados, con fotos profesionales**. Están todos deshabilitados. Vos habilitás los que vendés, uno por uno o en bulk. En minutos tenés tu catálogo online.

---

## 3. Pregunta diagnóstico

Te hago una consulta rápida.

Hoy **¿cómo mostrás tu catálogo de vinos a los clientes?**

¿Usás WhatsApp, Instagram, tenés sitio propio, o todavía no mostrás online?

---

## 4. Profundización según respuesta

Si **WhatsApp / Instagram**:

¿Te pasa que mandás fotos y precios de los mismos vinos una y otra vez? ¿Los clientes preguntan cosas que ya respondiste mil veces?

Si **tiene sitio propio**:

Buenísimo. ¿Tenés los vinos cargados con foto? ¿Cuántos tenés cargados hoy?

(Ir a `objeciones.md` → "Ya tengo sitio" si dice que sí)

Si **no vende online todavía**:

Muchas vinotecas están en esa. El problema siempre es el mismo: cargar los productos lleva meses. Por eso nosotros ya te damos los 2000 cargados.

---

## 5. Presentación de la solución (corta)

La tienda queda lista en 24 horas.

El cliente ve los vinos, los filtra por bodega, tipo, precio. Arma su pedido. El pedido te llega a tu WhatsApp, como venís trabajando. Ahí coordinás entrega y pago.

Y además, tu tienda queda con dominio .com.ar propio, aparece en Google, con hosting y soporte incluidos.

---

## 6. Precio

Te cuento el precio.

Se divide en dos:

Un **setup único de $75.000**. Ahí entra todo: el diseño, la configuración, los 2000 vinos cargados con fotos, el dominio .com.ar, y dejar el sitio publicado en 24 horas.

Y después **$18.900 por mes**, que incluye hosting, mantenimiento y soporte.

Sin permanencia. Cancelás cuando quieras desde Mercado Pago.

---

## 7. Ofrecer demo

Lo mejor es que lo veas.

Tengo una demo armada para vinotecas. La mirás tranquilo desde el celular. Se ve exactamente cómo queda el catálogo y cómo funciona el carrito.

---

## 8. Cierre llamada 1

Si te parece, te paso el link por WhatsApp. Lo mirás cuando tengas un momento.

¿A qué número te lo paso?

---

## 9. Confirmación + agendar segunda llamada

Perfecto. Ahora te mando el link.

¿Te llamo el [día, 2-3 días después] a las [hora] para ver qué te pareció?

---

## Reglas de la llamada

└─ No leer monótono. Pausas naturales.
└─ Después de preguntar, **callate y esperá respuesta**.
└─ Precio siempre completo: "$75.000 setup y $18.900 por mes". Nunca dar solo uno.
└─ Si el cliente interrumpe con objeción → ir a `objeciones.md`.
└─ Si no quiere avanzar → agendar fecha concreta igual ("¿te llamo en un mes?").
```

- [ ] **Step 2: Commit**

```bash
git add vinotecas/speeches/01-llamada-fria.md
git commit -m "docs(vinotecas): add speech llamada fría"
```

---

## Task 8: Speech 02 — Envío de demo

**Files:**
- Create: `vinotecas/speeches/02-envio-demo.md`

- [ ] **Step 1: Crear archivo**

Contenido:

```markdown
# Speech 02 — Envío de demo (WhatsApp / Email)

Se manda inmediatamente después de la llamada 1. Mensaje breve, link a demo, agendar llamada en el mismo texto.

---

## WhatsApp

Copiar, reemplazar `[NOMBRE]` y `[DIA + HORA]`:

```
Hola [NOMBRE], soy [VENDEDOR] de Andes para Vinotecas.

Como charlamos, te paso la demo para que la mires tranquilo:

👉 Demo: https://reservaurbana.dantofema.ar
👉 Info: https://dantofema.ar/vinotecas

Lo importante:
- Más de 2000 vinos ya cargados con foto
- El pedido te llega a tu WhatsApp
- Setup $75.000 + $18.900/mes (sin permanencia)
- En 24 hs tu tienda publicada

Te llamo el [DIA] a las [HORA] para ver qué te parece. Cualquier duda, me escribís por acá.
```

---

## Email

**Asunto:**

```
Demo Andes para Vinotecas — [nombre vinoteca]
```

**Cuerpo:**

```
Hola [NOMBRE],

Soy [VENDEDOR] de Andes. Como charlamos por teléfono, te paso la demo de tienda online para vinotecas para que la veas tranquilo.

Demo en vivo: https://reservaurbana.dantofema.ar
Info del servicio: https://dantofema.ar/vinotecas

Puntos clave:

- Arrancás con más de 2000 vinos ya cargados con fotos profesionales. Vos habilitás los que vendés.
- Los clientes arman el pedido y te llega directo a tu WhatsApp.
- Dominio .com.ar propio, hosting, mantenimiento y soporte incluidos.
- Publicación en 24 horas desde que tenemos tus datos.

Precio:

- Setup único: $75.000
- Mensual: $18.900
- Sin permanencia, cancelás desde Mercado Pago cuando quieras.

Te llamo el [DIA] a las [HORA] para ver qué te pareció.

Cualquier duda, me escribís.

Saludos,
[VENDEDOR]
[WhatsApp]
```

---

## Reglas

└─ Siempre cerrar con día y hora concretos de segunda llamada. Nunca "te llamo en unos días".
└─ Si el cliente responde con pregunta antes de la segunda llamada → responder con la respuesta del `faq.md`, nunca improvisar.
└─ No mandar PDFs ni adjuntos pesados. Solo los 2 links.
```

- [ ] **Step 2: Commit**

```bash
git add vinotecas/speeches/02-envio-demo.md
git commit -m "docs(vinotecas): add speech envío demo"
```

---

## Task 9: Speech 03 — Llamada de cierre

**Files:**
- Create: `vinotecas/speeches/03-llamada-cierre.md`

- [ ] **Step 1: Crear archivo**

Contenido:

```markdown
# Speech 03 — Llamada de cierre

Segunda llamada. Objetivo: cierre. Si hay objeción, resolver con `objeciones.md`. Si acuerda, pedir datos y enviar link de Mercado Pago.

---

## 1. Apertura cálida

Hola [NOMBRE], ¿cómo estás?

Soy [VENDEDOR], te llamo nuevamente por la tienda online para la vinoteca. La otra vez te pasé la demo por WhatsApp.

¿Pudiste verla?

---

## 2A. Si la vio

¿Qué te pareció?

(Escuchar. No interrumpir.)

La idea es justamente esa: que los clientes miren los vinos tranquilos, y cuando quieren comprar el pedido te llega a vos por WhatsApp. Llegan mucho más decididos.

## 2B. Si no la vio

Tranquilo, la pasamos de nuevo juntos:

```
https://reservaurbana.dantofema.ar
```

¿La podés abrir ahora un minuto? Te cuento mientras la mirás.

(Si no puede: "¿Querés que te llame mañana a la misma hora, ya habiendo visto la demo?" — agendar y cortar.)

---

## 3. Pregunta de avance

Te hago una consulta directa:

**¿Te serviría tener tu catálogo de vinos ordenado online, con carrito, para que los clientes te hagan pedidos por WhatsApp sin que tengas que mandar fotos y precios todo el tiempo?**

---

## 4. Si hay objeción

Ir a `objeciones.md`. No improvisar. Usar la frase exacta del rebote correspondiente.

Después del rebote, **volver a la pregunta de avance** (punto 3).

---

## 5. Si muestra interés

Perfecto.

Te cuento cómo seguimos.

Nosotros nos encargamos de armar todo: diseño, configuración, los 2000 vinos ya los tenés cargados. En 24 horas desde que tengamos tus datos, el sitio queda publicado.

Para empezar solo necesitamos:

└─ Nombre de la vinoteca
└─ Logo (si tenés, sino lo armamos)
└─ Dirección y teléfono
└─ WhatsApp donde querés recibir los pedidos

---

## 6. Recordatorio de precio

Como te había comentado:

└─ Setup único de **$75.000** para crear la tienda
└─ **$18.900 por mes** que incluye hosting, mantenimiento y soporte
└─ Sin permanencia, cancelás desde Mercado Pago cuando quieras

---

## 7. Cierre con pedido de datos para MP

Si te parece, arrancamos hoy:

Te mando por WhatsApp **dos links de Mercado Pago**:

- Uno por el setup de $75.000
- Otro por la suscripción mensual de $18.900

Pagás el setup, confirmo conmigo por WhatsApp, y mañana mismo arrancamos a armar la tienda. En 24 horas tenés tu sitio publicado.

**¿Avanzamos?**

---

## 8. Si dice sí

Perfecto. Te mando los dos links ahora por WhatsApp. Cualquier cosa me avisás por ahí mismo.

Una vez pagado el setup, te escribo hoy mismo para coordinar el onboarding.

(Avisar al dueño: "Cliente [nombre vinoteca] cierra. Pedime los links de MP.")

---

## 9. Si dice "lo pienso" o "lo consulto"

No forzar. Agendar fecha concreta:

¿Te parece que te llame el [día concreto, 2-3 días máximo] a la misma hora?

Mientras tanto, si te surge cualquier duda me escribís por WhatsApp.

(Agendar en tu agenda. Llamar el día indicado, no antes.)

---

## Reglas del cierre

└─ **Nunca ofrecer descuento** sin consultar al dueño antes.
└─ Cerrar con pregunta cerrada: "¿avanzamos?" no "¿qué te parece?".
└─ Si hay 2 objeciones en la misma llamada, cortar con agenda de próxima llamada. No insistir 3 veces.
└─ Precio siempre completo: setup + mensual juntos.
```

- [ ] **Step 2: Commit**

```bash
git add vinotecas/speeches/03-llamada-cierre.md
git commit -m "docs(vinotecas): add speech llamada cierre"
```

---

## Task 10: Speech 04 — Onboarding

**Files:**
- Create: `vinotecas/speeches/04-onboarding.md`

- [ ] **Step 1: Crear archivo**

Contenido:

```markdown
# Speech 04 — Onboarding post-pago

Se ejecuta apenas se cobra el setup ($75.000) en Mercado Pago. Objetivo: recolectar todos los datos para que el dueño/dev publique el sitio en 24 horas.

---

## 1. Apertura

Hola [NOMBRE], gracias por confirmar el pago del setup.

Arrancamos. Te voy a pedir algunos datos por WhatsApp. En 24 horas tenés tu sitio publicado.

---

## 2. Checklist de datos (pedir en un solo mensaje)

Mensaje WhatsApp tipo:

```
Perfecto [NOMBRE], arrancamos. Necesito estos datos para armar tu tienda:

1. Nombre fantasía de la vinoteca (como querés que aparezca en el sitio)
2. Razón social (si es distinta al nombre fantasía)
3. Logo — mandámelo en PNG o JPG. Si no tenés, avisame y lo armamos.
4. Dirección del local
5. Teléfono de contacto
6. WhatsApp donde querés recibir los pedidos (puede ser el mismo)
7. Horario de atención
8. Zona de entrega (barrios, localidades, o "solo retira en local")
9. Paleta de color o estilo preferido (si querés algo puntual, sino elegimos nosotros)
10. Top 20-50 vinos que querés habilitar primero (para arrancar con catálogo visible). Los demás los vas habilitando vos a medida.

Cuando tengas todo, me lo pasás junto. Arranco apenas lo tenga.
```

---

## 3. Validar recepción

Cuando el cliente manda datos:

└─ Leer todos. Confirmar que no falta nada.
└─ Si falta algo, pedir solo lo que falta (no volver a pedir todo).
└─ Confirmar: "Recibido todo. Arranco ahora. Te aviso cuando esté listo el sitio para que lo veas."

---

## 4. Pasar al dueño / dev

Crear ticket de onboarding con todos los datos. Formato (ver `proceso-interno.md`):

```
Cliente: [nombre vinoteca]
Tipo: onboarding
Datos completos:
- Nombre fantasía: ...
- Razón social: ...
- Logo: [adjunto]
- Dirección: ...
- Teléfono: ...
- WhatsApp pedidos: ...
- Horario: ...
- Zona entrega: ...
- Estilo: ...
- Top vinos a habilitar: ...
Prioridad: alta
```

---

## 5. Durante las 24 horas

└─ No prometer hora exacta. Decir: "En las próximas 24 horas lo tenés."
└─ Si el cliente pregunta, tranquilizar: "Está en proceso, te aviso cuando esté publicado."

---

## 6. Entrega del sitio

Cuando el dueño avisa que el sitio está publicado:

Mensaje al cliente:

```
¡Listo [NOMBRE]! Tu sitio ya está publicado:

👉 [URL del sitio]

Podés entrar con estas credenciales al panel para administrar los vinos:

Usuario: [user]
Clave: [pass]

Te llamo mañana para hacer un recorrido juntos del panel y que empieces a habilitar vinos. ¿Te parece [hora]?
```

---

## 7. Primera llamada post-publicación

Objetivo: mostrar cómo usar el panel. Cubrir:

└─ Login
└─ Cómo habilitar vinos (uno por uno y en bulk)
└─ Cómo agregar un vino nuevo fuera del catálogo base
└─ Cómo editar precios
└─ Dónde ver los pedidos entrantes
└─ Cómo responde el WhatsApp cuando llega un pedido

---

## 8. Cierre del onboarding

Avisar al cliente:

- Por cualquier duda de uso, me escribís a mí directamente.
- Cobro mensual arranca automáticamente desde Mercado Pago.
- Cualquier cambio grande (diseño, integración), lo cotizamos aparte.
```

- [ ] **Step 2: Commit**

```bash
git add vinotecas/speeches/04-onboarding.md
git commit -m "docs(vinotecas): add speech onboarding"
```

---

## Task 11: Cleanup — eliminar speeches viejos

**Files:**
- Delete: `Speech Telefónico 1 – Vinotecas.md`
- Delete: `Speech Telefónico – Segunda Llamada - Vinotecas`

- [ ] **Step 1: Eliminar archivos viejos**

```bash
git rm "Speech Telefónico 1 – Vinotecas.md" "Speech Telefónico – Segunda Llamada - Vinotecas"
```

- [ ] **Step 2: Commit**

```bash
git commit -m "chore: remove old vinoteca speeches (replaced by vinotecas/speeches/)"
```

---

## Task 12: Verificación de consistencia

- [ ] **Step 1: Verificar precio consistente en todo vinotecas/**

```bash
grep -r "\$50.000\|\$8.900" vinotecas/
```

Expected: el único match debe ser `$50.000` en `playbook-vendedor.md` y `proceso-interno.md` (comisión del vendedor). **Ningún match** para `$8.900`. Si aparece `$8.900` en algún lado → es el precio viejo, corregir a `$18.900`.

```bash
grep -rc "\$75.000" vinotecas/
grep -rc "\$18.900" vinotecas/
```

Expected: ambos precios aparecen en README, ficha, playbook, objeciones, speech 01, speech 02, speech 03. Al menos 7 archivos cada uno.

- [ ] **Step 2: Verificar links consistentes**

```bash
grep -r "reservaurbana.dantofema.ar\|dantofema.ar/vinotecas" vinotecas/
```

Expected: ambos URLs aparecen en README, ficha, speech 01, speech 02.

- [ ] **Step 3: Verificar ausencia de jerga técnica prohibida**

```bash
grep -ri "SaaS\|SSL\|CMS\|panel admin\|backend\|frontend" vinotecas/
```

Expected: sin matches. Si aparece → reemplazar por término de venta.

- [ ] **Step 4: Verificar ausencia de tablas Markdown**

```bash
grep -rn "^|.*|$" vinotecas/
```

Expected: sin matches (regla CLAUDE.md global).

- [ ] **Step 5: Revisión manual rápida**

Abrir los 10 archivos y leer. Confirmar:

└─ Voseo consistente
└─ Tono venta (no técnico)
└─ Diferenciador 2000 vinos mencionado en: playbook, ficha, speech 01, objeciones (al menos 4 archivos)
└─ Comisión $50.000 solo aparece en playbook y proceso-interno

- [ ] **Step 6: Commit si hay correcciones**

```bash
git add vinotecas/
git commit -m "docs(vinotecas): fix consistency issues from review"
```

---

## Self-review checklist (al terminar)

- [ ] 10 archivos creados (README + 5 docs raíz vinotecas + 4 speeches)
- [ ] 2 archivos viejos eliminados
- [ ] Precio $75.000 / $18.900 consistente
- [ ] Diferenciador 2000 vinos presente en playbook, ficha, speech 01, objeciones
- [ ] Comisión $50.000 solo en playbook + proceso-interno
- [ ] Ningún término técnico prohibido
- [ ] Todos los archivos en voseo
- [ ] Sin tablas Markdown
- [ ] Commits separados por archivo (12 commits aproximadamente)
