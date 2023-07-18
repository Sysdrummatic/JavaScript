// class ClassA {
//     static typeName: string;
//     constructor() {}

//     static getFullName() {
//         return "ClassA " + ClassA.typeName;
//     }
// }

// // const a = new ClassA();
// // console.log(a.staticgetFullName());

// console.log(ClassA.getFullName());

class ClassA {
    static lastTypeName: string;
    constructor(private typeName: string) {}

    run() {
        ClassA.lastTypeName = this.typeName;
    }
}

// const a = new ClassA();
// console.log(a.staticgetFullName());

const a = new ClassA("a");
const b = new ClassA("b");
a.run();
b.run();
console.log(ClassA.lastTypeName);
