function runMore(distance: number): number {
    // Typ zwracany to number (liczba)
    return distance + 10;
}

function eat(calories: number): void {
    // Typ zwracany to void (nic)
    console.log("I ate " + calories + " calories");
}

let eaten = eat(100);
console.log(eaten);
let run = runMore(10);
console.log(run);
