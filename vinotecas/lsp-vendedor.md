# LSP — Modelo de pago al vendedor y rentabilidad (Andes Vinotecas)

Unit economics del rol comercial con esquema **fijo + comisión**, target **8 ventas/mes**.
Responde dos preguntas:

1. ¿Cuánto gana el vendedor (OTE) con el esquema $250.000 fijo + comisión?
2. ¿En cuántos meses el negocio me deja **$1.500.000/mes a mí** (dueño)?

Enfoque steady-state (régimen) + rampa mes a mes desde cero.

---

## 1. Supuestos e inputs

Precios (`README.md`):

└─ Setup único: $190.000

└─ Mensual: $36.250

Neto de comisión Mercado Pago (6%):

└─ Setup neto: **$178.600**

└─ Mensual neto: **$34.075**

Estructura del vendedor:

└─ Fijo garantizado: **$250.000/mes**

└─ Comisión variable: **50% del setup + 25% del recurrente** (ver §2)

└─ OTE (on-target earnings) a 8 ventas/mes en régimen: **$1.880.000**

Otros costos:

└─ Infra (1 droplet, hostea varios clientes): **~$20.000/mes** fijo

└─ Costo variable por cliente: ≈ $0

Variables:

└─ **V** = ventas nuevas/mes = **8** (target fijo de este doc)

└─ **L** = vida media del cliente en meses (sin dato real; ramp asume L ≥ 12)

---

## 2. Esquema de comisión

Comisión sobre el monto facturado (bruto), pagada al vendedor:

└─ Por cierre nuevo: **50% del setup = $95.000**

└─ Por cliente activo, cada mes: **25% del mensual = $9.062,50**

Calibración a régimen (V=8, base 96 clientes activos):

└─ Comisión por setups: 8 × $95.000 = **$760.000/mes**

└─ Comisión por recurrente: 96 × $9.062,50 = **$870.000/mes**

└─ Variable total: **$1.630.000** + fijo $250.000 = **OTE $1.880.000/mes**

**Nota:** el 50% del setup carga fuerte la comisión hacia el cierre (premia traer cliente
nuevo); el 25% recurrente premia retención. Con 8 ventas/mes el OTE del vendedor sube a
~$1,88M — bien por encima de un piso de $1,5M. Ambos % son perillas ajustables: si querés
bajar el OTE del vendedor, recortá el % de setup.

---

## 3. LTV y equilibrio (referencia)

LTV neto por cliente = 178.600 + 34.075 × L:

└─ L = 6m: $383.050  ·  L = 12m: $587.500  ·  L = 24m: $996.400

A diferencia del sueldo fijo puro, acá el costo del vendedor **escala con las ventas**
(comisión), así que no hay un piso fijo grande que cubrir: el negocio es rentable desde
volúmenes bajos. El verdadero piso fijo es solo $250.000 + $20.000 = **$270.000/mes**.

---

## 4. Rampa mes a mes (V = 8, L ≥ 12)

Sin churn en los primeros 12 meses. Base de clientes activos = 8 × mes.

Fórmulas:

└─ Ingreso neto(m) = $1.428.800 (setups) + $272.600 × m (recurrente acumulado)

└─ Comp vendedor(m) = $1.010.000 + $72.500 × m

└─ Ganancia dueño(m) = ingreso − comp − infra = **$200.100 × m + $398.800**

Valores clave:

└─ Mes 1 — dueño **$598.900** · vendedor $1.082.500

└─ Mes 4 — dueño **$1.199.200** · vendedor $1.300.000

└─ Mes 6 — dueño **$1.599.400** · vendedor $1.445.000 (cruza tu target)

└─ Mes 8 — dueño **$1.999.600** · vendedor $1.590.000

└─ Mes 10 — dueño **$2.399.800** · vendedor $1.735.000

└─ Mes 12 — dueño **$2.800.000** · vendedor $1.880.000 (régimen)

**Clave:** el dueño es rentable desde el mes 1 (no hace falta capital de trabajo grande,
a diferencia de un sueldo fijo de $1,5M que exigía ~$3-5M de colchón).

### Ganancia del dueño por mes

```mermaid
xychart-beta
    title "Ganancia del dueño por mes — V=8 (barra) vs target $1.5M (línea)"
    x-axis "Mes" [1,2,3,4,5,6,7,8,9,10,11,12]
    y-axis "ARS/mes" 0 --> 3000000
    bar [598900,799000,999100,1199200,1399300,1599400,1799500,1999600,2199700,2399800,2599900,2800000]
    line [1500000,1500000,1500000,1500000,1500000,1500000,1500000,1500000,1500000,1500000,1500000,1500000]
```

### Compensación del vendedor por mes

```mermaid
xychart-beta
    title "Compensación del vendedor por mes — V=8 (barra) vs OTE $1.88M (línea)"
    x-axis "Mes" [1,2,3,4,5,6,7,8,9,10,11,12]
    y-axis "ARS/mes" 0 --> 2000000
    bar [1082500,1155000,1227500,1300000,1372500,1445000,1517500,1590000,1662500,1735000,1807500,1880000]
    line [1880000,1880000,1880000,1880000,1880000,1880000,1880000,1880000,1880000,1880000,1880000,1880000]
```

---

## 5. ¿Llego a $1.500.000/mes para mí al mes 10?

Sí, holgado. Con V = 8 y L ≥ 12:

└─ Cruzás los **$1.500.000 en el mes 6** ($1.599.400) — cuatro meses antes de tu objetivo

└─ Mes 10: dueño = **$2.399.800** (160% del objetivo)

El 50% de comisión sobre el setup hace que el vendedor arranque cobrando fuerte ($1,08M ya
en el mes 1) y retrasa un poco tu cruce frente a un % de setup menor — pero con 8 ventas/mes
igual llegás al mes 6. El cuello de botella es la **capacidad real del vendedor de cerrar 8/mes**.

---

## 6. Reparto del ingreso neto en régimen (V=8)

De cada mes en régimen ($4.700.000 netos), el reparto:

```mermaid
pie showData
    title Reparto del ingreso neto mensual — régimen V=8
    "Dueño" : 2800000
    "Comisión vendedor" : 1630000
    "Fijo vendedor" : 250000
    "Infra" : 20000
```

El vendedor (fijo + comisión) se lleva ~40% del ingreso neto; el dueño retiene ~60%.

---

## 7. Sensibilidad a la vida del cliente

El plan **depende de que el cliente se quede ≥ 12 meses** para llegar al régimen pleno. Si
churnea antes, la base deja de crecer. En régimen la base se estabiliza en 8×L clientes y
la ganancia del dueño es:

Ganancia régimen = $398.800 + $200.100 × L

└─ L = 24m: base crece hasta 192 activos → dueño **$5.201.200/mes**

└─ L = 12m: base se estabiliza en 96 → dueño **$2.800.000/mes** (escenario de este doc)

└─ L = 6m: churn arranca en el mes 7, base tope ~48 → dueño **$1.599.400/mes** y
   vendedor **~$1.445.000**

**Hallazgo:** con 8 ventas/mes incluso L=6 supera tu target de $1,5M ($1.599.400). El
volumen compensa la vida corta. Aun así, retener rinde: subir L de 6 a 12 suma
~$1.200.000/mes al dueño.

**Alerta sobre el vendedor:** a L=24 la comisión recurrente lleva el OTE del vendedor a
~$2.750.000/mes (cobra $9.062,50 por cada uno de 192 clientes activos), más el 50% de setup
que ya pesa fuerte desde el arranque. Si la vida resulta larga, conviene topar la comisión
o convertir parte en bono único.

---

## 8. Conclusión

└─ **El esquema $250k fijo + 50%/25% de comisión da un OTE de ~$1,88M** al vendedor a
   8 ventas/mes en régimen, sin fundir la caja: el dueño es rentable desde el mes 1.

└─ **Tu objetivo de $1,5M/mes se alcanza en el mes 6**, por delante de tu meta, con V=8.

└─ **En régimen el dueño retiene $2.800.000/mes** (L=12m), casi el doble del objetivo.

└─ **El cuello de botella pasa a ser el cierre:** el modelo banca 8 ventas/mes, la pregunta
   es si el vendedor las sostiene. El 50% de setup lo incentiva a cazar clientes nuevos.

└─ Comisión (50% setup / 25% recurrente) y precios son perillas ajustables: ver §2 y §5.

> Targets y ratios del vendedor: `objetivos-vendedor.md`. Cobros y escalamiento: `proceso-interno.md`.
