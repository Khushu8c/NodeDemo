console.log('Starting app.js');
console.log('Hello world!');
const fs = require('fs');
const os = require('os');
const note = require('./note.js')
const lodash = require('lodash');
const yarg = require('yargs');

var titleOptions = {
describe: 'Title of the note',
demand: true,
alias: 't'
};;

var bodyOptions = {
  describe: 'body of the note',
  demand: true,
  alias: 'b'
};


var yarg_value = yarg
.command('add','addin note', {
title: titleOptions ,
body: bodyOptions
})
.command('read', 'read detail of note', {
  title: titleOptions
})
.command('list', 'list all notes')
.command('remove', 'to remove node with given title', {
  title: titleOptions
})
.help()
.argv;
console.log('yargs: ', yarg_value);

var command = yarg_value._[0];
console.log(command);
if (command === 'add') {
var node = note.addNote(yarg_value.title, yarg_value.body);
if (node) {
console.log('Note is added in json file');
note.logNote(node);
} else {
    console.log('Same data already exist!')
}
} else if (command === 'list') {
  var notes = note.getAll();
  console.log(`Print values of ${notes.length} note(s).`);
  notes.forEach((eachNote) => note.logNote(eachNote));
} else if (command === 'read') {
var node =  note.getNote(yarg_value.title);
if (node) {
console.log('Get Note from json file');
note.logNote(node);
} else {
    console.log('Note not found!')
}
} else if (command === 'remove') {
  var isRemoved = note.removeNote(yarg_value.title);
  var message = isRemoved ? 'Note removed' : 'Note not found';
  console.log(message);
} else {
  console.log('Unknown command: ', command);
}




//console.log(loda);
//console.log(lodash.isString('soniya'));
//console.log(lodash.isString(true));
//var filteredVal = lodash.uniq(['soniya',1,2,3,'soniya',1,5,4]);
//console.log(filteredVal);



//console.log(note.printsss());
//console.log(note.add(3,7));
//var a = os.userInfo();
//fs.appendFile('message.txt', `Hello ${a.username} !`, (err) => {
//  if (err) throw err;
//  console.log('The "data to append" was appended to file!');
//});

//console.log('sssssssssssssssssss');

//console.log(a);
//console.log(fs);
//console.log(os);
