---
id: anova
title: ANOVA
sidebar_label: ANOVA
---

Analiza wariancji.

## Opcje

* __data__ | `object (required)`: przedmiot tablice wartości. Default: `none`.
* __variable__ | `string (required)`: nazwa zmiennej, która ma być wyświetlana. Default: `none`.
* __group__ | `(string|Factor)`: nazwa zmiennej grupującej. Default: `none`.
* __showDecision__ | `boolean`: kontroluje, czy należy wyświetlić decyzję o badaniu. Default: `false`.


## Przykłady

```jsx live
<Anova
    data={heartdisease} 
    variable="Cost"
    group="Drugs"
/>
```
