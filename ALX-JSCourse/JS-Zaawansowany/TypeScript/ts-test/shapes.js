// class Person {
//     name: string;
// }
// const tomek1: { name: string } = {
//     name: "Tomek",
// };
// const person1: Person = tomek;
// console.log(person);
var Person = /** @class */ (function () {
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
    function Person(msg, age) {
        this.msg = msg;
        this.age = age;
    } // Zamiast private można użyć #
    // #msg: string;
    Person.prototype.speak = function () {
        //this.msg = "Hello"
        console.log(this.msg, this.age);
    };
    return Person;
}());
var tomek = new Person("Cześć", 23);
var alex = new Person("Witaj", 25);
var adam = new Person("Siema", 27);
// tomek.msg = "Cześć";
// alex.msg = "Witaj";
// adam.msg = "Siema";
tomek.speak();
alex.speak();
adam.speak();
