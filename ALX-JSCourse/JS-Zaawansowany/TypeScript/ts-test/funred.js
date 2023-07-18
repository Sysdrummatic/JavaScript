function runMore(distance) {
    // Typ zwracany to number (liczba)
    return distance + 10;
}
function eat(calories) {
    // Typ zwracany to void (nic)
    console.log("I ate " + calories + " calories");
}
var eaten = eat(100);
console.log(eaten);
var run = runMore(10);
console.log(run);
