console.log('Starting demo.js');
const fs = require('fs');

var a = 'direct variable';
module.exports.printsss = () => {
  console.log('inside function call');
}

var addNote  = (title, body) => {
    console.log('Adding notes', title, body);
  var notes = [];
var note = {
  title,
  body
}

try {
  var notesString = fs. readFileSync('notes-add.json');
  notes = JSON.parse(notesString);
} catch (e) {

}

var duplicateNotes = notes.filter(((note) => note.title === title));

if (duplicateNotes.length === 0) {
  notes.push(note);
  fs.writeFileSync('notes-add.json', JSON.stringify(notes));
} else {
  console.log('Same data already exist!')
}
}

var getAll = () => {
  console.log('get all notes');
}

var read = (title) => {
  console.log('get read: ', title);
}

var remove = (title) => {
  console.log('remove : ', title);
}
module.exports = {
  addNote,
  getAll,
  read,
  remove
}
//console.log(a);
//console.log(module);
