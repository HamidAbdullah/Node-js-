const fs = require('fs');
const addTwoNumber = require('./src/service.js')
const getNotes = require('./src/notes.js')

fs.writeFileSync("note.txt", `My name is Hamid Abdullah `);
fs.appendFileSync('note.txt', " I'm from Pakistan pk ");

const sum = addTwoNumber(10, -5)
const notesText = getNotes()

console.log({SUM: sum})
console.log({getNotes: notesText});