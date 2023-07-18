const fs = require("fs");
const os = require("os");
var user = os.userInfo();
const notes = require("./notes");
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
