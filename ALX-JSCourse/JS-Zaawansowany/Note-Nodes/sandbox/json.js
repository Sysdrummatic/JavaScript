// const { stringify } = require("querystring");

// let obj = {
//   name: "Andrew",
// };

// let personString = '{"name": "Andrew", "age": 25 }';
// let person = JSON.parse(personString); //tworzenie jsona

// console.log(typeof person);
// console.log(person);

// let stringObj = stringify(obj); //konwertowanie na string
// console.log(typeof stringObj);
// console.log(stringObj);

const fs = require("fs");

let orginalNote = {
  title: "Some title",
  body: "Some body",
};

fs.writeFileSync("notes.json", JSON.stringify(orginalNote));

let noteString = fs.readFileSync("notes.json");
let note = JSON.parse(noteString);
console.log(note.title, note.body);
