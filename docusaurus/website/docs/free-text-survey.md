---
id: free-text-survey 
title: Free Text Survey
sidebar_label: Free Text Survey
---

An ISLE component for questions where the answers by the students should be supplied in the form of free text. What differentiates this component from the **FreeTextQuestion** is the fact that the aggregated group data is displayed to everyone in real-time.

## Example

```jsx live
<FreeTextSurvey 
    question="Where are you from?"
    anonymous
/>
``` 



## Options

* __id__ | `string (required)`: undefined. Default: `none`.
* __question__ | `string`: the question to ask the students. Default: `''`.
* __allowMultipleAnswers__ | `boolean`: controls whether one wishes to allow students to answer the survey multiple times. Default: `false`.
* __anonymous__ | `boolean`: controls whether student answers are anonymized. Default: `false`.
* __rows__ | `number`: number of text rows in the input field. Default: `4`.
* __style__ | `object`: CSS inline styles. Default: `{}`.
* __onSubmit__ | `function`: callback function called when an answer is submitted. Default: `onSubmit() {}`.
