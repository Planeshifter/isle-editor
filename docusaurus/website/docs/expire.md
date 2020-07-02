---
id: expire 
title: Expire
sidebar_label: Expire
---

The expire component will cause all of its children to become invisible after a specified amount of time.

## Example

```jsx live
<Expire>
    <span> I will disappear </span>
</Expire>
```



## Options

* __active__ | `boolean`: controls whether the counter should be active. Default: `false`.
* __delay__ | `number`: number of milliseconds before component disappears. Default: `1000`.
