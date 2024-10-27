const fs = require('fs');
const addTwoNumber = require('./src/service.js')

fs.writeFileSync("note.txt", `My name is Hamid Abdullah `);
fs.appendFileSync('note.txt', " I'm from Pakistan pk ");

const sum = addTwoNumber(10, -5)

console.log({SUM: sum})