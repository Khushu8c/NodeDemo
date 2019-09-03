console.log('Starting demo.js');
const fs = require('fs');

var a = 'direct variable';
module.exports.printsss = () => {
  console.log('inside function call');
}

var fetchData = () => {
  try {
    var notesString = fs. readFileSync('notes-add.json');
    return JSON.parse(notesString);
  } catch (e) {
  return [];
  }
}

var saveData = (notes) => {
  fs.writeFileSync('notes-add.json', JSON.stringify(notes));
}
var addNote  = (title, body) => {
  console.log('Adding notes', title, body);

  var note = {
   title,
   body
 }
var notes = fetchData();

var duplicateNotes = notes.filter(((note) => note.title === title));

if (duplicateNotes.length === 0) {
  notes.push(note);
  saveData(notes);
  return note;
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
