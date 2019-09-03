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

var logNote = (note) => {
  console.log('---------------------');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
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

var getNote = (title) => {
  var notes = fetchData();
  var fetchedData = notes.filter((note) => note.title === title);
  return fetchedData[0];
}

var removeNote = (title) => {
  var notes = fetchData();
  var fetchedData = notes.filter((note) => note.title !== title);
  saveData(fetchedData);
  return notes.length !== fetchedData.length;
}

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
}
