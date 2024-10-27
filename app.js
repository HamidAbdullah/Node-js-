const fs = require('fs');

fs.writeFileSync("note.txt", "My name is Hamid Abdullah");
fs.appendFileSync('note.txt', "Text Append in the file ");
