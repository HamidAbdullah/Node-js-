import fs from 'fs';
import chalk from 'chalk';

const log = console.log;

const getNotes = function () {
  return 'Your notes...'
}

const addNote = function (title, body) {
  const notes = loadNotes()
  const duplicateNotes = notes.filter(notes => notes.title === title);
  console.log({ duplicateNotes: duplicateNotes });
  // debugger
  if (duplicateNotes.length === 0) {
    notes?.push({
      title: title,
      body: body
    })
    saveNotes(notes)
    console.log('New note added!')

  } else {
    console.log('Note title taken!')

  }
}


const removeNotes = function (title) {
  console.log({ title: title });

  const notes = loadNotes();
  const notesToKeep = notes.filter(note => note.title !== title);

  if (notes.length === notesToKeep.length) {
    log(chalk.bgGreen('No note found with that title!'));
  } else {
    log(chalk.bgRed('Note removed!'));
    saveNotes(notesToKeep);
  }
};

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('jsonData.json', dataJSON)
}

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync('jsonData.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
  } catch (e) {
    return []
  }
}

export {
  getNotes,
  addNote,
  removeNotes,
}