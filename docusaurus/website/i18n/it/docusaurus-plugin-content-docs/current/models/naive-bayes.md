---
id: naive-bayes
title: Naive Bayes
sidebar_label: Naive Bayes
---

Naive Bayes supponendo che i predittori data l'appartenenza alla classe seguano una distribuzione normale.

## Opzioni

* __data__ | `object (required)`: oggetto delle matrici di valori. Default: `none`.
* __y__ | `(string|Factor) (required)`: variabile di risultato. Default: `none`.
* __x__ | `(array<(string|Factor)>|string|Factor) (required)`: una o più variabili predittrici. Default: `none`.
* __quantitative__ | `array<string> (required)`: array di variabili in "dati" che sono "quantitative. Default: `none`.
* __omitMissing__ | `boolean`: controlla se omettere i valori mancanti. Default: `false`.
* __onPredict__ | `function`: richiamo invocato con previsioni e residui dopo il montaggio del modello. Default: `none`.


## Esempi

```jsx live
<NaiveBayes 
    data={heartdisease} 
    y="Drugs"
    x={[ 'Age', 'Cost', 'Interventions', 'Gender', 'Complications' ]}
    quantitative={[ 'Age', 'Cost', 'Interventions' ]}
/>
```

