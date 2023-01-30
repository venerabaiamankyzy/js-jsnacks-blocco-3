// Snack5 (Bonus #2)
// Genera un numero a caso compreso tra 1-100. Chiedi all’utente un numero fino a quando non indovina quello generato casualmente. Ogni volta che l'utente inserisce un numero, digli se è maggiore o minore di quello generato. Alla fine stampa il numero di tentativi che ci sono voluti per indovinare il numero generato casualmente.

const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);

let userNumber;
let i = 0;
while (userNumber != randomNumber) {
  userNumber = parseInt(prompt("Inserisci un numero"));
  if (userNumber > randomNumber) {
    console.log("Il tuo numero e maggiore di quello generato");
  } else if (userNumber < randomNumber) {
    console.log("Il tuo numero e minore di quello generato");
  } else {
    console.log("Hai indovinato");
  }
  i++;
}
