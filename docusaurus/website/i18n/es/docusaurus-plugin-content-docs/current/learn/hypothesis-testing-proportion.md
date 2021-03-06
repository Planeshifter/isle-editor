---
id: hypothesis-testing-proportion
title: Hypothesis Testing for Proportions
sidebar_label: Hypothesis Testing for Proportions
---

Un componente de aprendizaje en pruebas de hipótesis para una proporción de la población.

## Opciones

* __types__ | `array<string>`: el tipo de prueba (una muestra, dos muestras) que el widget debe exponer. Default: `[
  'One-Sample',
  'Two-Sample'
]`.
* __feedback__ | `boolean`: controla si se muestran los botones de retroalimentación. Default: `false`.
* __nullHypothesisAsValue__ | `boolean`: mostrar siempre la hipótesis nula como un único valor. Default: `false`.
* __pValue__ | `string`: etiqueta personalizada para el valor p (debe ser una cadena de ecuaciones LaTeX). Default: `none`.
* __style__ | `object`: Estilos en línea CSS. Default: `{}`.


## Ejemplos

```jsx live
<LearnProportionTest />
```

