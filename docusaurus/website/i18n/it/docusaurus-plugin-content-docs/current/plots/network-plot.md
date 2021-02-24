---
id: network-plot
title: NetworkPlot
sidebar_label: NetworkPlot
---

Una trama di rete basata su d3.

## Opzioni

* __width__ | `number`: larghezza del terreno (in px). Default: `900`.
* __height__ | `number`: altezza del terreno (in px). Default: `600`.


## Esempi

```jsx live
<NetworkPlot
    width={400}
    height={400}
    data={{
        nodes: [
            { 'id': 0 },
            { 'id': 1 },
            { 'id': 2 },
            { 'id': 3 },
        ],
        links: [
            { 'source': 0, 'target': 1 },
            { 'source': 0, 'target': 2 },
            { 'source': 2, 'target': 3 }
        ]
    }}
/>
``` 

