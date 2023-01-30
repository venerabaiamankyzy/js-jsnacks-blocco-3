// Snack3
// Fai inserire un numero, che chiameremo N, all'utente. Genera N array, ognuno formato da 10 numeri casuali da 1 a 100. Ogni volta che ne crei uno, stampalo.

// //Il numero dell'utente
const userNumber = parseInt(prompt("Inserisci un numero"));

//esegui il ciclo finche non raggiungi il numero dell'utente
let i = 1;
while (userNumber >= i) {
  let listArray = [];

  //numero da 1 a 100
  for (let x = 0; x < 10; x++) {
    let newNumber = Math.floor(Math.random() * 100) + 1;
    listArray.push(newNumber);
    console.log(newNumber);
  }
  console.log(listArray);
}
