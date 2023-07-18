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
var ClassA = /** @class */ (function () {
    function ClassA(typeName) {
        this.typeName = typeName;
    }
    ClassA.prototype.run = function () {
        ClassA.lastTypeName = this.typeName;
    };
    return ClassA;
}());
// const a = new ClassA();
// console.log(a.staticgetFullName());
var a = new ClassA("a");
var b = new ClassA("b");
a.run();
b.run();
console.log(ClassA.lastTypeName);
