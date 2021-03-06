---
id: text-input
title: Text Input
sidebar_label: Text Input
---

Ένα στοιχείο εισαγωγής κειμένου. Μπορεί να χρησιμοποιηθεί ως μέρος ενός πίνακα οργάνων ISLE ή αυτόνομα. Στην τελευταία περίπτωση, θέλετε να χειριστείτε τις αλλαγές μέσω του χαρακτηριστικού `onChange` ή να δεσμεύσετε την τιμή σε μια παγκόσμια μεταβλητή μέσω του χαρακτηριστικού `bind`.

## Επιλογές

* __bind__ | `string`: όνομα της παγκόσμιας μεταβλητής για τον αριθμό που θα εκχωρηθεί. Default: `none`.
* __defaultValue__ | `string`: τιμή που υποδεικνύει την προεπιλεγμένη τιμή της εισόδου κατά την έναρξη. Default: `''`.
* __value__ | `string`: τιμή κειμένου (για ελεγχόμενο στοιχείο). Default: `none`.
* __legend__ | `(string|node)`: συμβολοσειρά που υποδεικνύει το κείμενο που εμφανίζεται δίπλα στην εισαγωγή αριθμού. Default: `''`.
* __inline__ | `boolean`: Δείχνει αν η είσοδος εμφανίζεται εντός γραμμής. Default: `false`.
* __onBlur__ | `function`: συνάρτηση επανάκλησης που καλείται όταν η περιοχή κειμένου χάνει την εστίαση. Default: `onBlur() {}`.
* __onChange__ | `function`: συνάρτηση που θα καλείται όταν αλλάζει μια τιμή κειμένου. Default: `onChange() {}`.
* __onKeyDown__ | `function`: συνάρτηση επανάκλησης που θα καλείται όταν πατηθεί οποιοδήποτε πλήκτρο. Default: `onKeyDown() {}`.
* __onKeyPress__ | `function`: συνάρτηση επανάκλησης που θα καλείται όταν πληκτρολογείται οποιοδήποτε πλήκτρο. Default: `onKeyPress() {}`.
* __onKeyUp__ | `function`: συνάρτηση επανάκλησης που θα κληθεί όταν απελευθερωθεί το πλήκτρο. Default: `onKeyUp() {}`.
* __placeholder__ | `string`: συμβολοσειρά που υποδεικνύει την τιμή που πρέπει να εμφανίζεται πριν από την αρχική επιλογή. Default: `none`.
* __width__ | `number`: αριθμός που υποδεικνύει το πλάτος της εισόδου σε pixels. Default: `80`.
* __style__ | `object`: Στυλ γραμμής CSS. Default: `{}`.


## Παραδείγματα

```jsx live
<TextInput
    legend="Your name"
    defaultValue="Enter text"
/>
```

