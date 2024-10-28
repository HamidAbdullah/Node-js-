// imports
import validator from 'validator';
import chalk from 'chalk';
import fs from 'fs';
import addTwoNumber from './src/service.js';
import getNotes from './src/notes.js';

const log = console.log;

// Combine styled and normal strings
log(chalk.blue('Hello') + ' World' + chalk.red('!'));

log(chalk.green.inverse('success') + chalk.redBright('!'));

// Creating Variables.
const notesText = getNotes({ notes: "Hamid ABDULLAH" });
const sum = addTwoNumber(10, -5);
const isEmail = validator.isEmail('Hamidabdullahofficial@gmail.com');

// File System Methods

// Write File
fs.writeFileSync("note.txt", chalk.green(`My name is Hamid Abdullah `));
// Append Text in this file.
fs.appendFileSync("note.txt", " I'm from Pakistan pk ");

// Log the output using chalk for colored output
log(chalk.green('Email validation result:'), chalk.greenBright.bgBlueBright(isEmail));
log(chalk.green('Sum of numbers:'), chalk.yellow.bold(sum));
log(chalk.green('Notes Text:'), chalk.magenta(notesText));
