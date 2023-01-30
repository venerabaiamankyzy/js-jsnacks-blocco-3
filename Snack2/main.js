// Snack2
// Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.

const userNumberArray = [];

let sumNumbers = 0;

while (sumNumbers < 50) {
  let userNumber = parseInt(prompt("Inserisci un numero da 1 a 10"));

  while (isNaN(userNumber) || userNumber > 10 || userNumber < 0) {
    userNumber = parseInt(
      prompt(
        `Hai sbagliato! La somma è ${sumNumbers}. Inserisci un numero da 1 a 10`
      )
    );
  }
  userNumberArray.push(userNumber);
  sumNumbers += userNumber;
}
console.log(
  `La somma dei tuoi numeri è ${sumNumbers} ed i numeri inseriti sono ${userNumberArray}`
);
