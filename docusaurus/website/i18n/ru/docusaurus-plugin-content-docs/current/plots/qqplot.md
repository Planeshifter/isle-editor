---
id: qqplot
title: QQ Plot
sidebar_label: QQ Plot
---

Функция компаратора используется для сортировки значений в порядке возрастания.

## Варианты

* __data__ | `object (required)`: массивы объектов оценки. Default: `none`.
* __variable__ | `string (required)`: переменная для отображения. Default: `none`.


## Примеры

```jsx live
<QQPlot 
    data={heartdisease} 
    variable="Age"
/>
```

