---
id: network-plot
title: NetworkPlot
sidebar_label: NetworkPlot
---

d3ベースのネットワークプロット。

## オプション

* __width__ | `number`: プロットの幅. Default: `900`.
* __height__ | `number`: 区画の高さ. Default: `600`.


## 例としては、以下のようなものがあります。

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

