---
id: expire 
title: Expire
sidebar_label: Expire
---

Die expire-Komponente bewirkt, dass alle ihre Kinder nach einer bestimmten Zeitspanne unsichtbar werden.

## Optionen

* __active__ | `boolean`: steuert, ob der Zähler aktiv sein soll. Default: `false`.
* __delay__ | `number`: Anzahl der Millisekunden, bevor die Komponente verschwindet. Default: `1000`.


## Beispiele

```jsx live
<Expire>
    <span>When active, I will disappear after one second</span>
</Expire>
```



