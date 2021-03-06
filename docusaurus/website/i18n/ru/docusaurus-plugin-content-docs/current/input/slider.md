---
id: slider-input
title: Slider Input
sidebar_label: Slider Input
---

Компонент ввода ползунка. Может использоваться как часть ISLE приборной панели или автономно. В последнем случае, вы хотите обрабатывать изменения через атрибут `onChange` или привязывать значение к глобальной переменной через атрибут `bind`.

## Варианты

* __defaultValue__ | `number`: Начальное значение ползунка. Default: `10`.
* __disabled__ | `boolean`: управляет тем, активен ли вход ползунка или нет. Если установлено значение true, ползунок будет присутствовать на экране, хотя и серым. Default: `false`.
* __inline__ | `boolean`: управляет установкой ползунка в текстовую строку или снаружи. Default: `false`.
* __legend__ | `(string|node)`: подпись на входе. Default: `none`.
* __max__ | `number`: Максимальное значение ползунка. Default: `100`.
* __maxLabel__ | `string`: ярлык, который будет отображаться справа от ползунка вместо максимального значения. Default: `none`.
* __min__ | `number`: Минимальное значение ползунка. Default: `0`.
* __minLabel__ | `string`: метка, которая будет отображаться слева от ползунка вместо минимального значения. Default: `none`.
* __onChange__ | `function`: вызов обратного вызова с новым значением при изменении значения ползунка. Default: `onChange() {}`.
* __precision__ | `number`: округление входного сигнала. Значение будет округлено, чтобы не иметь более значимых цифр, чем точность. Например, если желательно использовать только целые числа, то будет использована точность 10, а если желательно округлить до сотен, то будет использована точность 0.001. Default: `10`.
* __step__ | `(number|string)`: размер шага ползунка. Default: `1`.
* __hideTooltip__ | `boolean`: контролирует, скрывать ли подсказку. Default: `false`.
* __style__ | `object`: встроенные стили CSS. Default: `{}`.
* __numberInputStyle__ | `object`: CSS-строчные стили для элемента номерного ввода. Default: `{}`.
* __rangeInputStyle__ | `object`: CSS в последовательном стиле для компонента ввода диапазона. Default: `{}`.


## Примеры

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
    defaultValue="minimal"
    values={[
        { label: 'Minimal', value: 'minimal' },
        { label: 'Mathematical Symbols via LaTeX', value: 'mathematicalSymbols' },
        { label: 'Custom Style', value: 'customStyle' }
    ]}
    lazy
>

<TabItem value="minimal">

```jsx live
<SliderInput
    legend="Success Probability"
    defaultValue={0.5}
    min={0}
    max={1}
    step={0.01}
/>
```

</TabItem>

<TabItem value="mathematicalSymbols">

```jsx live
<SliderInput
    legend={<span>$\sigma$ (standard deviation)</span>}
    defaultValue={0.5}
    min={0}
    max={1}
    step={0.01}
/>
```

</TabItem>

<TabItem value="customStyle">

```jsx live
<SliderInput
    legend="Success Probability"
    style={{ padding: 30, fontSize: 25, background: 'tan', fontFamily: 'Georgia'}}
    rangeInputStyle ={{ minWidth: 500}}
    numberInputStyle = {{ background: 'white', boxShadow: '2px 2px 0px black'}}
    defaultValue={0.5}
    min={0}
    max={200}
    step={0.01}
/>
```

</TabItem>

</Tabs>
