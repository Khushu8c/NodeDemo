// var obj = {
//   name: 'Soniya'
// };
//
// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);
//
// var personString = '{"name": "soniya", "age": 28}';
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

const fs = require('fs');
var originalNotes = {
  title: "some title",
  body: "some body"
}

fs.writeFileSync('notes.json', JSON.stringify(originalNotes));
var notes = fs.readFileSync('notes.json');
var notesObject = JSON.parse(notes);
console.log(typeof notesObject);
console.log(notesObject.title);
