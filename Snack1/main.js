// Snack1
// Ottieni un numero casuale in un range specificato. Chiedi all'utente il valore minimo ed il valore massimo del range in cui generare il numero.

let userNumbers = [];

let maxNumber = parseInt(prompt("Inserisci il valore massimo del range"));
let minNumber = parseInt(prompt("Inserisci il valore minimo del range"));

userNumbers.push(maxNumber);
userNumbers.push(minNumber);

console.log(userNumbers);

// la generazione del numero casuale
const randomNumberGeneration =
  Math.floor(Math.random() * (maxNumber - minNumber)) + minNumber;
console.log(randomNumberGeneration);
