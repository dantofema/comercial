# LSP — Límite máximo de pago a un vendedor (Andes Vinotecas)

Modelo de unit economics para responder: **¿el negocio banca un vendedor a $1.500.000/mes?**

Cuatro salidas del mismo modelo: LTV por cliente, punto de equilibrio, LSP (pago máximo) y CAC sostenible. Enfoque steady-state (régimen): el negocio se modela ya con base de clientes recurrentes funcionando.

---

## 1. Supuestos e inputs

Precios del vertical (`README.md`, promo 50% OFF de por vida):

└─ Setup único: $145.000

└─ Mensual: $36.250

Neto de comisión Mercado Pago (6%, acreditación inmediata):

└─ Setup neto: $145.000 × 0,94 = **$136.300**

└─ Mensual neto: $36.250 × 0,94 = **$34.075**

Costos:

└─ Sueldo vendedor: **$1.500.000/mes**

└─ Infra (1 droplet DigitalOcean, hostea varios clientes): **~$20.000/mes** fijo

└─ Costo variable por cliente: ≈ $0 (infra no escala por venta)

└─ **Costo fijo mensual total: $1.520.000**

Variables del modelo:

└─ **L** = vida media del cliente en meses (sin dato real → escenarios 6 / 12 / 24)

└─ **V** = ventas nuevas cerradas por mes

Identidad central (régimen):

> Con vida media L y V ventas/mes, la base activa se estabiliza en **N = V × L** clientes (entradas V = salidas N/L). El recurrente acumulado más los setups nuevos colapsan en:
>
> **Ingreso mensual = V × LTV(L)**

---

## 2. LTV neto por cliente

Setup neto + (mensual neto × L):

LTV(L) = 136.300 + 34.075 × L

└─ L = 6 meses: **$340.750**

└─ L = 12 meses: **$545.200**

└─ L = 24 meses: **$954.100**

---

## 3. Punto de equilibrio

Ventas/mes mínimas para cubrir el fijo de $1.520.000:

V_eq = 1.520.000 / LTV(L)

└─ L = 6m: **~4,5 ventas/mes** → base ~27 clientes activos

└─ L = 12m: **~2,8 ventas/mes** → base ~34 clientes activos

└─ L = 24m: **~1,6 ventas/mes** → base ~38 clientes activos

A más vida del cliente, menos ventas nuevas hacen falta: el recurrente sostiene el sueldo.

---

## 4. LSP — pago máximo al vendedor

Pago máximo sostenible = ingreso mensual − infra − margen deseado.

Con margen cero: **LSP = V × LTV(L) − $20.000**

Escenario vida 12m, ingreso = V × $545.200:

└─ V = 2/mes → ingreso $1.090.400 → **NO banca $1.5M** (pérdida ~$430.000)

└─ V = 3/mes → ingreso $1.635.600 → banca sueldo + margen **~$115.000**

└─ V = 4/mes → ingreso $2.180.800 → margen **~$660.000**

└─ V = 5/mes → ingreso $2.726.000 → margen **~$1.206.000**

**Lectura:** a $1.500.000 de sueldo y vida 12m, el vendedor necesita **3 cierres/mes sostenidos en régimen** para que cierre con margen positivo.

Comparación con `objetivos-vendedor.md` (§3): el doc pide **2 a 4 clientes cerrados por semana** = 8 a 16/mes. Eso está muy por encima del equilibrio (2,8/mes). Si se cumple, el negocio sobra plata; conviene validar si ese target semanal es realista o bajarlo a algo medible.

---

## 5. CAC sostenible y payback

CAC (costo de adquisición por cliente) = costo fijo / ventas:

CAC = $1.520.000 / V

Regla de oro: **CAC ≤ LTV**. Despejando da exactamente V ≥ V_eq (mismo número que el equilibrio). Topes de CAC tolerable:

└─ L = 6m: hasta **$340.750/cliente**

└─ L = 12m: hasta **$545.200/cliente**

└─ L = 24m: hasta **$954.100/cliente**

Payback del CAC (meses para recuperar lo invertido por cliente), vida 12m:

└─ V = 3/mes → CAC $506.667. Recupera setup neto $136.300 al instante; resto $370.367 / $34.075 mensual ≈ **~11 meses**

└─ V = 4/mes → CAC $380.000. Payback ≈ **~7 meses**

Payback largo significa que la rentabilidad depende de que el cliente **no churnee** antes de recuperar el costo. Con vida 12m y payback 11m el colchón es fino: bajar churn o subir V es crítico.

---

## 6. Rampa — primeros meses

El régimen asume la base ya construida. Arrancando de cero no hay recurrente: los primeros meses se pierde plata hasta acumular clientes.

Ingreso del mes m (antes de que empiece el churn, m < L):

Ingreso(m) = V × 136.300 (setups) + V × m × 34.075 (recurrente de la base acumulada)

Escenario V = 3/mes, vida 12m:

└─ Mes 1: base 3 → ingreso $511.125 → pérdida $1.008.875

└─ Mes 3: base 9 → ingreso $715.575 → pérdida $804.425

└─ Mes 6: base 18 → ingreso $1.022.250 → pérdida $497.750

└─ Mes 9: base 27 → ingreso $1.328.925 → pérdida $191.075

└─ Mes 11: base 33 → ingreso $1.533.375 → **breakeven mensual** (+$13.375)

└─ Mes 12: base 36 → ingreso $1.635.600 → +$115.600 (régimen)

**Capital de trabajo necesario:** la suma de las pérdidas hasta el breakeven mensual es **~$5.500.000** con V = 3/mes. Con V = 4/mes el breakeven mensual llega al **~mes 8** y el capital baja a **~$3.000.000**.

Hay que tener ese colchón antes de contratar, o el sueldo funde la caja antes de que el recurrente despegue.

---

## 7. Conclusión — ¿banca $1.500.000?

└─ **En régimen, sí**, si el vendedor sostiene **≥ 3 cierres/mes** (vida 12m). Con 4/mes deja margen cómodo (~$660k).

└─ **Con menos de ~2,8 cierres/mes el negocio pierde plata** pagando ese sueldo.

└─ **El riesgo no es el régimen, es la rampa:** hacen falta **~$3-5,5M de capital** para aguantar los primeros 8-11 meses hasta que el recurrente cubra el sueldo.

└─ **Palancas para mejorar:** subir vida del cliente (reduce equilibrio a 1,6/mes a 24m), subir ventas/mes, o atar parte del sueldo a comisión para reducir el fijo durante la rampa.

└─ **Pendiente de validar:** vida real del cliente (define todo el modelo) y si el target de 8-16 cierres/mes de `objetivos-vendedor.md` es alcanzable.

> Esquema de comisión variable vs. sueldo fijo: ver `proceso-interno.md`. Targets y ratios del vendedor: `objetivos-vendedor.md`.
