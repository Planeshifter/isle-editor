---
id: qrcode
title: QR Code
sidebar_label: QR Code
---

Cod QR.

## Opțiuni

* __text__ | `string`: text de codificat în codul QR (dacă nu este setat, este implicit URL-ul lecției). Default: `none`.
* __scale__ | `number`: numărul de pixeli pe module (puncte negre). Default: `8`.
* __width__ | `number`: lățime în pixeli; are prioritate față de proprietatea `scale`.. Default: `none`.
* __showText__ | `boolean`: boolean care determină dacă se afișează sau nu textul codificat în codul QR. Default: `false`.
* __center__ | `boolean`: boolean care controlează dacă se centrează sau nu codul QR. Default: `false`.
* __style__ | `object`: Stiluri inline CSS. Default: `{}`.


## Exemple

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'With CSS', value: 'withCSS' },
        { label: 'Visible Link', value: 'visibleLink' },
        { label: 'Scale', value: 'scale' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<QRCode />
```

</TabItem>

<TabItem value="withCSS">

```jsx live
<QRCode 
    center 
    text="https://isledocs.com/docs/qrcode" 
    style ={{ outline: '4px grey solid' }}
/>
```

</TabItem>

<TabItem value="visibleLink">

```jsx live
<QRCode 
    text="https://isledocs.com/docs/qrcode"
    showText
/>
```

</TabItem>

<TabItem value="scale">

```jsx live
<QRCode 
    text="https://isledocs.com/docs/qrcode"
    scale={12}
    showText
    style={{ fontFamily: 'Open Sans Condensed', color: 'red', outline: '4px black solid' }}
/>
```

</TabItem>

</Tabs>
