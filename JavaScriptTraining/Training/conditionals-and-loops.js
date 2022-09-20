
let age = 18
let country = "USA"
let ageOk = "Możesz kupić alko!"
let ageNok = "Nie możesz kupić alko!"


if (country == "Poland"){
    if (age >= 18){
        console.log(ageOk);
    } else{
        console.log("Mieszkasz w Polsce! " + ageNok)
    }
} else if (country == "USA"){
    if (age >= 21){
        console.log(ageOk);
    } else{
        console.log("Mieszkasz w Stanach! " + ageNok)
    }
}
console.log("------------------------------")
let password = 1234

while (password !== 1234) {
    if (password !== 1234) {
        console.log("Nieprawidłowe hasło spróbuj ponownie")
    }
}
console.log("Prawidłowe hasło!")

console.log("------------------------------")

for (let i = 1; i <11; i++){
    console.log(i)
}
console.log("------------------------------")

let i=1;

while (i < 11) {
    console.log(i)

    if (i==5) break;

    i++
}
console.log("------------------------------")

let t = 0;
while (t < 10) {
    t++
    if (t % 2 == 0) continue;
    console.log(t)
}
console.log("------------------------------")

function hello(){
    console.log("Hello")
}

hello()
hello()
hello()

console.log("------------------------------")

function sum(firstNumber, secondNumber){
    console.log(firstNumber + secondNumber)
}

sum(1,5)

console.log("------------------------------")

function suma(firstNumber, secondNumber){
    return firstNumber + secondNumber
}

let result = suma(1,5)

console.log("Wynik dodawania 1  + 5 to " + result)

console.log("------------------------------")

let dodawanie = (firstNumber, secondNumber) => console.log(firstNumber + secondNumber)
dodawanie(2,9)

console.log("------------------------------")

let square = a => console.log(a * a)
square(5)

console.log("------------------------------")

let hello2 = () => console.log("Joł madafaka")
hello2()