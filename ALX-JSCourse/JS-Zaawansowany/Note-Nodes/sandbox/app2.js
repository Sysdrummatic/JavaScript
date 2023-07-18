//Exports
// import { welcomeMsg } from "./welcomeScreen.js";
const welcomeMsg = require("../welcomeScreen");

// const welcome = welcomeMsg();
// console.log(welcome);
console.log("Starting app.js");
const fs = require("fs");
const os = require("os");
var user = os.userInfo();
const notes = require("../notes");
let res = notes.addNote();
const yargs = require("yargs");

const titleOptions = { describe: "Tytuł notatki", demand: true, alias: "t" };
const bodyOptions = { describe: "Treść notatki", demand: true, alias: "b" };

const argv = yargs
    .command("add", "Dodaj nową notatkę", {
        title: titleOptions,
        body: bodyOptions,
    })
    .command("list", "Wyświetl wszystkie notatki")
    .command("read", "Wyświetl notatkę", { title: titleOptions })
    .command("remove", "Usuń notatkę", { title: titleOptions })
    .help().argv;

let command = process.argv[2];
// console.log("Komenda:",command);
console.log("Proces:", process.argv);
console.log("Yargs", argv);

if (command === "add") {
    console.log("Dodawanie nowej notatki");
    let note = notes.addNote(argv.title, argv.body);
    if (note) {
        console.log("Notatka dodana!");
    } else {
        console.log("Notatka o takiej nazwie już istnieje!");
    }
} else if (command === "list") {
    let allNotes = notes.getAll();
    console.log(`Wyświetlannie ${allNotes.length} notatek.`);
    allNotes.forEach((note) => notes.logNote(note));
} else if (command === "read") {
    let note = notes.getNote(argv.title);
    if (note) {
        notes.logNote();
    } else {
        console.log("Notatka nie istnieje");
    }
} else if (command === "remove") {
    let noteRemoved = notes.removeNote(argv.title);
    let message = noteRemoved
        ? "Notatka zostałą usunięta"
        : "Notatka nie istnieje";
    console.log(message);
} else if (command === "") {
    console.log(welcomeMsg);
} else {
    console.log("Nie rozpoznana komenda!");
}

// console.log(res);

// fs.appendFileSync('powitanie2.txt', `Witaj ${user.username} !Masz ${notes.age}.`);

// fs.appendFile('powitanie.txt','Hello JS!'); //depricated (max. v.10)

// fs.appendFileSync('powitanie.txt','Hello JS ' + user.username + "!");

// fs.appendFile('powitanie.txt','Hello JS ponownie!',function (err){
//     if (err){
//         console.log('Problem z dostępem do pliku!')
//     }
// });

// console.log(user);

/*

console.log("Starting app.js");
const fs = require("fs");
const os = require("os");
var user = os.userInfo();
const notes = require("./notes");
// const _ = require("lodash");
const yargs = require("yargs");

// fs.appendFile("powitanie.txt","Hello JS!"); // Może nie działać. Max do wersji 10

fs.appendFileSync(
  "powitanie.txt",
  `Hello JS! ${user.username} ! Masz ${notes.age}.`
); // zapisywanie do bliku

const argv = yargs.argv;
let command = process.argv[2];
// let command = process.argv_[0];

console.log("Komenda:", command);
console.log("Process:", process.argv);
console.log("Yargs:", argv);

// let res = notes.addNote();
// console.log(res);

// let dodaj = notes.dodawanie(2, 5);
// console.log(dodaj);

// fs.appendFile("powitanie.txt","Hello JS!", function (err){
//     if (err){
//         console.log("Problem z plikiem")
//     }
// })

// console.log(user); //wuwoływanie usera

// let command = process.argv[2];
console.log("Komenda:", command);
console.log(process.argv);
if (command == "add") {
  console.log("Dodawanie nowej notatki");
  notes.addNote(argv.title, argv.body);
  // if (note) {
  //   console.log("Notatka dodana");
  // } else {
  //   console.log("Istnieje taka notatka!");
  // }
} else if (command === "list") {
  console.log("Listowanie notatki");
  notes.getAll();
} else if (command === "read") {
  console.log("Odczyt notatki");
  notes.getNote(argv.title);
} else if (command === "remove") {
  console.log("Usuwanie notatki");
  notes.removeNote(argv.title);
} else {
  console.log("Nierozponana komenda!");
}


*/
