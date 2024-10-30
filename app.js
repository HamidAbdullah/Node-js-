import validator from "validator";
import chalk from "chalk";
import fs from "fs";
import addTwoNumber from "./src/service.js";
import getNotes from "./src/notes.js";
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';  // This is important for using yargs in ES modules

const notesText = getNotes({ notes: "Hamid ABDULLAH" });
const sum = addTwoNumber(10, -5);
const isEmail = validator.isEmail("Hamidabdullahofficial@gmail.com");
const log = console.log;

fs.writeFileSync("note.txt", chalk.green(`My name is Hamid Abdullah `));
fs.appendFileSync("note.txt", " I'm from Pakistan Abbottabad pk ");

log(chalk.red("Email validation result:"), chalk.red(isEmail));
log(chalk.green("Sum of numbers:"), chalk.yellow.bold(sum));
log(chalk.green("Notes Text:"), chalk.magenta(notesText));
log(chalk.blue("Hello") + " World" + chalk.red("!"));

// Properly use yargs with hideBin to parse arguments
yargs(hideBin(process.argv)).command({
  command: 'add',
  describe: 'Add a new note',
  handler: function () {
    console.log('Adding a new note...');
  }
}).argv;

yargs(hideBin(process.argv)).command({
  command: 'remove',
  describe: 'Removing Node.js',
  handler: function () {
    console.log(chalk.red('Remove Node.js'))
  }
}).argv

yargs(hideBin(process.argv)).command({
  command: 'list',
  describe: 'list all Node.js',
  handler: function () {
    console.log(chalk.underline('list all Node.js'))
  }
}).argv

yargs(hideBin(process.argv)).command({
  command: 'read',
  describe: 'read Node.js',
  handler: function () {
    console.log(chalk.red('read Node.js'))
  }
}).argv
