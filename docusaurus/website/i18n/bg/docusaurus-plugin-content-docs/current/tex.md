---
id: tex
title: LaTeX Equations
sidebar_label: LaTeX Equations
---

`TeX` е ISLE елемент, който може да се използва за показване на уравнения в LaTeX.

## Опции

* __raw__ | `(string|number) (required)`: Буквалният `нишка` на LaTeX за визуализиране. Приема и `numbers`. Default: `none`.
* __displayMode__ | `boolean`: `boolean`, указващ дали уравнението да се показва в ред или в режим на показване. Default: `false`.
* __numbered__ | `boolean`: контролира дали да се показва номер на уравнение за уравнения в режим на показване. Default: `false`.
* __style__ | `object`: `обект` с двойки ключове-стойности CSS, които да се приложат към контейнера за уравнения. Default: `{}`.
* __tag__ | `string`: Потребителски символи, показвани за уравненията на дисплея в дясната страна. По подразбиране е номерът на уравнението в урока.. Default: `none`.
* __elems__ | `object`: `обект`, като `ключове` обозначават символите на LaTeX, а съответните им стойности са конфигурационни `обекти`, за да бъдат интерактивни. Задаването на опцията `tooltip` ще покаже подсказка при преминаване с мишката над символите LaTeX. Задаването на свойство `променлива` ще покаже плъзгач за въвеждане на информация, за да се промени съответната променлива на състоянието; в този случай се поддържат допълнителни свойства `легенда`, `min`, `max` и `step`. Default: `{}`.
* __popoverPlacement__ | `string`: Позиция на изскачащия прозорец за посочените `елементи` (или `top`, или `right`, `bottom` или `left`). Default: `'bottom'`.
* __onPopover__ | `function`: `функция` за обратно извикване, когато се включва или изключва изскачащ панел за управление; получава състоянието на дисплея като булева стойност като единствен аргумент. Default: `onPopover() {}`.
* __onClick__ | `function`: обратно извикване на `функция`, когато потребителят кликне върху уравнението. Default: `none`.


## Примери

```jsx live
<TeX
    raw="2 + 3 = 5"
    displayMode={true}
/>
```



