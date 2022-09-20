# Javascript Overview

Dokument ten ma na celu zebrać przydatne informacje dotyczące JS'a. 

Podstawy JS przydatne linki: 

* [Podstawy programowania w JavaScript w 60 MINUT](https://www.youtube.com/watch?v=udxqsJXJM5Q&ab_channel=Jaknauczy%C4%87si%C4%99programowania)

Zawartość:

* [Wprowadzenie](#wprowadzenie)
* [Operatory](#operatory)

## Wprowadzenie

### Typy danych

**Number**

````javascript
let a = 1
let b = -1
let c = 0
let d = 2.13
````

Operacje matematyczne:

````javascript
console.log(a + d)
console.log(a - a)
console.log(a * c)
console.log(a / b)
````

Aby uzyskać nieskonczoność oraz minus nieskończoność:

````javascript
console.log(1/0)
console.log(-1/0)
````

Aby uzyskać wartość NaN:

````javascript
console.log("T" / 2)
````

**String**

````javascript
let name = "Łukasz"
let firstLetter = "Ł"
let language = 'JavaScript'
let hello1 = `Hello ${name}`
let hello2 = `Hello ${12 + 12}`

````

**Boolean**

````javascript
let isEasy = true
let isBoring = false
````

**Null**

````javascript
let name = null
````

**Undefined**

````javascript
let name;
console.log(name)
````

**Object**

Dwa sposoby definiowania obiektów:

````javascript
let person = new Object()
person.name = "Dominik"
person.age = 25
````

````javascript
let person = {
    name: "Dominik",
    age: 25
}
````

Zdeklarowane parametry obiektu można wyświetlić przy użyciu konsoli:

````javascript
console.log(person.name)
console.log(person.age)
````

**Symbol**

````javascript
let id = Symbol("id")
````

### Definicja zmiennej

`let` jest używane do definiowania zmiennych. W starszych wersjach korzystano z `var`. Zmienne w javascript rozpoznają typ wpisywanych danych. Dynamicznie typowany język. Nie trzba definiować typu zmiennej.

`console.log()` słuzy do wyświetlania danych w konsoli.

````javascript
let name = "Łukasz"
console.log("Cześć " + name)
````

`prompt("Wiadomość")` umożliwia pobranie danych od użytkownika. 

Dodatkowo pobraną wartość można przypisać do zmiennej

````javascript
let name2 = prompt("Jak masz na imie?");
````

### Definicja stałej

`const` - używamy do deklaracji stałych.

## Operatory

`+,-, *, /` - operatory matematyczne.

`+` - operator konkatenacji (dla stringów).

`%` - operator modulo. Operator zwracający resztę z dzielenia.

````javascript
let change = console.log(a % b)
````

`=` - operator przypisania, nie porównuje dwóch zmiennych ze sobą.

`a++,a--` - inkrementacja i dekrementacja.

`<, <=, >, >=` - operatory mniejszości i równości.

`==` - pórwnianie dwóch zmiennych.

`!=` - różne.

`===` - operator strict equality. Dzięki niemu możemy porównać czy typy danych są zgodne. 

````javascript
console.log(1 === "1")
````
# Logika

## Instrukcje warunkowe

Dzięki instrukcjom warunkowym możemy utworzyć w kodzie warynki wykonania pewnych działań.

Instrukcje warunkowe mogą przybierać różne formy:

1) Z jednym warunkiem

`if (warunek do spełnienia){
    instrukcje do wykonania jak warunek jest spełniony
    } else {
    Instrukcje do spełnienia w razie niewykonania warunku
    }`

````javascript
let age = 18
let ageOk = "Możesz kupić alko!"
let ageNok = "Nie możesz kupić alko!"

if (age >= 18){
    console.log(ageOk);
} else{
    console.log(ageNok)
}
````


2) Zagnieżdżoną, zawierającą wiele warunków

````javascript
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
````

3) Forma skrócona wyrażenia warunkowego

````javascript
let age = 18
let ageOk = "Możesz kupić alko!"
let ageNok = "Nie możesz kupić alko!"

age >= 18 ? console.log(ageOk) : console.log(ageNok)
````

## Pętla while

Pętla `while` pozwala na wykonanie pętli po ospełnieniu warunku.

````javascript
let password

while (password != '1234') {
password = prompt("Jakie jest hasło?")
    if (password != '1234') {
        console.log("Nieprawidłowe hasło spróbuj ponownie")
    }
}
console.log("Prawidłowe hasło!")
````

## Pętla do while

Pętla `Do While` wykonuje pętlę raz oraz oczekuje na spełnienie warunku.

````javascript
let password

do{
    password = prompt("Jakie jest hasło?")
} while (password != '1234') 

console.log("Prawidłowe hasło!")
````

## Pętla for

Pętla umożliwia wykonywanie podanej ilości kroków.

Najpowższechniejsza deklaracja pętli:

````javascript
for (let i = 1; i <11; i++){
    console.log(i)
}
````

Przykłady z deklaracją zmiennej poza pętlą, niekorzystne i nie bezpieczne dla kodu.

````javascript
let i;
for (i = 1; i <11; i++){
    console.log(i)
}
````

````javascript
let i = 1;
for (; i <11; i++){
    console.log(i)
}
````

Można również zwiększyć krok inkrementacji istawiając  `i+=2` aby zwiększać liczbę co dwa. 

## Instrukcje break i continue

Break - całkowicie przerywa działanie pętli.

Przykład z przerwaniem działania pętli jeżeli `i == 5`

````javascript
let i=1;

while (i < 11) {
    console.log(i)

    if (i==5) break;

    i++
}
````

Continue - przerywa działanie pętli i przechodzi do kolejnego wywołania.

Przykład wyświetlający nam liczby nieparzyste z przedziału od 1 do 10.

````javascript
let t = 0;
while (t < 10) {
    t++
    if (t % 2 == 0) continue;
    console.log(t)
}
}
````

## Funkcje