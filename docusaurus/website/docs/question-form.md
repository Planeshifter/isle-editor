---
id: question-form 
title: Question Form
sidebar_label: Question Form
---

A form component combining different question components together with a single submission button.

## Example

``` js
<QuestionForm>
    <NumberQuestion
        question="What is 2+2?"
    />
    <FreeTextQuestion
        question="What is the meaning of life?"
    />    
</QuestionForm>
```

[Open interactive preview](https://isle.heinz.cmu.edu/components/question-form/)

## Options

* __buttonLabel__ | `string`: label of the submit button. Default: `'Submit'`.
* __onSubmit__ | `function`: callback invoked when the submit button is clicked. Default: `onSubmit() {}`.
