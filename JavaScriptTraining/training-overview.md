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