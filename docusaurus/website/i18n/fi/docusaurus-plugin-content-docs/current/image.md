---
id: image
title: Image
sidebar_label: Image
---

Komponentti kuvan näyttämiseen.

## Vaihtoehdot

* __src__ | `string (required)`: kuvan lähteen sijainti. Default: `none`.
* __alt__ | `string`: kuvan kuvaus. Default: `''`.
* __body__ | `string`: kuvan base64-koodatut tiedot. Default: `none`.
* __height__ | `(number|string)`: kuvan korkeus (px). Default: `none`.
* __width__ | `(number|string)`: kuvan leveys (px). Default: `none`.
* __inline__ | `boolean`: mahdollistaa kuvan ympäröimisen tekstillä. Default: `false`.
* __id__ | `string`: komponentin tunniste. Default: `none`.
* __showModal__ | `boolean`: valvoo, näytetäänkö koko näytön modaalinen näkymä.. Default: `true`.
* __className__ | `string`: luokan nimi. Default: `''`.
* __style__ | `object`: CSS-inline-tyylit. Default: `{}`.
* __onShare__ | `function`: Callback, joka käynnistetään kuvan kanssa, jos "share"-painiketta napsautetaan.. Default: `none`.


## Esimerkkejä

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With Border', value: 'withStyle' },
        { label: 'Controlled Size', value: 'controlledSize' },
        { label: 'Inline', value: 'inline' }
    ]}
    lazy
>
<TabItem value="minimal">

```jsx live
<Image 
    alt="Self-portrait by Vincent van Gogh from September 1889." 
    src="https://bit.ly/37cof7K"
/>
```

</TabItem>

<TabItem value="withStyle">

```jsx live
<Image 
    alt="Self-portrait by Vincent van Gogh from September 1889." 
    src="https://bit.ly/37cof7K"
    style={{ border: 'solid 10px black'}}
/>
```
</TabItem>

<TabItem value="controlledSize">

```jsx live
<Image 
    alt="The Starry Night by Vincent van Gogh" 
    src="https://bit.ly/37h3JTj"
    width="200px"
    height="auto"
/>
```
</TabItem>


<TabItem value="inline">

```jsx live
<div>
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, 
<Image 
    src="https://isle.heinz.cmu.edu/Summertime_flowerGradient.png"
    width="300px"
    height="auto"
    inline
/>
no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, 
consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
</div>
```
</TabItem>

</Tabs>
