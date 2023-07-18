//Klasyczna notacja
let obj1: { name: string; age: number } = {
    name: "Tomek",
    age: 25,
};

//Przecięcie
let obj2: { name: string } & { age: number } = {
    name: "Marek",
    age: 28,
};

let union: null | { name: string } = null;
union = { name: "Tomek" };

let literal: "Tomek" | "Marek" | "Adam" | "Kowalski" = "Tomek";
literal = "Lukasz";
literal = "Adam";

type Points = 1 | 2 | 3 | 4 | 5;
let score: Points = 1;
console.log(score);

type ComplexPerson = {
    name: string;
    age: number;
    birth: Date;
    married: boolean;
    address: string;
};

let person: ComplexPerson = {
    name: "Tomek",
    age: 25,
    birth: new Date(1995, 5, 5),
    married: false,
    address: "Warszawa",
};

console.log(literal);
console.log(obj1);
console.log(obj2);
console.log(union);
