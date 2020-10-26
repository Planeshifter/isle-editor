---
id: range-question
title: Range Question
sidebar_label: Range Question
---

A range question component that asks students to supply a lower and upper end point.

## Example

```jsx live
<RangeQuestion
    question="Approximately in which range lie 99% of observations drawn from a standard normal distribution?"
    solution={[-3,3]}
/>
```

## Options

* __question__ | `(string|node)`: displayed question. Default: `''`.
* __solution__ | `array<number>`: two-element array containing the endpoints of the correct range. Default: `none`.
* __hintPlacement__ | `string`: placement of the hints (either `top`, `left`, `right`, or `bottom`). Default: `'top'`.
* __hints__ | `array<(string|node)>`: hints providing guidance on how to answer the question. Default: `[]`.
* __feedback__ | `boolean`: controls whether to display feedback buttons. Default: `true`.
* __chat__ | `boolean`: controls whether the element should have an integrated chat. Default: `false`.
* __digits__ | `number`: number of digits that have to match between solution and user-supplied answer. If not given or set to null, the component checks for strict equality. If set to 0, checks for integer equality. Default: `3`.
* __max__ | `number`: maximum input value. Default: `null`.
* __min__ | `number`: minimum input value. Default: `null`.
* __provideFeedback__ | `boolean`: indicates whether feedback including the correct answer should be displayed after learners submit their answers. Default: `true`.
* __allowMultipleAnswers__ | `boolean`: controls whether one can submit multiple answers. Default: `false`.
* __voiceID__ | `string`: voice control identifier. Default: `none`.
* __until__ | `Date`: time until students should be allowed to submit answers. Default: `none`.
* __points__ | `number`: maximum number of points awarded in grading. Default: `10`.
* __style__ | `object`: CSS inline styles. Default: `{}`.
* __onChangeLower__ | `function`: callback triggered after the lower bound is changed by the user. Default: `onChangeLower() {}`.
* __onChangeUpper__ | `function`: callback triggered after the upper bound is changed by the user. Default: `onChangeUpper() {}`.
* __onSubmit__ | `function`: callback invoked when answer is submitted; has as first parameter a `boolean` indicating whether the answer was correctly answered (if applicable, `null` otherwise) and the supplied answer as the second parameter. Default: `onSubmit() {}`.
