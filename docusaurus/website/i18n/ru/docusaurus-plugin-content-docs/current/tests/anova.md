---
id: anova
title: ANOVA
sidebar_label: ANOVA
---

Дисперсионный анализ.

## Варианты

* __data__ | `object (required)`: массивы объектов оценки. Default: `none`.
* __variable__ | `string (required)`: имя переменной для отображения. Default: `none`.
* __group__ | `(string|Factor)`: имя группирующей переменной. Default: `none`.
* __showDecision__ | `boolean`: контролирует, отображать ли решение о тестировании. Default: `false`.


## Примеры

```jsx live
<Anova
    data={heartdisease} 
    variable="Cost"
    group="Drugs"
/>
```
