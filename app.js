// imports
const validator = require('validator');
const fs = require("fs");
const addTwoNumber = require("./src/service.js");
const getNotes = require("./src/notes.js");

// Creating Variables.
const notesText = getNotes({ notes: "Hamid ABDULLAH" });
const sum = addTwoNumber(10, -5);
const isEmail = validator.isEmail('Hamidabdullahofficial@gmail.com')

// File System Methods

// Write File
fs.writeFileSync("note.txt", `My name is Hamid Abdullah `);
// Append Text in this file.
fs.appendFileSync("note.txt", " I'm from Pakistan pk ");

// Log the output
console.log({isEmail: isEmail})
console.log({ SUM: sum });
console.log({ getNotes: notesText });
