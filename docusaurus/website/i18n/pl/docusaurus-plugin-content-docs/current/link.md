---
id: link
title: Link
sidebar_label: Link
---

Komponent do wyświetlania łącza.

## Opcje

* __href__ | `string (required)`: URL strony internetowej, na której znajduje się link do. Default: `none`.
* __target__ | `string`: definiuje miejsce otwarcia linku: ustawia się na `_blank` dla nowego okna, `_self` own frame, `_parent` dla rodzica, `_top` dla pełnej treści okna, lub nazwę ramki. Default: `'_blank'`.
* __className__ | `string`: nazwa klasy. Default: `''`.
* __style__ | `object`: Style CSS inline. Default: `{}`.


## Przykłady

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
