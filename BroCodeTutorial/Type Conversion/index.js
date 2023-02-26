console.log("Test");

/*
Najważeniejsze infor z tej lekcji. 
Wartości pobierane przez prompt zawsze są "stringiem". 
*/

//Pobieranie wartości od uzytkownika poprzez pojawiające się okno popup
let age = window.prompt("How old are you?");

//Konwertowanie wartości string na wartośc liczbową.
console.log(typeof age);
age = Number(age);

// typeof pozwala sprawdzić jakiego typu jest wartość
console.log(typeof age);
age += 1;
console.log("Happy Birthday! You are", age, "years old!");
