// class Person {
//     name: string;
// }

// const tomek1: { name: string } = {
//     name: "Tomek",
// };

// const person1: Person = tomek;
// console.log(person);

class Person {
    // constructor() {}
    // msg: string;
    // speak() {
    //     console.log(this.msg);
    // }
    // constructor(private msg: string) {} // Zamiast private można użyć #
    // // #msg: string;
    // speak() {
    //     console.log(this.msg);
    // }

    constructor(private readonly msg: string, private age: number) {} // Zamiast private można użyć #
    // #msg: string;
    speak() {
        //this.msg = "Hello"
        console.log(this.msg, this.age);
    }
}

const tomek = new Person("Cześć", 23);
const alex = new Person("Witaj", 25);
const adam = new Person("Siema", 27);
// tomek.msg = "Cześć";
// alex.msg = "Witaj";
// adam.msg = "Siema";
tomek.speak();
alex.speak();
adam.speak();
