---
id: distribution-normal
title: Normal Distribution
sidebar_label: Normal Distribution
---

A learning component for calculating probabilities of a normal distribution.

## Example

```jsx live
<LearnNormalDistribution />
```

## Options

* __domain__ | `object`: object of `x` and `y` arrays with the starting and end points for the respective axis. Default: `none`.
* __hideCDF__ | `boolean`: controls whether to hide the CDF plots. Default: `false`.
* __minStDev__ | `number`: minimum standard deviation. Default: `1`.
* __step__ | `(number|string)`: step size of the scroll input. Default: `0.01`.
* __tabs__ | `array<string>`: which tabs to display (either `smaller`, `greater`, or `range`). Default: `[
  'smaller',
  'greater',
  'range'
]`.
* __style__ | `object`: CSS inline styles. Default: `{}`.
