console.log("Starting notes.js");
// console.log(module);
// module.exports.age = 25;
// module.exports.addNote = function(){

// }

const fs = require("fs");

let fetchNotes = () => {
    try {
        let notesString = fs.readFileSync("notes-data.json");
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }
};

let saveNotes = (notes) => {
    fs.writeFileSync("notes-data.json", JSON.stringify(notes));
};

let addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body,
    };
    var duplicateNotes = notes.filter((note) => note.title === title);
    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        console.log("Dodano nową notatkę!");
        return note;
    }
};

let getAll = () => {
    console.log("Pobranie listy notatek...");
    return fetchNotes();
};

let getNote = (title) => {
    console.log("Pobieram notatkę: ", title);
    let notes = fetchNotes();
    let filteredNotes = notes.filter((note) => note.title === title);
    return filteredNotes[0];
};

let removeNote = (title) => {
    console.log("Kasowanie notatki: ", title);
    let notes = fetchNotes();
    let filteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes);
    return notes.length !== filteredNotes.length;
};

let logNote = (note) => {
    console.log("---");
    console.log(`Tytuł: ${note.title}`);
    console.log(`Treść: ${note.body}`);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote,
};

/* 
console.log("Starting notes.js");
//

//

// module.exports.addNote = function()  {

// }

/*
let addNote = (title, body) => {
  console.log("addNote");
  let note = {
    // tą zmienną możemy użyć do filtrowania.
    title,
    body,
  };

  return "Nowa notatka!";
};
*/
/*
const fs = require("fs");

let fetchNotes = () => {
  try {
    let notesString = fs.readFileSync("notes-data.json");
    notes = JSON.parse(notesString);
  } catch (e) {
    return [];
  }
};

//Nowa metoda
let saveNotes = (notes) => {
  fs.writeFileSync("notes-data.json", JSON.stringify(notes));
};

let addNote = (title, body) => {
  let notes = fetchNotes();
  let note = {
    // tą zmienną możemy użyć do filtrowania.
    title,
    body,
  };
  let duplicateNotes = notes.filter((note) => note.title === title);
  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }

  return "Nowa notatka!";
};

let getAll = () => {
  console.log("Pobranie listy notatek");
};

let getNote = (title) => {
  console.log("Pobieram wskazaną notatkę: ", title);
};

let removeNote = (title) => {
  console.log("Usuwam wskazaną notatkę: ", title);
};

module.exports.dodawanie = (a, b) => {
  return a + b;
};

module.exports = {
  // zbiór exportów do wykonania
  addNote,
  getAll,
  getNote,
  removeNote,
};
*/
