let prodotto1 = 30
let prodotto2 = 20
let prodotto3 = 10

//JavaScript non è Type Safe
prodotto2 = "Giovanni";

// console.log(prodotto1, prodotto2, prodotto3);       // Ctrl + K + C ------ Ctrl + K + U

//---------------------------------------------

let numero = 5;
let stringa = "Giovanni";
let booleano = true;

//Concatenazione
console.log("Ciao " + numero);

//Interpolazione con Alt + 9 + 6
console.log(`Ciao ${stringa} come stai`);

let eta = 17;
console.log(`Sei: ${eta > 18 ? "Maggiorenne" : "Minorenne"}`)
