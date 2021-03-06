---
id: link
title: Link
sidebar_label: Link
---

Ένα στοιχείο για την εμφάνιση ενός συνδέσμου.

## Επιλογές

* __href__ | `string (required)`: URL του δικτυακού τόπου στον οποίο θα παραπέμψετε. Default: `none`.
* __target__ | `string`: ορίζει πού ανοίγει ο σύνδεσμος: ορίζεται σε `_blank` για νέο παράθυρο, `_self` για το δικό του πλαίσιο, `_parent` για τον γονέα, `_top` για ολόκληρο το σώμα του παραθύρου ή το όνομα του πλαισίου.. Default: `'_blank'`.
* __className__ | `string`: όνομα κλάσης. Default: `''`.
* __style__ | `object`: Στυλ γραμμής CSS. Default: `{}`.


## Παραδείγματα

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
