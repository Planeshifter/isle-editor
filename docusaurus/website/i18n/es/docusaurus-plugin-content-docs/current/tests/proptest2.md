---
id: proptest2
title: Two-Sample Proportion Test
sidebar_label: Two-Sample Proportion Test
---

Prueba de proporción de dos muestras.

## Opciones

* __data__ | `object (required)`: objeto de las matrices de valor. Default: `none`.
* __var1__ | `(string|Factor) (required)`: nombre de la primera variable. Default: `none`.
* __success__ | `any (required)`: categoría de éxito de "VAR1. Default: `none`.
* __var2__ | `(string|Factor)`: nombre de la segunda variable (se debe suministrar "var2" o "grupo"). Default: `none`.
* __group__ | `(string|Factor)`: nombre de la variable de agrupación (se debe suministrar "var2" o "grupo"). Default: `none`.
* __alpha__ | `number`: nivel de importancia. Default: `0.05`.
* __direction__ | `string`: dirección de prueba (ya sea `less`, `greater` o `two-sided`). Default: `'two-sided'`.
* __diff__ | `number`: diferencia bajo H0. Default: `0`.
* __showDecision__ | `boolean`: controla si se muestra si la hipótesis nula es rechazada en el nivel de significación especificado. Default: `false`.


## Ejemplos

```jsx live
<PropTest2
    data={heartdisease} 
    var1="Drugs"
    success={2}
    group="Complications"
/>
```
