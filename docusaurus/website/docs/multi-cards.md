---
id: multi-card 
title: MultiCard
sidebar_label: MultiCard
---

An ISLE component that allows you to create and control multiple flippable cards (e.g. in a game of Memory).

## Example

```jsx live
<MultiCards
    id="Memory"

    onChange= {(data) => {
        console.log(data);
    }}
    
    cardStyles={{
        container:{
            width: 250,
            height: 250,
            marginBottom: 10
        },
        front:{
            color:'gainsboro',
            cursor: 'pointer',
            textAlign: 'center',
            boxShadow: '1px 1px 10px black',
            backgroundImage: 'url(https://isle.heinz.cmu.edu/seamless_1543575455035.png)',
            backgroundSize: '100% auto'
        },
        back: {
            color: 'blue',
            fontSize: 20,
            fontWeight: 800,
            fontFamily: 'Oswald',
            textAlign: 'left',
            paddingLeft: '10px',
            background: 'ghostwhite',
            boxShadow: '1px 1px 10px black',
        }
    }}
    values={[
        { front: "number 1", back: 'back side of #1'},
        { front: "number 2", back: 'back side of #2'},
        { front: "number 3", back: 'back side of #3'},
        { front: "number 4", back: 'back side of #4'},
    ]}
/>
``` 

[Open interactive preview](https://isle.heinz.cmu.edu/components/multi-cards/)

## Options

* __animation__ | `object`: if set the component uses an entry animation; the object contains a name (like `anim-scale-up`) and a duration (like `1.7s` = 1.7 seconds). Default: `{}`.
* __cardStyles__ | `{container,front,back}`: allows to override the given styles. Handles objects with  `container`, `front` and `back` keys. Default: `{
  'container': {},
  'front': {},
  'back': {}
}`.
* __game__ | `string`: multi-card games. Can be either `memory` or `bingo`.. Default: `none`.
* __language__ | `string`: voice recognition language identifier. Default: `'en-US'`.
* __onChange__ | `function`: a function that receives the matrix of the flippable cards. Default: `onChange() {}`.
* __oneTime__ | `boolean`: indicates whether the flip process may be executed just once. Default: `false`.
* __values__ | `array<object>`: the values for the respective cards, input in an array that has entry fields for a `front` and `back` value. Such a value could be a string, but also a full fledged ISLE component. Default: `[]`.
* __style__ | `object`: CSS inline styles. Default: `{}`.
