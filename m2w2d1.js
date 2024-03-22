//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/*
let numero1 = 3 
let numero2 = 6

if (numero1 > numero2) {
    console.log ("Il numero maggiore è " + numero1)
}
else if (numero1 === numero2) {
    console.log (numero1 + " e " + numero2 + " sono uguali") 
    } else {
    console.log ("Il numero maggiore è " + numero2)
} 
*/


/*ESERCIZIO 2

  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

/*
const num = 1

if (num < 5) {
    console.log ("Tiny")
}else if (num < 10){
    console.log ("Small")
}else if (num < 15) {
    console.log ("Medium")
}else if (num < 20) {
    console.log ("Large")
}else if (num >=20){
    console.log ("Huge")
}

*/


//ESERCIZI SUI CICLI:

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

/*
const i = 0

for (let i = 0; i <= 10; i++) {
  if (i === 3 || i === 8) {
    continue
  }
  console.log(i)
}
*/


/* ESERCIZIO 11
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

/*
for (let i2 = 0; i2 <= 15; i2++) {
  if (i2 % 2 === 0) {
    console.log("Pari")
  } else {
    console.log("Dispari")
  }
}
*/

//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

const numero3 = 16
const numero4 = 8

if ( numero4 - numero3 === 8 && numero4 - numero3 === 8){
  console.log ("La differenza tra i due valori è uguale a 8")
}else if ( numero3 + numero4 === 8) {
  console.log ("La somma dei due valori è uguale a 8")
}else if (numero3 ===8 && numero4 === 8) {
  console.log("Il valore di uno dei due numeri è uguale 8")
} 


/*
const numero3 = 1
const numero4 = 7

switch (true) {
case numero3 === 8:
case numero4 === 8:
  console.log("Il valore di uno dei due numeri è uguale 8")
  break
case numero3 + numero4 === 8:
  console.log ("La somma dei due valori è uguale a 8")
  break
case numero3 - numero4 === 8:
case numero4 - numero3 === 8:
  console.log ("La differenza tra i due valori è uguale a 8")
  break
default:
  console.log("Nessuno dei valori include il numero 8")
}
*/

/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/*
let  totalShoppingCart = parseFloat (prompt ("Total purchase") )
const shipping = 10
let finalCart = totalShoppingCart + shipping

if (totalShoppingCart > 50) {
  alert("The total purchase will be " + totalShoppingCart + " euros, with free Shipping!")
} else {
  alert("The total purchase will be " + finalCart + " euros with Shipping cost of " + shipping + " euros")
}


/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

/*
let  totalShoppingCart = parseInt (prompt ("Total purchase") ) * 0.8
const shipping = 10
let finalCart = totalShoppingCart + shipping

if (totalShoppingCart > 50) {
  alert("The total purchase will be " + totalShoppingCart + " euros, with free Shipping!")
} else {
  alert("The total purchase will be " + finalCart + " euros with Shipping cost of " + shipping + " euros")
}



/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

/*
let isMale = false

let gender = isMale ? "male" : "female"
if (isMale === true) {
  console.log("Your gender is " + gender)
} else {
  console.log("Your gender is " + gender)
}
*/

/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/
