---
id: mosaicplot
title: Mosaic Plot
sidebar_label: Mosaic Plot
---

Ein Mosaikplot.

## Optionen

* __data__ | `object (required)`: Objekt mit Werte-Arrays für jede Variable. Default: `none`.
* __variables__ | `array (required)`: Array der anzuzeigenden Variablen. Default: `none`.
* __showColors__ | `boolean`: steuert, ob Farben mit Bedeutung angezeigt werden sollen. Default: `false`.
* __axisLabels__ | `string`: Positionierung der Achsenbeschriftungen (entweder `parallel zur Achse`, `horizontal`, `senkrecht zur Achse` oder `vertikal`). Default: `'parallel to the axis'`.


## Beispiele

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Colored', value: 'colored' },
        { label: 'Axis Labels', value: 'axisLabels' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<MosaicPlot
    data={heartdisease} 
    variables={[ 'Gender', 'Drugs' ]}
/>
```

</TabItem>

<TabItem value="colored">

```jsx live
<MosaicPlot
    data={heartdisease} 
    variables={[ 'Gender', 'Drugs' ]}
    showColors
/>
```

</TabItem>

<TabItem value="axisLabels">

```jsx live
<MosaicPlot
    data={heartdisease} 
    variables={[ 'Gender', 'Drugs' ]}
    showColors
    axisLabels="parallel to the axis"
/>
```

</TabItem>

</Tabs>
