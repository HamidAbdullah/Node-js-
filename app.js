import validator from "validator";
import chalk from "chalk";
import fs from "fs";
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';  
import { addNote, removeNotes } from './src/notes.js';

// Properly use yargs with hideBin to parse arguments
yargs(hideBin(process.argv)).command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function (argv) {
    addNote(argv.title, argv.body)
}
}).argv

yargs(hideBin(process.argv)).command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Title of the note to remove',
      demandOption: true,
      type: 'string',
    },
  },
  handler: function (argv) {
    removeNotes(argv.title);
  },
}).argv;
