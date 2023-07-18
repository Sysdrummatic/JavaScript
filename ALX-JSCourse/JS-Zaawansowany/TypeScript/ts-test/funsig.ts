type Run = (miles: number) => boolean;
let runner: Run = function (miles: number) {
    if (miles > 10) {
        return true;
    }
    return false;
};

console.log(runner(9));

function oldEnough(age: number): never | boolean {
    if (age > 60) {
        throw new Error("Too old!");
    }
    if (age > 18) {
        return false;
    }
    return false;
}

console.log(oldEnough(61));
