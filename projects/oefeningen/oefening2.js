let getal = 0
let teller = 10
let naam = 'Jan'
let kleiner = true
let ok = false

getal += 10; // telt 10 bij het variabele 'getal' op. 0 + 10 = 10

teller++; // hoogt de waarde van 'teller' op met 1. 10 + 1 = 11

getal += teller; // telt de waarde van 'teller' bij 'getal'. getal + teller = 10 + 11 = 21

getal++; // hoogt de waarde van getal op met 1. getal = 22

kleiner = (getal < 20); // controleert of getal kleiner is dan 20, en geeft vervolgens de boolean waarde van de vergelijking. Uitkomst is dus false.

ok = (naam != 'jan') && kleiner; // controleert of de variabele 'naam' niet gelijk is aan 'jan' (uitkomst is false). false && false = false

document.write(`<p>Getal = ${getal}\n</p>`,
    `<p>Teller = ${teller}\n</p>`, `<p>Naam = ${naam}\n</p>`, `<p>Kleiner = ${kleiner}\n</p>`,
    `<p>Ok = ${ok}\n</p>`)