---
id: link
title: Link
sidebar_label: Link
---

Компонент для отображения ссылки.

## Варианты

* __href__ | `string (required)`: URL-адрес сайта, на который можно перейти по ссылке. Default: `none`.
* __target__ | `string`: определяет, где открывается ссылка: установите значение `_blank` для нового окна, `_self` собственный кадр, `_parent` для родительского, `_top` для полного тела окна, или имя кадра. Default: `'_blank'`.
* __className__ | `string`: название класса. Default: `''`.
* __style__ | `object`: встроенные стили CSS. Default: `{}`.


## Примеры

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'New Page', value: 'newPage' },
        { label: 'Image Link', value: 'imageLink' }
    ]}
    lazy
>
<TabItem value="minimal">

```jsx live
<Link href="https://wikipedia.org">Wikipedia</Link>
```

</TabItem>

<TabItem value="newPage">

```jsx live
<Link target="_blank" 
style={{ fontSize: 35}}
href="https://wikipedia.org">New Wikipedia Page</Link>
```
</TabItem>

<TabItem value="imageLink">

```jsx live
<Link target="_blank" 
style={{ fontSize: 35}}
href="https://wikipedia.org">
<img src= "https://bit.ly/3aM4OU7" /></Link>
```

</TabItem>

</Tabs>
