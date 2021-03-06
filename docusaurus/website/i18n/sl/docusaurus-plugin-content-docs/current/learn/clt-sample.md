---
id: clt-sample
title: CLT Sample
sidebar_label: CLT Sample
---

Učna komponenta, ki ponazarja centralni limitni teorem (CLT) pri vzorčenju iz predloženega nabora podatkov.

## Možnosti

* __data__ | `object (required)`: podatkovni objekt s ključi, ki ustrezajo imenom spremenljivk, in vrednostmi, ki vsebujejo vrednosti ustreznih spremenljivk.. Default: `none`.
* __hidePopulationStdev__ | `boolean`: skriti prikaz standardnega odklona populacije. Default: `false`.
* __samples__ | `(array<number>|number)`: polje številk ali ena sama številka, ki označuje velikost vzorca, ki ga je mogoče sestaviti.. Default: `25`.
* __populationProbabilities__ | `boolean`: ali želite prikazati enačbe za izračun populacijskih verjetnosti.. Default: `false`.
* __quantiles__ | `boolean`: ali želite prikazati orodje za izračun kvantilov. Default: `false`.
* __variables__ | `array (required)`: imena spremenljivk, ki jih je mogoče vzorčiti iz. Default: `none`.


## Primeri

```jsx live
<LearnSampleCLT 
    data={heartdisease} 
    variables={[ 'Gender', 'Drugs', 'Complications', 'Cost', 'Age', 'Interventions', 'ERVisit', 'Comorbidities', 'Duration' ]}
/>
```

