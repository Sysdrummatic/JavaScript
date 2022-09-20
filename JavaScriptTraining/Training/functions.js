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