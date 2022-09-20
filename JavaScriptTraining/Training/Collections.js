let arrayTest = ["Mariusz", "Błażej"]
console.log("------------------------------")
arrayTest.push("Dominik")
arrayTest.unshift("Andrzej")

console.log("------------------------------")
console.log(arrayTest[0])
console.log(arrayTest[1])
console.log(arrayTest[2])
console.log(arrayTest[3])
console.log("------------------------------")

let lastName = arrayTest.pop()
console.log(lastName)

console.log("------------------------------")
console.log(arrayTest[0])
console.log(arrayTest[1])
console.log(arrayTest[2])
console.log(arrayTest[3])
console.log("------------------------------")

arrayTest.push("Dominik")

for (let i = 0; i < arrayTest.length; i++){
    console.log(arrayTest[i])
}
console.log("------------------------------")

for(let name of arrayTest) {
    console.log(name)
}

console.log("------------------------------")


let products = new Map()
products.set(1, "Marchewka")
products.set(2, "Mleko")
products.set(3, "Ser")

for (let i = 1; i <= products.size; i++){
    console.log(products.get(i))
}

console.log("------------------------------")

console.log(products.entries())

console.log("------------------------------")

for (let entry of products.entries()){
    console.log(entry)
}

console.log("------------------------------")

let newNames = new Set();
newNames.add("Dominik")
newNames.add("Mariusz")
newNames.add("Błażej")

for (let nameList of newNames){
    console.log(nameList)
}

console.log("------------------------------")

console.log(newNames.has("Mariusz"))